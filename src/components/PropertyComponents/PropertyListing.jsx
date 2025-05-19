import React from 'react'
import { motion } from 'framer-motion'
import PropertyItem from './PropertyItem'

const PropertyListing = ({data}) => {
    return (
        <motion.div
            initial={{rotate: "0deg"}}
            animate={{rotate: "180deg"}}
            // transition={{duration: 5, ease: 1}}
        >
            <div className="">
                {
                    data.map((item) => (
                        <PropertyItem image={item.image} location={item.location} title={item.lodgeName} amenities={item.amenities} />
                    ))
                }
            </div>
        </motion.div>
    )
}

export default PropertyListing