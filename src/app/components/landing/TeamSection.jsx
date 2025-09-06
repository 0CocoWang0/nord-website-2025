"use client"
import { Users, Award } from 'lucide-react';

function TeamCard({ name, description, role }) {
    return (
        <div className="bg-purple-100 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{name}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-200 to-indigo-300 rounded-xl h-64 flex items-center justify-center">
                    <Users className="w-16 h-16 text-purple-600" />
                </div>
            </div>
        </div>
    );
}

function TestimonialCard({ quote, author, date, role }) {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <p className="text-gray-700 mb-6 leading-relaxed">"{quote}"</p>
            <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                    <p className="font-bold text-gray-900">{author}</p>
                    <p className="text-sm text-gray-500">{date}</p>
                </div>
            </div>
            <div className="mt-4 text-xs text-gray-400 uppercase tracking-wide">{role}</div>
        </div>
    );
}

function AlumniCard({ title, description, count }) {
    return (
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl font-bold mb-4">{count}</div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="bg-white/10 rounded-lg h-32 flex items-center justify-center">
                <Award className="w-12 h-12 text-white/60" />
            </div>
        </div>
    );
}

function TeamMemberCard({ name, role }) {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                    <p className="font-bold text-gray-900">{name}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{role}</p>
                </div>
            </div>
        </div>
    );
}

export default function TeamSection() {
    return (
        <section id="team" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                        Executive Team
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Meet the experienced leaders driving our success and your results
                    </p>
                </div>

                <div className="mb-16">
                    <TeamCard
                        name="Executive Team"
                        description="We do this and that. A short description of the team's expertise and focus areas."
                        role="Leadership"
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <TestimonialCard
                        quote="This is some testimonials. This is some testimonials. This is some testimonials. This is some testimonials."
                        author="Somebody's name"
                        date="Jul 2, 2023"
                        role="TEAM THE CASE STUDY"
                    />
                    <AlumniCard
                        title="Alumni's name"
                        description="Click on here to view the title of the Alumni article"
                        count="20+"
                    />
                    <TeamMemberCard
                        name="Team member name"
                        role="COFOUNDED, BUSINESS ANALYST AT CONCORDANT"
                    />
                </div>
            </div>
        </section>
    );
}