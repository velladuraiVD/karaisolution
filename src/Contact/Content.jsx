import React from 'react'

export default function Content() {
    return (
        <div className='flex justify-evenly flex-wrap my-6 mx-4'>
            <div className='mx-7' >
                <h1 className='tracking-[3px] my-5 text-lg font-medium  text-gray-600'>CONTACT US</h1>
                <h2 className='font-bold text-base'>Kar AI Solutions Private Limited</h2>
                <h2 className='text-base font-medium my-1'>1st floor, Muthuganesh Building, 9/6, Avvaiyar Street,  </h2>
                <h2 className='text-base font-medium my-1'>Sriramnagar, Kottaiyur,</h2>
                
                <h2 className='text-base font-medium my-1'>Karaikudi,</h2>
                <h2 className='text-base font-medium my-1'>Tamil Nadu 630106,</h2>
                <h2 className='text-base font-medium my-1'>Email: Name@gamil.com</h2>
                <h2 className='text-base font-medium my-1'> phone:8870564334</h2>
            </div>
            <div className='w-[100%] md:w-[40%] ' >

                <h1 className=' tracking-[3px] my-5 text-lg font-medium text-gray-600'>QUICK ENQUIRY</h1>

                <form action="#" class="space-y-8 ">
                <div className='w-full'>
                   
                    <input type="name"  class="shadow-sm bg-gray-50 border font-medium text-base border-black text-black  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  placeholder-black  " placeholder="Your Full Name:" required/>
                </div>
                <div>
                    
                    <input type="email"  class="block p-3 w-full  text-black  font-medium text-base bg-gray-50 rounded-lg border border-black shadow-sm focus:ring-primary-500 focus:border-primary-500  placeholder-black" placeholder="Your Email:" required/>
                </div>

                <div>
                    
                    <input type="number"  class="block p-3 w-full  text-black font-medium text-base bg-gray-50 rounded-lg border border-black shadow-sm focus:ring-primary-500 focus:border-primary-500  placeholder-black" placeholder="Phone Number:" required/>
                </div>

                <div class="sm:col-span-2">
                   
                    <textarea id="message" rows="6" class="block p-2.5 w-full  text-black font-medium  text-base bg-gray-50 rounded-lg shadow-sm border border-black focus:ring-primary-500 focus:border-primary-500   placeholder-black" placeholder="Message"></textarea>
                </div>
                <button type="submit" class="py-3 px-5 text-sm font-medium text-center  text-black rounded-lg bg-blue-600 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Submit</button>
            </form>

            </div>
        </div>
    )
}
