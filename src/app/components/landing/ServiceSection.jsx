"use client"
import BrandIcon from '../BrandIcon';

function StatCard({ number, label }) {
    return (
        <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">{number}</div>
            <div className="text-xl text-gray-600 font-medium">{label}</div>
        </div>
    );
}

export default function AboutSection() {
    const stats = [
        { number: '20+', label: 'Years Experience' },
        { number: '500+', label: 'Projects Completed' },
        { number: '95%', label: 'Client Satisfaction' }
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                        About Us
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We are a forward-thinking consultancy dedicated to helping organizations achieve their strategic objectives through innovative solutions and expert guidance.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <StatCard key={index} number={stat.number} label={stat.label} />
                    ))}
                </div>

                <div className="bg-purple-50 rounded-3xl p-8 lg:p-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                To empower organizations with strategic insights and innovative solutions that drive sustainable growth and competitive advantage in an ever-evolving business landscape.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                We believe in building lasting partnerships with our clients, delivering measurable results through our expertise in strategy, operations, and technology.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="text-center">
                                <BrandIcon />
                                <h4 className="text-xl font-bold text-gray-900 mt-4 mb-2">Excellence Delivered</h4>
                                <p className="text-gray-600">Every project, every time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}