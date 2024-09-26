import React from 'react'
import { LuPhone } from "react-icons/lu";
import { TbBrandTelegram } from "react-icons/tb";
import img from '../../Assets/cloud2.jpg'

export default function Content() {
    return (
        <div id='company' >

        <div className='lg:flex m-7 gap-3 justify-evenly '>
            <div className='mt-24 lg:mx-28  flex-row  w-1vw'>
                <div className='flex flex-col gap-2'>
                    <a className='border-2  border-black bg-black text-sm font-semibold text-white p-4 lg:w-72 ' href="/cloudservice"> <button >Cloud Service</button></a>
                    <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/devops"> <button >DevOps</button></a>
                    <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/cms">  <button >Content Management system(CMS)</button></a>
                    <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/ecommerce"> <button>E-Commerce</button></a>
                    <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/industry"> <button >Industry Solutions</button></a>
                    <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/intrnet"> <button >Internet Of Things(IOT)</button></a>
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
                    <h1 className='text-xl font-bold tracking-wider mb-4 '>CLOUD SERVICE</h1>

                    <p className='mt-4 text-sm font-medium  leading-6 mb-7 '><span className='font-semibold'> "Kar Ai"</span>  Cloud Platform Services is an open commercial enterprise platform designed to assist you innovate, combine and increase functions with agility, flexibility and desire for transformation to Cloud with standardized tools, applied sciences and processes. It helps commercial enterprise to develop fast, to set the easy connections amongst all structures and automate tactics throughout the enterprise. Cloud offerings furnish extraordinary flexibility in provisioning, duplicating and scaling sources to stability the necessities of users, hosted purposes and solutions. They are built, operated and managed by means of a cloud provider, which works to make sure end-to-end availability, reliability, and safety of the cloud.</p>
                   
                </div>

                <div className=' md:flex justify-evenly items-center gap-4'>
                    <div className=''>
                        <img src={img} alt="" className='' />
                    </div>
                    <div className='w-[60%]'>
                         <h1 className='text-xl font-bold tracking-wider mb-4 '>Core Features</h1>
                         <span className='font-semibold'> Software as a service (SaaS)</span>
                        <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>SaaS is a software distribution model in which applications are hosted by a vendor or service provider and made available to customers over a network, typically the internet.</p>
                        <span className='font-semibold'> Infrastructure as a service (IaaS)</span>
                        <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>IaaS involves outsourcing the equipment used to support operations, including storage, hardware, servers and networking components, all of which are made accessible over a network.</p>
                    </div>
                </div>

                <div>
                <span className='font-semibold'> Platform as a service (PaaS)</span>
                <p>PaaS refers to the delivery of operating systems and associated services over the internet without downloads or installation. The approach lets customers create and deploy applications without having to invest in the underlying infrastructure.</p>
                </div>

                <div className='mt-4'>
                <h1 className='text-xl font-bold tracking-wider mb-4 '>SERVICE OFFERINGS</h1>

                    <ul className='mt-4 text-sm font-medium leading-8 '>
                        <li><span className='text-yellow-600'>&#10004;</span>To build their cloud-based business applications through Software-as-a-service (SaaS) app development.</li>
                        <li><span className='text-yellow-600'>&#10004;</span>To migrate or integrate cloud offerings into their existing on-premise solutions.</li>
                        <li><span className='text-yellow-600'>&#10004;</span>To use available Platform-as-a-service (PaaS) for business app development.</li>
                        <li><span className='text-yellow-600'>&#10004;</span>New enterprise-class product/solution development and testing.</li>
                        <li><span className='text-yellow-600'>&#10004;</span>Data management and analytics.</li>
                        <li><span className='text-yellow-600'>&#10004;</span>Infrastructure Design</li>
                        
                    </ul>
                </div>

                

            </div>
        </div>
    </div>
    )
}
