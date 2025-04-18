import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserDashboard from '../../pages/UserDashboard';
import './UserLogin.css';

const UserLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setLoggedIn(true);
      } else {
        alert('Login failed or user not registered');
      }
    } catch (err) {
      console.error('Error logging in:', err);
    }
  };

  if (loggedIn) return <UserDashboard />;

  return (
    <div className="restaurant-login-container">
      <div className="restaurant-login-box">
        <div className="login-avatar">🍽️</div>
        <h2 className="login-title">Welcome to RestoReserve</h2>

        <input
          name="name"
          type="text"
          placeholder="Name"
          className="login-input"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email ID"
          className="login-input"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="login-input"
          value={formData.password}
          onChange={handleChange}
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
        <p className="signup-link">
          New here? <Link to="/register">Register Now</Link>
        </p>


        <button className="login-button" onClick={handleLogin}>LOGIN</button>
      </div>
    </div>
  );
};

export default UserLogin;
