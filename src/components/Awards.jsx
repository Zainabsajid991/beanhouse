import React from 'react';

const Awards = () => {
  const awards = [
    { title: "NEIGHBORHOOD FAVORITE", year: "2021", source: "NEXTDOOR" },
    { title: "BEST COFFEE SHOP", year: "2020", source: "EASTSIDE" },
    { title: "BEST COFFEEHOUSE", year: "2020", source: "RESTAURANT GURU" },
    { title: "BEST GOURMET SHOP", year: "2019", source: "BAR AWARDS" }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', padding: '40px 20px', borderBottom: '1px solid #eee' }}>
      {awards.map((award, i) => (
        <div key={i} style={{ textAlign: 'center', maxWidth: '150px' }}>
          <div style={{ fontSize: '24px', marginBottom: '5px' }}>🏆</div>
          <p style={{ fontSize: '10px', fontWeight: '800', margin: 0, letterSpacing: '1px' }}>{award.title}</p>
          <p style={{ fontSize: '9px', color: '#777', margin: '5px 0' }}>{award.source} {award.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Awards;