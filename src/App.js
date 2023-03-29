import React from 'react';
import './App.css'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {
  return (
    <div>
      <ContactUs />
      <Navbar />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
