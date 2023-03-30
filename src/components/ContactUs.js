import React, { useState } from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faFacebook, faTwitter, faInstagram, faLinkedin  } from '@fortawesome/free-brands-svg-icons';


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
 <>
    <div className="bg-cover bg-center" style={{backgroundImage: `url('./bg2.jpg')`}}>
  <div className="container p-10">
    <div className="grid grid-cols-2 gap-20">
      <div className="text-black mb-10 bg-white p-10">
        <h2 className="text-3xl font-bold mb-10 text-black">Contact Us</h2>
        <p className="mb-5">We would love to hear from you! If you have any questions, comments or feedback, please don't hesitate to get in touch with us using the contact details below.</p>
        <ul className="mb-10">
          <li><b>Email:</b> epictours@gmail.com</li>
          <li><b>Phone:</b> 07239887898</li>
          <li><b>Address:</b> Epic Building,Suite 301, Kenyatta Avenue</li>
        </ul>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://ke.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
      <form className="max-w-6xl mx-auto" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold mb-10 text-white">Send us a message</h2>
        <div className="form-group mb-5">
          <label className="font-bold mb-2" htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={name} onChange={handleNameChange} className="border border-gray-400 rounded-md px-4 py-2 w-full" />
        </div>
        <div className="form-group mb-5">
          <label className="font-bold mb-2" htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} className="border border-gray-400 rounded-md px-4 py-2 w-full" />
        </div>
        <div className="form-group mb-5">
          <label className="font-bold mb-2" htmlFor="message">Message:</label>
          <textarea name="message" id="message" value={message} onChange={handleMessageChange} className="border border-gray-400 rounded-md px-4 py-2 w-full h-44" />
        </div>
        <button type="submit" className="bg-purple-900 hover:bg-purple-500 text-white font-bold rounded-md py-2 px-4 mt-5 ">Submit</button>
      </form>
    </div>
  </div>
</div>

</>
  );
};
export default ContactUs;