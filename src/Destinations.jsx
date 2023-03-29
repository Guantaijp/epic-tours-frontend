import React from "react";
import DestinationCard from "./DestinationCard";

function Destinations() {
    
    return (
        // create a  div for filter and search which will be on the top of the page
        // make the div not scrollable
        
        <div className="flex flex-col items-center justify-center w-full h-full ">
            {/* make it not scroll */}
         
            <div className="flex items-center justify-between w-full px-10 py-5 bg-white shadow-md">
                <div className="flex items-center justify-between w-1/2">
                    <div className="relative">
                        <input type="text" className="w-40 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-gray-400 focus:ring-0" placeholder="Search" />
                        <svg className="absolute w-5 h-5 text-gray-400 right-3 top-3" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <div className="relative">
                        <select className="w-40 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-gray-400 focus:ring-0">
                            <option>Filter</option>
                            <option>Filter 1</option>
                            <option>Filter 2</option>
                            <option>Filter 3</option>
                        </select>
                        <svg className="absolute w-5 h-5 text-gray-400 right-3 top-3" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
                <div className="flex items-center justify-between w-1/2">
                    <div className="flex items-center justify-between w-1/2">
                        <div className="relative">
                            <select className="w-40 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-gray-400 focus:ring-0">
                                <option>Sort</option>
                                <option>Sort 1</option>
                                <option>Sort 2</option>
                                <option>Sort 3</option>
                            </select>
                            <svg className="absolute w-5 h-5 text-gray-400 right-3 top-3" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-1/2">
                        <div className="relative">
                            <select className="w-40 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-gray-400 focus:ring-0">
                                <option>View</option>
                                <option>View 1</option>
                                <option>View 2</option>
                                <option>View 3</option>
                            </select>
                            <svg className="absolute w-5 h-5 text-gray-400 right-3 top-3" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        



        <div className=" items-center justify-center w-full h-full ">
            <h1 className="text-3xl font-semibold text-center text-black-600">Destinations</h1>
            <div className="grid grid-cols-1 gap-3 px-28 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
                </div>
                {/* button */}
                <div className="text-center">
                <button className="px-10 py-3 mb-5 text-lg text-white bg-black rounded-full shadow-md hover:bg-gray-900">
                    Explore All
                </button>
                </div>

            </div>
        </div>
    );
    }

export default Destinations;

