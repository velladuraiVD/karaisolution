import React from 'react'
import img from '../Assets/appoinment.jpg'

export default function Appoinment() {
  return (

    <div style={{ backgroundImage: `url(${img})`,  }} className='sm:w-full  md:h-[500px] w-auto bg-cover overflow-hidden flex-col flex flex-wrap  '>
      <div className='bg-[#000000a6] flex justify-between items-center h-full flex-wrap '>
        <div>

        </div>
        <div className='sm:auto md:w-[700px] mt-36 sm:m-8 ml-5 '>
          <h1 className='text-4xl text-white font-bold l opacity-100 leading-snug'>Customer relations with transparent communication ...</h1>
          <p className='text-3xl text-white font-normal l opacity-100 leading-normal'>Supreme Supreme Soft Tech Solutions can help you get there</p>
          <button className='bg-red-600 border-2 border-red-600 rounded-full px-7 py-3 mt-10 mb-2 text-white font-semibold text-lg hover:bg-transparent hover:duration-500'>Get appoinment</button>
        </div>
      </div>
    </div>
  )
}
