/* 
File: Home.jsx
Student: CHAN, Oi Yan Irene
StudentID: 301309424
Date: May 25, 2024
*/

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profilePic from './assets/profile_pic.jpg';

const Home = () => {
  return (
    <div id="home" className="home">
      
      {/* contains profile pic, brief introduction and mission statement*/}

      <img src={profilePic} alt="Profile Picture" />
      
      <h1><span>Building the Future: A Software Engineering Technician in the Making</span></h1>
         
      <p>Hi! I am Irene Chan, a Software Engineering Technician graduate candidate at Centennial College.</p>
        
      <p>My mission is to leverage my strong foundation in programming and Agile development methodologies to contribute to the development of innovative software solutions that prioritize user experience. I am committed to continuous learning and staying up-to-date with the latest advancements in the software engineering field.</p>

      {/* link to the "About Me" page*/}

      <div className="home-about"><Link to="/about">About Me</Link></div>
    </div>
  );
};

export default Home;
