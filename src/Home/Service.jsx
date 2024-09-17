import React from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import i1 from '../Assets/i1.png'
import i2 from '../Assets/i2.png'
import i3 from '../Assets/i3.png'
import i4 from '../Assets/i4.png'
import i5 from '../Assets/i5.png'
import i6 from '../Assets/i6.png'
import i7 from '../Assets/i7.png'
import i8 from '../Assets/i8.png'

export default function Service() {
    return (
        <div>
            <div className='m-10'>
                <h1 className='text-4xl font-bold mx-10 my-5'>Service We Offer</h1>
                <p className='text-xl font-semibold mx-10'>Supreme Soft Tech Info is the best counseling accomplice for startup innovation organizations</p>
                <hr className='bg-yellow-500 h-1 w-20 mx-10 mt-5' />
            </div>

            <div className='relative group'>

            <div 
                className='hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 right-24 text-2xl  p-2 bg-white border-2 border-black/60 text-black/60 cursor-pointer'>
                <BsChevronCompactLeft  size={30} />
            </div>
    
            
            <div 
                className='hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 right-5 text-2xl  p-2 bg-white border-2 border-black/60 text-black/60 cursor-pointer'>
                <BsChevronCompactRight  size={30} />
            </div>
    
             <div className='bg-black flex flex-col justify-center items-center h-[400px] w-[300px] mx-10'>
                <img src={i1} alt="" />
                <h1 className='text-white text-xl font-bold'>Cloud Service</h1>
                <p className='text-white text-center text-md leading-8'>Cloud Platform Services is an open business platform designed to help you innovate, integrate and enlarge applications</p>
                <p className='text-red-700 text-lg mt-5'><a href="">Read more</a></p>
             </div>

             <div></div>

             <div></div>

             <div></div>

             <div></div>

             <div></div>

             <div></div>

             <div></div>

            </div>
        </div>
    )
}
