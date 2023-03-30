import React, { useState } from "react";
// import { useParams } from "react-router-dom";

const Booking = ({ destinations }) => {
  const [phone, setPhone] = useState("");
  const [capacity, setCapacity] = useState("");
  const [date, setDate] = useState("");

  // const { id } = useParams();

  // const destination = destinations.find((dess) => dess.id === id);

  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;

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

    const book = {
      phone: phone,
      capacity: capacity,
      date: date,
      destnation_id: destinations.id,
    };
    fetch(`https://epic-hcpr.onrender.com/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    console.log(destinations);
  };

  return (
    <div className="m-10 text-center bg-gray-200 ">
      {isLoggedIn ? (
        <>
          <div className="text-center  ml-20 py-10 min-h-screen">
            <p> The destination {destinations.name}</p>
            <form className="  border-2" onSubmit={handleSubmit}>
              <h2 className="text-center text-2xl pb-3">
                Book Your Destination{" "}
              </h2>
              <div className="mb-3">
                <div className=" ">
                  <label className="form-label">Phone No</label>
                  <input
                    onChange={handlePhoneChange}
                    className="form-control m-2"
                    name="phone"
                    placeholder="Type Here..."
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Capacity</label>
                <input
                  onChange={handleCapacityChange}
                  className="form-control m-2"
                  name="capacity"
                  placeholder="Type Here..."
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Date</label>
                <input
                  onChange={handleDatehange}
                  className="form-control m-2"
                  name="date"
                  type="date"
                  placeholder="Type Here.."
                />
              </div>
              <button
                type="submit"
                className=" items-center rounded-md bg-black text-white p-2 btn btn-primary btn-sm m-4"
              >
                Book
              </button>
            </form>
          </div>
        </>
      ) : (
        <p className="bg-white min-h-screen">You must log in first to access this page.</p>
      )}
    </div>
  );
};

export default Booking;
