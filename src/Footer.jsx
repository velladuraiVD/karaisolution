import React from 'react'
import img from './Assets/newlogo.png'

export default function Footer() {
    return (
        <div className=' bg-[#000000ef]'>
            <div id='footer' className='sm:flex w-full gap-0 pt-16 flex-wrap'>
                <div className='ml-4'>
                    <div>
                        <div className='flex justify-center items-center gap-3 mt-3 flex-wrap '>
                            <img src={img} className='h-[50px] mt-3' alt="" />
                            <div className='flex-row justify-center  xl:flex-col '>
                                <h1 className='text-2xl font-bold text-white'>Kar Ai Solutions </h1>
                                <h1 className=' md:block text-2xl font-bold text-white' >Private Limited (PVT LTD)</h1>
                            </div>
                        </div>
                    </div>

                    <h3 className='mt-24 text-xl p-4'>Name@gmail.com</h3>
                    <h3 className='px-4 text-xl'>8870567568</h3>
                </div>

                <div className='leading-10 p-6'>
                    <h1 className='text-2xl mb-4 text-white '>Quick Links</h1>
                    <h3>Home</h3>
                    <h3> <a href='/company
                    '>  Company Overview </a></h3>
                    <h3>Company Vision and</h3>
                    <h3>Mission</h3>
                    <h3>Company Careers</h3>
                    <h3>Contact Us</h3>
                </div>

                <div className='leading-10 p-7' >
                    <h1 className='text-2xl mb-4 text-white'>Cloud Applications</h1>
                    <h3>Enterprise Resource Planning (ERP)</h3>
                    <h3>Enterprise Performance Management (EPM)</h3>
                    <h3>Supply Chain & Manufacturing (SCM)</h3>
                    <h3>Human Capital Management (HCM)</h3>
                    <h3>Advertising and Customer Experience (CX)</h3>
                </div>

                <div className='leading-10 p-7'>
                    <h1 className='text-2xl mb-4 text-white'>Service & Support</h1>
                    <h3>Cloud Service</h3>
                    <h3>Content Management System (CMS)</h3>
                    <h3>DevOps</h3>
                    <h3>E - Commerce</h3>
                    <h3>Industry Solutions</h3>
                    <h3>Internet of Things (IoT)</h3>
                    <h3>IT Infrastructure & Security</h3>
                    <h3>Marketing Automation</h3>
                </div>
            </div>
            <div className='bg-black text-center p-5 mx-2  '>
                <p>© Copyright 2021Supreme Supreme Soft Tech Solutions Co Ltd . All right reserved.</p>
            </div>
        </div>
    )
}
