'use client';

import { useState, useEffect } from 'react';
import { PrimaryButton, SecondaryButton } from '../Buttons';
import BrandIcon from '../BrandIcon';

export default function HeroSection() {
    const [currentWord, setCurrentWord] = useState(0);
    const [currentChar, setCurrentChar] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState('');

    const words = ['Innovation', 'Excellence', 'Growth', 'Success'];

    // Typing animation effect
    useEffect(() => {
        const typeWriter = () => {
            const word = words[currentWord];

            if (isDeleting) {
                setDisplayText(word.substring(0, currentChar - 1));
                setCurrentChar(prev => prev - 1);
            } else {
                setDisplayText(word.substring(0, currentChar + 1));
                setCurrentChar(prev => prev + 1);
            }

            let typeSpeed = isDeleting ? 50 : 150;

            if (!isDeleting && currentChar === word.length) {
                typeSpeed = 2000;
                setIsDeleting(true);
            } else if (isDeleting && currentChar === 0) {
                setIsDeleting(false);
                setCurrentWord((prev) => (prev + 1) % words.length);
                typeSpeed = 500;
            }

            setTimeout(typeWriter, typeSpeed);
        };

        const timer = setTimeout(typeWriter, 100);
        return () => clearTimeout(timer);
    }, [currentChar, currentWord, isDeleting, words]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="bg-[url('/photos/herobg.png')] bg-cover bg-center min-h-screen flex items-center bg-gradient-to-br from-purple-50 to-indigo-100 relative overflow-hidden pt-16">
            <img className='' />
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">


                    <h1 className="text-center text-5xl lg:text-7xl font-bold mb-6 text-white">
                        Empowering <span className='decoration-brand-purple-light underline decoration-dashed'>Non-Profits</span> <br /> through Data-Driven Consulting
                        <br />

                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <PrimaryButton onClick={() => scrollToSection('about')} >Learn more →</PrimaryButton>
                        <SecondaryButton className="text-white" onClick={() => scrollToSection('contact')}>
                            Join Us
                        </SecondaryButton>
                    </div>

                    {/* 
                
                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="h-64 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-xl mb-4 flex items-center justify-center">
                                    <BrandIcon size="large" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Excellence</h3>
                                <p className="text-gray-600">Delivering results that matter to your business</p>
                            </div>
                        </div>
                        */}

                </div>
            </div>
        </section>
    );
}