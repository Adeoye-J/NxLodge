import React from 'react'
import { motion } from 'framer-motion'
import PropertyItem from './PropertyItem'
import { Link } from 'react-router-dom'

const PropertyListing = ({data}) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {data.map((property, index) => (
                <Link to={`/properties/${property.lodgeName}`}>
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
                </Link>
            ))}
        </div>
    )
}

export default PropertyListing