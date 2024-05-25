/* 
File: Services.jsx
Student: CHAN, Oi Yan Irene
StudentID: 301309424
Date: May 25, 2024
*/

import React from 'react';
import './Services.css';
import Services_Data from './assets/Services_Data';

const Services = () => {
    return (
        <div id="services" className='services'>
            <div className="services-title">
                <h1>My Services</h1>
            </div>

            {/*read the array from Services_Data.js and map each to display in the main session of the Services page */}

            <div className="services-container">
                {Services_Data.map((service, index) => (
                    <div key={index} className='services-format'>
                        <h2 className="context">{service.num}</h2>
                        <h3>{service.name}</h3>
                        <p className="context">{service.detail}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
