import React from 'react';

const Story = () => {
  return (
    <div style={{ background: '#fdfaf7', minHeight: '100vh' }}>
      {/* Header Banner */}
      <section style={{
        height: '60vh',
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600")',
        backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white'
      }}>
        <h4 style={{ letterSpacing: '4px', fontSize: '14px', marginBottom: '10px' }}>SINCE 2024</h4>
        <h1 style={{ fontSize: 'clamp(40px, 8vw, 70px)', fontFamily: 'Playfair Display, serif', margin: 0 }}>Our Story</h1>
      </section>

      {/* Narrative Section */}
      <section style={{ padding: '100px 15%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '40px', color: '#3C2A21', marginBottom: '30px', fontFamily: 'Playfair Display, serif' }}>From Bean to Cup</h2>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '2', maxWidth: '850px', margin: '0 auto' }}>
          Hamari kahani Lahore ki aik choti si gali se shuru hui, jahan hum ne faisla kiya ke hum coffee ko sirf aik drink nahi balkay aik art bana kar pesh karenge. 
          Hum ne dunya ke behtareen farmers ke sath direct kaam kiya taake humare har cup mein wahi original mithaas aur khushbu ho jo sirf fresh beans mein hoti hai. 
          Aaj Bean House sirf aik cafe nahi, balkay sukoon aur quality ka doosra naam hai.
        </p>
      </section>

      {/* Process Grid */}
      <section style={{ padding: '40px 10% 100px 10%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ height: '350px', overflow: 'hidden', borderRadius: '15px' }}>
            <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600" alt="Sourcing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ marginTop: '25px', color: '#3C2A21' }}>Ethical Sourcing</h3>
          <p style={{ color: '#777', lineHeight: '1.6' }}>Hum har bean dunya ke un corners se laate hain jahan coffee ki kheti sadiyon se ho rahi hai.</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ height: '350px', overflow: 'hidden', borderRadius: '15px' }}>
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600" alt="Roasting" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ marginTop: '25px', color: '#3C2A21' }}>Artisanal Roasting</h3>
          <p style={{ color: '#777', lineHeight: '1.6' }}>Hamare experts har batch ko manually check karte hain taake roasting perfect ho.</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ height: '350px', overflow: 'hidden', borderRadius: '15px' }}>
            <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600" alt="Serving" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ marginTop: '25px', color: '#3C2A21' }}>The Final Pour</h3>
          <p style={{ color: '#777', lineHeight: '1.6' }}>Bean House mein sirf coffee nahi milti, yahan aapko aik pur-sukoon mahool milta hai.</p>
        </div>
      </section>

      {/* TechFu Commitment Banner */}
      <section style={{ background: '#3C2A21', color: '#fff', padding: '80px 10%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>"Innovation meets Tradition"</h2>
        <p style={{ color: '#bc8f5f', fontSize: '18px', fontWeight: 'bold' }}>Digitally Crafted by TECHFU SOLUTIONS</p>
      </section>
    </div>
  );
};

export default Story;