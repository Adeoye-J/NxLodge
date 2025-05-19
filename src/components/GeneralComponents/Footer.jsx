import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {

    const [data, setData] = useState("")

    return (
        <div className='border-t-2 border-blue-900 p-4 lg:py-20 lg:px-20 flex gap-10 justify-between flex-wrap'>
            <div className="max-w-[450px] lg:pr-20 max-sm:order-last">
                <h1 className='font-bold text-2xl mb-4 text-blue-950'>NxLodge</h1>
                <p className='font-medium text-base lg:text-lg mb-6'>NxLodge is a trusted platform connecting students to the best accommodation options, ensuring a seamless and reliable booking process for an optimal campus life experience.</p>
                <div className="flex items-center gap-3 text-sm text-nowrap flex-wrap ">
                    <a href="" className='underline'>Cookies</a>
                    <a href="" className='underline'>Privacy Policy</a>
                    <a href="" className='underline'>Terms & Conditions</a>
                    <a href="" className='underline'>Sitemap</a>
                </div>
            </div>

            <div className="">
                <h2 className='font-semibold text-xl mb-4 text-blue-900'>Company</h2>
                <ul className="text-sm font-medium space-y-3">
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>FAQs</li>
                </ul>
            </div>

            <div className="">
                <h2 className='font-semibold text-xl mb-4 text-blue-900'>Partnership</h2>
                <ul className="text-sm font-medium space-y-3">
                    <li>Become a Partner</li>
                    <li>Landlord Login</li>
                    <li>List Your Lodge</li>
                    <li>Join Our Teams</li>
                </ul>
            </div>

            <div className="">
                <h2 className='font-semibold text-xl mb-4 text-blue-900'>Resources</h2>
                <ul className="text-sm font-medium space-y-3">
                    <li>Help Center</li>
                    <li>Booking Guide</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className="">
                <h2 className='font-semibold text-xl mb-4 text-blue-900'>Follow Us</h2>
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 hover:bg-blue-900 hover:text-white hover:border-white">
                        <FaInstagram />
                    </div>
                    <div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 hover:bg-blue-900 hover:text-white hover:border-white">
                        <FaFacebook />
                    </div>
                    <div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 hover:bg-blue-900 hover:text-white hover:border-white">
                        <FaLinkedin />
                    </div>
                    <div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 hover:bg-blue-900 hover:text-white hover:border-white">
                        <FaTwitter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
