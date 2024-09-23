import React from 'react'
import { LuPhone } from "react-icons/lu";
import { TbBrandTelegram } from "react-icons/tb";
import img from '../../Assets/mar2.jpg'

export default function Content() {
    return (
        <div id='company' >

            <div className='lg:flex m-7 gap-3 justify-evenly '>
                <div className='mt-24 lg:mx-28  flex-row  w-1vw'>
                    <div className='flex flex-col gap-2'>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/careers"> <button >Cloud Service</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button >DevOps</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/vision">  <button >Content Management system(CMS)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button>E-Commerce</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button >Industry Solutions</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700'href="/company"> <button >Internet Of Things(IOT)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button >IT Infrastructure & Security</button></a>
                        <a className='border-2  border-black bg-black text-sm font-semibold text-white p-4 lg:w-72 ' href="/company"> <button >Marketing Automation</button></a>

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
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>Marketing Automation</h1>

                        <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>Marketing automation in easy phrases can be interpreted as the use of software program structures and extra data science equipment to efficaciously market merchandise and offerings over a range of on line channels. It proffers you statistics to make every verbal exchange private and deployment device to attain potentialities in each and every foremost channel at each and every step of the client journey. The advertising automation equipment can work as a standalone gadget or combine with Customer Relationship Management (CRM) system. Regardless, the primary facets and offerings are,</p>

                    </div>

                    <div className=' md:flex justify-evenly items-center gap-4'>
                        <div className=''>
                            <img src={img} alt="" className='' />
                        </div>
                        <div className='w-[60%] '>
                            <h1 className='text-xl font-bold tracking-wider mb-4 '>FEATURES INVOLVED</h1>
                            <ul className='leading-9'>
                                <li><span className='text-yellow-600'>&#10004;</span> Email marketing</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Lead Nurturing</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Social media</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Analytics and reporting</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  SEO compatibility</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Paid media, and digital advertising</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Data Clean Up</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Social Marketing</li>
                                
                            </ul>

                        </div>
                    </div>

                    





                </div>
            </div>
        </div>
    )
}
