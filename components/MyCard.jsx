'use client'

import React from 'react'
import { FaHeart, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import {Card} from '@radix-ui/themes';

const MyCard = () => {
    const handleClick = (e) =>{
        e.preventDefault();
        console.log('clicked');
    }
    return (
        
            <Card variant='surface' className="bg-white mr-4 p-4 rounded-xl shadow-md w-80 mx-3">
                <div className="mb-4">
                    <img src="https://img4.nbstatic.in/tr:w-350/65e5ed8c10a1d5000c8e8cf3.jpg" alt="Event" className="w-full h-40 object-cover rounded-lg" />
                </div>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Design Tour Sylhet 2023</h3>
                    <div className="p-1 rounded-full">
                        <FaHeart className="text-gray-400 size-5" />
                    </div>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                    <FaCalendarAlt className="mr-2" />
                    <span>1 - 3 January 2023 (3 days)</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>Balishira Resort, Sreemangal, Moulvibazar</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">
                        <span className="font-semibold">50</span>/<span>400</span> tickets available
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">$50.00 <span className="text-sm font-normal">/per person</span></div>
                    <button onClick={handleClick} className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">DIRECTION</button>
                </div>
            </Card>
    )
}

export default MyCard