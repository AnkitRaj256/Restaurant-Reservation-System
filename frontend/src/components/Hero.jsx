import React from 'react';

const Hero = () => {
  return (
    <div style={{
      backgroundImage: 'url(/logo.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: '1rem 2rem',
        borderRadius: '10px'
      }}>
        Welcome to TableTrove 🍴 <br />
        Reserve your seat now!
      </h1>
    </div>
  );
};

export default Hero;
