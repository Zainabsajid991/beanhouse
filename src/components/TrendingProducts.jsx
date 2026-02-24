import React from 'react';

const TrendingProducts = () => {
  const trending = [
    { 
      name: "Lava Cake", 
      price: "Rs. 2,000", 
      description: "Andar se pighla hua garm chocolate aur bahar se soft cake ka behtareen combo.",
      img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80",
      tag: "Best Seller" 
    },
    { 
      name: "Chocolate Cake", 
      price: "Rs. 2,000", 
      description: "Premium dark chocolate se bana hua rich aur velvety cake, har chuski ke liye perfect.",
      img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=500&q=80",
      tag: "New"
    },
    { 
      name: "Fluffy Pan Cakes", 
      price: "Rs. 1,000", 
      description: "Naram aur phulay huay pancakes, maple syrup aur fresh butter ki topping ke sath.",
      img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=500&q=80",
      tag: "Popular"
    }
  ];

  return (
    <section style={{ padding: '100px 80px', background: '#fff' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h4 style={{ color: '#603601', letterSpacing: '4px', fontSize: '13px', fontWeight: '800', margin: '0' }}>MUST TRY</h4>
        <h2 style={{ fontSize: '45px', color: '#3C2A21', marginTop: '10px', fontWeight: '700' }}>Trending Products</h2>
        <div style={{ width: '60px', height: '3px', background: '#603601', margin: '20px auto' }}></div>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {trending.map((item, i) => (
          <div key={i} style={{ 
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
            <span style={{
              position: 'absolute', top: '15px', left: '15px', zIndex: 2,
              background: '#603601', color: 'white', padding: '5px 12px',
              fontSize: '10px', fontWeight: 'bold', borderRadius: '20px', textTransform: 'uppercase'
            }}>
              {item.tag}
            </span>

            <div style={{ height: '300px', overflow: 'hidden' }}>
              <img 
                src={item.img} 
                alt={item.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>

            <div style={{ padding: '25px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '22px', margin: '0 0 10px 0', color: '#3C2A21' }}>{item.name}</h3>
              
              {/* Description Section Added Below */}
              <p style={{ 
                color: '#777', 
                fontSize: '14px', 
                lineHeight: '1.5', 
                marginBottom: '15px',
                minHeight: '42px' // Taake sab cards ki height barabar rahe
              }}>
                {item.description}
              </p>

              <p style={{ color: '#603601', fontWeight: '700', fontSize: '18px', marginBottom: '20px' }}>{item.price}</p>
              
              <button style={{ 
                width: '100%',
                background: '#3C2A21', 
                color: 'white', 
                border: 'none', 
                padding: '12px', 
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#603601'}
              onMouseLeave={(e) => e.target.style.background = '#3C2A21'}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;