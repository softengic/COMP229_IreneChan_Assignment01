/* 
File: Contacts.jsx
Student: CHAN, Oi Yan Irene
StudentID: 301309424
Date: May 25, 2024
*/

import React from 'react';
import './Contacts.css';
import {FaPhone, FaEnvelope} from 'react-icons/fa';

const Contacts = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>

      <div className="contact-section">

          {/*left side of the contact session: contains my contact info  */}
        
          <div className="contact-left">
              <h2>Contact Information</h2>
          
              <div className="contact-details">
                  <div className="contact-detail">
                      <FaPhone size={24} color="darkblue" />
                      <p>  +1-416-520-2600</p>
                  </div>
            
                  <div className="contact-detail">
                  <FaEnvelope size={24} color="darkblue" />
                      <p>  ochan14@my.centennialcollege.ca</p>
                  </div>
              </div>
          
          </div>
      
          {/*right side of the contact session: contains a form for visitor to fill in */}

          <form action="mailto:ochan14@my.centennialcollege.ca" method="post" className="contact-right">
            <label htmlFor="userName">Your Name: </label>
            <input type="text" name="userName" placeholder="John Smith" required />

            <label htmlFor="userContact">Phone Number: </label>
            <input type="text" name="userContact" placeholder="416-520-2600" required/>

            <label htmlFor="userEmail">Email Address: </label>
            <input type="email" name="userEmail" placeholder="jsmith@abc.com" required/>

            <label htmlFor="userMessage">Your Message: </label>
            <textarea name="userMessage" rows="8" placeholder="Enter your message here" required/>
          
            <button type="Submit" className="btnSubmit">Submit</button>

          </form>



         


      </div>
    
    
    </div>
  )
}

export default Contacts;
