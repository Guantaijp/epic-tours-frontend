
import React from 'react';
import './App.css'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Section from './components/Section';
import About from "./components/About";
import "./index.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ContactUs from "./components/ContactUs";

function App() {
  return (

    <div>
       <Navbar />
       <Section />
      <About />
      <Login />
      <SignUp />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
