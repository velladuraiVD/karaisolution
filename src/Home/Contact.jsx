import React from 'react'
import img from "../Assets/1 (1).jpg"
export default function Contact() {
  return (
    <div className='h-full w-full  relative -z-20 ' >
         <img src={img}   alt="" />
       
        <div className='h-full w-full bg-transperant text-black text-center bg-transparent'>
        <h1 >We are passionate about our work &</h1>
        <h2>make growth of your business</h2>
            <h1>8870345676</h1>
            <vr/>
            <button>Contact US</button>
        </div>
      
    </div>
  )
}
