import Navigation from "../components/Navigation";
import HeroSection from "../components/landing/HeroSection.jsx";
import AboutSection from "../components/landing/AboutSection.jsx";
import ServicesSection from "../components/landing/ServiceSection.jsx";
import TeamSection from "../components/landing/TeamSection.jsx";
import ContactSection from "../components/landing/ContactSection.jsx";
import Footer from "../components/Footer.jsx";


export default function Landing() {
    return (
        <div
            className="bg-white text-gray-900 overflow-x-hidden"
            style={{ fontFamily: "Futura, system-ui, sans-serif" }}>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
        </div>
    );
}
