import React from 'react'
import { LuPhone } from "react-icons/lu";
import { TbBrandTelegram } from "react-icons/tb";
import img from '../../Assets/iot2.jpg'

export default function Content() {
    return (
        <div id='company' >

            <div className='lg:flex m-7 gap-3 justify-evenly '>
                <div className='mt-24 lg:mx-28  flex-row  w-1vw'>
                    <div className='flex flex-col gap-2'>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/cloudservice"> <button >Cloud Service</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/devops"> <button >DevOps</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/cms">  <button >Content Management system(CMS)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/ecommerce"> <button>E-Commerce</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/industry"> <button >Industry Solutions</button></a>
                        <a className='border-2  border-black bg-black text-sm font-semibold text-white p-4 lg:w-72 ' href="/internet"> <button >Internet Of Things(IOT)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/IT"> <button >IT Infrastructure & Security</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/marketing"> <button >Marketing Automation</button></a>

                    </div>
                    <div className='mt-8  '>
                        <h1 className='text-lg font-bold'> GET IN TOUCH <hr className='w-8 h-1 bg-yellow-400' /></h1>
                        <div className='flex justify-start gap-3 items-center mt-5'>
                            <div>
                                <LuPhone />
                            </div>
                            <div>
                                <h1 className='text-sm font-semibold'>phone:</h1>
                                <h1 className='text-sm font-semibold'>+91 8870373698</h1>
                            </div>
                        </div>
                        <hr className='h-[2px] w-40 bg-slate-300 my-5' />
                        <div className='flex justify-start gap-3 items-center mt-5'>
                            <div>
                                <TbBrandTelegram />
                            </div>
                            <div>
                                <h1 className='text-sm font-semibold'>Email:</h1>
                                <h1 className='text-sm font-semibold'>Name@gmail.com</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-24 w-1vw'>
                    <div className=''>
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>Internet of Things (IoT)</h1>

                        <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>As a sturdy solution for enlarging the automation across all the versatile domains, The Internet of things is an incredible vision for executing the activities right away without any effort. Internet of Things (IoT) is a system of interconnected devices that can send data over the internet or receive and process it or do both. We develop IoT based solutions for startups, brands & innovative businesses to enable them with information on the tap and provide IoT application outsourcing services, IoT application development services, and IoT software development services.</p>

                    </div>

                    <div className=' md:flex justify-evenly items-center gap-4'>
                        <div className=''>
                            <img src={img} alt="" className='' />
                        </div>
                        <div className='w-[60%] '>
                            <h1 className='text-xl font-bold tracking-wider mb-4 '>SERVICES WE OFFER</h1>
                            <ul className='leading-7'>
                                <li><span className='text-yellow-600'>&#10004;</span>  Voice-Enabled Technology Solutions</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  IoT Gateway Development</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Connectivity with wearable devices</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Backend and API Development of IoT devices</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  IoT Implementation & Support</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  IoT Cloud Platform</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  IoT Maintenance Services</li>
                            </ul>

                        </div>
                    </div>

                    <div className='flex justify-around mt-12'>
                        <div>
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>WHY SUPREME FOR IOT APPS?</h1>
                            <ul className='leading-8'>
                                <li><span className='text-yellow-600'>&#10004;</span>  Data Analytics</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Connectivity</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Supported Protocols</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Cloud Platforms</li>
                            </ul>
                        </div>

                        
                        <div>
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>INDUSTRY WE SERVE</h1>
                        <ul className='leading-8'>
                            <li><span className='text-yellow-600'>&#10004;</span>  Education</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  Healthcare</li>
                            <li> <span className='text-yellow-600'>&#10004;</span>  Sports</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  Retail</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  Transport</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  Smart Homes</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  Smart Buildings</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  Automotives</li>
                        </ul>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}
