/* 
File: Projects.jsx
Student: CHAN, Oi Yan Irene
StudentID: 301309424
Date: May 25, 2024
*/
import React from 'react';
import './Projects.css';
import Projects_Data from './assets/Projects_Data.js';

const Projects = () => {
  return (
    <div id="projects" className='projects'>
    <div className="projects-title">
      <h1>My Projects</h1>
    </div>

    <div className="projects-container">

        {/*read the array from Projects_Data.js and map each to display in the main session of the Projects page */}

        {Projects_Data.map((project, index) => (
            <div key={index} className='projects-format'>
                <img src={project.img} alt="Project Screenshot" />
                <h2>{project.name}</h2>
                <p>Description: {project.detail}</p>
                <p>My Role: {project.role}</p>
                <p>Outcome: {project.outcome}</p>
            </div>
        ))}
    </div>
</div>
  )
}

export default Projects;
