import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const myNumber = "03340637719";
  const whatsappUrl = `https://wa.me/923340637719`;

  return (
    <header style={{ position: 'absolute', width: '100%', top: 0, zIndex: 1000 }}>
      {/* Top Coffee Bar */}
      <div style={{ 
        background: '#4a2c01', color: 'white', textAlign: 'center', 
        padding: '8px 0', fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px' 
      }}>
        FOR COFFEE CONTACT: <a href={whatsappUrl} style={{ color: '#bc8f5f', textDecoration: 'none' }}>{myNumber}</a>
      </div>

      <nav style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '20px 80px', background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(5px)' 
      }}>
        <Link to="/" style={{ color: 'white', fontSize: '22px', fontWeight: '800', textDecoration: 'none', letterSpacing: '3px' }}>
          BEAИ HOUSE
        </Link>

        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <Link to="/" style={linkStyle}>HOME</Link>
          <Link to="/menu" style={linkStyle}>MENU</Link>
          <Link to="/about" style={linkStyle}>OUR STORY</Link>
          
          {/* CONTACT US Link - Now pointing to /contact page */}
          <Link to="/contact" style={linkStyle}>CONTACT US</Link>

          <Link to="/menu" style={{ textDecoration: 'none' }}>
            <button 
              style={buttonStyle}
              onMouseEnter={(e) => e.target.style.background = '#824b02'}
              onMouseLeave={(e) => e.target.style.background = '#603601'}
            >
              SHOP NOW
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

const linkStyle = { color: 'white', textDecoration: 'none', fontSize: '12px', fontWeight: '600', letterSpacing: '1px' };
const buttonStyle = { background: '#603601', color: 'white', border: 'none', padding: '10px 22px', borderRadius: '2px', cursor: 'pointer', fontWeight: '600', fontSize: '11px', letterSpacing: '1px', transition: '0.3s ease' };

export default Navbar;