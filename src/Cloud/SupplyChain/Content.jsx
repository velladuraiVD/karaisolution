import React from 'react'
import { LuPhone } from "react-icons/lu";
import { TbBrandTelegram } from "react-icons/tb";
import img from '../../Assets/supply2.jpg'

export default function Content() {
    return (

        <div  >

            <div className='lg:flex m-7 gap-3 justify-evenly '>
                <div className='mt-24 lg:mx-28  flex-row  w-1vw'>
                    <div className='flex flex-col gap-2'>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/resource"> <button >Enterprise Resource planning (ERP)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/performance"> <button >Enterprise Performance Management (EPM)</button></a>
                        <a className='border-2  border-black bg-black text-sm font-semibold text-white p-4 lg:w-72 ' href="/supply">  <button >Supply Chain & Manufacturing (SCM)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/human"> <button>Human Capital Management (HCM)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/advertise"> <button >Advertising and Customer Experience (CX)</button></a>

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
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>Supply Chain & Manufacturing (SCM)</h1>

                        <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>Having vast industrial knowledge of domain, we are offering a SCM Solution. This Solution is also known as Supply Chain Management. To focus on the internet related technology as well as to provide best ROSMS solutions. We are committed to provide some of the most customized solutions to our clients in order to meet their satisfaction. Moreover, this service is known for their efficient performance and reliability.
                        </p>
                      
                    </div>

                    <div className=' md:flex justify-evenly items-center mt-16 gap-3 '>
                        <div className=''>
                            <img src={img} alt="" className='h-72' />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold tracking-wider mb-4 '>Core Features</h1>
                           <ul>
                            <li><span className='text-yellow-600'>&#10004;</span>User friendly platform</li>
                            <li><span className='text-yellow-600'>&#10004;</span>Excellent performance</li>
                            <li><span className='text-yellow-600'>&#10004;</span>Cost estimated</li>
                           </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>



    )
}
