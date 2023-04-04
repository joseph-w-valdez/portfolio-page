import React from 'react';
import { useForm } from 'react-hook-form';
import formSubmission from '../utilities/formSubmission';

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const result = await formSubmission(data);
    console.log('this is the result', typeof result)
    if (result.status === 201) {
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
