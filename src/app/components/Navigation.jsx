"use client"
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import BrandIcon from './BrandIcon.jsx';
import { Button } from './Buttons.jsx';
import Link from "next/link"

export default function Navigation() {
    const [scrollY, setScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navHeight = 700; // scroll distance over which the transition happens

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate transition progress (0 → 1)
    const progress = Math.min(scrollY / navHeight, 1);

    // Interpolate background and text color
    const bgColor = `rgba(255, 255, 255, ${progress})`; // transparent → white
    const textColor = `rgb(${255 - progress * 255}, ${255 - progress * 255}, ${255 - progress * 255})`; // white → black

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const navItems = [
        { href: "/landing", label: "Home" },
        //{ href: "/about", label: "About Us" },
        //{ href: "/services", label: "Our Services" },
        { href: "/join", label: "Join Us" },
    ];

    return (
        <nav
            className="fixed top-0 w-full z-50 backdrop-blur-md bg-white-90 transition-colors duration-300"
        >
            <div className="container mx-auto px-6 py-2 flex items-center gap-5">
                <div className="flex items-center space-x-2">
                    <BrandIcon />
                </div>

                <div className="hidden md:flex gap-4">
                    {navItems.map((item) => (

                        <Link key={item.href} href={item.href} passHref>
                            <Button variant="navtrans" style={{ color: textColor }}>{item.label}</Button>
                        </Link>
                    ))}
                </div>

                <button className="md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? <X className="w-6 h-6" style={{ color: textColor }} /> : <Menu className="w-6 h-6" style={{ color: textColor }} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-3 pb-4 px-5 flex flex-col">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} passHref>
                            <Button variant="navtrans" style={{ color: textColor }} className="w-full">{item.label}</Button>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}