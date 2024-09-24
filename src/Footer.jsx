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
                    <h3><a href="/">Home</a></h3>
                    <h3> <a href='/company'>  Company Overview </a></h3>
                    <h3><a href="/vision">Company Vision and Mission</a></h3>
                    <h3><a href="/careers">Company Careers</a></h3>
                    <h3><a href="/contact">Contact Us</a></h3>
                </div>

                <div className='leading-10 p-7' >
                    <h1 className='text-2xl mb-4 text-white'>Cloud Applications</h1>
                    <h3><a href="/resource">Enterprise Resource Planning (ERP)</a></h3>
                    <h3><a href="/performance">Enterprise Performance Management (EPM)</a></h3>
                    <h3><a href="/supply">Supply Chain & Manufacturing (SCM)</a></h3>
                    <h3><a href="/human">Human Capital Management (HCM)</a></h3>
                    <h3><a href="/advertise">Advertising and Customer Experience (CX)</a></h3>
                </div>

                <div className='leading-10 p-7'>
                    <h1 className='text-2xl mb-4 text-white'>Service & Support</h1>
                    <h3><a href="/cloudservice">Cloud Service</a></h3>
                    <h3><a href="/cms">Content Management System (CMS)</a></h3>
                    <h3><a href="/devops">DevOps</a></h3>
                    <h3><a href="/ecommerce">E - Commerce</a></h3>
                    <h3><a href="/industry">Industry Solutions</a></h3>
                    <h3><a href="/internet">Internet of Things (IoT)</a></h3>
                    <h3><a href="/IT">IT Infrastructure & Security</a></h3>
                    <h3><a href="/marketing">Marketing Automation</a></h3>
                </div>
            </div>
            <div className='bg-black text-center p-5 mx-2  '>
                <p>© Copyright 2021Supreme Supreme Soft Tech Solutions Co Ltd . All right reserved.</p>
            </div>
        </div>
    )
}
