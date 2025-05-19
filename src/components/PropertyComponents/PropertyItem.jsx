import React from 'react'
import { motion } from 'framer-motion'

const PropertyItem = ({image, category, description, location, amenities, lodgeName, costPerAnnum}) => {



    return (
        <div className=''>
            <div className='border p-4 rounded-lg shadow-lg'>
                <img src={image} alt={lodgeName} className='w-full h-48 object-cover rounded-t-lg' />
                
                <div className="">
                    <div className="">
                        <h2 className='text-xl font-semibold font-sansita text-blue-900 my-2'>{lodgeName}</h2>
                        <div className="flex items-center gap-x-3 gap-y-1 text-blue-950 font-semibold flex-wrap italic text-sm">
                            <span className=''>{location}</span>
                            <span>- {category}</span>
                        </div>
                    </div>
                    <p className='text-gray-600 text-sm my-2'>{description}</p>
                    <p className='text-lg font-bold my-2'>₦{costPerAnnum} <span className='text-xs italic font-semibold'>/annum</span></p>

                    <div className="flex items-center gap-x-3 gap-y-1 text-blue-950 font-semibold flex-wrap">
                        {amenities.map((item) => <span className='px-3 rounded-md bg-blue-900 cursor-pointer text-white text-sm h-8 font-semibold hover:scale-95 flex items-center justify-center'>{item}</span>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyItem