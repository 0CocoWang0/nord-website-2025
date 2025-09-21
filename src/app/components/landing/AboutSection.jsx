"use client"
import BrandIcon from '../BrandIcon';
import StatCard from "../StatCard"
import NordFull from "../../../assets/nord_full.svg";
import { Button } from '../Buttons';
import { FadeInBlur } from '../animations/FadeInBlur';

export default function AboutSection() {
    const stats = [
        { number: '20+', label: 'Interdisciplinary Academic Majors', bg: '/photos/library.png' },
        { number: '35+', label: 'Projects Delivered', bg: '/photos/workshop.png' },
        { number: '1400+', label: 'Student Engaged', bg: '/photos/people.png' }
    ];

    return (
        <section id="about" className='h-full mb-20'>

            <div className='bg-brand-light flex flex-col sm:flex-row mb-20 gap-6'>
                <div className="flex flex-col text-left sm:w-1/2 w-full p-20 gap-5">
                    <h2 className="text-4xl lg:text-5xl font-bold text-black">
                        About Us
                    </h2>
                    <p className="text-black">
                        We are a forward-thinking consultancy dedicated to helping organizations achieve their strategic objectives through innovative solutions and expert guidance.
                    </p>
                    {/*<Button variant={"ghost"} className="w-fit">Learn more →</Button >*/}
                </div>
                <div className="flex-1 h-fill bg-brand-purple text-white flex justify-center p-10 items-center object-cover">
                    <div className='w-2/3 h-2/3'>
                        <NordFull />
                    </div>
                </div>
            </div>


            <div className="flex flex-col text-left w-full px-6 gap-10">
                <div className="grid md:grid-cols-3 gap-8 sm:px-20">
                    {stats.map((stat, index) => (
                        <FadeInBlur key={index} className='-translate-y-20'>
                            <StatCard number={stat.number} label={stat.label} bg={stat.bg} darkOverlay={true} />
                        </FadeInBlur>
                    ))}
                </div>
            </div>



        </section >
    );
}