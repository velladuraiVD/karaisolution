import React from 'react'
import logo from "./Assets/karaAi logo2.png"

export default function NavBar() {
    return (
        <div className='bg-black flex justify-around items-center'>
            <div>
                <img src={logo} alt="img" className='h-[65px] mt-3 hover:text-gray-950' />
            </div>
            <div >
                <form >
                    <ul className='flex gap-7 '>
                        <li className='text-xl hover:text-red-600'>Home</li>
                        <li className='text-xl hover:text-red-600'>About Us</li>
                        <li className='text-xl hover:text-red-600'>Cloud Apllications</li>
                        <li className='text-xl hover:text-red-600'>Service & Support</li>
                        <li className='text-xl hover:text-red-600'>Industries</li>
                        <li className='text-xl hover:text-red-600'>Contact Us</li>
                    </ul>
                </form>
            </div>
        </div>
    )
}
