import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts, getTrending, seedSiteData } from '../data/siteData';
import { useCart } from '../context/CartContext';

const TrendingProducts = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [products] = useState(() => {
    seedSiteData();
    return getProducts();
  });
  const [trending] = useState(() => getTrending());

  const trendingItems = useMemo(
    () =>
      trending
        .map((item) => {
          const product = products.find((p) => p.id === item.productId);
          if (!product) return null;
          return { ...product, tag: item.tag, trendingId: item.id };
        })
        .filter(Boolean),
    [products, trending]
  );
  const homeProducts = useMemo(() => products.slice(0, 8), [products]);

  const handleAddToCart = (item) => {
    addToCart(item);
    window.alert(`${item.name} added to cart.`);
  };

  return (
    <section className="reveal" style={{ padding: 'clamp(56px, 8vw, 100px) clamp(16px, 5vw, 80px)', background: '#fff' }}>
      <div className="reveal reveal-delay-1" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h4 style={{ color: '#603601', letterSpacing: '4px', fontSize: '13px', fontWeight: '800', margin: '0' }}>MUST TRY</h4>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 45px)', color: '#3C2A21', marginTop: '10px', fontWeight: '700' }}>Trending Products</h2>
        <div style={{ width: '60px', height: '3px', background: '#603601', margin: '20px auto' }}></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(18px, 3.5vw, 40px)', maxWidth: '1200px', margin: '0 auto 70px' }}>
        {trendingItems.map((item, i) => (
          <div
            key={item.trendingId}
            className={`reveal reveal-delay-${(i % 3) + 1}`}
            style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease',
              position: 'relative',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
            }}
          >
            <span style={{ position: 'absolute', top: '15px', left: '15px', zIndex: 2, background: '#603601', color: 'white', padding: '5px 12px', fontSize: '10px', fontWeight: 'bold', borderRadius: '20px', textTransform: 'uppercase' }}>
              {item.tag}
            </span>

            <div style={{ height: 'clamp(220px, 34vw, 300px)', overflow: 'hidden' }}>
              <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ padding: 'clamp(16px, 3vw, 25px)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '22px', margin: '0 0 10px 0', color: '#3C2A21' }}>{item.name}</h3>
              <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.5', marginBottom: '15px', minHeight: 'auto' }}>{item.desc}</p>
              <p style={{ color: '#603601', fontWeight: '700', fontSize: '18px', marginBottom: '20px' }}>{item.price}</p>

              <button
                className="btn-animate"
                style={{ width: '100%', background: '#3C2A21', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', transition: 'background 0.3s' }}
                onMouseEnter={(e) => (e.target.style.background = '#603601')}
                onMouseLeave={(e) => (e.target.style.background = '#3C2A21')}
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal reveal-delay-1" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h4 style={{ color: '#603601', letterSpacing: '4px', fontSize: '13px', fontWeight: '800', margin: '0' }}>OUR MENU</h4>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 45px)', color: '#3C2A21', marginTop: '10px', fontWeight: '700' }}>All Products</h2>
        <div style={{ width: '60px', height: '3px', background: '#603601', margin: '20px auto' }}></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(18px, 3.5vw, 40px)', maxWidth: '1200px', margin: '0 auto' }}>
        {homeProducts.map((item, i) => (
          <div
            key={item.id}
            className={`reveal reveal-delay-${(i % 3) + 1}`}
            style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease',
              position: 'relative',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
            }}
          >
            <span style={{ position: 'absolute', top: '15px', left: '15px', zIndex: 2, background: '#603601', color: 'white', padding: '5px 12px', fontSize: '10px', fontWeight: 'bold', borderRadius: '20px', textTransform: 'uppercase' }}>
              {item.category}
            </span>

            <div style={{ height: 'clamp(220px, 34vw, 300px)', overflow: 'hidden' }}>
              <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ padding: 'clamp(16px, 3vw, 25px)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '22px', margin: '0 0 10px 0', color: '#3C2A21' }}>{item.name}</h3>
              <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.5', marginBottom: '15px', minHeight: 'auto' }}>{item.desc}</p>
              <p style={{ color: '#603601', fontWeight: '700', fontSize: '18px', marginBottom: '20px' }}>{item.price}</p>

              <button
                className="btn-animate"
                style={{ width: '100%', background: '#3C2A21', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', transition: 'background 0.3s' }}
                onMouseEnter={(e) => (e.target.style.background = '#603601')}
                onMouseLeave={(e) => (e.target.style.background = '#3C2A21')}
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal reveal-delay-2" style={{ textAlign: 'center', marginTop: '28px' }}>
        <button
          className="btn-animate"
          onClick={() => navigate('/menu')}
          style={{
            background: '#603601',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            cursor: 'pointer',
            fontWeight: '700',
            fontSize: '13px',
            letterSpacing: '0.5px'
          }}
        >
          MORE PRODUCTS
        </button>
      </div>
    </section>
  );
};

export default TrendingProducts;
