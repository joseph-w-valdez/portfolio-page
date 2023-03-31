import React from 'react'
import { useForm } from 'react-hook-form';

const ContactForm = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try {
          // send email using your backend code here
          console.log(data);
        } catch (error) {
          // handle 500 error
          console.error(error);
        }
      };
      
    return (
    <>
      <h2>Send me a message!</h2>
      <div className="flex-basis"></div>
      <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <input type="text" id='full-name' placeholder='Full Name' {...register('fullName', { required: true })} />
        <div className="flex-basis"></div>
        <input type="email" id='email' placeholder='Email' {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
        <div className="flex-basis"></div>
        <input type="text" placeholder='Subject' {...register('subject', { required: true })} />
        <div className="flex-basis"></div>
        <textarea id='message' placeholder='Message' {...register('message', { required: true })} />
        <div className="flex-basis"></div>
        <button>Submit</button>
      </form>
    </>
  )
}

export default ContactForm