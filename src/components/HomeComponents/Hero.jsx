import React from 'react'

const Hero = () => {

    return (
        <div 
            style={{backgroundImage: 'url("/images/home_assets/livingarea.jpg")', backgroundBlendMode: "color" }} 
            className="mt-6 flex items-center justify-center text-white text-center bg-cover bg-no-repeat bg-center min-h-96 py-[150px] md:py-[300px] relative"
        >
            <div className="w-full h-full bg-blue-950/80 absolute top-0 left-0 flex flex-col items-center justify-center">
                <div className="py-20 md:py-10 flex flex-col items-center justify-center gap-5 md:gap-12">
                    <h2 className='text-3xl md:text-6xl font-extrabold font-sansita md:w-[70%]'>Find Your <span className='text-blue-600'>Perfect Lodge</span> With Ease</h2>
                    <p className='text-sm md:text-2xl font-semibold max-w-[800px] rounded-sm'>Whether you're looking for a cozy single room, a modern self-contained unit, or a spacious 3-bedroom flat, we've got you covered.</p>
                    <button className='border-2 p-2 max-sm:text-sm font-semibold md:py-3 rounded-md hover:scale-95 transition-all duration-500 md:w-[300px] font-sansita'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
