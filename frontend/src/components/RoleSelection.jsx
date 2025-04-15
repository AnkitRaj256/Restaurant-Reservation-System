// components/RoleSelection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import chefImg from '../assets/chef.jpg';
import userImg from '../assets/user.webp';

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <h1 className="app-title">Restaurant Reservation System 🍽️</h1>

      <div className="login-selection">
        <div className="login-box">
          <img src={chefImg} alt="Chef" className="login-image" />
          <button className="login-button owner-btn" onClick={() => navigate('/owner')}>
            Sign in as Restaurant
          </button>
        </div>

        <div className="login-box">
          <img src={userImg} alt="User" className="login-image" />
          <button className="login-button user-btn" onClick={() => navigate('/register')}>
            Sign in as User
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
