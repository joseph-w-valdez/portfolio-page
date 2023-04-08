import React from 'react';
import ContactForm from './ContactForm';
import { socialsData } from '../data/socialsData';

const ContactMe = () => {
  
    return (
      <div className="section contact-me-section">
        <h1>Contact Me</h1>
        <div className="flex-basis"></div>
        <div className="contact-me-container">
          <h2>Let's connect! 😊</h2>
          <div className="flex-basis"></div>
          <div className="socials">
            {socialsData.map((link, index) => (
              <a
                key={index}
                className="social"
                href={link.linkUrl}
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-logo-frame">
                  <img src={link.logoUrl} alt={link.linkUrl} />
                </div>
                <span className="social-link">{link.title}</span>
              </a>
            ))}
          </div>
          <div className="flex-basis"></div>
          <ContactForm />
        </div>
      </div>
    );
  };
  
  export default ContactMe;
  