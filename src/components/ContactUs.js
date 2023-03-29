import React, { useState } from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

const ContactUs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    if (message.trim() === '') {
      alert('Please enter a message');
      return;
    }    // Here you can add your code to send the form data to your backend or store it in the database
  
    alert('Message delivered');
  
    // Clear the input fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-us-container">
     <div className="contact-info">
      <h2>Contact Us</h2>
      <p>We would love to hear from you! If you have any questions, comments or feedback, please don't hesitate to get in touch with us using the contact details below.</p>
    <ul>
        <li>Email: epictours@gmail.com</li>
       <li>Phone: 07239887898</li>
        <li>Address:Epic Building,Suite 301, Kenyatta Avenue </li>
    </ul>
    <br/>
    
 <div className="social-media-icons">
    <a  href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
    <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
    <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
    <a href="https://ke.linkedin.com"> <FontAwesomeIcon icon={faLinkedin} /></a>

  </div>
  
  </div>
  <form className="contact-form" onSubmit={handleSubmit}>
    <h2>Send us a message</h2>
    <label>
    Name:
      <input type="text" name="name" value={name} onChange={handleNameChange} />
    </label>
    
    <label>
    Email:
      <input type="email" name="email" value={email} onChange={handleEmailChange} />
    </label>

    <label>
    Message:
      <textarea name="message" value={message} onChange={handleMessageChange}></textarea>
    </label>      
      <button type="submit">Submit</button>
  </form>
</div>
  );
};
export default ContactUs;