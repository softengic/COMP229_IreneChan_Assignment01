/* 
File: App.jsx
Student: CHAN, Oi Yan Irene
StudentID: 301309424
Date: May 25, 2024
*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Projects from './Projects.jsx';
import Contacts from './Contacts.jsx';
import Footer from './Footer.jsx';

const App = () => {
  return (
    <Router>
    <div>
    <Navbar />
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contacts />} /> 
        <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
