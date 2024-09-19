import React from 'react'
import { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import image1 from "../Assets/1.jpg"
import image2 from "../Assets/2.jpg"
export default function Carousel() {

    const slides = [
        {
            img: image1
        },
        {
            img: image2
        }
    ];

    const [currentIndex, setcurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setcurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setcurrentIndex(newIndex)
    };

    const goToSlide = (slideIndex)=>{
        setcurrentIndex(slideIndex)
    }

    return (
        <div className='w-full m-auto relative group object-cover'> 
            {/* Image Div */}
            <div 
                style={{ backgroundImage: `url(${slides[currentIndex].img})` }} 
                className='w-full h-[25vh] sm:h-[35vh] md:h-[40vh] lg:h-[70vh]  bg-center bg-cover duration-500'
            ></div>
    
            {/* Left Arrow */}
            <div 
                className='hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
    
            {/* Right Arrow */}
            <div 
                className='hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
    
            {/* Dots */}
            <div className='flex justify-center absolute bottom-3 left-0 right-0 py-2'>
                {slides.map((slide, slideIndex) => (
                    <div 
                        key={slideIndex} 
                        onClick={() => goToSlide(slideIndex)} 
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
    
    
}
