import React from 'react'

export default function Mission() {
    return (
        <div className='flex flex-col justify-center items-center flex-wrap' >
            <div className=' flex flex-col justify-center items-center '>
                <p className=' sm:lg md:text-2xl font-medium font-Robot  text-center leading-10 p-5 mx-10 my-5'>Get solutions that meet your industry's specific needs - no matter the size of your organization. We design data-driven digital transformation results with our market-leading enterprise cloud data management solutions tailored for your industry. We are a cutting-edge company with a team of professionals working tirelessly to achieve the desired results. We fulfil your business needs and ensure overall success for your endeavour. To us, success lies in excellence!</p>
                <hr className='h-[3px] w-20 bg-yellow-500' />
            </div>

            <div className='  flex flex-row justify-center flex-wrap'>
                <div className=' sm:w-[300px] h-[400px] md:w-[300px] p-2 bg-[#ffff] shadow-[1px_0px_10px_1px] shadow-slate-500 m-4 hover:-translate-y-4 duration-500 hover:shadow-[0px_3px_10px_0px]  '>
                    <h1 className='text-3xl font-bold mt-4 px-3' >Our Vision</h1>
                    <p className=' sm:h-auto sm:w-auto md:text-lg font-semibold text-gray-700 mt-3 p-3'>Our vision is to become the most notable global IT service provider offering Software Development services to businesses worldwide.</p>
                    <p className='mt-4 text-lg font-semibold text-[#3b8aff] p-3'><a href="">Read more</a></p>
                </div>

                <div className='sm:w-[300px] h-[400px] md:w-[300px] p-2 bg-[#ffff] shadow-[1px_0px_30px_1px]  shadow-slate-500 m-4 hover:-translate-y-4 duration-500 hover:shadow-[0px_3px_10px_0px] '>
                    <h1 className='text-3xl font-bold mt-4 px-3'>Our Mission</h1>
                    <p className='text-lg font-semibold text-gray-700 mt-3 p-3'>To make IT simple for our customers, replacing the burden of high contact IT services with intelligently designed solutions that span from consultancy,</p>
                    <p className='mt-4 text-lg font-semibold text-[#3b8aff] p-3'><a href="">Read more</a></p>
                </div>

                <div className='sm:w-[300px]  h-[400px] md:w-[300px] p-2 bg-[#ffff] shadow-[1px_0px_30px_1px]  shadow-slate-500 m-4 hover:-translate-y-4 duration-500 hover:shadow-[0px_3px_10px_0px]'>
                    <h1 className='text-3xl font-bold mt-4 px-3'>Our Vision</h1>
                    <p className='text-lg font-semibold text-gray-700 mt-3 p-3'>We see ourselves as IT Champions for our customers, providing not only reactive support but also proactive guidance on how IT can best</p>
                    <p className='mt-4 text-lg font-semibold text-[#3b8aff] p-3'><a href="">Read more</a></p>
                </div>

            </div>
        </div>
    )
}
