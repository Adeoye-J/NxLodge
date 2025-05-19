import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ScissorsIcon, WindIcon } from 'lucide-react'

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <nav className='flex items-center justify-around py-2 md:py-4 fixed top-0 left-0 w-full bg-white z-10'>
            <div className="">
                <h2 className='font-bold text-xl md:text-2xl text-blue-800'>NxLodge</h2>
            </div>

            <ul className="hidden md:flex gap-5">
                <li className='font-semibold text-blue-900 hover:text-blue-800 transition-all duration-300 cursor-pointer'><Link to={'/home'}>Home</Link></li>
                <li className='font-semibold text-blue-900 hover:text-blue-800 transition-all duration-300 cursor-pointer'><Link to={'/properties'}>Properties</Link></li>
                <li className='font-semibold text-blue-900 hover:text-blue-800 transition-all duration-300 cursor-pointer'><Link to={'/services'}>Services</Link></li>
                <li className='font-semibold text-blue-900 hover:text-blue-800 transition-all duration-300 cursor-pointer'><Link to={'/contact-us'}>Contact Us</Link></li>
            </ul>

            <div className="hidden md:flex items-center gap-4">
                <button className='bg-blue-900 text-white p-3 rounded-md text-sm font-semibold'><Link to={'/agents-dashboard'}>Post Property</Link></button>

                <button className='font-semibold text-blue-900 hover:text-blue-800 transition-all duration-300 cursor-pointer'><Link to={'/sign-up'}>Sign Up</Link></button>
                <button className='font-semibold text-blue-900 hover:text-blue-800 transition-all duration-300 cursor-pointer'><Link to={'/log-in'}>Log In</Link></button>
            </div>

            <div className=" md:hidden flex items-center justify-between">
                <button 
                    className="md:hidden flex items-center justify-center p-2 text-blue-950 hover:text-blue-800 transition-all duration-300 cursor-pointer"
                    onClick={handleMenuToggle}
                >
                    {
                        isMenuOpen 
                        ?   <ScissorsIcon className="w-5.5 h-5.5 cursor-pointer" /> 
                        :   <WindIcon className="w-5.5 h-5.5 cursor-pointer" />
                    }
                </button>

                {
                    isMenuOpen && (
                        <div className={`fixed top-[3.5rem] right-0 w-3/4 h-screen bg-white shadow-lg z-20 border-2 border-blue-900 md:hidden`}>
                            <ul className="flex flex-col items-center justify-center">
                                <li className='font-semibold text-blue-900 hover:text-blue-800 transition-all duration-300 cursor-pointer w-full text-center border-b border-blue-900'><NavLink className=' py-3 block' to={'/home'} onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
                                <li className='font-semibold text-blue-900 hover:text-blue-800 transition-all duration-300 cursor-pointer w-full text-center border-b border-blue-900'><NavLink className=' py-3 block' to={'/properties'} onClick={() => setIsMenuOpen(false)}>Properties</NavLink></li>
                                <li className='font-semibold text-blue-900 hover:text-blue-800 transition-all duration-300 cursor-pointer w-full text-center border-b border-blue-900'><NavLink className=' py-3 block' to={'/services'} onClick={() => setIsMenuOpen(false)}>Services</NavLink></li>
                                <li className='font-semibold text-blue-900 hover:text-blue-800 transition-all duration-300 cursor-pointer w-full text-center border-b border-blue-900'><NavLink className=' py-3 block' to={'/contact-us'} onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink></li>
                            </ul>
                            <div className="flex flex-col items-center justify-center">
                                <button className='font-semibold text-blue-900 hover:text-blue-800 transition-all duration-300 cursor-pointer w-full text-center border-b border-blue-900'><NavLink className='py-3 block' to={'/sign-up'} onClick={() => setIsMenuOpen(false)}>Sign Up</NavLink></button>
                                <button className='font-semibold text-blue-900 hover:text-blue-800 transition-all duration-300 cursor-pointer w-full text-center border-b border-blue-900'><NavLink className='py-3 block' to={'/log-in'} onClick={() => setIsMenuOpen(false)}>Log In</NavLink></button>
                                <button className='bg-blue-900 text-white p-3 rounded-md text-sm font-semibold my-5'><Link to={'/agents-dashboard'} onClick={() => setIsMenuOpen(false)}>Post Property</Link></button>
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default NavBar