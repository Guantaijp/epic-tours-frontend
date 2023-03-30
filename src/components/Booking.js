import React, { useState } from "react";
import { useParams } from "react-router-dom";


const Booking = ({destination}) => {

  const [phone, setPhone] = useState('');
  const [capacity, setCapacity] = useState('');
  const [date, setDate] = useState('');

  const {id}=useParams()
 
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  };

  const handleDatehange = (event) => {
    setDate(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
   
    const book= {
      phone: phone,
      capacity: capacity,
      date: date,
      destnation_id: destination.id
    }
    fetch("https://epic-hcpr.onrender.com/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book)
      })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            }
            )
         

    };
  

  return (
    <div id="form">
      <form id="formCard" className="card" onSubmit={handleSubmit}>
        <h2>Book Your Destination</h2>
        <div className="mb-3">
          <label className="form-label">Phone No</label>
          <input
            onChange={handlePhoneChange}
            className="form-control"
            name="phone"
            placeholder="Type Here..."
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Capacity</label>
          <input
            onChange={handleCapacityChange}
            className="form-control"
            name="capacity"
            placeholder="Type Here..."
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            onChange={handleDatehange}
            className="form-control"
            name="date"
            placeholder="Type Here.."
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-sm m-4"
        >
        Book
        </button>
      </form>
    </div>
  );
}

export default Booking;