import React from "react";
function Section (){
    return(
 <div className='hero'>
   <div className="relative flex justify-center items-center ">
  <video className="w-full h-70" autoPlay loop muted controls={false}>
    <source src="video1.mp4" type="video/mp4" />
  </video>
  <div className="justify-center">
  <h2 className="absolute top-20 left-0 w-full text-center text-black font-bold text-6xl z-10 mt-20">
    Welcome to Epic Tours
  </h2>
  <p className="absolute top-32 left-0 w-full text-center text-black text-4xl font-sans mt-40">
    Touring all destinations to your<br />pleasing and wish.
  </p>
  <a href="#" className="absolute top-48 left-1/2 transform -translate-x-1/2 bg-white px-8 py-4 rounded-full text-black text-4xl font-bold hover:bg-purple-500 hover:text-white transition duration-200 mt-60">
    Get Started
  </a>
  </div>
</div>


      <div className='popular-destinations mt-16 mb-20'>
      <h4 className='mb-8 font-bold text-4xl text-left'>Popular Destinations</h4>
        <div className='grid grid-cols-6 gap-4'>
        <div className='bg-white rounded-lg overflow-hidden shadow-md h-96 '>
      <img
        src='amboseli.jpg'
        alt=''
        className='w-full object-cover'
        style={{ aspectRatio: '16/9' }}
      />
    <div className='p-4 bg-white'>
      <h5 className='font-bold text-xl mb-8'>Amboseli National Park</h5>
    <div className="mt-4">
       <a href='/destinations' className='inline-block bg-gray-800 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-md'>
      View
       </a>
    </div>
    </div>

    </div>

    {/* Card 2 */}
    <div className='bg-white rounded-lg overflow-hidden shadow-md'>
      <img
        src='diani.jpg'
        alt=''
        className='w-full object-cover'
        style={{ aspectRatio: '16/9' }}
      />
      <div className='p-4'>
        <h5 className='font-bold text-xl mb-8'>Diani Beach</h5>
        <div className="mt-4">
       <a href='/destinations' className='inline-block bg-gray-800 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-md'>
      View
       </a>
    </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className='bg-white rounded-lg overflow-hidden shadow-md'>
      <img
        src='lakenakuru.jpg'
        alt=''
        className='w-full object-cover'
        style={{ aspectRatio: '16/9' }}
      />
      <div className='p-4'>
        <h5 className='font-bold text-xl mb-8'>
          Lake Nakuru National Park
        </h5>
        <div className="mt-4">
       <a href='/destinations' className='inline-block bg-gray-800 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-md'>
      View
       </a>
    </div>
      </div>
    </div>

  
    {/* Card 6 */}
    <div className='bg-white rounded-lg overflow-hidden shadow-md'>
      <img
        src='tsavo.jpg'
        alt=''
        className='w-full object-cover'
        style={{ aspectRatio: '16/9' }}
      />
      <div className='p-4'>
        <h5 className='font-bold text-xl mb-8'>Tsavo National Park</h5>
        <div className="mt-4">
       <a href='/destinations' className='inline-block bg-gray-800 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-md'>
      View
       </a>
    </div>
      </div>
    </div>
  </div>
</div>
 </div>
       
   
    )
}
export default Section;