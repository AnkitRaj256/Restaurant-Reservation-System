import React from 'react';

const menuItems = [
  { name: 'Margherita Pizza', price: '$12' },
  { name: 'Pasta Alfredo', price: '$15' },
  { name: 'Caesar Salad', price: '$9' },
  { name: 'Tandoori Chicken', price: '$13' },
  { name: 'Choco Lava Cake', price: '$6' },
];

const Menu = () => {
  return (
    <div id="menu" style={{ padding: '2rem' }}>
      <h2 style={{ color: '#f57c00', textAlign: 'center' }}>Our Menu</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        {menuItems.map((item, index) => (
          <div key={index} style={{
            backgroundColor: '#222',
            padding: '1rem',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h3>{item.name}</h3>
            <p style={{ color: '#f57c00' }}>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
