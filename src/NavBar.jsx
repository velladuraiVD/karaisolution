import React from 'react'
import logo from "./Assets/newlogo.png"
import { IoIosMenu } from "react-icons/io";

export default function NavBar() {
    return (
        <div className='bg-white lg:flex-row   xl:flex justify-around items-center flex-wrap sticky top-0 '>
            <div className='flex justify-center items-center gap-3 mt-3 flex-wrap' >
                <img src={logo} alt="img" className='h-[50px] mt-3 hover:text-gray-950' />
                <div className='flex-row justify-center  xl:flex-col '>
                    <h1 className='text-2xl font-bold'>Kar Ai Solutions </h1>
                    <h1 className=' md:block text-2xl font-bold' >Private Limited (PVT LTD)</h1>
                </div>
            </div>
            <div>
                <IoIosMenu className='bg-yellow-500 text-white  text-3xl block absolute right-0 top-[16%] m-3 md:hidden' />
            </div>

            <div className='hidden md:flex mt-10 mx-8 justify-center items-center flex-wrap xl:mt-0' >
                <form >
                    <ul className='flex gap-7 flex-wrap '>
                        <li className='text-xl font-semibold text-black hover:text-red-600 md:tex'>Home</li>
                        <li className='text-xl font-semibold text-black hover:text-red-600'>About Us</li>
                        <li className='text-xl font-semibold text-black hover:text-red-600'>Cloud Apllications </li>
                        <li className='text-xl font-semibold text-black hover:text-red-600'>Service & Support</li>
                        <li className='text-xl font-semibold text-black hover:text-red-600'>Industries</li>
                        <li className='text-xl font-semibold text-black hover:text-red-600'>Contact Us</li>
                    </ul>
                </form>
            </div>
            
        </div>
    )
}
