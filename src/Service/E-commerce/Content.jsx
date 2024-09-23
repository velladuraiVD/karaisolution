import React from 'react'
import { LuPhone } from "react-icons/lu";
import { TbBrandTelegram } from "react-icons/tb";
import img from '../../Assets/ecommerce2.jpg'

export default function Content() {
    return (
        <div id='company' >

        <div className='lg:flex m-7 gap-3 justify-evenly '>
            <div className='mt-24 lg:mx-28  flex-row  w-1vw'>
                <div className='flex flex-col gap-2'>
                    <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/cloudservice"> <button >Cloud Service</button></a>
                    <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/devops"> <button >DevOps</button></a>
                    <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/cms">  <button >Content Management system(CMS)</button></a>
                    <a className='border-2  border-black bg-black text-sm font-semibold text-white p-4 lg:w-72 ' href="/ecommerce"> <button>E-Commerce</button></a>
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
                    <h1 className='text-xl font-bold tracking-wider mb-4 '>E - Commerce</h1>

                    <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>E-commerce has definitely revolutionized the system of on-line purchasing and has modified the way customers buy their items and offerings online. It helps buyers, sellers, and end-users to join irrespective of their geographical presence and presents the fantastic platform to suggest your goods and offerings online. We are one of the pioneered groups providing wonderful and powerful e-commerce solutions. Our specialists create a personalized e-commerce internet site for the promoting of your brand. We make certain that your commercial enterprise can accumulate site visitors and continue them.</p>
                   
                </div>

                <div className=' md:flex justify-evenly items-center gap-4'>
                    <div className=''>
                        <img src={img} alt="" className='' />
                    </div>
                    <div className='w-[60%] '>
                         <h1 className='text-xl font-bold tracking-wider mb-4 '>WE OFFER</h1>
                         <ul className='leading-7'>
                            <li><span className='text-yellow-600'>&#10004;</span>  Custom eCommerce Web Development</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  eCommerce Shopping Cart Development</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  Payment Gateway Integration</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  eCommerce Website Design & redesign</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  Mobile commerce development</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  Custom extensions and plugins development</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  Maintenance and support</li>
                         </ul>
                        
                    </div>
                </div>

            

                

            </div>
        </div>
    </div>
    )
}
