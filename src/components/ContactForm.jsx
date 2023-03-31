import React from 'react'

const ContactForm = () => {
  return (
    <>
      <form className='contact-form'>
        <h2>Send me a message!</h2>
        <div className="flex-basis"></div>
        <input type="text" id='full-name' placeholder='Full Name' required/>
        <div className="flex-basis"></div>
        <input type="email" id='email'placeholder='Email' required/>
        <div className="flex-basis"></div>
        <input type="text" placeholder='Subject' required/>
        <div className="flex-basis"></div>
        <textarea id='message' placeholder='Message' required/>
        <div className="flex-basis"></div>
        <button>Submit</button>
      </form>
    </>
  )
}

export default ContactForm