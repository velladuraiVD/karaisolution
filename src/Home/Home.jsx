import React from 'react'
import Carousel from './Carousel'
import Mission from './Mission'
import Service from './Service'
import Contact from './Contact'
import img from '../Assets/1 (1).jpg'


export default function Home() {
    return (
        <div className='mx-10'>
           
            <Carousel />
            <Mission />
            <Service />
            {/* <Contact className='absolute'/> */}
            

        </div>
    )
}
