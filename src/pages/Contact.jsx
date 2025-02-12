import { useRef } from 'react';

import emailjs from '@emailjs/browser';
import ProfileCard from './ProfileCard.jsx';
import "../assets/styles/contact.scss";

import Nav from "./Nav";

const Contact = () => {

  // emailjs config
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
    <div className="container">
      <Nav />
      <ProfileCard />

      <div className="home-card">

        <div className="window">
          <div className="window-header">
              <h1 className="window-title">Contact</h1>
              <div className="window-controls">
                  <div className="control-dot"></div>
                  <div className="control-dot"></div>
                  <div className="control-dot"></div>
              </div>
          </div>
          <div className="window-content">
            <p>I am always open to new opportunities and collaborations. If you have something in mind or any questions, feel free to contact me. We can discuss how we can work together to make your project a success. Feel free to reach out!<span> This form will directly send a message to my email!</span></p>
          </div>
        </div>

        <div className="projects contact">
          <form ref={form} className='form' onSubmit={sendEmail}>
            <h2>Contact Form</h2>
            <input type="text" name="name" placeholder='Name' className='input' required/>
            <input type="email" name="email" placeholder='Email' className='input' required/>
            <textarea name="message" rows={'5'} className='message-input' placeholder='Message' required/>
            <input type="submit" value="Send Message →" className='button-confirm'/>
          </form>
        </div>
      </div>

      
    </div>
  );
}

export default Contact;