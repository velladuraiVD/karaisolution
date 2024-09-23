import React from 'react'
import { LuPhone } from "react-icons/lu";
import { TbBrandTelegram } from "react-icons/tb";
import img from '../../Assets/erp2.jpg'

export default function Content() {
    return (
        <div id='company' >

            <div className='lg:flex m-7 gap-3 justify-evenly '>
                <div className='mt-24 lg:mx-28  flex-row  w-1vw'>
                    <div className='flex flex-col gap-2'>
                        <a className='border-2  border-black bg-black text-sm font-semibold text-white p-4 lg:w-72 ' href="/careers"> <button >Enterprise Resource planning (ERP)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button >Enterprise Performance Management (EPM)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/vision">  <button >Supply Chain & Manufacturing (SCM)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button>Human Capital Management (HCM)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button >Advertising and Customer Experience (CX)</button></a>

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
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>ENTERPRISE RESOURCE PLANNING (ERP)</h1>

                        <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>ERP is a kind of software system that helps you run your entire business, including processes in finance, manufacturing, supply chain, services, procurement, and more.</p>
                        <p className='mt-4 text-sm font-medium leading-6 mb-7'>An ERP system – also called an ERP suite – is made up of different enterprise resource planning applications that talk to each other and share a database. See how today’s ERP uses digital assistants to help you focus on what matters: AI and machine learning to automate processes and predictive analytics to support real-time decision-making. Each application (or ERP module) typically focuses on one business area. You can combine different modules to meet your needs. Finance, sales, human resources, and logistics are popular starting points. There are also modules specific to industries, from manufacturing to retail. Each module is usually licensed separately, so companies can pick and choose the functionality they want and can add on and scale as needed.</p>
                    </div>

                    <div className=' md:flex justify-evenly items-center'>
                        <div className=''>
                            <img src={img} alt="" className='' />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold tracking-wider mb-4 '>Core Features</h1>
                            <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>Any modern ERP system will have a long list of software features based on the industry they serve and the modules they offer. However, all enterprise resource management systems should have these top 10 characteristics:</p>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <ul className='mt-4 text-sm font-medium leading-8 '>
                            <li><span className='text-yellow-600'>&#10004;</span>“Single version of the truth” where data is consistent and tailored for approved users</li>
                            <li><span className='text-yellow-600'>&#10004;</span>Up-to-date information and alerts, with self-service reporting across all operations</li>
                            <li><span className='text-yellow-600'>&#10004;</span>Visual presentation of the information with dashboards, KPIs, and analytics to assist in quick and informed decision-making</li>
                            <li><span className='text-yellow-600'>&#10004;</span>Choice of deployment such as cloud, on-premise, or hybrid</li>
                            <li><span className='text-yellow-600'>&#10004;</span>Standard and advanced business processes, like, automation with AI and machine learning</li>
                            <li><span className='text-yellow-600'>&#10004;</span>Configuration tools for processes and users (including customers and suppliers), as well as for business units, locations, and product lines for example</li>
                            <li><span className='text-yellow-600'>&#10004;</span>Open and easy integration with other software solutions, including third-party systems</li>
                            <li><span className='text-yellow-600'>&#10004;</span>Technology platform that is fast, proven, and stable for this long-term investment</li>
                            <li><span className='text-yellow-600'>&#10004;</span>Technology support for the Internet of Things (IoT), security and privacy, mobile, e-commerce, and other business priorities</li>
                            <li><span className='text-yellow-600'>&#10004;</span>Multinational support including languages and business practices, as well as cloud, training, help desk, and implementation services</li>
                        </ul>
                    </div>

                    <div className='mt-20'>
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>SIX KEY BENIFITS OF ERP</h1>

                        <ul className=''>
                            <li className='leading-9 mt-5' >1.<span className='font-semibold'> Higher productivity:</span>Streamline and automate your core business processes to help everyone in your organization do more with fewer resources.</li>
                            <li className='leading-7 mt-8' >2.<span className='font-semibold'> Deeper insights:</span>Eliminate information silos, gain a single source of truth, and get fast answers to mission-critical business questions.</li>
                            <li className='leading-7 mt-8' >3.<span className='font-semibold'> Accelerated reporting:</span>Fast-track business and financial reporting and easily share results. Act on insights and improve performance in real time.</li>
                            <li className='leading-7 mt-8' >4.<span className='font-semibold'> Lower risk:</span>Maximize business visibility and control, ensure compliance with regulatory requirements, and predict and prevent risk.</li>
                            <li className='leading-7 mt-8' >5.<span className='font-semibold'> Simpler IT: </span>By using integrated ERP applications that share a database, you can simplify IT and give everyone an easier way to work.</li>
                            <li className='leading-7 mt-8' >6.<span className='font-semibold'> Improved agility:</span>With efficient operations and ready access to real-time data, you can quickly identify and react to new opportunities.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
