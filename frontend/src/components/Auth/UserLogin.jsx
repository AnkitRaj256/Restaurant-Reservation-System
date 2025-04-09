import React, { useState } from 'react';
import UserDashboard from '../../pages/UserDashboard';

const UserLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  if (loggedIn) return <UserDashboard />;

  return (
    <div style={{ textAlign: 'center', paddingTop: '5rem' }}>
      <h2>User Login</h2>
      <input placeholder="Email" style={{ padding: '0.5rem', marginRight: '0.5rem' }} />
      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default UserLogin;
