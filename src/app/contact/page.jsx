'use client';

import { FadeInBlur } from '../components/animations/FadeInBlur';
import { Button } from '../components/Buttons';
import { Mail, Phone, MapPin, Clock, ArrowRight, Users, Building2, GraduationCap } from 'lucide-react';
import ParallaxContainer from '../components/ParallaxBox';

export default function ContactPage() {
    const contactTypes = [
        {
            title: "For Organizations",
            description: "Non-profits and social enterprises seeking strategic consulting support",
            icon: <Building2 className="w-6 h-6" />,
            email: "partnerships@nordconsulting.org",
            cta: "Request Consultation"
        },
        {
            title: "For Students",
            description: "McGill students interested in joining our consulting teams",
            icon: <GraduationCap className="w-6 h-6" />,
            email: "recruitment@nordconsulting.org",
            cta: "Apply to Join"
        },
        {
            title: "General Inquiries",
            description: "Questions about our services, events, or partnerships",
            icon: <Users className="w-6 h-6" />,
            email: "info@nordconsulting.org",
            cta: "Get in Touch"
        }
    ];

    const officeInfo = {
        address: "McGill University\nMontréal, QC, Canada",
        hours: "Monday - Friday\n9:00 AM - 5:00 PM EST",
        phone: "+1 (514) XXX-XXXX"
    };

    return (
        <div className="min-h-screen bg-white">
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
                            Contact Us
                        </h1>
                    </FadeInBlur>
                    <div className="flex flex-col sm:flex-row gap-4 justify-start mt-6">
                        <p>F</p>
                    </div>
                </div>
            </ParallaxContainer>
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-navy to-brand-purple text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <FadeInBlur delay={0}>
                            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                                Contact Us
                            </h1>
                        </FadeInBlur>
                        <FadeInBlur delay={300}>
                            <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed">
                                Ready to create meaningful impact together? We're here to connect with organizations
                                and students who share our commitment to data-driven social change.
                            </p>
                        </FadeInBlur>
                    </div>
                </div>
            </section>

            {/* Contact Options */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <FadeInBlur delay={0}>
                        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6">
                            How Can We Help?
                        </h2>
                        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
                            Choose the option that best describes your inquiry to connect with the right team member.
                        </p>
                    </FadeInBlur>

                    <div className="grid lg:grid-cols-3 gap-8 mb-20">
                        {contactTypes.map((type, index) => (
                            <FadeInBlur key={index} delay={index * 150}>
                                <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                                    <div className="w-5 h-5 text-brand-purple mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {type.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {type.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {type.description}
                                    </p>
                                    <div className="mb-6">
                                        <div className="flex items-center text-gray-700 mb-2">
                                            <Mail className="w-4 h-4 mr-2 text-brand-purple" />
                                            <span className="text-sm font-mono">{type.email}</span>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white group-hover:translate-x-1 transition-all duration-300"
                                    >
                                        {type.cta}
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </FadeInBlur>
                        ))}
                    </div>
                </div>
            </section>

            {/* Office Information */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <FadeInBlur delay={0}>
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                                    Visit Our Office
                                </h2>
                            </FadeInBlur>
                            <FadeInBlur delay={200}>
                                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                    Located at McGill University in the heart of Montréal, our office serves as the
                                    hub for our consulting operations and student activities.
                                </p>
                            </FadeInBlur>

                            <div className="space-y-6">
                                <FadeInBlur delay={300}>
                                    <div className="flex items-start">
                                        <MapPin className="w-5 h-5 text-brand-purple mr-4 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                                            <p className="text-gray-700 whitespace-pre-line">{officeInfo.address}</p>
                                        </div>
                                    </div>
                                </FadeInBlur>


                            </div>
                        </div>

                        <div>
                            <FadeInBlur delay={600}>
                                <div className="relative h-96 lg:h-[500px] bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                                    {/* Placeholder for map or office image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-navy/30"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center text-gray-600">
                                            <MapPin className="w-12 h-12 mx-auto mb-4 text-brand-purple" />
                                            <p className="text-lg font-medium">Interactive Map</p>
                                            <p className="text-sm">McGill University Campus</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeInBlur>
                        </div>
                    </div>
                </div>
            </section>

            {/* Response Expectations */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <FadeInBlur delay={0}>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                                What to Expect
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8 text-left">
                                <div className="bg-brand-light p-6 rounded-lg">
                                    <div className="text-2xl font-bold text-brand-purple mb-2">24 Hours</div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Initial Response</h4>
                                    <p className="text-gray-700 text-sm">We'll acknowledge your inquiry and connect you with the appropriate team member.</p>
                                </div>
                                <div className="bg-brand-light p-6 rounded-lg">
                                    <div className="text-2xl font-bold text-brand-purple mb-2">3-5 Days</div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Detailed Follow-up</h4>
                                    <p className="text-gray-700 text-sm">Comprehensive response with next steps and available resources.</p>
                                </div>
                                <div className="bg-brand-light p-6 rounded-lg">
                                    <div className="text-2xl font-bold text-brand-purple mb-2">Ongoing</div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Partnership Support</h4>
                                    <p className="text-gray-700 text-sm">Continuous communication throughout our collaboration.</p>
                                </div>
                            </div>
                        </div>
                    </FadeInBlur>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-purple-dark text-white">
                <div className="container mx-auto px-6 text-center">
                    <FadeInBlur delay={0}>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Ready to Get Started?
                        </h2>
                    </FadeInBlur>
                    <FadeInBlur delay={300}>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                            Don't see what you're looking for? Reach out anyway – we're always excited to explore
                            new ways to create impact together.
                        </p>
                    </FadeInBlur>
                    <FadeInBlur delay={600}>
                        <Button className="bg-white text-brand-purple hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                            Send Us a Message
                        </Button>
                    </FadeInBlur>
                </div>
            </section>
        </div>
    );
}