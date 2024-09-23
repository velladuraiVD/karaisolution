import React from 'react'
import { LuPhone } from "react-icons/lu";
import { TbBrandTelegram } from "react-icons/tb";
import img from '../../Assets/devops2.jpg'

export default function Content() {
    return (
        <div id='company' >

        <div className='lg:flex m-7 gap-3 justify-evenly '>
            <div className='mt-24 lg:mx-28  flex-row  w-1vw'>
                <div className='flex flex-col gap-2'>
                    <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/cloudservice"> <button >Cloud Service</button></a>
                    <a className='border-2  border-black bg-black text-sm font-semibold text-white p-4 lg:w-72 ' href="/devops"> <button >DevOps</button></a>
                    <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/cms">  <button >Content Management system(CMS)</button></a>
                    <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/ecommerce"> <button>E-Commerce</button></a>
                    <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/industry"> <button >Industry Solutions</button></a>
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
                <div className=''>
                    <h1 className='text-xl font-bold tracking-wider mb-4 '>DevOps</h1>

                    <p className='mt-4 text-sm font-medium  leading-6 mb-7 '> In easy words, DevOps is an assortment of practices that automates the tactics between software program development and IT teams, so that they can build, test, and launch software faster and greater reliably. DevOps offerings guide the enterprise to get to the bottom of the regular disconnect between improvement and operations bringing them collectively to develop at a quicker rate. It drastically lessens the charges associated with root motive evaluation and helps the agencies to supply exceptional software program placidly and continuously, barring having to go at the back of to get the issues. Our DevOps crew consists of pro gurus who hold up to date with contemporary practices and the excellent equipment on the market to furnish you with the most environment friendly cloud utility improvement services.</p>
                   
                </div>

                <div className=' md:flex justify-evenly items-center gap-4'>
                    <div className=''>
                        <img src={img} alt="" className='' />
                    </div>
                    <div className='w-[60%]'>
                         <h1 className='text-xl font-bold tracking-wider mb-4 '>DEVOPS BENEFITS</h1>
                         <ul className=''>
                            <li><span className='text-yellow-600'>&#10004;</span>  Increased deployment frequency.</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  Less complexity to manage</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  Faster determination of problems</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  More enhanced overall stability</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  Continuous software delivery</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  Healthy and clear communication</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  Maximized predictability, efficiency, security and sustainability of operational processes.</li>
                         </ul>
                        
                    </div>
                </div>

                <div className='mt-16'>
                <h1 className='text-xl font-bold tracking-wider mb-4 '>DEVOPS OFFERINGS</h1>

                    <ul className='mt-4 text-sm font-medium leading-8 '>
                        <li><span className='text-yellow-600'>&#10004;</span>  Configuration Management</li>
                        <li><span className='text-yellow-600'>&#10004;</span>  Continuous Delivery</li>
                        <li><span className='text-yellow-600'>&#10004;</span>  Constant Integration</li>
                        <li><span className='text-yellow-600'>&#10004;</span>  Monitoring & Logging</li>
                        
                        
                    </ul>
                </div>

                

            </div>
        </div>
    </div>
    )
}
