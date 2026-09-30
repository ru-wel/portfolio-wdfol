import { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import "../assets/styles/contact.scss";
import { usePageTitle } from './usePageTitle';
import Icon from './Icon';
import SocialLinks from './SocialLinks';


const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const Contact = () => {
  usePageTitle('Contact');

  // emailjs config
  const form = useRef();

  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [fieldErrors, setFieldErrors] = useState({});

  const validate = (data) => {
    const errors = {};
    const name = (data.get('name') || '').trim();
    const email = (data.get('email') || '').trim();
    const message = (data.get('message') || '').trim();

    if (name.length < 2) {
      errors.name = 'Please enter your name.';
    }
    if (!EMAIL_PATTERN.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (message.length < 10) {
      errors.message = 'Please write at least a sentence so I know what you need.';
    }
    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const errors = validate(new FormData(form.current));
    setFieldErrors(errors);
    const invalid = Object.keys(errors);
    if (invalid.length > 0) {
      setStatus('idle');
      // Take keyboard and screen-reader users to the first field to fix;
      // its error is wired up through aria-describedby, so it is read out.
      form.current.elements[invalid[0]]?.focus();
      return;
    }

    setStatus('sending');

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setStatus('sent');
          form.current.reset();
        },
        () => {
          setStatus('error');
        },
      );
  };

  const isSending = status === 'sending';

  return(
      <main id="main-content" className="home-card">

        <section className="window" aria-labelledby="contact-heading">
          <div className="window-header">
              <p className="window-title" aria-hidden="true">contact</p>
              <div className="window-controls" aria-hidden="true">
                  <div className="control-dot"></div>
                  <div className="control-dot"></div>
                  <div className="control-dot"></div>
              </div>
          </div>
          <div className="window-content">
            <h1 id="contact-heading" className="hero">Hiring, or have a process that should run itself?</h1>
            <p>I&rsquo;m open to full-stack, automation and AI-integration roles, and to freelance web projects. Send me a message and it goes straight to my inbox, or reach me directly:</p>
            <SocialLinks />
          </div>
        </section>

        <div className="projects contact">
          <form ref={form} className='form' onSubmit={sendEmail} noValidate>
            <h2>Contact form</h2>

            <div className="field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className={`input ${fieldErrors.name ? 'has-error' : ''}`}
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
                autoComplete="name"
              />
              {fieldErrors.name && <p className="field-error" id="contact-name-error">{fieldErrors.name}</p>}
            </div>

            <div className="field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className={`input ${fieldErrors.email ? 'has-error' : ''}`}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
                autoComplete="email"
              />
              {fieldErrors.email && <p className="field-error" id="contact-email-error">{fieldErrors.email}</p>}
            </div>

            <div className="field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                className={`message-input ${fieldErrors.message ? 'has-error' : ''}`}
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
              />
              {fieldErrors.message && <p className="field-error" id="contact-message-error">{fieldErrors.message}</p>}
            </div>

            <button type="submit" className='button-confirm' disabled={isSending}>
              {isSending ? 'Sending…' : <>Send message <Icon name="arrow-right" /></>}
            </button>

            <p className="form-status" role="status" aria-live="polite">
              {status === 'sent' && 'Message sent. I will get back to you shortly.'}
              {status === 'error' && 'The message could not be sent. Please try again, or email me directly at reuelchristian.sundiam04@gmail.com.'}
            </p>
          </form>
        </div>
      </main>
  );
}

export default Contact;
