'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ParallaxContainer({ backgroundSrc, children, speed = 0.3, className = '' }) {
    const bgRef = useRef(null);

    useEffect(() => {
        let animationFrame;

        const handleScroll = () => {
            cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(() => {
                if (bgRef.current) {
                    const offsetY = window.pageYOffset;
                    bgRef.current.style.transform = `translateY(${offsetY * speed}px)`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrame);
        };
    }, [speed]);

    return (
        <section className={`relative overflow-hidden ${className}`}>
            <div
                ref={bgRef}
                className="absolute inset-0"
                style={{ willChange: 'transform' }}
            >
                <Image
                    src={backgroundSrc}
                    alt="Parallax Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>
            <div className="relative z-10">
                {children}
            </div>
        </section>
    );
}