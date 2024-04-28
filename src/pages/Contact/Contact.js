import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  }

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  }

  const handleMessageChange = (evt) => {
    setMessage(evt.target.value);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gt0vhwi', 'template_41osrfo', form.current, {
        publicKey: '14Elam1xP57BudDQF',
      })
      .then(
        () => {
          toast('Message Sent!');
          setName('');
          setEmail('');
          setLocation('');
          setMessage('');
        },
        (error) => {
          toast('Oops! There was an error!');
        },
      );
  };

  const enabled =
    email !== '' &&
    name !== '' && message !== '';

  return (
    <div className="Contact">
      <h1>Contact</h1>
      <h3>Please feel free to reach out for any inquiries</h3>
      <ToastContainer position='top-center' />
      <form ref={form} onSubmit={sendEmail}>
        <label style={{ animation: '1.5s ease-in 0s 1 slideInFromTopContact' }}>Name<span>*</span></label>
        <input type="text" name="user_name" value={name} onChange={handleNameChange} style={{ animation: '1.5s ease-in 0s 1 slideInFromTopContact' }} />
        <label style={{ animation: '1.6s ease-in 0s 1 slideInFromTopContact' }}>Email Address<span>*</span></label>
        <input type="email" name="user_contact" value={email} onChange={handleEmailChange} style={{ animation: '1.6s ease-in 0s 1 slideInFromTopContact' }} />
        <label style={{ animation: '1.7s ease-in 0s 1 slideInFromTopContact' }}>Location</label>
        <input type="text" name="user_location" value={location} style={{ animation: '1.7s ease-in 0s 1 slideInFromTopContact' }} />
        <label style={{ animation: '1.8s ease-in 0s 1 slideInFromTopContact' }}>Message<span>*</span></label>
        <textarea name="message" value={message} onChange={handleMessageChange} style={{ animation: '1.8s ease-in 0s 1 slideInFromTopSlightContact' }} />
        <input type="submit" value="Send" disabled={!enabled} style={{ animation: '1.9s ease-in 0s 1 slideInFromTopContact' }} />
      </form>
    </div>
  );
}

export default Contact;
