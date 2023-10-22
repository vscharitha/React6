import React from 'react';
import './ContactMe.css'; 
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'; 

const ContactMe = () => {
  return (
    <section id="contact">
    <div className="contact-me-box">
      
      <h2 className="contact-me-heading">Contact Me</h2>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/sri-charitha-velidandla-739202223/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://github.com/vscharitha" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
      </div>
      <p>sricharitha.velidandla@gmail.com</p>
      {/* Add more contact information as needed */}
     
    </div>
    </section>

  );
};

export default ContactMe;