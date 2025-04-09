import React, { useState } from 'react';
import OwnerDashboard from '../../pages/OwnerDashboard';

const OwnerLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  if (loggedIn) return <OwnerDashboard />;

  return (
    <div style={{ textAlign: 'center', paddingTop: '5rem' }}>
      <h2>Owner Login</h2>
      <input placeholder="Email" style={{ padding: '0.5rem', marginRight: '0.5rem' }} />
      <input type="password" placeholder="Password" style={{ padding: '0.5rem' }} />
      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default OwnerLogin;
