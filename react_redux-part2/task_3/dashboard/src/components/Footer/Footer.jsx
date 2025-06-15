import React from 'react';
import { useSelector } from 'react-redux';
import './Footer.css';

const Footer = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <footer className="footer">
      <p>&copy; 2024 Holberton School</p>
      {isLoggedIn && <a href="/contact">Contact us</a>}
    </footer>
  );
};

export default Footer;