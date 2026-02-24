import React from 'react';

const Features = () => {
  const feats = ["100% NATURAL", "VEGAN FRIENDLY", "PRESERVATIVE FREE", "LOCALLY GROWN"];
  return (
    <div style={{ background: '#603601', color: 'white', padding: '50px 0', display: 'flex', justifyContent: 'center', gap: '60px' }}>
      {feats.map((f, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <div style={{ border: '1px solid white', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px auto', fontSize: '20px' }}>✓</div>
          <p style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1px' }}>{f}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;