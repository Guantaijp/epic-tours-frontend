import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    phone : "",
    capacity: "",
    date: "",
  });
 

  function handleSubmit(e) {
    e.preventDefault();

    const { phone, capacity, date,} = formData;
    if (!phone || !capacity || !date) {
      alert("Please fill out all fields.");
      return;
    }
  }

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  const isFormValid =
    formData.phone && formData.capacity && formData.date;

  return (
    <div id="form">
      <form id="formCard" className="card" onSubmit={handleSubmit}>
        <h2>Book Your Destination</h2>
        <div className="mb-3">
          <label className="form-label">Phone No</label>
          <input
            onChange={handleChange}
            className="form-control"
            name="phone No"
            placeholder="Type Here..."
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Capacity</label>
          <input
            onChange={handleChange}
            className="form-control"
            name="capacity"
            placeholder="Type Here..."
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            onChange={handleChange}
            className="form-control"
            name="date"
            placeholder="Type Here.."
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-light btn-sm m-4"
          disabled={!isFormValid}
        >
        Book
        </button>
      </form>
    </div>
  );
}

export default Booking;