import React from 'react'
import { LuPhone } from "react-icons/lu";
import { TbBrandTelegram } from "react-icons/tb";
import img from '../../Assets/epm2.jpg'

export default function Content() {
    return (

        <div  >

            <div className='lg:flex m-7 gap-3 justify-evenly '>
                <div className='mt-24 lg:mx-28  flex-row  w-1vw'>
                    <div className='flex flex-col gap-2'>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/resource"> <button >Enterprise Resource planning (ERP)</button></a>
                        <a className='border-2  border-black bg-black text-sm font-semibold text-white p-4 lg:w-72 ' href="/performance"> <button >Enterprise Performance Management (EPM)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/supply">  <button >Supply Chain & Manufacturing (SCM)</button></a>
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
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>Enterprise Performance Management (EPM)</h1>

                        <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>Enterprise performance management, or EPM, software specializes in budgeting, forecasting, and financial management. It provides data analytics, reporting, and forecast modeling so organizations can analyze, understand, and plan strategically for the business.</p>
                        <p className='mt-4 text-sm font-medium leading-6 mb-7'>companies can align business strategy with business execution. The technology uses feedback drawn from data generated from systems, processes, and activities across the organization. The resulting analytics help to identify business drivers and other insights. Companies can assess new opportunities, augment profitability in existing business, and respond with greater agility in the face of unexpected change and disruption.</p>
                        <p className='mt-4 text-sm font-medium leading-6 mb-7'>Enterprise performance management software helps inform future decisions, drive efficiencies, and improve the financial and operational performance of the company.</p>
                    </div>

                    <div className=' md:flex justify-between items-center gap-3 '>
                        <div className=''>
                            <img src={img} alt="" className='w-[1400px]' />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold tracking-wider mb-4 '>Core Features</h1>
                            <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>As with most traditional software, enterprise performance management systems were initially installed on premise. Today, more and more EPM software systems run in the cloud. A cloud platform provides a range of benefits, including larger data storage capacities, stronger security, and easier integration with complementary applications such as financial consolidation, financial close, planning, tax reporting, profitability and cost, account reconciliation, and other applications.</p>
                        </div>
                    </div>

                    <div className='mt-20'>
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>Here’s how the EPM process typically works:</h1>

                        <ul className=''>
                            <li className='my-10' >
                                <h1 className='font-semibold mb-4'>1. Access data across all business units.</h1>
                                <p>Leverage the agility of the cloud to access financial and operational data from business units across the organization, including IT, marketing, HR, operations, and sales. Data can be sourced from e-commerce systems, front- and back-office applications, data warehouses, and external data sources. Make more confident decisions and respond to disruptions faster with complete, accurate data.</p>
                            </li>

                            <li className='my-10'>
                                <h1 className='font-semibold mb-4'>2. Create a strategic plan.</h1>
                                <p>Use EPM data analytics to build forecast models and ad hoc simulations across multiple dimensions. Make data-driven decisions that maximize profitability, performance, and drive alignment with your strategic plan.</p>
                            </li>

                            <li className='my-10'>
                                <h1 className='font-semibold mb-4'>3. Budget.</h1>
                                <p>Work collaboratively across lines of business to crowdsource plans and build flexible budgets. Leverage automated workflows for a clean and efficient process.</p>
                            </li>

                            <li className='my-10'>
                                <h1 className='font-semibold mb-4'>4. Track and report.</h1>
                                <p>Use real-time data to assess performance across the enterprise and determine if adjustments are required. Prepare reports that align with corporate and regulatory guidance.</p>
                            </li>

                            <li className='my-10'>
                                <h1 className='font-semibold mb-4'>5. Assess and analyze.</h1>
                                <p>Review performance and profitability against the strategic plan. Identify new areas of opportunity, resolve areas of underperformance, and use the intelligence to inform the next cycle of strategic planning</p>
                            </li>
                        </ul>
                    </div>




                    <div className='mt-20'>
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>BENEFITS OF AN EPM SYSTEM</h1>
                        <h1>Here are some of the top benefits of an EPM:</h1>

                        <ul className=''>
                            <li className='my-10 ' >

                                <p><span className='font-semibold mb-4'>Profitability: </span> Examine existing margins and accurately predict future profitability across a range of business cases and scenarios. EPM technology can help increase margins, maximize returns, and identify new opportunities to increase profitability and performance.</p>
                            </li>

                            <li className='my-10'>

                                <p><span className='font-semibold mb-4'>Integrated business strategy: </span>Consolidate data from all lines of business for a cohesive view of current and future performance. EPM delivers insights based on real-time data, so companies can explore different opportunities and make the most profitable and efficient decisions.</p>
                            </li>

                            <li className='my-10'>

                                <p> <span className='font-semibold mb-4'>Modern, automated financial processes: </span> Eliminate time-consuming spreadsheets, human error, and siloed planning workstreams. EPM connects processes and data from across the organization for a comprehensive view of the business.
                                </p>
                            </li>

                            <li className='my-10'>

                                <p><span className='font-semibold mb-4'>Regulatory oversight: </span>Ensure compliance with ever-changing regulatory and tax law requirements for the financial close, corporate financial reporting, and tax reporting. EPM supports a range of reporting standards with accurate and current information, eliminating the need for multiple reporting systems and accelerating cycle times.</p>
                            </li>

                            <li className='my-10'>

                                <p> <span className='font-semibold mb-4'>Faster reconciliation of accounts: </span>Eliminate delays to the financial close. EPM provides automated workflows that eliminate risk and securely expedite global account</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>



    )
}
