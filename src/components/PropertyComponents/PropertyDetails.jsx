import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../../data/lodge_data.json"
import PropertyListing from './PropertyListing'

const PropertyDetails = () => {

    const {lodgeName}  = useParams()

    const lodgeItem = data.find((item) => item.lodgeName === lodgeName)

    const similarCategories = data.filter((item) => item.category === lodgeItem.category && item.lodgeName !== lodgeItem.lodgeName)

    return (
        <div className='mt-20 mb-10 w-full'>
            <div className="mx-4 md:mx-10">
                <img src={lodgeItem.image} alt="Lodge Image" className='w-full h-[300px] md:h-[500px] rounded-md object-cover' />
            </div>
            
            <div className="mx-4 md:mx-10 mt-10 flex flex-col lg:flex-row items-center md:items-start justify-between gap-5">

                <div className="space-y-4">

                    <div className="space-y-2">
                        <h2 className='font-bold text-xl md:text-2xl lg:text-3xl font-sansita flex items-center gap-5'>
                            {lodgeItem.lodgeName}
                            {
                                lodgeItem.availability
                                ? <span className='text-green-600 italic text-sm'>Available</span>
                                : <span className='text-red-600 italic text-sm'>Not Available</span>
                            }
                        </h2>
                        <p className='text-gray-700 font-medium italic text-lg'>{lodgeItem.description}</p>
                        <p className='text-blue-700 font-semibold text-lg italic'>₦{lodgeItem.costPerAnnum}/annum</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <h3 className='font-bold text-lg md:text-xl'>Property <span className='text-blue-600'>Features</span>:</h3>
                            <ul className='list-none flex flex-col gap-2'>
                                {
                                    lodgeItem.amenities.map((amenity, index) => (
                                        <li className='flex items-center gap-1' key={index}>
                                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                            <p className='font-semibold italic text-gray-700'>{amenity}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h3 className='font-bold text-lg md:text-xl'>Other <span className='text-blue-600'>Details</span>:</h3>
                            <div className="flex flex-col gap-2">
                                <p className='italic font-medium text-gray-700'>Cost per Annum: <span className='text-blue-800'>₦{lodgeItem.costPerAnnum}</span></p>
                                <p className='italic font-medium text-gray-700'>Location: <span className='text-blue-800'>{lodgeItem.location}</span></p>
                                <p className='italic font-medium text-gray-700'>Category: <span className='text-blue-800'>{lodgeItem.category}</span></p>
                                <p className='italic font-medium text-gray-700'>Available: <span className='text-blue-800'>{lodgeItem.availability ? "Yes" : "No"}</span></p>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className="space-y-2 flex flex-col items-center">
                    <div className="">
                        <img src={lodgeItem.agentImage} alt="Agents Image" className='w-52 h-52 object-cover rounded-full' />
                    </div>
                    <p className='flex flex-col items-center font-bold text-sm text-blue-600'>Agent Name: <span className='text-black italic text-base md:text-lg'>{lodgeItem.agentName}</span></p>
                    <button className='border-2 border-blue-900 text-blue-900 py-3 px-3 max-w-[300px] md:w-full rounded-lg m-auto my-6 font-semibold font-sansita text-center hover:scale-95 transition-all duration-500'>Contact Agent</button>
                </div>
                
            </div>
            
            {
                similarCategories.length !== 0 &&
                <div className="">
                    <div className="flex flex-col items-center mt-10 mb-4">
                        <h1 className='text-2xl md:text-3xl font-bold text-center mb-2 font-sansita text-blue-950'><span className='text-blue-600'>Similar</span> Categories</h1>
                        <div className="h-0.5 w-[150px] rounded-xl bg-blue-950"></div>
                    </div>

                    <div className="m-auto px-2 md:px-4 my-10">
                        <PropertyListing data={similarCategories.slice(0, 3)} />
                    </div>
                </div>
            }
        </div>
    )
}

export default PropertyDetails