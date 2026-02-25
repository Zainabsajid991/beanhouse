import React, { useEffect, useMemo, useState } from 'react';
import { getProducts, seedSiteData } from '../data/siteData';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const { addToCart } = useCart();
  const [products] = useState(() => {
    seedSiteData();
    return getProducts();
  });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const safeProducts = useMemo(
    () =>
      (products || []).map((item, index) => ({
        id: item?.id || `menu-item-${index}`,
        name: item?.name || 'Unnamed Product',
        category: item?.category || 'Uncategorized',
        price: item?.price || 'Rs. 0',
        desc: item?.desc || '',
        img: item?.img || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800'
      })),
    [products]
  );

  const categories = useMemo(
    () => ['All', ...new Set(safeProducts.map((item) => item.category))],
    [safeProducts]
  );

  const activeCategory = categories.includes(selectedCategory) ? selectedCategory : 'All';

  const filteredProducts = useMemo(
    () => (activeCategory === 'All' ? safeProducts : safeProducts.filter((item) => item.category === activeCategory)),
    [safeProducts, activeCategory]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    window.alert(`${product.name} added to cart.`);
  };

  return (
    <div className="reveal is-visible" style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: 'clamp(110px, 16vw, 140px)', color: 'white' }}>
      <section className="reveal reveal-delay-1" style={{ padding: '0 clamp(16px, 8vw, 10%)' }}>
        <div className="reveal reveal-delay-1" style={{ textAlign: 'center', marginBottom: '34px' }}>
          <h4 style={{ color: '#bc8f5f', letterSpacing: '4px', fontSize: '13px' }}>EXPLORE</h4>
          <h1 style={{ fontSize: 'clamp(28px, 6vw, 40px)', marginBottom: 0, fontFamily: "'Playfair Display', serif" }}>All Products</h1>
        </div>

        <div className="reveal reveal-delay-1" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
          {categories.map((category) => (
            <button
              key={category}
              className="btn-animate"
              onClick={() => setSelectedCategory(category)}
              style={{
                border: activeCategory === category ? '1px solid #bc8f5f' : '1px solid #333',
                background: activeCategory === category ? '#bc8f5f' : 'transparent',
                color: 'white',
                borderRadius: '20px',
                padding: '8px 14px',
                fontSize: '12px',
                cursor: 'pointer',
                fontWeight: '700'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', paddingBottom: '80px', color: '#a7a7a7' }}>
            No products available in this category.
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', paddingBottom: '80px' }}>
            {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`reveal is-visible reveal-delay-${(index % 3) + 1}`}
              style={{ background: '#161616', borderRadius: '15px', overflow: 'hidden', border: '1px solid #222', transition: 'transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 34px rgba(0,0,0,0.35)';
                e.currentTarget.style.borderColor = '#3f2b1f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#222';
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={product.img}
                  style={{ width: '100%', height: '180px', objectFit: 'cover', transition: 'transform 0.35s ease' }}
                  alt={product.name}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                <span style={{ position: 'absolute', top: '10px', left: '10px', background: '#603601', padding: '5px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold' }}>
                  {product.category}
                </span>
              </div>
              <div style={{ padding: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: '17px' }}>{product.name}</h3>
                  <span style={{ color: '#bc8f5f', fontSize: '14px', fontWeight: 'bold' }}>{product.price}</span>
                </div>
                <p style={{ color: '#888', fontSize: '13px', marginBottom: '18px', lineHeight: '1.5', minHeight: '40px' }}>{product.desc}</p>

                <button
                  className="btn-animate"
                  onClick={() => handleAddToCart(product)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: '#bc8f5f',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '13px',
                    transition: 'background 0.28s ease, transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#9c7144'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#bc8f5f'; }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Menu;
