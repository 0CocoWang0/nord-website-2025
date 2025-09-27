'use client';
import React from 'react';
import { PrimaryButton, Button } from '../components/Buttons';
import JobCardWithTyping from '../components/TypingJobCard';
import Image from 'next/image';
import ParallaxContainer from '../components/ParallaxBox';
import { FadeInBlur, StaggeredFadeIn } from '../components/animations/FadeInBlur';
import { ArrowRight, Users, BarChart3, Heart, GraduationCap, Calendar } from 'lucide-react';
import Link from 'next/link';
import StatCard from '../components/StatCard';

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const services = [
    {
        id: 'consulting',
        title: 'Consulting',
        icon: <BarChart3 className="w-8 h-8" />,
        description: 'Pro-bono, data-driven solutions tailored to the unique needs of non-profits and social enterprises.',
        fullDescription: 'Our consulting practice provides pro-bono, data-driven solutions tailored to the unique needs of non-profits and social enterprises. From volunteer management and funding diversification to program redesign and impact measurement, our teams work closely with clients to translate complex challenges into actionable strategies. Every project is designed to deliver practical recommendations, supported by rigorous analysis, that strengthen organizational capacity and create lasting social value.',
        features: [
            'Volunteer Management Systems',
            'Funding Diversification Strategies',
            'Program Redesign & Optimization',
            'Impact Measurement Frameworks',
            'Organizational Capacity Building'
        ],
        bgImage: '/photos/herobg.png'
    },
    {
        id: 'research',
        title: 'Research',
        icon: <Users className="w-8 h-8" />,
        description: 'Sector-wide insights through research reports and analyses for Montreal\'s non-profit community.',
        fullDescription: 'Launched in 2024, this initiative leverages our project experience and data expertise to generate sector-wide insights. Through research reports and analyses, we aim to equip Montreal\'s non-profit community with the tools to track, evaluate, and amplify their impact.',
        features: [
            'Sector-Wide Impact Studies',
            'Data-Driven Research Reports',
            'Community Needs Assessments',
            'Best Practice Documentation',
            'Impact Evaluation Tools'
        ],
        bgImage: '/photos/servicebg.png'
    },
    {
        id: 'community',
        title: 'Community Service',
        icon: <Heart className="w-8 h-8" />,
        description: 'Active contribution to Montreal\'s social innovation ecosystem through collaborative solutions.',
        fullDescription: 'Beyond consulting, we actively contribute to the city\'s social innovation ecosystem, whether by volunteering our time, sharing resources, or co-creating data solutions that drive collective progress.',
        features: [
            'Volunteer Time Commitment',
            'Resource Sharing Programs',
            'Collaborative Data Solutions',
            'Social Innovation Projects',
            'Community Partnership Building'
        ],
        bgImage: '/photos/people.png'
    },
    {
        id: 'training',
        title: 'Training',
        icon: <GraduationCap className="w-8 h-8" />,
        description: 'Exclusive workshops and training with leading firms like McKinsey, KPMG, Deloitte, and Accenture.',
        fullDescription: 'To ensure our consultants remain lifelong learners, we partner with leading firms such as McKinsey, KPMG, Deloitte, and Accenture. These collaborations bring exclusive workshops and training sessions led by industry professionals, giving our members access to the tools, frameworks, and best practices used at the highest levels of consulting. Through these experiences, NORD equips consultants with the skills to tackle real-world problems, deliver data-driven insights, and grow as collaborative teammates and future leaders, all while upholding the highest standards of professionalism and impact.',
        features: [
            'Industry Professional Workshops',
            'Consulting Framework Training',
            'Data Analysis Best Practices',
            'Leadership Development',
            'Professional Standards Excellence'
        ],
        bgImage: '/photos/workshop.png'
    },
    {
        id: 'events',
        title: 'Events',
        icon: <Calendar className="w-8 h-8" />,
        description: 'Annual conferences connecting students with industry leaders, including "Being Black in Consulting".',
        fullDescription: 'Every year, NORD Consulting hosts conferences that bring students together with industry leaders. One of our most notable initiatives is Being Black in Consulting, launched in partnership with the Black Students\' Network (BSN) and JED Consulting. The 2023 edition, held at Le Mount Stephen Hotel, gathered Black students from across McGill to connect with professionals from firms such as Accenture, McKinsey, KPMG, and Deloitte. These events not only foster dialogue on diversity and inclusion in consulting but also create meaningful opportunities for students to build networks and gain insights into the industry.',
        features: [
            'Annual Industry Conferences',
            'Diversity & Inclusion Dialogues',
            'Professional Networking Events',
            'Student-Industry Connections',
            'Career Development Workshops'
        ],
        bgImage: '/photos/home-clientbg.png'
    }
];


