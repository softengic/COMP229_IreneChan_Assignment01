/* 
File: About.jsx
Student: CHAN, Oi Yan Irene
StudentID: 301309424
Date: May 25, 2024
*/

import React from 'react';
import './About.css';
import profilePicLarge from './assets/profile_pic_large.jpg';
import Resume from './assets/Resume.pdf';

const About = () => {
  return (
    <div id="about" className="about">

      {/* Page title */}

        <div className="about-title"> 
            <h1>About Me</h1>
        </div>
           
        <div className="about-sections">
           
         {/* section that contains photo and download resume button */}

           <div className="about-left">  
                  <img src={profilePicLarge} alt="Profile Picture" />
                  <p>Irene Chan Oi Yan</p>
                  <div className="about-resume"><a href={Resume}>Download My Resume</a></div>
           </div>
        
        
        {/* section that contains personal description */}
        
            <div className="about-right">
                <div className="about-para">

                    <p>I am eager to leverage my extensive experience in the banking industry to bring a fresh perspective to my future software engineering career.</p>

                    <p>My background in the banking industry is diverse, ranging from serving multinational corporate clients as a Marketing Manager to designing and managing banking products as a Product Manager in the middle office. This experience has equipped me with a strong understanding of a corporation&apos;s front-to-back-end operations.</p>

                    <p>Now, I am combining this valuable knowledge with the technical skill set I am acquiring in the program, equipped with the ability to apply Agile development methodologies, design and manage databases, develop software using C# and Java, and implement web design principles for both front-end and back-end applications. I am confident that this unique blend of experience and technical skills will allow me to make a significant contribution to my future career.</p>
                </div>
                 
          {/* section that shows skills proficiency level */}
 
                  <div className="about-skills">
                    <p className="about-skills-title">Proficiency Level:</p>  
                    <div className="about-skill"><p>Database Management</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>Project Development</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Web Design</p><hr style={{width:"75%"}} /></div>
                    <div className="about-skill"><p>Programming</p><hr style={{width:"60%"}} /></div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About
