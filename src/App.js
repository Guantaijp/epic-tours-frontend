import React,{useState, useEffect} from 'react';
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

  const [destination , setDestination] = useState([]);
  const [search , setSearch] = useState("");
  const [filterDestination , setFilterDestination] = useState("");

  useEffect(() => {
    fetch("https://epic-hcpr.onrender.com?q=" + search )
    .then(res => res.json())
    .then(data => setDestination(data))
     
    
  }, [search])

  const category = destination.filter((des) => {
    if (filterDestination === "") {
      return true;
    } else if (des.category === filterDestination) {
      return destination.location === filterDestination;
    }
  });

  // const category = rentals.filter((rental) => {
  //   if (filteredRentals === "all") {
  //     return true;
  //   } else {
  //     return rental.size === filteredRentals;
  //   }
  // });

  const sortedDestination = [...category].sort((a, b) =>
    a.price > b.price ? 1 : -1
  );


  return (
    <Routes>
      <Route path="/" element={[<Navbar/>,<Section/>,<Footer/>] } />
      <Route path="/about" element={[<Navbar/>,<About/>,<Footer/>] } />
      <Route path="/login" element={<Login/>} />
      <Route path="/booking" element={[<Navbar/>,<Booking/>,<Footer/>] } />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/destinations" element={[<Navbar/>,<Destinations
      destination={destination} category={category} search={search} setSearch={setSearch} 
      filterDestination={filterDestination} setFilterDestination={setFilterDestination}
      sortedDestination={sortedDestination}
      />,<Footer/>] } />
      <Route path="/contactus" element={[<Navbar/>,<ContactUs/>,<Footer/>] } />
      
    </Routes>
  
  );
}

export default App;
  //  {/* <Navbar />
  //     <Section />
  //     <About />
  //     <Login />
  //     <SignUp />
  //     <Destinations />
  //     <ContactUs />
  //     <Footer /> */}