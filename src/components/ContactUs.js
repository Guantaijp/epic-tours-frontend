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
    <div className="bg-cover bg-center" style={{backgroundImage: `url('./bg2.jpg')`}}>
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-2 gap-10 items-center">
          <div className="text-white mb-20">
            <h2 className="text-3xl font-bold mb-20 text-black">Contact Us</h2>
            <p className="mb-5">We would love to hear from you! If you have any questions, comments or feedback, please don't hesitate to get in touch with us using the contact details below.</p>
            <ul className="list-disc pl-5 mb-5">
              <li>Email: contact@yourwebsite.com</li>
              <li>Phone: 1-800-123-4567</li>
              <li>Address: 123 Main Street, Suite 101, Anytown, USA</li>
            </ul>
          </div>
          <form className=" p-10 " onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold mb-10">Send us a message</h2>
            <div className="form-group">
              <label className="font-bold mb-2" htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" value={name} onChange={handleNameChange} className="border border-gray-400 rounded-md px-4 py-2 w-full" />
            </div>
            <div className="form-group">
              <label className="font-bold mb-2" htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} className="border border-gray-400 rounded-md px-4 py-2 w-full" />
            </div>
            <div className="form-group">
              <label className="font-bold mb-2" htmlFor="message">Message:</label>
              <textarea name="message" id="message" value={message} onChange={handleMessageChange} className="border border-gray-400 rounded-md px-4 py-2 w-full h-48" />
            </div>
            <button type="submit" className="bg-purple-900 hover:bg-purple-500 text-white font-bold rounded-md py-2 px-4 mt-5 ">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
