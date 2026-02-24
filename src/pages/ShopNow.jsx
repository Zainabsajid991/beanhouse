import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShopNow = () => {
  const navigate = useNavigate();

  const collections = [
    { name: "Coffee", label: "Brewed Perfection", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600" },
    { name: "Cakes", label: "Premium Slices", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600" },
    { name: "Milk-Shakes", label: "Creamy Delights", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600" }
  ];

  return (
    <section style={{ padding: '80px 10%', background: '#050505', color: 'white' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h4 style={{ color: '#bc8f5f', letterSpacing: '3px' }}>READY TO ORDER?</h4>
        <h2 style={{ fontSize: '40px', fontFamily: "'Playfair Display', serif" }}>Shop Our Collections</h2>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px' 
      }}>
        {collections.map((item, index) => (
          <div 
            key={index}
            style={{
              position: 'relative',
              height: '400px',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              border: '1px solid #222'
            }}
            onClick={() => navigate('/menu')} // Direct menu par le jayega
          >
            <img 
              src={item.img} 
              alt={item.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.6' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.3)'
            }}>
              <h3 style={{ fontSize: '28px', margin: '0' }}>{item.name}</h3>
              <p style={{ color: '#bc8f5f', marginTop: '10px' }}>{item.label}</p>
              <button style={{
                marginTop: '20px',
                padding: '10px 25px',
                background: 'transparent',
                border: '1px solid white',
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: '0.3s'
              }}
              onMouseEnter={(e) => { e.target.style.background = 'white'; e.target.style.color = 'black'; }}
              onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'white'; }}
              >
                BROWSE NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopNow;