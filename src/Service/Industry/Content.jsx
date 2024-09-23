import React from 'react'
import { LuPhone } from "react-icons/lu";
import { TbBrandTelegram } from "react-icons/tb";


export default function Content() {
    return (
        <div id='company' >

            <div className='lg:flex m-7 gap-3 justify-evenly '>
                <div className='mt-24 lg:mx-28  flex-row  w-1vw'>
                    <div className='flex flex-col gap-2'>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/cloudservice"> <button >Cloud Service</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/devops"> <button >DevOps</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/cms">  <button >Content Management system(CMS)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button>E-Commerce</button></a>
                        <a className='border-2  border-black bg-black text-sm font-semibold text-white p-4 lg:w-72 ' href="/industry"> <button >Industry Solutions</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/internet"> <button >Internet Of Things(IOT)</button></a>
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
                    <div className='mt-8'>
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>Industry Solutions</h1>

                        <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>Get options that meet your industry's unique wants - no be counted the dimension of your organization. We sketch data-driven digital transformation outcomes with our market-leading employer cloud facts administration options tailor-made for your industry. Every commercial enterprise these days is in the software program business-and these who are sluggish to embody alternate will be left behind. We've helped entire industries embody digital transformation to get apps to market quicker and supply the very great client experiences.</p>

                    </div>
                    
                    <div className=''>
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>DISCOVER THE BEST ONE FOR YOU.</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-9 '>

                            <div>
                                <h1 className='text-xl font-semibold tracking-wider mb-4 '>Financial services</h1>
                                <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>We assist businesses in financial services to build trust with their customers by employing data and technology to deliver consistent and relevant experiences across channels</p>
                            </div>

                            <div>
                                <h1 className='text-xl font-semibold tracking-wider mb-4 '>Gaming</h1>
                                <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>Develop better games faster, launch and scale on a global infrastructure and engage new audiences to unscrew additional revenue possibilities.</p>
                            </div>

                            <div>
                                <h1 className='text-xl font-semibold tracking-wider mb-4 '>Government</h1>
                                <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>As the world becomes more digital, citizens expect to have engaging interactions on every device. We aid you to build great content faster and deliver it across every channel - all while conserving your data secure.</p>
                            </div>

                            <div>
                                <h1 className='text-xl font-semibold tracking-wider mb-4 '>Health Care</h1>
                                <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>We work with healthcare organizations to accomplish digital transformation initiatives that continuously deliver secure, customer-centric services and healthier lives.</p>
                            </div>

                            <div>
                                <h1 className='text-xl font-semibold tracking-wider mb-4 '>Manufacturing</h1>
                                <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>Gain actionable insights and respond quickly to customer feedback and market trends. At SUPREME, we help manufacturers balance lean and fast with product innovation and customer engagement.</p>
                            </div>

                            <div>
                                <h1 className='text-xl font-semibold tracking-wider mb-4 '>Retail</h1>
                                <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>We help retailers build secure, open platforms to engage customers across channels and transform supply chains.</p>
                            </div>

                            <div>
                                <h1 className='text-xl font-semibold tracking-wider mb-4 '>Energy</h1>
                                <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>From highly-instrumented wells to the propagation of smart grid technologies, data is becoming a significant element in the discovery, extraction, and delivery of energy - whether it is oil, natural gas, or even wind and solar.</p>
                            </div>

                           
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}
