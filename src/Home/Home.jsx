import React from 'react'
import Carousel from './Carousel'
import Mission from './Mission'
import Service from './Service'
import Contact from './Contact'
import Cloud from './Cloud'
import Appoinment from './Appoinment'


export default function Home() {
    return (
        <div className=''>
           
            <Carousel />
            <Mission />
            <Service />
            {/* <Contact className='absolute'/> */}
            <Cloud/>
            <Appoinment/>


        </div>
    )
}
