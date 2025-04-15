import React, { useState } from 'react';
import OwnerDashboard from '../../pages/OwnerDashboard';
import './UserLogin.css';

const OwnerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === 'Restaurant@gmail.com' && password === '123456') {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };

  if (loggedIn) return <OwnerDashboard />;

  return (
    <div className="restaurant-login-container">
      <div className="restaurant-login-box">
        <div className="login-avatar">🍽️</div>
        <h2 className="login-title">Welcome to the Restaurant Admin Panel 🍽️</h2>

        <input
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />

        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <button
            className="forgot-link"
            onClick={() => alert('Redirect to password recovery')}
          >
            Forgot Password?
          </button>
        </div>

        <button className="login-button" onClick={handleLogin}>LOGIN</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default OwnerLogin;
