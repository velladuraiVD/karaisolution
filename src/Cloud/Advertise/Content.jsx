import React from 'react'
import { LuPhone } from "react-icons/lu";
import { TbBrandTelegram } from "react-icons/tb";
import img from '../../Assets/advertiseing2.jpg'

export default function Content() {
    return (

        <div  >

            <div className='lg:flex m-7 gap-3 justify-evenly '>
                <div className='mt-24 lg:mx-28  flex-row  w-1vw'>
                    <div className='flex flex-col gap-2'>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/careers"> <button >Enterprise Resource planning (ERP)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button >Enterprise Performance Management (EPM)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700'href="/vision">  <button >Supply Chain & Manufacturing (SCM)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button>Human Capital Management (HCM)</button></a>
                        <a className='border-2  border-black bg-black text-sm font-semibold text-white p-4 lg:w-72 ' href="/company"> <button >Advertising and Customer Experience (CX)</button></a>

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
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>Advertising and Customer Experience (CX)</h1>

                        <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>Customer experience (CX) refers to how a business engages with its customers at every point of their buying journey—from marketing to sales to customer service and everywhere in between. In large part, it's the sum total of all interactions a customer has with your brand.

                        </p>
                      
                    </div>

                    <div className=' md:flex justify-evenly items-center mt-16 gap-3 '>
                        <div className='w-[100%]'>
                            <img src={img} alt="" className='h-[300px] w-[800px]'/>
                        </div>
                        <div className='w-[70%]'>
                          <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>Customer experience (CX) strategy refers to the holistic perception of the experience of customers with your brand. The great customer experience is the end result of every touchpoint a customer has with your business starting from both awareness, evaluation, and post-purchase scenarios.</p>
                          <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>Customer experience (CX) is the sum total of customers' perceptions and feelings resulting from interactions with a brand's products and services.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>



    )
}
