import React from 'react'
import { Link } from 'react-router-dom'

const GetStarted = () => {

    return (
        <div className='flex justify-around items-center max-w-[1440px] p-5 rounded-md bg-blue-950 m-10 gap-5 flex-col md:flex-row'>
            <div className="text-white space-y-5">
                <div className="font-sansita space-y-2">
                    <h2 className='text-2xl md:text-4xl font-bold'>Find or List <span>Lodges Around Campus</span> with Ease</h2>
                    <p className='text-xl md:text-2xl font-medium'>Join <span>200+</span> Students & Trusted Agents on NxLodge</p>
                </div>
                <div className="">
                    <p><span>Looking for a place to stay?</span> Browse verified lodges near campus.</p>
                    <p><span>Have a lodge to list?</span> Agents and caretakers can sign up and submit listings for approval.</p>
                </div>
                <Link to={"/dashboard/home"} className='border-2 border-blue-600 rounded-md p-2 w-[250px] font-semibold font-sansita inline-block text-center text-blue-500 text-lg'>Get Started</Link>
            </div>

            <div className="w-[450px] h-80 rounded-md overflow-hidden relative border-4 border-blue-500">
                <img src="/images/home_assets/portableroom.jpg" className='w-full h-full object-cover' alt="" />
            </div>
        </div>
    )
}

export default GetStarted