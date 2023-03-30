
import React, { useState, useEffect } from "react";
import DestinationCard from "./DestinationCard.jsx";

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    fetch("https://epic-hcpr.onrender.com")
      .then(response => response.json())
      .then(data => {
        setDestinations(data);
        setFilteredDestinations(data);
      })
      .catch(error => console.error(error));
  }, []);


  const handleSearch = event => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = destinations.filter(destination => destination.location.toLowerCase().includes(query));
    setFilteredDestinations(filtered);
  };

        <div className=" items-center justify-center w-full h-full ">
            <h1 className="text-3xl font-semibold text-center text-black-600">Destinations</h1>
                
                <DestinationCard sortedDestination={sortedDestination} />
            
                
             


  const handleSort = event => {
    const option = event.target.value;
    setSortOption(option);
    const sorted = [...filteredDestinations].sort((a, b) => {
      if (option === "price") {
        return a[option] - b[option];
      } else {
        return a[option].localeCompare(b[option]);
      }
    });
    setFilteredDestinations(sorted);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex items-center justify-between w-full px-10 py-5 bg-white shadow-md">
        <div className="relative">
          <input
            type="text"
            className="w-40 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-gray-400 focus:ring-0"
            placeholder="Search"
            onChange={handleSearch}
            value={searchQuery}
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <div className="relative">
          <select
            className="w-40 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-gray-400 focus:ring-0"
            onChange={handleSort}
            value={sortOption}
          >
            <option value="">Sort by</option>
            <option value="location">Location (A-Z)</option>
            <option value="price">Price (Low-High)</option>
          </select>
        </div>
      </div>

      <div className="items-center justify-center w-full h-full ">
        <h1 className="text-4xl font-bold text-center text-purple-900 mb-8">
            Escape to Your Dream Destination
        </h1>
        <div className="grid grid-cols-1 gap-3 px-28 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDestinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
        </div>
    </div>
  );
}
export default Destinations;
