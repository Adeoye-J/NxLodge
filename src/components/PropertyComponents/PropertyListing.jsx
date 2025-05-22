import React from 'react'
import { motion } from 'framer-motion'
import PropertyItem from './PropertyItem'

const PropertyListing = ({data}) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {data.map((property, index) => (
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
    )
}

export default PropertyListing