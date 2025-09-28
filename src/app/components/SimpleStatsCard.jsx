'use client';
import React, { use, useEffect, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ number, label }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 }); //trigger when 0.5 is visible


    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const end = Number(number);
        if (end === 0) return;

        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const value = Math.min(Math.floor((progress / 1500) * end), end);
            setCount(value);
            if (progress < 1500) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [inView, number, 1500])
    return (
        <div ref={ref} className="relative flex flex-col items-center p-5 rounded-2xl overflow-hidden">
            {/* Content */}
            <div className="relative z-10 text-brand-navy flex flex-col h-full justify-center">
                <div className="text-7xl md:text-5xl lg:text-7xl font-bold mb-2">{count}+</div>
                <h3 className="text-xl">{label}</h3>
            </div>
        </div>
    );
};

export default StatCard;