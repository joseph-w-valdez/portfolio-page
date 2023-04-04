import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import formSubmission from '../utilities/formSubmission';

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = async (data) => {
    try {
      await formSubmission(data);
      setSuccessMessage('Thank you for your message!');
      setErrorMessage(null);
      reset(); // reset the form after successful submission
    } catch (error) {
      setSuccessMessage(null);
      setErrorMessage(error.message || 'There was an error sending your message.');
    }
  };

  return (
    <>
      <h2>Send me a message!</h2>
      <div className="flex-basis"></div>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="full-name"
          placeholder="Full Name"
          {...register("fullName", { required: true })}
        />
        <div className="flex-basis"></div>
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        <div className="flex-basis"></div>
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        <div className="flex-basis"></div>
        <textarea
          id="message"
          placeholder="Message"
          {...register("message", { required: true })}
        />
        <div className="flex-basis"></div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
