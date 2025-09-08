"use client"
import React from 'react'
import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import { Button } from '../components/Buttons';
import BrandIcon from '../components/BrandIcon';
import NordFull from "../../assets/nord_full.svg"
import JobCard from '../components/JobCard';
import JobCardWithTyping from '../components/TypingJobCard';

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
const page = () => {
    return (
        <div>
            <section
                id="hero"
                className="min-h-[80vh] flex items-center relative overflow-hidden pt-16"
                style={{
                    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(136,73,152,0)), url('/photos/team.JPG')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed', // makes it stick while scrolling
                }}
            >
                <div className="container mx-auto px-6 relative z-10 text-left">
                    <h2 className="text-4xl lg:text-7xl font-bold mb-6 text-white">
                        Are you the bright mind we are seeking?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                        <PrimaryButton onClick={() => window.open("https://forms.gle/TDpygfDkcUYwmCLD8", "_blank")}>
                            Apply Now →
                        </PrimaryButton>
                    </div>
                </div>
            </section>

            <div className="p-10 bg-brand-purple">
                <div className='flex flex-col sm:flex-row'>
                    <div className="flex flex-col text-left sm:w-2/3 w-full p-10 gap-5">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white">
                            Join Us
                        </h2>
                        <p className="text-white">
                            Formerly known as the McGill Social Business Network (MSBN), NORD Consulting is McGill’s premier pro-bono consulting practice. For over 10 years, we’ve partnered with 50+ non-profits to deliver data-driven solutions and empower purpose-driven organizations to maximize their impact in the Montreal community.                        </p>
                        <br />
                        <p>At NORD, we believe in learning by doing — tackling real-world challenges with innovation, professionalism, and impact. As a member, you’ll gain hands-on consulting experience, professional training, and the chance to make a meaningful difference.</p>
                    </div>
                    <JobCardWithTyping />
                </div>
            </div>
        </div >

    )
}

export default page


