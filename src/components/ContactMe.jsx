import React from 'react';

import ContactForm from './ContactForm';

const ContactMe = () => {
  return (
    <div className="section contact-me-section">
      <h1>Contact Me</h1>
      <div className="flex-basis"></div>
      <div className="contact-me-container">
        <h2>Let's connect! 😊</h2>
        <div className="flex-basis"></div>
        <div className="socials">
          <a
            className="social"
            href="https://www.linkedin.com/in/joseph-w-valdez/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social-logo-frame">
              <img src="../images/LinkedInLogo.png" alt="LinkedIn" />
            </div>
            <span className="social-link">linkedin.com/in/joseph-w-valdez</span>
          </a>
          <a
            className="social"
            href="https://github.com/joseph-w-valdez"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social-logo-frame">
              <img src="../images/GitHubLogo.png" alt="GitHub" />
            </div>
            <span className="social-link">github.com/joseph-w-valdez</span>
          </a>
        </div>
        <div className="flex-basis"></div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMe;
