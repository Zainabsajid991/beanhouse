import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const myNumber = "03340637719";
  const whatsappUrl = "https://wa.me/923340637719";
  const { totalItems } = useCart();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth <= 900;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header style={{ position: 'fixed', width: '100%', top: 0, left: 0, zIndex: 1200 }}>
      <div
        style={{
          background: '#4a2c01',
          color: 'white',
          textAlign: 'center',
          padding: '8px 10px',
          fontSize: '11px',
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}
      >
        FOR COFFEE CONTACT: <a href={whatsappUrl} style={{ color: '#bc8f5f' }}>{myNumber}</a>
      </div>

      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          padding: 'clamp(14px, 3vw, 20px) clamp(16px, 5vw, 80px)',
          background: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(5px)'
        }}
      >
        <Link to="/" style={{ color: 'white', fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: '800', letterSpacing: '2px' }}>
          BEAN HOUSE
        </Link>

        {isMobile && (
          <button
            className="btn-animate"
            onClick={() => setMenuOpen((prev) => !prev)}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.7)',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px',
              letterSpacing: '1px'
            }}
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        )}

        <div
          style={{
            display: !isMobile || menuOpen ? 'flex' : 'none',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '14px' : '24px',
            alignItems: isMobile ? 'flex-start' : 'center',
            width: isMobile ? '100%' : 'auto',
            background: isMobile ? 'rgba(0,0,0,0.72)' : 'transparent',
            borderRadius: isMobile ? '8px' : 0,
            padding: isMobile ? '14px' : 0
          }}
        >
          <Link to="/" style={linkStyle} onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/menu" style={linkStyle} onClick={() => setMenuOpen(false)}>MENU</Link>
          <Link to="/about" style={linkStyle} onClick={() => setMenuOpen(false)}>OUR STORY</Link>
          <Link to="/contact" style={linkStyle} onClick={() => setMenuOpen(false)}>CONTACT US</Link>
          <Link to="/cart" style={linkStyle} onClick={() => setMenuOpen(false)}>
            CART ({totalItems})
          </Link>

          <Link to="/menu" style={{ width: isMobile ? '100%' : 'auto' }} onClick={() => setMenuOpen(false)}>
            <button className="btn-animate" style={{ ...buttonStyle, width: isMobile ? '100%' : 'auto' }}>
              SHOP NOW
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

const linkStyle = {
  color: 'white',
  fontSize: '12px',
  fontWeight: '600',
  letterSpacing: '1px'
};

const buttonStyle = {
  background: '#603601',
  color: 'white',
  border: 'none',
  padding: '10px 22px',
  borderRadius: '2px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '11px',
  letterSpacing: '1px'
};

export default Navbar;
