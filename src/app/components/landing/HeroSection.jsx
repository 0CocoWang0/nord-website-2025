'use client';

import { PrimaryButton, SecondaryButton } from '../Buttons';
import ParallaxContainer from '../ParallaxBox';
import { FadeInBlur } from '../animations/FadeInBlur';
import Link from 'next/link';

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
                {/* Classic McKinsey-style centered headline with modular animations */}
                <h1 className="font-bold text-white">
                    <FadeInBlur delay={50} className="inline-block -translate-y-20">
                        Empowering
                    </FadeInBlur>
                    <br />

                    <FadeInBlur delay={100} className="inline-block -translate-y-20">
                        <div className='md:-translate-x-30 -translate-x-10 inline-block'>Non-Profits</div>
                    </FadeInBlur>
                    <br />

                    <FadeInBlur delay={150} className="inline-block -translate-y-20">
                        through
                    </FadeInBlur>
                    <br />

                    <FadeInBlur delay={200} className="inline-block -translate-y-20">
                        <div className='md:translate-x-30 translate-x-10 inline-block'>Data-Driven</div>


                    </FadeInBlur>
                    <br />

                    <FadeInBlur delay={250} className="inline-block -translate-y-20">
                        Consulting
                    </FadeInBlur>
                </h1>

                {/* Single, prominent CTA button with animation */}
                <FadeInBlur delay={500} className='-translate-x-10 mt-10'>
                    <div className='inline-flex gap-5'>
                        <PrimaryButton
                            onClick={() => scrollToSection('about')}
                        >
                            Get started
                        </PrimaryButton>
                        <Link href={"/join"}>
                            <SecondaryButton className="text-white px-6 py-3">
                                Join Us →
                            </SecondaryButton>
                        </Link>
                    </div>
                </FadeInBlur>
            </div>
        </ParallaxContainer>
    );
}