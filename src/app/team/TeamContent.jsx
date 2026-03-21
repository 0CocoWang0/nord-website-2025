'use client'

import React, { useState } from 'react'
import { Mail } from 'lucide-react'
import Image from 'next/image'
import ParallaxContainer from '../components/ParallaxBox'
import { FadeInBlur, StaggeredFadeIn } from '../components/animations/FadeInBlur'

function MemberCard({ name, role, email, photo }) {
    return (
        <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center relative overflow-hidden">
                {photo ? (
                    <Image src={photo} alt={name} fill className="object-cover object-top" />
                ) : (
                    <span className="text-5xl font-bold text-brand-purple/20">
                        {name.split(' ').map(n => n[0]).join('')}
                    </span>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-brand-navy leading-tight">{name}</h3>
                {role && <p className="text-sm text-brand-purple font-medium mt-1">{role}</p>}
                {email && (
                    <a
                        href={`mailto:${email}`}
                        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 mt-2 transition-colors"
                    >
                        <Mail style={{ width: 12, height: 12 }} className="shrink-0" />
                        <span className="truncate">{email}</span>
                    </a>
                )}
            </div>
        </div>
    )
}

function ExecutiveSection({ presidents, directors }) {
    return (
        <section className="py-14 px-6">
            <div className="container mx-auto max-w-7xl">
                <FadeInBlur>
                    <div className="mb-8">
                        <h2 className="text-brand-navy">Executive Team</h2>
                        <p className="body1 text-gray-500 mt-2">Leading NORD Consulting.</p>
                    </div>
                </FadeInBlur>
                <StaggeredFadeIn>
                    {presidents.length > 0 && (
                        <div className="flex justify-center gap-5 mb-6">
                            {presidents.map((member) => (
                                <div key={member.name} className="w-full sm:w-1/2 lg:w-1/4">
                                    <MemberCard {...member} />
                                </div>
                            ))}
                        </div>
                    )}
                    {directors.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {directors.map((member) => (
                                <MemberCard key={member.name} {...member} />
                            ))}
                        </div>
                    )}
                </StaggeredFadeIn>
            </div>
        </section>
    )
}

function TeamSection({ title, subtitle, members }) {
    return (
        <section className="py-14 px-6">
            <div className="container mx-auto max-w-7xl">
                <FadeInBlur>
                    <div className="mb-8">
                        <h2 className="text-brand-navy">{title}</h2>
                        {subtitle && <p className="body1 text-gray-500 mt-2">{subtitle}</p>}
                    </div>
                </FadeInBlur>
                <StaggeredFadeIn>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {members.map((member) => (
                            <MemberCard key={member.name + (member.role || '')} {...member} />
                        ))}
                    </div>
                </StaggeredFadeIn>
            </div>
        </section>
    )
}

function YearToggle({ years, selectedYear, onSelect }) {
    return (
        <div className="flex justify-center py-8 px-6">
            <div className="inline-flex rounded-full bg-gray-100 p-1">
                {years.map((year) => (
                    <button
                        key={year}
                        onClick={() => onSelect(year)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                            selectedYear === year
                                ? 'bg-brand-purple text-white shadow-sm'
                                : 'text-gray-500 hover:text-brand-navy'
                        }`}
                    >
                        {year}
                    </button>
                ))}
            </div>
        </div>
    )
}

function TeamSections({ teams }) {
    const executive = teams["Executive Team"] || [];
    const presidents = executive.filter(m => m.role?.toLowerCase().includes("president"));
    const directors = executive.filter(m => !m.role?.toLowerCase().includes("president"));

    return (
        <>
            <ExecutiveSection presidents={presidents} directors={directors} />

            <div className="bg-gray-50">
                <TeamSection
                    title="Consulting Team"
                    subtitle="Heads of Consulting, Engagement Managers, Project Managers, and Senior Consultants."
                    members={teams["Consulting Team"] || []}
                />
            </div>

            <TeamSection
                title="Research Team"
                subtitle="Leading research initiatives and analysis."
                members={teams["Research Team"] || []}
            />

            <div className="bg-gray-50">
                <TeamSection
                    title="Junior Consultants"
                    subtitle="Our newest consulting talent."
                    members={teams["Junior Consultants"] || []}
                />
            </div>

            <TeamSection
                title="Junior Analysts"
                subtitle="Supporting research and data-driven insights."
                members={teams["Junior Analysts"] || []}
            />
        </>
    )
}

export default function TeamContent({ allYearsData, availableYears, defaultYear }) {
    const [selectedYear, setSelectedYear] = useState(defaultYear);
    const teams = allYearsData[selectedYear] || {};

    return (
        <div className='bg-white'>
            <ParallaxContainer
                backgroundSrc="/photos/serious-team-pic.JPG"
                className="h-[70vh] justify-start flex items-center pt-16"
                speed={0.5}
                darkOverlay={false}
            >
                <div className="container px-20 relative z-10 text-left">
                    <FadeInBlur className='-translate-y-20'>
                        <h1 className="font-bold mb-6 text-white">
                            Our Team
                        </h1>
                    </FadeInBlur>
                    <div className="text-white flex flex-col sm:flex-row gap-4 justify-start mt-6">
                        <p>The minds behind NORD Consulting.</p>
                    </div>
                </div>
            </ParallaxContainer>

            <YearToggle
                years={availableYears}
                selectedYear={selectedYear}
                onSelect={setSelectedYear}
            />

            <TeamSections teams={teams} />
        </div>
    )
}
