import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappUrl = "https://wa.me/923340637719";
  const myNumber = "03340637719";

  return (
    <div
      className="reveal is-visible"
      style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        paddingTop: 'clamp(120px, 18vw, 150px)',
        color: 'white',
        textAlign: 'center'
      }}
    >
      <h4 style={{ color: '#bc8f5f', letterSpacing: '4px', fontSize: '12px' }}>GET IN TOUCH</h4>
      <h1 style={{ fontSize: 'clamp(32px, 8vw, 50px)', fontFamily: "'Playfair Display', serif", marginBottom: 'clamp(24px, 5vw, 60px)' }}>Contact Us</h1>

      <div className="reveal reveal-delay-1" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(16px, 4vw, 40px)', padding: '0 clamp(16px, 8vw, 10%) 60px' }}>
        <div className="reveal reveal-delay-1" style={cardStyle}>
          <div style={{ fontSize: '34px', marginBottom: '14px' }}>Coffee</div>
          <h2 style={{ color: '#bc8f5f', marginBottom: '15px', fontSize: 'clamp(22px, 4vw, 28px)' }}>Order Your Coffee</h2>
          <p style={{ color: '#888', lineHeight: '1.6', marginBottom: '25px' }}>
            Want fresh coffee or bakery items delivered to your doorstep? Reach out to us directly for quick orders and special requests.
          </p>
          <a className="btn-animate" href={whatsappUrl} style={btnStyle}>Order Now: {myNumber}</a>
        </div>

        <div className="reveal reveal-delay-2" style={cardStyle}>
          <div style={{ fontSize: '34px', marginBottom: '14px' }}>Tech</div>
          <h2 style={{ color: '#bc8f5f', marginBottom: '15px', fontSize: 'clamp(22px, 4vw, 28px)' }}>Website Services</h2>
          <p style={{ color: '#888', lineHeight: '1.6', marginBottom: '25px' }}>
            Looking for a professional website for your business? Contact the Techfu team to build high-quality, modern websites like this one.
          </p>
          <a className="btn-animate" href={whatsappUrl} style={btnStyle}>Contact Techfu: {myNumber}</a>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  background: '#161616',
  padding: 'clamp(20px, 4vw, 40px)',
  borderRadius: '20px',
  width: 'min(100%, 420px)',
  border: '1px solid #222',
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
};

const btnStyle = {
  display: 'inline-block',
  background: '#bc8f5f',
  color: 'white',
  padding: '12px 20px',
  borderRadius: '5px',
  textDecoration: 'none',
  fontWeight: 'bold'
};

export default Contact;
