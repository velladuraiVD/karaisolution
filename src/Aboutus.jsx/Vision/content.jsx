import React from 'react'
import { LuPhone } from "react-icons/lu";
import { TbBrandTelegram } from "react-icons/tb";

export default function Content() {
    return (
        <div id='company' >
            
            <div className='md:flex m-7 gap-3 justify-evenly '>
                <div className='mt-24 lg:mx-28  flex-row  w-1vw'>
                    <div className='flex flex-col gap-2'>
                    <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700  ' href="/company"> <button >Company Overview</button></a>
                    <a className='border-2  border-black bg-black text-sm font-semibold text-white p-4 lg:w-72' href="/vision"> <button >Company Vision and mission</button></a>
                    <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700  ' href="/careers">  <button >Company Careers  </button></a>
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
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>COMPANY VISION AND MISSION</h1>
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>OUR VISIONS</h1>
                        <p className='mt-4 text-sm font-normal  '>Our vision is to become the most notable global IT service provider offering Software Development services to businesses worldwide.</p>
                        <p className='mt-4 text-sm font-normal '>Our team members are dedicated to the organization's objective, gratified with passion, and allegiance to deliver quality products and make a difference to clients through our code of ethics and operational discipline. Our professional, flexible and integrated process reflects in what we do.</p>
                        <p className='mt-4 text-sm font-normal '>Providentially, we have been able to bring together a talented crew of professionals shaped and molded by their collective experiences in the agency, corporate and private industries, all of which possess outstanding talent.</p>
                        <p className='mt-4 text-sm font-normal '>The synergy of what our organization does comes from a blend of passion for success and the skill to help accelerate your organization. We always guide our customers to success</p>
                    </div>
                    <div className='mt-14'>
                        <h1 className='text-xl font-bold tracking-wider '>OUR MISSION</h1>
                        <p className='mt-4 text-sm font-normal mb-16 '>To make IT simple for our customers, replacing the burden of high contact IT services with intelligently designed solutions that span from consultancy, design and deployment all the way through to live support.</p>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
