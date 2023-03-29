import React, {useState} from "react";
import "./booking.css" 

const Booking = ()=> {
  
    return(
        <form id="formCard" className="card" >
          <h2>Book Your Destination</h2>
          {/* <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              name="name"
            />
          </div> */}
          <div className="mb-3">
            <label className="form-label">Phone No</label>
            <input
              className="form-control"
              name="phone no"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Capacity</label>
            <input
              className="form-control"
              name="capacity"
            />
          </div>
          <div className="mb-3">
            <label className="form-label"> Date</label>
            <input
              className="form-control"
              name="date"
            />
          </div>
          <button
            type="submit"
            className="btn btn-dark btn-sm m-4">
            Book
          </button>
        </form>
    );
  } 
       
export default Booking