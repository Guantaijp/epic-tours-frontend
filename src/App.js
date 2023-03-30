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
import Destinations from './components/Destinations';
import {  Routes , Route } from 'react-router-dom';
import Booking from './components/Booking';


function App() {
  return (
    <Routes>
      <Route path="/" element={[<Navbar/>,<Section/>,<Footer/>] } />
      <Route path="/about" element={[<Navbar/>,<About/>,<Footer/>] } />
      <Route path="/login" element={<Login/>} />
      <Route path="/booking" element={[<Navbar/>,<Booking/>,<Footer/>] } />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/destinations" element={[<Navbar/>,<Destinations
      />,<Footer/>] } />
      <Route path="/contactus" element={[<Navbar/>,<ContactUs/>,<Footer/>] } />
      
    </Routes>
  
  );
}

export default App;
