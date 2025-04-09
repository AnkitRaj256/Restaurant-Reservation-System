import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#1c1c1c',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <h2 style={{ color: '#f57c00' }}>TableTrove</h2>
      <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
        <li><a href="#reserve">Reserve</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
