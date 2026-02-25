import React from 'react';

const Story = () => {
  return (
    <div className="reveal is-visible" style={{ background: '#fdfaf7', minHeight: '100vh' }}>
      <section
        className="reveal reveal-delay-1"
        style={{
          minHeight: '60vh',
          padding: 'clamp(120px, 20vw, 180px) 16px 60px',
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <h4 style={{ letterSpacing: '4px', fontSize: '14px', marginBottom: '10px' }}>SINCE 2024</h4>
        <h1 style={{ fontSize: 'clamp(34px, 8vw, 70px)', fontFamily: 'Playfair Display, serif', margin: 0 }}>Our Story</h1>
      </section>

      <section className="reveal reveal-delay-1" style={{ padding: 'clamp(56px, 8vw, 100px) clamp(16px, 10vw, 15%)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(28px, 6vw, 40px)', color: '#3C2A21', marginBottom: '30px', fontFamily: 'Playfair Display, serif' }}>From Bean to Cup</h2>
        <p style={{ fontSize: 'clamp(15px, 2.7vw, 18px)', color: '#555', lineHeight: '1.9', maxWidth: '850px', margin: '0 auto' }}>
          Hamari kahani Lahore ki aik choti si gali se shuru hui, jahan hum ne faisla kiya ke hum coffee ko sirf aik drink nahi balkay aik art bana kar pesh karenge.
          Hum ne dunya ke behtareen farmers ke sath direct kaam kiya taake humare har cup mein wahi original mithaas aur khushbu ho jo sirf fresh beans mein hoti hai.
          Aaj Bean House sirf aik cafe nahi, balkay sukoon aur quality ka doosra naam hai.
        </p>
      </section>

      <section
        style={{
          padding: '0 clamp(16px, 8vw, 10%) clamp(56px, 10vw, 100px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'clamp(18px, 4vw, 40px)'
        }}
      >
        <div className="reveal reveal-delay-1" style={{ textAlign: 'center' }}>
          <div style={{ height: 'clamp(240px, 45vw, 350px)', overflow: 'hidden', borderRadius: '15px' }}>
            <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600" alt="Sourcing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ marginTop: '20px', color: '#3C2A21' }}>Ethical Sourcing</h3>
          <p style={{ color: '#777', lineHeight: '1.6' }}>Hum har bean dunya ke un corners se laate hain jahan coffee ki kheti sadiyon se ho rahi hai.</p>
        </div>

        <div className="reveal reveal-delay-2" style={{ textAlign: 'center' }}>
          <div style={{ height: 'clamp(240px, 45vw, 350px)', overflow: 'hidden', borderRadius: '15px' }}>
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600" alt="Roasting" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ marginTop: '20px', color: '#3C2A21' }}>Artisanal Roasting</h3>
          <p style={{ color: '#777', lineHeight: '1.6' }}>Hamare experts har batch ko manually check karte hain taake roasting perfect ho.</p>
        </div>

        <div className="reveal reveal-delay-3" style={{ textAlign: 'center' }}>
          <div style={{ height: 'clamp(240px, 45vw, 350px)', overflow: 'hidden', borderRadius: '15px' }}>
            <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600" alt="Serving" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ marginTop: '20px', color: '#3C2A21' }}>The Final Pour</h3>
          <p style={{ color: '#777', lineHeight: '1.6' }}>Bean House mein sirf coffee nahi milti, yahan aapko aik pur-sukoon mahool milta hai.</p>
        </div>
      </section>

      <section className="reveal reveal-delay-1" style={{ background: '#3C2A21', color: '#fff', padding: 'clamp(42px, 8vw, 80px) 16px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 5vw, 32px)', marginBottom: '16px' }}>"Innovation meets Tradition"</h2>
        <p style={{ color: '#bc8f5f', fontSize: 'clamp(14px, 2.5vw, 18px)', fontWeight: 'bold' }}>Digitally Crafted by TECHFU SOLUTIONS</p>
      </section>
    </div>
  );
};

export default Story;
