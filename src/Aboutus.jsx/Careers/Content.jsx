import React from 'react'
import { LuPhone } from "react-icons/lu";
import { TbBrandTelegram } from "react-icons/tb";

export default function Content() {
    return (
        <div id='company' >
            
            <div className='md:flex m-7 gap-3 justify-evenly '>
                <div className='mt-24 lg:mx-28  flex-row  w-1vw'>
                    <div className='flex flex-col gap-2'>
                    <a  className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button>Company Overview</button></a>
                    <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/vision">  <button >Company Vision and mission</button></a>
                    <a className='border-2  border-black bg-black text-sm font-semibold text-white p-4 lg:w-72 ' href="/careers"> <button >Company Careers</button></a> 
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
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>COMPANY CAREERS</h1>
                        
                        <p className='mt-4 text-sm font-normal  leading-6 mb-7 '>We encourage diversity of views in our staff, cross-fertilization through inter-division postings and continuous training to help our clients. We have a continuing professional development programmed for staff to keep them up-to-date with the latest developments and best practices.</p>
                        <p className='mt-4 text-sm font-normal leading-6 mb-7'>Our widespread global clientele, and industrial competence provides a wide range of opportunities for both the beginners and the experienced With the new- age computerization, replacing the traditional manual data-keeping, our work involves learning, specializing and mastering in any stream that is chosen by you.</p>
                        <p className='mt-4 text-sm font-normal leading-6 mb-7 '>Individual commitment to a group effort--that is what makes a team work, a company work, a society work, a civilization work." As we continue to grow our core values stay the same and guide us through everything we do - from hiring to helping customers.</p>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
