"use client"
import React from 'react'

const StatCard = ({ number, label, bg }) => {
    return (
        <div
            className="flex flex-col justify-between h-80 p-5 rounded-2xl bg-cover bg-center"
            style={{
                backgroundImage: `
                    linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(136,73,152,0)),
                    url(${bg})
                `
            }}
        >
            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{number}</div>
            <div className='bg-white rounded-2xl flex justify-center items-center p-5 h-1/3'>
                <p className="h-fit text-black font-bold text-center">{label}</p>
            </div>
        </div>
    )
}

export default StatCard