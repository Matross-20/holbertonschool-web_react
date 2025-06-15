// task_3/dashboard/src/components/Header/Header.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <h1>Dashboard</h1>
      {isLoggedIn && (
        <div className="logout-section">
          <span>Welcome, {user?.name}</span>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;