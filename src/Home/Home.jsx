import React from 'react'
import Carousel from './Carousel'
import NavBar from './NavBar'
import ContactCard from './ContactCard'
import Mission from './Mission'
import Service from './Service'

export default function Home() {
    return (
        <div>
            <ContactCard />
            <NavBar />
            <Carousel />
            <Mission />
            <Service/>

        </div>
    )
}