const Page = () => {
    return (
        <div>
            {/* Hero Section with Parallax */}
            <ParallaxContainer
                backgroundSrc="/photos/servicebg.png"
                className="h-[70vh] justify-center flex items-center pt-16"
                speed={0.5} // adjust parallax speed if needed
                darkOverlay={false}
            >
                <div className="container px-20 relative z-10 text-left">
                    <FadeInBlur className='-translate-y-20'>
                        <h1 className="font-bold mb-6 text-white">
                            Our Services
                        </h1>
                    </FadeInBlur>
                    <div className="text-white flex flex-col sm:flex-row gap-4 justify-start mt-6">
                        <p>See how we specialize.</p>
                    </div>
                </div>
            </ParallaxContainer>

            {/* Services Overview */}
            <section className="py-20 bg-brand-purple">
                <div className="container mx-auto px-6">
                    <FadeInBlur delay={0} className="text-left mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            What We Offer
                        </h2>
                        <p className=" text-white mx-auto">
                            From strategic consulting to community service, our comprehensive approach
                            ensures sustainable impact for organizations and meaningful development for our consultants.
                        </p>
                    </FadeInBlur>
                    <div className="flex flex-col gap-4">
                        <Button variant={"solid"} className="w-2/3">Consulting</Button>
                        <Button variant={"solid"} className="w-2/3">Research</Button>
                        <Button variant={"solid"} className="w-2/3">Community Service</Button>
                    </div>

                </div>
            </section>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 p-20">
                {services.map((service, index) => (
                    <FadeInBlur key={service.id} delay={index * 100}>
                        <div style={{
                            backgroundImage: `url(${service.bgImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                            className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8  group hover:-translate-y-2">

                            <div className='flex justify-between w-full mb-30'>
                                <h3 className="text-2xl font-bold text-white">
                                    {service.title}
                                </h3>
                                <div className='group-hover:translate-x-2 transition-all duration-300 text-white'>→</div>
                            </div>
                            <div className='flex flex-col bg-white p-6 text-black rounded-2xl'>
                                <p className=" leading-relaxed">
                                    {service.description}
                                </p>

                            </div>
                        </div>
                    </FadeInBlur>
                ))}
            </div>

            {/* Detailed Service Sections */}
            {services.map((service, index) => (
                <section key={service.id} className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <div className="container mx-auto px-6">
                        <div className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                            }`}>
                            <div className="flex-1">
                                <FadeInBlur delay={0}>
                                    <div className="flex items-center mb-6">
                                        <div className="text-brand-purple mr-4">
                                            {service.icon}
                                        </div>
                                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                                            {service.title}
                                        </h2>
                                    </div>
                                </FadeInBlur>

                                <FadeInBlur delay={200}>
                                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                        {service.fullDescription}
                                    </p>
                                </FadeInBlur>

                                <FadeInBlur delay={400}>
                                    <div className="mb-8">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h4>
                                        <ul className="space-y-3">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-gray-700">
                                                    <div className="w-2 h-2 bg-brand-purple rounded-full mr-3"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </FadeInBlur>
                            </div>

                            <div className="flex-1">
                                <FadeInBlur delay={600}>
                                    <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/80 to-brand-purple-dark/60 z-10"></div>
                                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                            <div className="text-gray-400 text-center">
                                                <div className="text-4xl mb-2">{service.icon}</div>
                                                <div className="text-lg font-medium">{service.title} Visual</div>
                                            </div>
                                        </div>
                                    </div>
                                </FadeInBlur>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Call to Action Section */}
            <div className="w-full flex flex-col sm:flex-row relative h-[30vh] mb-20">
                <div className='flex flex-col gap-4 w-2/3 absolute left-1/2 bottom-10 -translate-x-1/2'>
                    <Link href={"/join"} className='flex w-full'>
                        <Button
                            variant="solid"
                            className="z-2 flex justify-between items-center w-full"
                        >
                            <p>Join Us</p>
                            <p>→</p>
                        </Button>
                    </Link>
                    <Link href={"/join"} className='flex w-full'>
                        <Button
                            variant="solid"
                            className="z-2 flex justify-between items-center w-full"
                        >
                            <p>Contact Us</p>
                            <p>→</p>
                        </Button>
                    </Link>

                </div>
                <div className="flex justify-start sm:w-1/2 h-full w-full">
                    <img src="/photos/home-clientbg.png" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-1 h-fill bg-gradient-to-r from-brand-purple-dark/100 to-brand-purple/100 justify-center p-10">
                    <FadeInBlur delay={50} className="inline-block -translate-y-20">
                        <p className="text-white text-2xl font-bold h-fit">Ready to partner with us?</p>
                    </FadeInBlur>
                </div>
            </div>




        </div>
    );
};

export default Page;