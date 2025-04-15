// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OwnerLogin from './components/Auth/OwnerLogin';
import UserLogin from './components/Auth/UserLogin';
import UserRegister from './components/Auth/UserRegister';
import UserDashboard from './pages/UserDashboard';
import RoleSelection from './components/RoleSelection';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/owner" element={<OwnerLogin />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
