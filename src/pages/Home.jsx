import React from 'react'
import Hero from '../components/HomeComponents/Hero'
import FeaturedProperties from '../components/HomeComponents/FeaturedProperties'
import GetStarted from '../components/HomeComponents/GetStarted'

const Home = () => {

    return (
        <div>
            <Hero />
            <FeaturedProperties />
            <GetStarted />
        </div>
    )
}

export default Home