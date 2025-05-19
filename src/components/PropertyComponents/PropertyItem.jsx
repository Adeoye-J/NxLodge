import React from 'react'
import { motion } from 'framer-motion'

const PropertyItem = ({image, title, location, amenities}) => {



    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 5, ease: 1}}
        >
        <div className=''>
            <div className="">
                <img src={image} alt={title} />
            </div>
            <div className="">
                <h2>{title}</h2>
                <span>{location}</span>

                <p>{amenities.map((item) => <span>item</span>)}</p>
            </div>
        </div>
        </motion.div>
    )
}

export default PropertyItem