
import React from 'react'
import img from '../../Assets/hrm1.jpg'


import { IoIosArrowForward } from "react-icons/io";

export default function Hero() {
  return (
    <div className=''>
    <div style={{ backgroundImage: `url(${img})`, }} className='h-[230px] md:h-[200px] bg-cover bg-center '  >
    <div className='bg-[#0000007e] h-[230px] md:h-[200px] w-full flex items-center justify-center flex-wrap'>
        <div className='flex flex-col items-center  '>
          <h1 className='text-5xl font-semibold my-4 text-white'> Human Capital Management (HCM)</h1>

          <div className='flex items-center mx-5 '>
            <h1 className='text-yellow-500 text-xs font-medium  '><a href="/">Home</a></h1>
            <IoIosArrowForward className='text-white' />
            <h1 className='text-xs font-medium text-white'>Cloud Applications</h1>
            <IoIosArrowForward  className='text-white'/>
            <h1  className='text-xs font-medium text-white'>Human Capital Management (HCM)</h1>

            </div>
        </div>
      </div>

    </div>
  </div>
  )
}