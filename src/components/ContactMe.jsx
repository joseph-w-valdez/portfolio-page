import React from 'react'

import ContactForm from './ContactForm'

const ContactMe = () => {
  return (
    <div className="section contact-me-section">
        <h1>Contact Me</h1>
        <div className="flex-basis"></div>
        <div className="contact-me-container">
            <h2>Let's connect! 😊</h2>
            <div className="flex-basis"></div>
            <div className="socials">
                <div className="social">
                    <a className="social-logo-frame" href='https://www.linkedin.com/in/joseph-w-valdez/' target='_blank' rel='noreferrer'>
                        <img src="../images/LinkedInLogo.png" alt="LinkedIn" />
                    </a>
                    <a href='https://www.linkedin.com/in/joseph-w-valdez/' target='_blank' rel='noreferrer' className='social-link'>linkedin.com/in/joseph-w-valdez</a>
                </div>
                <div className="social">
                    <a className="social-logo-frame" href='https://github.com/joseph-w-valdez' target='_blank' rel='noreferrer' >
                        <img src="../images/GitHubLogo.png" alt="GitHub" />
                    </a>
                    <a href='https://github.com/joseph-w-valdez' target='_blank' rel='noreferrer' className='social-link'>github.com/joseph-w-valdez</a>
                </div>
            </div>
            <div className="flex-basis"></div>
            <ContactForm />
        </div>
    </div>
  )
}

export default ContactMe