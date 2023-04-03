import React from 'react';
import { useForm } from 'react-hook-form';
import formSubmission from '../utilities/formSubmission';

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const result = await formSubmission(data);
    if (result.success) {
      reset(); // reset the form after successful submission
      alert("Thank you for your message!");
    } else {
      alert(result.error || "There was an error sending your message.");
    }
  };

  return (
    <>
      <h2>Send me a message!</h2>
      <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="full-name"
          placeholder="Full Name"
          {...register("fullName", { required: true })}
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        <textarea
          id="message"
          placeholder="Message"
          {...register("message", { required: true })}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
