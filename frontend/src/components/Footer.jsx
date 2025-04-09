import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" style={{
      backgroundColor: '#1c1c1c',
      padding: '2rem',
      marginTop: '3rem',
      textAlign: 'center'
    }}>
      <p>&copy; {new Date().getFullYear()} TableTrove. All rights reserved.</p>
      <p>Contact: support@tabletrove.com | +91 98765 43210</p>
    </footer>
  );
};

export default Footer;
