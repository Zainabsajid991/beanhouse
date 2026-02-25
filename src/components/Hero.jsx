import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="reveal" style={{
      minHeight: '100vh',
      // Studio quality image: Clean background with floating coffee beans vibe
      background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1600")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'clamp(20px, 4vw, 60px)',
      color: 'white',
      padding: 'clamp(56px, 9vw, 110px) clamp(20px, 9vw, 120px)',
      textAlign: 'left'
    }}>
      
      {/* Left Side: Content */}
      <div className="reveal reveal-delay-1" style={{ flex: '1 1 340px', maxWidth: '620px' }}>
        <h4 style={{ letterSpacing: '4px', marginBottom: '15px', fontSize: '14px', fontWeight: '600', color: '#bc8f5f' }}>
          PREMIUM BREW EXPERIENCE
        </h4>
        
        <h1 style={{ 
          fontSize: 'clamp(40px, 6vw, 75px)', 
          margin: '0 0 25px 0', 
          lineHeight: '1.1', 
          fontWeight: '900',
          fontFamily: "'Playfair Display', serif"
        }}>
          COFFEE DONE <br/> RIGHT.
        </h1>
        
        <p style={{ 
          maxWidth: '500px', 
          fontSize: 'clamp(16px, 2.4vw, 20px)', 
          marginBottom: '40px', 
          fontWeight: '300', 
          color: '#ddd',
          lineHeight: '1.6'
        }}>
          Hand-picked beans, roasted to perfection, and served fresh every single day at <strong>Bean House</strong>.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            className="btn-animate"
            onClick={() => navigate('/menu')}
            style={{ 
            background: '#bc8f5f', color: 'white', border: 'none', 
            padding: '14px 28px', cursor: 'pointer', fontWeight: '800', 
            fontSize: '13px', borderRadius: '4px' 
          }}>
            SHOP NOW
          </button>
          
          <button 
            className="btn-animate"
            onClick={() => navigate('/about')}
            style={{ 
              background: 'transparent', color: 'white', border: '1px solid white', 
              padding: '14px 28px', cursor: 'pointer', fontWeight: '800', 
              fontSize: '13px', borderRadius: '4px' 
            }}
          >
            OUR STORY
          </button>
        </div>
      </div>

      {/* Right Side: Empty space in image handles this naturally */}
      <div style={{ flex: '1 1 280px', minHeight: '120px' }}></div>
      
    </section>
  );
};

export default Hero;
