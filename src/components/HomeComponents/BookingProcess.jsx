import React from 'react'
import { SiAzuredataexplorer } from "react-icons/si";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const BookingProcess = () => {

    const steps = [
        {
            step: 1,
            icon: <SiAzuredataexplorer className='text-4xl text-yellow-500' />,
            title: "Discover Lodges",
            details: "Explore a wide range of available lodges tailored to your preferences, including location, price, and amenities. Start planning your stay with ease."
        },
        {
            step: 2,
            icon: <HiOutlineClipboardCheck className='text-4xl text-yellow-500' />,
            title: "Submit Interest",
            details: "Found a lodge you like? Submit your interest by filling out a simple form. Our admin team will review your request and check availability."
        },
        {
            step: 3,
            icon: <AiOutlineCheckCircle className='text-4xl text-yellow-500' />,
            title: "Get Approval",
            details: "Once approved, you’ll receive a confirmation along with payment details. We'll guide you through the next steps to secure your lodge."
        },
        {
            step: 4,
            icon: <FaMoneyCheckAlt className='text-4xl text-yellow-500' />,
            title: "Make Payment",
            details: "Proceed to make your payment through secure channels. Once your payment is validated, the lodge will be reserved just for you."
        },
        {
            step: 5,
            icon: <IoLocationSharp className='text-4xl text-yellow-500' />,
            title: "Visit the Lodge",
            details: "A representative from the team will take you to the lodge location to finalize your booking and ensure it meets your expectations."
        },
    ]

    return (
        <div className='flex flex-col gap-4 my-20 lg:mx-10 p-5 lg:py-20 lg:px-20 bg-blue-800 text-white lg:rounded-[100px]'>
            <h2 className='font-bold text-2xl text-center lg:text-left lg:text-4xl mb-6'>Booking <span className='text-yellow-500'>Process</span></h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-10 gap-y-12">
                {
                    steps.map((item) => (
                        <div className="flex flex-col gap-4" key={item.step}>
                            <div className="">
                                {item.icon}
                            </div>
                            <h3 className='text-lg lg:text-xl font-bold'>Step {item.step}</h3>
                            <h2 className='text-xl lg:text-3xl font-semibold'>{item.title}</h2>
                            <p className='text-base lg:text-lg'>{item.details}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BookingProcess