import React from 'react'
import { LuPhone } from "react-icons/lu";
import { TbBrandTelegram } from "react-icons/tb";
import img from '../../Assets/hrm2.jpg'

export default function Content() {
    return (

        <div  >

            <div className='lg:flex m-7 gap-3 justify-evenly '>
                <div className='mt-24 lg:mx-28  flex-row  w-1vw'>
                    <div className='flex flex-col gap-2'>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/resource"> <button >Enterprise Resource planning (ERP)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/performance"> <button >Enterprise Performance Management (EPM)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/supply">  <button >Supply Chain & Manufacturing (SCM)</button></a>
                        <a className='border-2  border-black bg-black text-sm font-semibold text-white p-4 lg:w-72 ' href="/human"> <button>Human Capital Management (HCM)</button></a>
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
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>Human Capital Management (HCM)</h1>

                        <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>Customer experience (CX) refers to how a business engages with its customers at every point of their buying journey—from marketing to sales to customer service and everywhere in between. In large part, it's the sum total of all interactions a customer has with your brand. Customer experience (CX) strategy refers to the holistic perception of the experience of customers with your brand. The great customer experience is the end result of every touchpoint a customer has with your business starting from both awareness, evaluation, and post-purchase scenarios. Customer experience (CX) is the sum total of customers' perceptions and feelings resulting from interactions with a brand's products and services.</p>
                       
                    </div>

                    <div className=' md:flex justify-between items-center gap-3 '>
                        <div className=''>
                            <img src={img} alt="" className='w-[1400px]' />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold tracking-wider mb-4 '>Core Features</h1>
                            <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>HCM addresses most organizations' biggest investment: people. Investing in human capital can boost employee creativity and productivity, and ultimately, an organization's profitability. Failure to practice HCM can result in missed opportunities, lost revenue and higher labor costs.</p>
                            <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>HCM can also help organizations stay ahead of major workforce trends, such as:</p>
                        </div>
                    </div>

                    <div className='mt-20 '>
                       <p className='mb-7'> <span className='font-semibold mb-4'>Changing demographics. </span>As the workforce ages, new generations of workers bring different styles and needs. For example, Generation Z and millennials generally have high expectations for work-life balance.</p>
                       <p className='mb-7'><span className='font-semibold mb-4'>Gig economy. </span>The upsurge in temporary jobs by contractors and freelancers complicates scheduling, contracts and compliance with tax and employment laws.</p>
                       <p className='mb-7'><span className='font-semibold mb-4'>Complex legislation. </span>Laws and regulations change quickly, and noncompliance can lead to hefty fines and legal fees. For example, in the U.S., the Affordable Care Act, Family and Medical Leave Act, and sexual harassment laws put added pressure on organizations to stay abreast of legislation.</p>
                       <p className='mb-7'><span className='font-semibold mb-4'>HR data. </span>Organizations collect massive amounts of internal and external data about their workforces. HCM technology can help manage and analyze it.</p>
                    </div>




                    <div className='mt-20'>
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>HCM FUNCTIONS</h1>
                       

                        <ul className=''>
                            <li className='my-10 ' >

                                <p>HCM can also help organizations stay ahead of major workforce trends, such as:</p>
                            </li>

                            <li className='my-10'>

                                <p>Changing demographics. As the workforce ages, new generations of workers bring different styles and needs. For example, Generation Z and millennials generally have high expectations for work-life balance. Gig economy. The upsurge in temporary jobs by contractors and freelancers complicates scheduling, contracts and compliance with tax and employment laws.</p>
                            </li>

                            <li className='my-10'>

                                <p className='font-semibold'> The functions of HCM software are generally organized into the following categories:</p>
                            </li>

                            <li className='my-10'>

                                <p><span className='font-semibold mb-4'>Core HR, </span>including payroll, benefits administration, onboarding (bringing employees into the organization), compliance management and maintenance of employee data.</p>
                            </li>

                            <li className='my-10'>

                                <p> <span className='font-semibold mb-4'>Talent management, </span>the process of recruiting, developing and retaining employees. Talent management suites consist of distinct yet integrated modules for recruitment, performance management, compensation management, learning and succession planning.</p>
                            </li>

                            
                            <li className='my-10'>

                                <p> <span className='font-semibold mb-4'>Workforce management,</span>the set of functions for deploying employees with the necessary skills to particular regions, departments or projects. It includes time and attendance management, workforce planning, labor scheduling and budgeting.</p>
                            </li>

                            
                            <li className='my-10'>

                                <p> <span className='font-semibold mb-4'>Service delivery,  </span>including HR help desks, intranet portals, employee self-service and manager self-service.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>



    )
}
