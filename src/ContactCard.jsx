import React from 'react'
import { SocialIcon } from 'react-social-icons'


export default function ContactCard() {
    return (
        <div className='bg-red-600 flex flex-col items-center  md:flex-row justify-between px-7'>
            <div className= 'flex flex-col justify-center items-center md:flex-row  '>
                <div className='flex items-center'>
                    <SocialIcon bgColor='#DC2626' fgColor='white' style={{height:"45px"}} url="www.whatsapp.com" />
                    <p className='text-white text-xl hover:text-[#2b4258] cursor-pointer'>+918475845739</p>
                </div>
                <vr className=' hidden md:block w-[0.3px] h-5 bg-white mx-5' />
                <div className=' flex  md:flex-row items-center'>
                <SocialIcon bgColor= "#DC2626" fgColor='white' style={{height:"45px"}} url="www.email.com" />
                    <p className='text-white text-xl hover:text-[#2b4258]'>Name@gmail.com</p>
                </div>
            </div>

            <div className=' hidden md:flex' >
                <SocialIcon bgColor='#DC2626' fgColor='white' url="www.facebook.com" />
                <SocialIcon bgColor='#DC2626' fgColor='white' url="www.twitter.com" />
                <SocialIcon bgColor='#DC2626' fgColor='white' url="www.linkedin.com" />
                <SocialIcon bgColor='#DC2626' fgColor='white' url="www.instagram.com" />
            </div>
        </div>
    )
}
