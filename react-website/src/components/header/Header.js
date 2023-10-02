// Header.js
import React from 'react';
import logo from '../../assets/images/logoFinalAnimation.svg';
import './Header.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="Company Logo" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
