import React from 'react'
import { SocialIcon } from 'react-social-icons'


export default function ContactCard() {
    return (
        <div className='bg-black flex flex-col items-center  md:flex-row justify-between px-7   '>
            <div className= 'flex flex-col justify-center items-center md:flex-row  '>
                <div className='flex items-center'>
                    <SocialIcon bgColor='black' fgColor='white' style={{height:"45px"}} url="www.whatsapp.com" />
                    <p className='text-white text-xl hover:text-[#469173] transition-all ease-in duration-300 cursor-pointer'>+918475845739</p>
                </div>
                <vr className=' hidden md:block w-[0.3px] h-5 bg-white mx-5' />
                <div className=' flex  md:flex-row items-center'>
                <SocialIcon bgColor= "black" fgColor='white' style={{height:"45px"}} url="www.email.com" />
                    <p className='text-white text-xl  hover:text-[#469173] transition-all ease-in duration-300 cursor-pointer'>Name@gmail.com</p>
                </div>
            </div>

            <div className=' hidden md:flex' >
                <SocialIcon bgColor='black' fgColor='white' url="www.facebook.com" />
                <SocialIcon bgColor='black' fgColor='white' url="www.twitter.com" />
                <SocialIcon bgColor='black' fgColor='white' url="www.linkedin.com" />
                <SocialIcon bgColor='black' fgColor='white' url="www.instagram.com" />
            </div>
        </div>
    )
}
