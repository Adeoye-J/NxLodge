import React, { useState } from 'react'
import data from "../../data/lodge_data.json"
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import {easeIn, motion} from "framer-motion"

const FirstSection = () => {

    const [visibleData, setVisibleData] = useState(data.slice(0, 3))
    const [startIndex, setStartIndex] = useState(0);

    // const handleNext = () => {
    //     const nextIndex = (startIndex + 1) % data.length
    //     const updatedItems = [
    //         data[nextIndex],
    //         data[(nextIndex + 1) % data.length],
    //         data[(nextIndex + 2) % data.length]
    //     ]
    //     setVisibleData(updatedItems)
    //     setStartIndex(nextIndex)
    // }

    // const handlePrevious = () => {
    //     const prevIndex = (startIndex - 1 + data.length) % data.length
    //     const updatedItems = [
    //         data[prevIndex],
    //         data[(prevIndex + 1) % data.length],
    //         data[(prevIndex + 2) % data.length]
    //     ]
    //     setVisibleData(updatedItems)
    //     setStartIndex(prevIndex)
    // }

    return (
        <div className='flex flex-col gap-4 m-5 lg:my-20 lg:mx-20'>
            <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-4">
                <h2 className='font-bold text-3xl text-blue-950'>Featured Lodges</h2>
            </div>
            <div className="h-10 flex items-center gap-2">
                <p className='flex items-center border border-blue-900 px-3 rounded-md bg-blue-900 cursor-pointer text-white h-8 font-bold hover:scale-95'>Akure</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    visibleData.map((item) => (
                        <div className='border-2 shadow-lg rounded-3xl min-w-[200px]'>
                            <div className="h-64 rounded-t-3xl overflow-hidden cursor-pointer">
                                <img src={item.image} alt={item.lodgeName} className='h-full w-full object-cover rounded-t-3xl hover:scale-105 transition-all duration-500' />
                            </div>
                            <div className="flex flex-col gap-5 p-3 mb-2">
                                <div className="flex flex-col gap-1">
                                    <h2 className='font-semibold text-2xl text-blue-800'>{item.lodgeName}</h2>
                                    <span className='text-gray-600 font-semibold'>{item.location}</span>
                                </div>
                                <ul className='flex items-center gap-x-3 gap-y-1 text-blue-950 font-semibold flex-wrap'>{item.amenities.map((item) => <li className=''>{item}</li>)}</ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FirstSection