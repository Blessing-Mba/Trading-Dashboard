import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">Company Logo</div>
    <nav className="nav-links">
      <Link to="/">Dashboard</Link>
      <Link to="/markets">Markets</Link>
      <Link to="/wallet">Wallet</Link>
      <Link to="/profile">Profile</Link>
    </nav>
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
    </div>
  </header>
);

export default Header;
