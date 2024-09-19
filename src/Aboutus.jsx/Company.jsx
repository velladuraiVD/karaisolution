import React from 'react'
import img from '../Assets/company1.jpg'
import { LuPhone } from "react-icons/lu";
import { TbBrandTelegram } from "react-icons/tb";

export default function Company() {
    return (
        <div id='company'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='flex justify-around'>
                <div>
                    <div className='flex flex-col justify-start'>
                        <button className='border-2 bg-black text-white p-2 w-52 '>Company Overview</button>
                        <button className='border-2 bg-gray-400 text-white w-52 p-2 '>Company Vision and mission</button>
                        <button className='border-2 bg-gray-400 text-white w-52 p-2 '>Company Careers </button>
                    </div>
                    <div className=''>
                        <h1 className='text-2xl font-bold'> GET IN TOUCH <hr className='w-8 h-1 bg-yellow-400' /></h1>
                        <div className='flex justify-start gap-3 items-center'>
                            <div>
                                <LuPhone />
                            </div>
                            <div>
                                <h1 className='text-lg font-semibold'>phone:</h1>
                                <h1 className='text-lg font-semibold'>8870373698</h1>
                            </div>
                        </div>
                        <hr className='h-[2px] w-32 text-yellow-600' />
                        <div className='flex justify-start gap-3 items-center'>
                            <div>
                                <TbBrandTelegram />
                            </div>
                            <div>
                                <h1 className='text-lg font-semibold'>Email:</h1>
                                <h1 className='text-lg font-semibold'>Name@gmail.com</h1>
                            </div>
                        </div>
                    </div>
                </div>






                <div>
                    <div>
                        <h1>COMPANY OVERVIEW</h1>
                        <p>Full Service Oracle Shop For 24/7 Expert Services on Oracle Engineered System, Database Support and Cyber Security</p>
                        <p>We are Supreme, a premium Oracle Gold Partner renowned for our expert implementation and 24/7 support services on Oracle Engineered System, Database migration with Oracle Golden Gate, Technology Consulting and Cyber Security audits. We proudly bring on-board our collective experience ensuring all your Oracle database management, cyber security and technology development needs are fulfilled.</p>
                    </div>
                    <div>
                        <h1>CORE VALUES</h1>
                        <ul>
                            <li>Our heart of vision is the client.</li>
                            <li>We are process-oriented, focused yet agile.</li>
                            <li>We are constantly obliged to meet deadlines and client benefits.</li>
                            <li>We uphold the highest standards of integrity in all our operations.</li>
                            <li>We're constantly developing, testing, and improving to make sure we're delivering the best experience to our customers. We never settle because we believe there's always an opportunity to do better.</li>
                            <li>We assure the highest levels of accuracy, efficiency, and appearance of our customers' components.</li>
                            <li>Step up, drive it, and deliver it. We collaborate, communicate, and we're accountable. We do what we say we'll do.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
