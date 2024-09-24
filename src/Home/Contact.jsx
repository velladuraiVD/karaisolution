import React from 'react';
import img from "../Assets/contact.jpg";

export default function Contact() {
  return (
   

      <div className="relative h-[650px] md:h-[350px] bg-fixed bg-cover bg-center z-0" style={{ backgroundImage: `url(${img})` }}>

        <div className='bg-[#000000ee] opacity-85 h-[650px] md:h-[350px] '>

          <div className="relative z-10 p-10 m-4 w-auto text-center   bg-opacity-100  mx-auto bg-transparent ">
            <h1 className="text-5xl font-bold mb-2 text-white">We are passionate about our work &</h1>
            <h2 className="text-4xl font-thin mb-4 my-7 text-[#28ffad] tracking-wider">make growth of your business</h2>
            <div className='flex justify-center items-center flex-wrap gap-10 my-11'>
            <h1 className="text-3xl  text-yellow-600">+91 8870345676</h1>
            <vr className="h-[50px] w-[2px] bg-white"/>
            <a href="/contact"> <button className="bg-red-700 text-white py-2 px-4 rounded-full w-40 hover:bg-transparent border-2 border-red-700">
              Contact Us
            </button></a>
            </div>
          </div>
        </div>
      </div>
   
  );
}
