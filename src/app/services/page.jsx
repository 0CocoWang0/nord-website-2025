import React from 'react'

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
const page = () => {
    return (
        <div className='min-h-[40vh] flex items-center relative overflow-hidden pt-16'>
            This is services page (developing!)


        </div>
    )
}

export default page
