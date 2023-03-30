import React from "react";
import { Link } from "react-router-dom";


function DestinationCard({sortedDestination}){

    return (
    <div className="flex flex-wrap justify-center">

{sortedDestination.map((destination,index) => (
<div key={index} className= "card m-2 bg-white">
<div className="w-full rounded-lg shadow-md lg:max-w-sm">
    <img className="object-cover w-full h-48" src= {destination.image} alt="image"/>
    <div className="p-4">
        {/* destination price, description */}
       <p className="text-lg font-medium text-black-600"> Destination: {destination.location} </p>
        <p className="text-sm text-gray-900"> Price : {destination.price}</p>
        <p className="text-sm text-gray-900"> Description: {destination.destination}</p>
        <div className="text-center ">
        <Link to="/booking">
        <button className="px-4 py-2 text-sm text-black bg-gray-300 rounded-full mt-3
         shadow-md hover:bg-gray-100">
            Book Now
        </button>
        </Link>
        </div>
    </div>
</div>
        </div>
    ))
}

</div>
    )


}
export default DestinationCard
