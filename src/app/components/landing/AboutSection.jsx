"use client"
import BrandIcon from '../BrandIcon';
import StatCard from "../StatCard"
import NordFull from "../../../assets/nord_full.svg";
import { Button } from '../Buttons';

export default function AboutSection() {
    const stats = [
        { number: '20+', label: 'Interdisciplinary Academic Majors', bg: '/photos/library.png' },
        { number: '35+', label: 'Projects Delivered', bg: '/photos/workshop.png' },
        { number: '1400', label: 'Student Engaged', bg: 'photos/people.png' }
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className='flex flex-col sm:flex-row mb-20'>
                    <div className="flex flex-col text-left sm:w-2/3 w-full p-10 gap-5">
                        <h2 className="text-4xl lg:text-5xl font-bold text-black">
                            About Us
                        </h2>
                        <p className="text-black">
                            We are a forward-thinking consultancy dedicated to helping organizations achieve their strategic objectives through innovative solutions and expert guidance.
                        </p>
                        <Button variant={"ghost"} className="w-fit">Learn more →</Button>
                    </div>
                    <div className="flex-1 h-fill bg-brand-purple p-10 lg:p-20 text-white flex justify-center items-center object-cover">
                        <NordFull />
                    </div>
                </div>


                <div className="flex flex-col text-left w-full p-10 gap-10">
                    <h2 className="text-4xl lg:text-5xl font-bold text-black">
                        Our Presence
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {stats.map((stat, index) => (
                            <StatCard key={index} number={stat.number} label={stat.label} bg={stat.bg} />
                        ))}
                    </div>
                </div>



            </div>
        </section>
    );
}