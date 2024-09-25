import React, { useState } from 'react';
import { Contacturl, nodeUrl } from '../constants/constant';
import { toast } from 'react-toastify';

export default function Content() {
  const [data, setData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
    company:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const ContactDetailSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${nodeUrl}${Contacturl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
      toast.success('Form submitted successfully!');
      setData({
        name: '',
        mobile: '',
        email: '',
        company:'',
        message: ''
      });

    } catch (error) {
        toast.error('Error submitting form please fill all filed')
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='flex justify-evenly flex-wrap my-6 mx-4'>
      <div className='mx-7'>
        <h1 className='tracking-[3px] my-5 text-lg font-medium text-gray-600'>
          CONTACT US
        </h1>
        <h2 className='font-bold text-base'>Kar AI Solutions Private Limited</h2>
        <h2 className='text-base font-medium my-1'>
          1st floor, Muthuganesh Building, 9/6, Avvaiyar Street,
        </h2>
        <h2 className='text-base font-medium my-1'>Sriramnagar, Kottaiyur,</h2>
        <h2 className='text-base font-medium my-1'>Karaikudi,</h2>
        <h2 className='text-base font-medium my-1'>Tamil Nadu 630106,</h2>
        <h2 className='text-base font-medium my-1'>Email: Name@gamil.com</h2>
        <h2 className='text-base font-medium my-1'>Phone: 8870564334</h2>
      </div>
      <div className='w-[100%] md:w-[40%]'>
        <h1 className='tracking-[3px] my-5 text-lg font-medium text-gray-600'>
          QUICK ENQUIRY
        </h1>

        <form className='space-y-8'>
          <div className='w-full'>
            <input
              type='text'
              name='name'
              value={data.name}
              onChange={handleChange}
              className='shadow-sm bg-gray-50 border font-medium text-base border-black text-black rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-black'
              placeholder='Your Full Name:'
              required
            />
          </div>
          <div>
            <input
              type='email'
              name='email'
              value={data.email}
              onChange={handleChange}
              className='block p-3 w-full text-black font-medium text-base bg-gray-50 rounded-lg border border-black shadow-sm focus:ring-primary-500 focus:border-primary-500 placeholder-black'
              placeholder='Your Email:'
              required
            />
          </div>
          <div>
            <input
              type='text'
              name='mobile'
              value={data.mobile}
              onChange={handleChange}
              className='block p-3 w-full text-black font-medium text-base bg-gray-50 rounded-lg border border-black shadow-sm focus:ring-primary-500 focus:border-primary-500 placeholder-black'
              placeholder='Phone Number:'
              required
            />
          </div>
          <div>
            <input
              type='text'
              name='company'
              value={data.company}
              onChange={handleChange}
              className='block p-3 w-full text-black font-medium text-base bg-gray-50 rounded-lg border border-black shadow-sm focus:ring-primary-500 focus:border-primary-500 placeholder-black'
              placeholder='company:'
            />
          </div>
          <div className='sm:col-span-2'>
            <textarea
              name='message'
              value={data.message}
              onChange={handleChange}
              rows='6'
              className='block p-2.5 w-full text-black font-medium text-base bg-gray-50 rounded-lg shadow-sm border border-black focus:ring-primary-500 focus:border-primary-500 placeholder-black'
              placeholder='Message'
              required
            ></textarea>
          </div>
          <button 
       onClick={ContactDetailSubmit}
            className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
