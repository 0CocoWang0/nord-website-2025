'use client';
import React from 'react';
import Image from 'next/image';

const StatCard = ({ number, label, bg, darkOverlay = true }) => {
    return (
        <div className="relative flex flex-col justify-between h-80 p-5 rounded-2xl overflow-hidden">
            {/* Background image */}
            <Image
                src={bg}
                alt={label}
                fill
                className="object-cover object-center"
                priority
            />

            {/* Optional dark gradient overlay */}
            {darkOverlay && (
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 z-2" />
            )}

            {/* Content */}
            <div className="relative z-10 text-white flex flex-col h-full justify-between">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{number}</div>
                <h3 className="text-xl font-bold">{label}</h3>
            </div>
        </div>
    );
};

export default StatCard;