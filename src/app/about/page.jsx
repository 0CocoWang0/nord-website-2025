import React from 'react'
import HeroSection from '../components/landing/HeroSection'

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
const page = () => {
    return (
        <div className='min-h-[40vh] flex items-center relative overflow-hidden pt-16'>
            This is about page (developing!)


        </div>
    )
}

export default page
