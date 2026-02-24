import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <section style={{ padding: '100px 10%', display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center', background: '#fdfaf7' }}>
      <div style={{ flex: '1 1 400px' }}>
        <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800" 
             alt="Coffee" style={{ width: '100%', borderRadius: '12px' }} />
      </div>
      <div style={{ flex: '1 1 400px' }}>
        <h4 style={{ color: '#603601', letterSpacing: '3px', margin: '0' }}>OUR MISSION</h4>
        <h2 style={{ fontSize: 'clamp(30px, 5vw, 45px)', color: '#3C2A21', margin: '15px 0' }}>We Brew with Passion & Heart</h2>
        <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '30px' }}>
          At Bean House, we believe that coffee is more than just a drink. It's a ritual, 
          a moment of peace, and a catalyst for connection.
        </p>
        
        {/* Learn More button click handle */}
        <button 
          onClick={() => navigate('/about')}
          style={{ 
            background: 'transparent', border: '2px solid #3C2A21', color: '#3C2A21', 
            padding: '12px 35px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px' 
          }}
        >
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default About;