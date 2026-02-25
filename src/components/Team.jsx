import React from 'react';

const Team = () => {
  const team = [
    {
      name: "Ahmed Raza", // Larkay ka naam
      role: "Founder & Head Barista",
      // Larkay ki professional picture
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
    },
    {
      name: "Sara Ahmed", // Larki ka naam
      role: "Head Pastry Chef",
      // Larki ki professional Chef picture
      img: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=500&q=80"
    },
    {
      name: "Zainab Khan", // Larki ka naam
      role: "Operations Manager",
      // Larki ki decent professional picture
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80"
    }
  ];

  return (
    <section className="reveal" style={{ padding: 'clamp(56px, 8vw, 80px) clamp(16px, 8vw, 10%)', background: '#fdfaf7', textAlign: 'center' }}>
      <div className="reveal reveal-delay-1" style={{ marginBottom: '50px' }}>
        <h4 style={{ color: '#603601', letterSpacing: '3px', fontWeight: 'bold', margin: '0' }}>OUR EXPERTS</h4>
        <h2 style={{ fontSize: 'clamp(28px, 4.8vw, 40px)', color: '#1a1a1a', marginTop: '10px', fontFamily: "'Playfair Display', serif" }}>Meet Our Passionate Team</h2>
        <div style={{ width: '50px', height: '3px', background: '#603601', margin: '15px auto' }}></div>
      </div>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: 'clamp(18px, 3vw, 40px)' 
      }}>
        {team.map((member, index) => (
          <div key={index} className={`reveal reveal-delay-${(index % 3) + 1}`} style={{ 
            flex: '1 1 240px', 
            maxWidth: '320px', 
            textAlign: 'center',
            background: 'white',
            padding: 'clamp(18px, 3vw, 30px) clamp(14px, 2.5vw, 20px)',
            borderRadius: '15px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
          }}>
            <div style={{ 
              width: 'clamp(110px, 20vw, 150px)', 
              height: 'clamp(110px, 20vw, 150px)', 
              margin: '0 auto 20px', 
              borderRadius: '50%', 
              overflow: 'hidden',
              border: '4px solid #fdfaf7'
            }}>
              <img 
                src={member.img} 
                alt={member.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <h3 style={{ color: '#3C2A21', margin: '10px 0 5px', fontSize: '20px' }}>{member.name}</h3>
            <p style={{ color: '#bc8f5f', fontWeight: '600', fontSize: '14px', margin: '0' }}>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
