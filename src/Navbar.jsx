/* 
File: Navbar.jsx
Student: CHAN, Oi Yan Irene
StudentID: 301309424
Date: May 25, 2024
*/
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../src/assets/logo/logo-white-tight.png';

const Navbar = () => {

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" />
      <ul className="navMenu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;
