import React from 'react'
import { LuPhone } from "react-icons/lu";
import { TbBrandTelegram } from "react-icons/tb";
import img from '../../Assets/cms2.jpg'

export default function Content() {
    return (
        <div id='company' >

            <div className='lg:flex m-7 gap-3 justify-evenly '>
                <div className='mt-24 lg:mx-28  flex-row  w-1vw'>
                    <div className='flex flex-col gap-2'>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/careers"> <button >Cloud Service</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button >DevOps</button></a>
                        <a className='border-2  border-black bg-black text-sm font-semibold text-white p-4 lg:w-72 ' href="/vision">  <button >Content Management system(CMS)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button>E-Commerce</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button >Industry Solutions</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button >Internet Of Things(IOT)</button></a>
                        <a className='border-l-2 border-black bg-gray-400 text-sm font-semibold text-black lg:w-72 p-4  hover:bg-black hover:text-white hover:duration-700' href="/company"> <button >IT Infrastructure & Security</button></a>
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
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>Content Management System (CMS)</h1>

                        <p className='mt-4 text-sm font-medium  leading-6 mb-7 '> A content material administration machine is a net software designed to make it available for non-technical customers to add, edit and preserve a website. Any company with voluminous content material finds it integral to have a CMS in area that is educated in dealing with all kinds of content material administration and publishing of mass content material in a sorted and systematic manner. Content Management System integrates with a internet website and lets in it to put in force modifications, additions, and deletions to the current web page content material and structure. Access is supplied in accordance to the protection clearance of the personnel and files of all the adjustments carried out are maintained in an orderly fashion.</p>

                    </div>

                    <div className=' md:flex justify-evenly items-center gap-4'>
                        <div className=''>
                            <img src={img} alt="" className='' />
                        </div>
                        <div className='w-[70%] leading-8'>
                            <h1 className='text-xl font-bold tracking-wider mb-4 '>RESPLENDENT FEATURES OF CMS</h1>
                            <ul className=''>
                                <li><span className='text-yellow-600'>&#10004;</span>  The platform can be used by multiple users in different locations</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Built-in Workflow and Collaboration Tools</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Keeping track of users, their permissions and security settings</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Users can manage the file through the media manager to upload, edit and modify content</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Manage multiple languages & currencies</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Can manage products separately, in different categories.</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Easy content syndication</li>
                                <li><span className='text-yellow-600'>&#10004;</span>  Easy and quick access through administrative account</li>
                            </ul>

                        </div>
                    </div>

                    <div className='mt-16'>
                        <h1 className='text-xl font-bold tracking-wider mb-4 '>WHY TO CHOOSE US?</h1>
                        <p className='mt-4 text-sm font-medium  leading-6 mb-7 '>Efficiently managing the precious content material of your internet site is indispensable to preserve it up to date and notify your clients about the today's news, events, merchandise and different facts correlated to business. High-grade content material helps to get superb publicity and is additionally examined to be the fantastic advertising strategy. We furnish professional offerings to facilitate you to get the exceptional content material administration machine for your enterprise inside a price range that fits your pocket.
                        </p>
                    </div>



                </div>
            </div>
        </div>
    )
}
