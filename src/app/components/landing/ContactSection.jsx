'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { PrimaryButton } from '../Buttons';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for your message! We'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    required
                />
            </div>
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                required
            />
            <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none"
                required
            ></textarea>
            <PrimaryButton type="submit">Contact Us →</PrimaryButton>
        </form>
    );
}

function ContactItem({ icon, text }) {
    return (
        <div className="flex items-center space-x-3">
            <div className="text-purple-400">{icon}</div>
            <span className="text-gray-300">{text}</span>
        </div>
    );
}

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-brand-light text-black">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
                            How can we assist you?
                        </h2>

                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                <ContactForm />
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                                <div className="space-y-4">
                                    <ContactItem icon={<Mail />} text="info@nord-consulting.com" />
                                    <ContactItem icon={<Phone />} text="+1 (555) 123-4567" />
                                    <ContactItem icon={<MapPin />} text="123 Business District, City, State" />
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}