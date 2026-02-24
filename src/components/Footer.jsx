import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: '#0a0a0a', color: '#fff', padding: '100px 10% 50px 10%', marginTop: '50px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', justifyContent: 'space-between' }}>
        
        {/* Brand */}
        <div style={{ flex: '1 1 300px' }}>
          <h1 style={{ fontSize: '32px', letterSpacing: '4px', margin: '0 0 20px 0' }}>BEAИ HOUSE</h1>
          <p style={{ color: '#bbb', fontSize: '18px', lineHeight: '1.6' }}>
            Premium coffee and artisanal bakery experiences crafted for those who value quality.
          </p>
        </div>

        {/* Links */}
        <div style={{ flex: '1 1 150px' }}>
          <h3 style={{ fontSize: '22px', marginBottom: '25px' }}>Explore</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: '#bbb', fontSize: '18px', lineHeight: '2.5' }}>
            <li style={{ cursor: 'pointer' }}>Home</li>
            <li style={{ cursor: 'pointer' }}>Menu</li>
            <li style={{ cursor: 'pointer' }}>Our Story</li>
          </ul>
        </div>

        {/* TechFu Branding */}
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ color: '#bc8f5f', fontSize: '22px', marginBottom: '25px' }}>POWERED BY</h3>
          <div style={{ borderLeft: '5px solid #bc8f5f', paddingLeft: '20px', background: '#151515', padding: '25px' }}>
            <h2 style={{ margin: 0, letterSpacing: '3px', fontSize: '30px', color: '#fff' }}>TECHFU</h2>
            <p style={{ fontSize: '12px', color: '#666', marginTop: '10px', textTransform: 'uppercase' }}>
              Advanced Digital Solutions for Modern Brands
            </p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', borderTop: '1px solid #222', marginTop: '80px', paddingTop: '30px', color: '#444', fontSize: '14px' }}>
        © 2026 Bean House. All Rights Reserved. Developed by **TechFu Solutions**.
      </div>
    </footer>
  );
};

export default Footer;