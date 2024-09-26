import React from 'react'
import { LuPhone } from "react-icons/lu";
import { TbBrandTelegram } from "react-icons/tb";

export default function Content() {
    return (
        <div id='company' >
            
            <div className='md:flex m-7 gap-3 justify-evenly '>
                <div className='mt-24 lg:mx-28  flex-row  w-1vw'>
                    <div className='flex flex-col gap-2'>
                    <a className='border-2  border-black bg-black text-sm font-semibold text-white p-4 lg:w-72 ' href="/company"> <button >Company Overview</button></a>
                    <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4 hover:bg-black hover:text-white hover:duration-700 ' href="/vision"> <button >Company Vision and mission</button></a>
                    <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700  ' href="/careers">  <button >Company Careers </button></a>
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
                    <div className='w-[]'>
                        <h1 className='text-xl font-bold tracking-wider '>COMPANY OVERVIEW</h1>
                        <p className='mt-4 text-sm font-normal  '>Full Service Oracle Shop For 24/7 Expert Services on Oracle Engineered System, Database Support and Cyber Security</p>
                        <p className='mt-4 text-sm font-normal '>We are Kar AI Solutions, a premium Oracle Gold Partner renowned for our expert implementation and 24/7 support services on Oracle Engineered System, Database migration with Oracle Golden Gate, Technology Consulting and Cyber Security audits. We proudly bring on-board our collective experience ensuring all your Oracle database management, cyber security and technology development needs are fulfilled.</p>
                    </div>
                    <div className='mt-14'>
                        <h1 className='text-xl font-bold tracking-wider '>CORE VALUES</h1>
                        <ul className='mt-4 text-sm font-normal leading-7 '>
                            <li><span className='text-yellow-600'>&#10004;</span> Our heart of vision is the client.</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  We are process-oriented, focused yet agile.</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  We are constantly obliged to meet deadlines and client benefits.</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  We uphold the highest standards of integrity in all our operations.</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  We're constantly developing, testing, and improving to make sure we're delivering the best experience to our customers. We never settle because we believe there's always an opportunity to do better.</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  We assure the highest levels of accuracy, efficiency, and appearance of our customers' components.</li>
                            <li><span className='text-yellow-600'>&#10004;</span>  Step up, drive it, and deliver it. We collaborate, communicate, and we're accountable. We do what we say we'll do.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
