import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Nav from "./Nav";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          alert('Email sent succesfully!')
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          alert('An error has occured')
          console.log('FAILED...', error.text);
        },
      );
  };

  return(
    <>
      <Nav />
      <p>THIS IS THE CONTACT PAGE</p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" required/>
        <label>Email</label>
        <input type="email" name="email" required/>
        <label>Message</label>
        <textarea name="message" rows={'5'} required/>
        <input type="submit" value="Send" />
      </form>
    </>
  );
}

export default Contact;