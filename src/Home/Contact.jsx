import React from 'react';
import img from "../Assets/contact.jpg";

export default function Contact() {
  return (
   

      <div className="relative h-[350px] bg-fixed bg-cover bg-center z-0" style={{ backgroundImage: `url(${img})` }}>

        <div className='bg-indigo-950 opacity-75 h-[350px]'>

          <div className="relative z-10 p-10 m-4 w-auto text-center   bg-opacity-100  mx-auto bg-transparent ">
            <h1 className="text-3xl font-bold mb-2 text-white">We are passionate about our work &</h1>
            <h2 className="text-xl font-semibold mb-4 text-[##25BAA9]">make growth of your business</h2>
            <h1 className="text-lg mb-4">8870345676</h1>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              Contact Us
            </button>
          </div>
        </div>
      </div>
   
  );
}
