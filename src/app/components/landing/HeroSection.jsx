'use client';

import { PrimaryButton, SecondaryButton } from '../Buttons';
import Link from 'next/link';
import ParallaxContainer from '../ParallaxBox';
const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
export default function HeroSection() {
    return (
        <ParallaxContainer backgroundSrc="/photos/herobg.png" className="min-h-screen justify-center flex items-center pt-16">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
                    Empowering{' '}
                    <span className="decoration-brand-purple-light underline decoration-dashed">
                        Non-Profits
                    </span>{' '}
                    <br /> through Data-Driven Consulting
                </h1>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <PrimaryButton onClick={() => scrollToSection('about')}>
                        Learn more →
                    </PrimaryButton>

                    <Link href={"/join"}>
                        <SecondaryButton className="text-white">
                            Join Us
                        </SecondaryButton>
                    </Link>
                </div>
            </div>
        </ParallaxContainer>
    );
}