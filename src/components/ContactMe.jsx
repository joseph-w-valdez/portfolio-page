import React from 'react'

const ContactMe = () => {
  return (
    <div className="section">
        <h1>Contact Me</h1>
        <div className="flex-basis"></div>
        <div className="socials">
            <div className="social">
                <div className="social-logo-frame">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png" alt="LinkedIn" />
                </div>
                <a href='https://www.linkedin.com/in/joseph-w-valdez/' target='_blank' rel='noreferrer' >https://www.linkedin.com/in/joseph-w-valdez/</a>
            </div>
            <div className="social">
                <div className="social-logo-frame">
                    <img src="https://img.icons8.com/nolan/512/github.png" alt="GitHub" />
                </div>
                <a href='https://github.com/joseph-w-valdez' target='_blank' rel='noreferrer' >https://github.com/joseph-w-valdez</a>
            </div>
        </div>
    </div>
  )
}

export default ContactMe