import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import i1 from '../Assets/i1.png'
import i2 from '../Assets/i2.png'
import i3 from '../Assets/i3.png'
import i4 from '../Assets/i4.png'
import i5 from '../Assets/i5.png'
import i6 from '../Assets/i6.png'
import i7 from '../Assets/i7.png'
import i8 from '../Assets/i8.png'

export default function Service() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1400 },
            items: 4,
            slidesToSlide: 1, // optional, default to 1.
            
        },
        tablet: {
            breakpoint: { max: 1400, min: 670 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
            
        },
        mobile: {
            breakpoint: { max: 670, min: 0 },
            items: 1,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        }
    };
    return (
        <div>
            <div className='m-10'>
                <h1 className='text-4xl font-bold mx-10 my-5'>Service We Offer</h1>
                <p className='text-xl font-semibold mx-10'>Supreme Soft Tech Info is the best counseling accomplice for startup innovation organizations</p>
                <hr className='bg-yellow-500 h-1 w-20 mx-10 mt-5' />
            </div>


            <Carousel className='m-12  z-0'
                partialVisbile={true}
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={500}
                keyBoardControl={true}
                customTransition="all 2s"
                transitionDuration={2000}
                arrows={true}
                removeArrowOnDeviceType={"mobile,tablet"}
                focusOnSelect={true}
        
               
            >
                <div className='bg-black flex flex-col justify-evenly items-center m-8 h-[450px]  hover:bg-red-600 group hover:text-black '>
                    <img src={i1} alt="" />
                    <h1 className='text-white text-xl font-bold'>Cloud Service</h1>
                    <p className='text-white text-center text-md leading-8 mx-5'>Cloud Platform Services is an open business platform designed to help you innovate, integrate and enlarge applications</p>
                    <p className='text-red-700 text-lg font-medium mt-5 group-hover:text-black '><a href="/cloudservice">Read more</a></p>
                </div>

                <div className='bg-black flex flex-col justify-evenly items-center m-8 h-[450px]  hover:bg-red-600 group hover: text-black '>
                    <img className='' src={i2} alt="" />
                    <h1 className='text-white text-xl font-bold'>CMS</h1>
                    <p className='text-white text-center text-md leading-8 mx-5'>A content management system is a web application designed to make it accessible for non-technical users to add, edit and maintain a website.</p>
                    <p className='text-red-700 text-lg mt-5   font-medium group-hover:text-black'><a href="/cms">Read more</a></p>
                </div>

                <div className='bg-black flex flex-col justify-evenly items-center m-8 h-[450px]  hover:bg-red-600 group hover: text-black '>
                    <img src={i3} alt="" />
                    <h1 className='text-white text-xl font-bold'>DevOps</h1>
                    <p className='text-white text-center text-md leading-8 mx-5'>In simple words, DevOps is an assortment of practices that automates the processes between software development and IT teams,</p>
                    <p className='text-red-700 text-lg mt-5  font-medium group-hover:text-black'><a href="/devops">Read more</a></p>
                </div>

                <div className='bg-black flex flex-col justify-evenly items-center m-8 h-[450px]  hover:bg-red-600 group hover: text-black '>
                    <img src={i4} alt="" />
                    <h1 className='text-white text-xl font-bold'>E-Commerce</h1>
                    <p className='text-white text-center text-md leading-8 mx-5'>E-commerce has completely revolutionized the process of online shopping and has modified the way consumers purchase their goods</p>
                    <p className='text-red-700 text-lg mt-5  font-medium group-hover:text-black'><a href="/ecommerce">Read more</a></p>
                </div>

                <div className='bg-black flex flex-col justify-evenly items-center m-8 h-[450px]  hover:bg-red-600 group hover: text-black  '>
                    <img src={i5} alt="" />
                    <h1 className='text-white text-xl font-bold'>Industry Solutions</h1>
                    <p className='text-white text-center text-md leading-8 mx-5'>Get solutions that meet your industry's specific needs - no matter the size of your organization. We design data-driven</p>
                    <p className='text-red-700 text-lg mt-5  font-medium  group-hover:text-black'><a href="/industry">Read more</a></p>
                </div>

                <div className='bg-black flex flex-col justify-evenly items-center m-8 h-[450px]  hover:bg-red-600 group hover: text-black '>
                    <img src={i6} alt="" />
                    <h1 className='text-white text-xl font-bold'> Internet Of Things</h1>
                    <p className='text-white text-center text-md leading-8 mx-5'>As a sturdy solution for enlarging the automation across all the versatile domains, The Internet of things is an incredible vision  </p>
                    <p className='text-red-700 text-lg mt-5  font-medium group-hover:text-black'><a href="/internet">Read more</a></p>
                </div>

                <div className='bg-black flex flex-col justify-evenly items-center m-8 h-[450px]  hover:bg-red-600 group hover: text-black  '>
                    <img src={i7} alt="" />
                    <h1 className='text-white text-xl font-bold text-center'> IT Infrastructure & Security</h1>
                    <p className='text-white text-center text-md leading-8 mx-5'>In an increasingly perilous web environment, server-level security is imperative. Your server and IT infrastructure are vulnerable to </p>
                    <p className='text-red-700 text-lg mt-5  font-medium group-hover:text-black'><a href="/IT">Read more</a></p>
                </div>

                <div className='bg-black flex flex-col justify-evenly items-center m-8 h-[450px]  hover:bg-red-600 group hover: text-black '>
                    <img src={i8} alt="" />
                    <h1 className='text-white text-xl font-bold'>Market Automation</h1>
                    <p className='text-white text-center text-md leading-8 mx-5'>Marketing automation in simple terms can be interpreted as using software platforms and additional information technology  </p>
                    <p className='text-red-700 text-lg mt-5  font-medium group-hover:text-black'><a href="/marketing">Read more</a></p>
                </div>

            </Carousel>
        </div>
    )
}
