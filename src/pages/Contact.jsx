import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const whatsappUrl = "https://wa.me/923340637719";
  const myNumber = "03340637719";

  return (
    <div style={{ 
      background: '#0a0a0a', 
      minHeight: '100vh', 
      paddingTop: '150px', 
      color: 'white',
      textAlign: 'center' 
    }}>
      <h4 style={{ color: '#bc8f5f', letterSpacing: '5px' }}>GET IN TOUCH</h4>
      <h1 style={{ fontSize: '50px', fontFamily: "'Playfair Display', serif", marginBottom: '60px' }}>Contact Us</h1>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '40px', 
        padding: '0 10%' 
      }}>
        
        {/* Section 1: Coffee Orders */}
        <div style={cardStyle}>
          <div style={{ fontSize: '40px', marginBottom: '20px' }}>☕</div>
          <h2 style={{ color: '#bc8f5f', marginBottom: '15px' }}>Order Your Coffee</h2>
          <p style={{ color: '#888', lineHeight: '1.6', marginBottom: '25px' }}>
            Want fresh coffee or bakery items delivered to your doorstep? 
            Reach out to us directly for quick orders and special requests.
          </p>
          <a href={whatsappUrl} style={btnStyle}>Order Now: {myNumber}</a>
        </div>

        {/* Section 2: Techfu Website Services */}
        <div style={cardStyle}>
          <div style={{ fontSize: '40px', marginBottom: '20px' }}>💻</div>
          <h2 style={{ color: '#bc8f5f', marginBottom: '15px' }}>Website Services</h2>
          <p style={{ color: '#888', lineHeight: '1.6', marginBottom: '25px' }}>
            Looking for a professional website for your business? 
            Contact the **Techfu team** to build high-quality, modern websites like this one.
          </p>
          <a href={whatsappUrl} style={btnStyle}>Contact Techfu: {myNumber}</a>
        </div>

      </div>
    </div>
  );
};

const cardStyle = {
  background: '#161616',
  padding: '40px',
  borderRadius: '20px',
  width: '400px',
  border: '1px solid #222',
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
};

const btnStyle = {
  display: 'inline-block',
  background: '#bc8f5f',
  color: 'white',
  padding: '12px 25px',
  borderRadius: '5px',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: '0.3s'
};

export default Contact;