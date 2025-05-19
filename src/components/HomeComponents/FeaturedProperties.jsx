import React from 'react'
import data from '../../data/lodge_data.json'
import PropertyItem from '../PropertyComponents/PropertyItem'
import { Link } from 'react-router-dom'

const FeaturedProperties = () => {

    return (
        <div className='max-w-[1440px] m-auto px-2 md:px-4 my-10'>
            <div className="flex flex-col items-center mt-10 mb-4">
                <h1 className='text-2xl md:text-3xl font-bold text-center mb-2 font-sansita text-blue-950'><span className='text-blue-600'>Featured</span> Properties</h1>
                <div className="h-0.5 w-[150px] rounded-xl bg-blue-950"></div>
            </div>
            <p className='max-sm:text-sm text-center text-gray-600 mb-5 font-semibold italic'>Explore our selection of featured properties that offer the perfect blend of comfort and luxury.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {data.slice(0, 6).map((property, index) => (
                    <PropertyItem 
                        key={index} 
                        amenities={property.amenities} 
                        category={property.category} 
                        costPerAnnum={property.costPerAnnum}
                        description={property.description}
                        image={property.image}
                        location={property.location}
                        lodgeName={property.lodgeName}
                    />
                ))}
            </div>

            <Link to={"/properties"} className='block border-2 border-blue-900 text-blue-900 py-3 px-3 md:w-[300px] rounded-lg m-auto my-6 font-semibold font-sansita text-center hover:scale-95 transition-all duration-500'>Explore All</Link>
        </div>
    )
}

export default FeaturedProperties