import React, { useState } from 'react';
import '../App.css'

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
    // Here you can add your code to send the form data to your backend or store it in the database
  };

  return (
    <div className="contact-us-container">
    <div className="contact-info">
      <h2>Contact Us</h2>
      <p>We would love to hear from you! If you have any questions, comments or feedback, please don't hesitate to get in touch with us using the contact details below.</p>
      <ul>
        <li>Email: contact@yourwebsite.com</li>
        <li>Phone: 1-800-123-4567</li>
        <li>Address: 123 Main Street, Suite 101, Anytown, USA</li>
      </ul>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send us a message</h2>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" onChange={handleEmailChange} />
      </label>
      <label>
        Message:
        <textarea name="message" onChange={handleMessageChange}></textarea>
      </label>
      <button type="submit">Submit</button>
      </form>
      
   </div>
  );
};

export default ContactUs;
