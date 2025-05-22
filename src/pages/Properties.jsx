import React from 'react'
import CustomHero from '../components/GeneralComponents/CustomHero'
import PropertyListing from '../components/PropertyComponents/PropertyListing'
import data from '../data/lodge_data.json'

const Properties = () => {
  return (
    <div>
        <CustomHero />

        <div className="m-auto px-2 md:px-4 my-10">
            <div className="flex flex-col items-center mt-10 mb-4">
                <h1 className='text-2xl md:text-3xl font-bold text-center mb-2 font-sansita text-blue-950'><span className='text-blue-600'>Available</span> Properties</h1>
                <div className="h-0.5 w-[150px] rounded-xl bg-blue-950"></div>
            </div>
            <p className='max-sm:text-sm text-center text-gray-600 mb-5 font-semibold italic'>Explore our selection of available properties that offer the perfect blend of comfort and luxury.</p>
        </div>

        {/* Filter Options by occupancy for Single rooms, self contain, two bedroom flat; filter options by cost range*/}

        <div className="m-auto px-2 md:px-4 my-10">
            <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4">
                <div className="flex items-center gap-x-3">
                    <label htmlFor="occupancy" className='font-semibold text-blue-950'>Occupancy:</label>
                    <select name="occupancy" id="occupancy" className='border-2 border-blue-900 rounded-md p-2'>
                        <option value="">All</option>
                        <option value="single">Single Room</option>
                        <option value="self_contain">Self Contain</option>
                        <option value="two_bedroom">Two Bedroom Flat</option>
                    </select>
                </div>

                <div className="flex items-center gap-x-3">
                    <label htmlFor="cost" className='font-semibold text-blue-950'>Cost:</label>
                    <select name="cost" id="cost" className='border-2 border-blue-900 rounded-md p-2'>
                        <option value="">All</option>
                        <option value="<1000000">Less than ₦1,000,000</option>
                        <option value="<2000000">Less than ₦2,000,000</option>
                        <option value="<3000000">Less than ₦3,000,000</option>
                    </select>
                </div>
            </div>
        </div>
        
        <div className="m-auto px-2 md:px-4 my-10">
            <PropertyListing data={data} />
        </div>
    </div>
  )
}

export default Properties