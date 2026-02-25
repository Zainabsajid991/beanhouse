import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="reveal"
      style={{
        background: '#0a0a0a',
        color: '#fff',
        padding: 'clamp(56px, 8vw, 100px) clamp(16px, 8vw, 10%) clamp(28px, 5vw, 50px)',
        marginTop: '50px'
      }}
    >
      <div className="reveal reveal-delay-1" style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 5vw, 60px)', justifyContent: 'space-between' }}>
        <div className="reveal reveal-delay-1" style={{ flex: '1 1 220px' }}>
          <h1 style={{ fontSize: 'clamp(24px, 5vw, 32px)', letterSpacing: '3px', margin: '0 0 16px 0' }}>BEAN HOUSE</h1>
          <p style={{ color: '#bbb', fontSize: 'clamp(14px, 2.5vw, 18px)', lineHeight: '1.6' }}>
            Premium coffee and artisanal bakery experiences crafted for those who value quality.
          </p>
        </div>

        <div className="reveal reveal-delay-2" style={{ flex: '1 1 170px' }}>
          <h3 style={{ fontSize: 'clamp(18px, 3vw, 22px)', marginBottom: '18px' }}>Explore</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#bbb', fontSize: 'clamp(14px, 2.5vw, 18px)', lineHeight: '2' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="reveal reveal-delay-3" style={{ flex: '1 1 240px' }}>
          <h3 style={{ color: '#bc8f5f', fontSize: 'clamp(18px, 3vw, 22px)', marginBottom: '18px' }}>POWERED BY</h3>
          <div style={{ borderLeft: '4px solid #bc8f5f', background: '#151515', padding: 'clamp(14px, 3vw, 25px)' }}>
            <h2 style={{ margin: 0, letterSpacing: '2px', fontSize: 'clamp(22px, 4vw, 30px)', color: '#fff' }}>TECHFU</h2>
            <p style={{ fontSize: '12px', color: '#777', marginTop: '10px', textTransform: 'uppercase', lineHeight: '1.5' }}>
              Advanced Digital Solutions for Modern Brands
            </p>
          </div>
        </div>
      </div>

      <div className="reveal reveal-delay-2" style={{ textAlign: 'center', borderTop: '1px solid #222', marginTop: 'clamp(28px, 6vw, 80px)', paddingTop: '22px', color: '#666', fontSize: '12px' }}>
        © 2026 Bean House. All Rights Reserved. Developed by TechFu Solutions.
      </div>
    </footer>
  );
};

export default Footer;
