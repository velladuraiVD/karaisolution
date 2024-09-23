import React from 'react'
import { LuPhone } from "react-icons/lu";
import { TbBrandTelegram } from "react-icons/tb";
import img from '../../Assets/infra1.jpg'

export default function Content() {
    return (
        <div id='company' >

            <div className='lg:flex m-7 gap-3 justify-evenly '>
                <div className='mt-24 lg:mx-28  flex-row  w-1vw'>
                    <div className='flex flex-col gap-2'>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/careers"> <button >Cloud Service</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button >DevOps</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/vision">  <button >Content Management system(CMS)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button>E-Commerce</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button >Industry Solutions</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700'href="/company"> <button >Internet Of Things(IOT)</button></a>
                        <a className='border-2  border-black bg-black text-sm font-semibold text-white p-4 lg:w-72 ' href="/company"> <button >IT Infrastructure & Security</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button >Marketing Automation</button></a>

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
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>IT Infrastructure & Security</h1>

                        <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>In an increasingly more perilous net environment, server-level safety is imperative. Your server and IT infrastructure are susceptible to severa threats on the web, and thus, complete safety is a must. The IT Infrastructure & Security is rather responsible for administering and monitoring the company's core IT infrastructure structures as nicely as the safety of the structures and safeguarding of the records contained within. This consists of the managed server and cloud-based infrastructure for records processing, firewalls, intrusion detection/protection, and SIEM systems, facts storage systems, and Virtualization Infrastructure. We existing resolutions for the deployment of community perimeter protection which covers unified danger administration with intrusion detection, perimeter virus scanning and get admission to manipulate to the community resources. We additionally grant options for the safety of the interior community with pro-active scanning of mounted software program for vulnerabilities and monitoring of large infrastructure.</p>

                    </div>

                    <div className=' md:flex justify-evenly items-center gap-4'>
                        <div className=''>
                            <img src={img} alt="" className='' />
                        </div>
                        <div className='w-[60%] '>
                            <h1 className='text-xl font-bold tracking-wider mb-4 '>FEATURES INVOLVED</h1>
                            <ul className='leading-7'>
                                <li><span className='text-yellow-600'>&#10004;</span>  Provides integration and implementation of the computer system security solution.</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Automate repetitive IT infrastructure and security tasks</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Determines enterprise information assurance and security standards.</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Identifies, reports and resolves security violations.</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Sets up and maintains cloud and managed-dedicated server environments.</li>
                                
                            </ul>

                        </div>
                    </div>

                    





                </div>
            </div>
        </div>
    )
}
