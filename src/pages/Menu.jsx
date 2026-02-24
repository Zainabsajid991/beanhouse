import React, { useState, useEffect } from 'react';

const Menu = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleOrder = (productName, productPrice) => {
    const phoneNumber = "923340637719"; 
    const message = `Hello! I would like to order:\n\n*Product:* ${productName}\n*Price:* ${productPrice}\n\nPlease confirm my order.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const categories = [
    { id: "Cakes", name: "PREMIUM CAKES", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800" },
    { id: "Coffee", name: "HOT & COLD BREWS", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800" },
    { id: "Deserts", name: "SWEET TREATS", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800" },
    { id: "Bakes", name: "FRESH BAKERY", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800" },
    { id: "Milk-Shakes", name: "THICK SHAKES", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800" }
  ];

  const menuData = {
    "Cakes": [
      { name: "Lava Cake", price: "Rs. 2,000", desc: "Andar se pighla hua garm chocolate aur bahar se soft cake.", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400" },
      { name: "Chocolate Cake", price: "Rs. 2,000", desc: "Rich dark chocolate layer cake.", img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400" },
      { name: "Cheese Cake", price: "Rs. 2,200", desc: "Creamy New York cheesecake.", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400" },
      { name: "Coffee Cake", price: "Rs. 1,800", desc: "Infused with espresso shot.", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400" },
      { name: "Vanilla Cake", price: "Rs. 1,500", desc: "Soft vanilla cream sponge.", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400" }
    ],
    "Coffee": [
      { name: "Espresso", price: "Rs. 450", desc: "Strong Arabica shot.", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400" },
      { name: "Cappuccino", price: "Rs. 550", desc: "Milk foam & espresso.", img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400" },
      { name: "Iced Latte", price: "Rs. 580", desc: "Chilled milk & espresso.", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400" },
      { name: "Mocha", price: "Rs. 600", desc: "Chocolate & espresso blend.", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400" },
      { name: "Flat White", price: "Rs. 520", desc: "Double shot with micro-foam.", img: "https://images.unsplash.com/photo-1536939459926-301728717817?w=400" }
    ],
    "Deserts": [
      { name: "Fluffy Pancakes", price: "Rs. 1,200", desc: "Golden pancakes with maple syrup.", img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400" },
      { name: "Belgian Waffles", price: "Rs. 1,400", desc: "Crispy waffles with Nutella.", img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400" },
      { name: "Brownie Sundae", price: "Rs. 950", desc: "Warm brownie with vanilla scoop.", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400" },
      { name: "Apple Pie", price: "Rs. 800", desc: "Classic cinnamon apple crust.", img: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=400" },
      { name: "Fruit Tart", price: "Rs. 750", desc: "Fresh seasonal fruits and custard.", img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400" },
      { name: "Tiramisu", price: "Rs. 1,100", desc: "Italian coffee flavored desert.", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400" }
    ],
    "Bakes": [
      { name: "Butter Croissant", price: "Rs. 450", desc: "Flaky and buttery French pastry.", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400" },
      { name: "Garlic Bread", price: "Rs. 350", desc: "Toasted baguette with herbs and garlic butter.", img: "https://images.unsplash.com/photo-1544813545-4827b64fcacb?w=400" },
      { name: "Chicken Pattie", price: "Rs. 300", desc: "Savory chicken filling in puff pastry.", img: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=400" },
      { name: "Almond Danish", price: "Rs. 500", desc: "Sweet pastry with almond cream and nuts.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" }
    ],
    "Milk-Shakes": [
      { name: "Oreo Madness", price: "Rs. 750", desc: "Thick chocolate blend with crushed Oreo.", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
      { name: "Classic Vanilla", price: "Rs. 650", desc: "Smooth and rich vanilla bean shake.", img: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=400" },
      { name: "Nutty Peanut Butter", price: "Rs. 780", desc: "Creamy peanut butter blended with milk.", img: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?w=400" }
    ]
  };

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '100px', color: 'white' }}>
      
      {!selectedCategory ? (
        <section style={{ padding: '0 10%', textAlign: 'center' }}>
          <h4 style={{ color: '#bc8f5f', letterSpacing: '4px', fontSize: '13px' }}>EXPLORE</h4>
          <h1 style={{ fontSize: '40px', marginBottom: '40px', fontFamily: "'Playfair Display', serif" }}>Our Specialities</h1>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '20px',
            paddingBottom: '80px'
          }}>
            {categories.map((cat) => (
              <div 
                key={cat.id}
                onClick={() => { setSelectedCategory(cat.id); window.scrollTo(0, 0); }}
                style={{
                  height: '350px', // Category card chota kar diya
                  position: 'relative',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
                }}
              >
                <img src={cat.img} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.4s' }} alt={cat.name} 
                     onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                     onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} />
                <div style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                  display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '25px'
                }}>
                  <h2 style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '18px' }}>{cat.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section style={{ padding: '0 10%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <button 
                onClick={() => setSelectedCategory(null)}
                style={{ 
                background: 'transparent', color: '#bc8f5f', border: '1px solid #bc8f5f',
                padding: '8px 20px', cursor: 'pointer', borderRadius: '50px', fontSize: '12px'
                }}
            >
                ← BACK
            </button>
            <h1 style={{ fontSize: '32px', fontFamily: "'Playfair Display', serif", margin: 0 }}>{selectedCategory}</h1>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', // Product grid compact
            gap: '20px',
            paddingBottom: '80px'
          }}>
            {menuData[selectedCategory]?.map((product, index) => (
              <div key={index} style={{ background: '#161616', borderRadius: '15px', overflow: 'hidden', border: '1px solid #222' }}>
                <img src={product.img} style={{ width: '100%', height: '180px', objectFit: 'cover' }} alt={product.name} />
                <div style={{ padding: '18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '17px' }}>{product.name}</h3>
                    <span style={{ color: '#bc8f5f', fontSize: '14px', fontWeight: 'bold' }}>{product.price}</span>
                  </div>
                  <p style={{ color: '#888', fontSize: '13px', marginBottom: '18px', lineHeight: '1.5', height: '40px', overflow: 'hidden' }}>{product.desc}</p>
                  
                  <button 
                    onClick={() => handleOrder(product.name, product.price)}
                    style={{
                      width: '100%', padding: '10px', background: '#bc8f5f', color: 'white',
                      border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer',
                      fontSize: '13px'
                    }}
                  >
                    ORDER NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Menu;