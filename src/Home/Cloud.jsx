import React from 'react'
import img from '../Assets/aboutus1.png'

export default function Cloud() {
  return (
    <div className='flex justify-around flex-wrap '>
      <div className='sm:w-auto md:w-[600px] '>
        <h1 className='text-4xl font-bold m-5'>Cloud Services for your business</h1>
        <hr className='h-1 w-16 bg-yellow-400 m-5' />
        <p className='m-5 leading-8 text-lg text-gray-600 font-semibold '> Our Cloud Platform Services is an open business platform designed to help you innovate, integrate and enlarge applications with agility, flexibility and choice for transformation to Cloud with standardized tools, technologies and processes. It helps business to grow fast, to set the smooth connections among all systems and automate processes across the enterprise.</p>
        <button className='m-5 border-2 rounded-full px-9 py-2 border-red-600 text-red-600 font-bold text-xl hover:bg-red-600 hover:text-white'>Know more</button>
      </div>


      <div className=' pl-4 mb-5'>
        <img src={img} className='h-[500px] w-[600px]' alt="" />
      </div>
    </div>
  )
}
