// src/components/User/UserRegister.jsx
import React, { useState } from 'react';
import './UserLogin.css'; // reuse styles
import { Link } from 'react-router-dom';

const UserRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        alert('Registration failed. Try again.');
      }
    } catch (err) {
      console.error('Error registering user:', err);
    }
  };

  if (success) {
    return (
      <div className="restaurant-login-container">
        <div className="restaurant-login-box">
          <h2 className="login-title">🎉 Registered Successfully!</h2>
          <p>You can now log in from the login page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="restaurant-login-container">
      <div className="restaurant-login-box">
        <div className="login-avatar">📝</div>
        <h2 className="login-title">Create Your RestoReserve Account</h2>

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
        <p className="signup-link">
            Already a user? <Link to='/login'>Login</Link>
         </p>

        <button className="login-button" onClick={handleRegister}>
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default UserRegister;
