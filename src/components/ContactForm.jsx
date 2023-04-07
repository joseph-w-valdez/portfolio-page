import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import formSubmission from '../utilities/formSubmission';
import { PrivacyPolicyContext } from '../contexts/PrivacyPolicyContext';

const ContactForm = () => {
  const { handlePrivacyPolicyClick } = useContext(PrivacyPolicyContext);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onBlur' });
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

  const handleFocus = () => {
    if (successMessage) {
      setSuccessMessage(null);
      setErrorMessage(null)
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
          onFocus={handleFocus}
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
          onFocus={handleFocus}
        />
        <div className="flex-basis"></div>
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
          onFocus={handleFocus}
        />
        <div className="flex-basis"></div>
        <textarea
          id="message"
          placeholder="Message"
          {...register("message", { required: true })}
          onFocus={handleFocus}
        />
        <div className="flex-basis"></div>
        <div className="privacy-container">
          <div className="privacy-agreement">
            <input
              type="checkbox"
              {...register("privacyPolicy", { required: true })}
              id="privacy-policy-checkbox"
            />
            <label htmlFor="privacy-policy-checkbox">
              I have read and agree to the 
            </label>
            <span onClick={handlePrivacyPolicyClick} className='privacy-policy'>&nbsp;Privacy Policy</span>.
          </div>
          {errors.privacyPolicy && (
            <>
              <div className="flex-basis"></div>
              <p className="error-message">Please agree to send a message.</p>
            </>
          )}
        </div>
        <div className="flex-basis"></div>
        <button type="submit" >Submit</button>
      </form>
    </>
  );
};

export default ContactForm;