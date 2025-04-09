import React, { useState } from 'react';
import OwnerLogin from './components/Auth/OwnerLogin';
import UserLogin from './components/Auth/UserLogin';
import './styles/global.css';
import chefImg from './assets/chef.jpg';
import userImg from './assets/user.webp';

const App = () => {
  const [userType, setUserType] = useState(null);

  if (userType === 'owner') return <OwnerLogin />;
  if (userType === 'user') return <UserLogin />;

  return (
    <div className="app-container">
      <h1 className="app-title">Restaurant Reservation System 🍽️</h1>

      <div className="login-selection">
        <div className="login-box">
          <img src={chefImg} alt="Chef" className="login-image" />
          <button className="login-button owner-btn" onClick={() => setUserType('owner')}>
            Sign in as Restaurant
          </button>
        </div>

        <div className="login-box">
          <img src={userImg} alt="User" className="login-image" />
          <button className="login-button user-btn" onClick={() => setUserType('user')}>
            Sign in as User
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
