'use client';
import { Button } from "../Buttons";
import SponsorsGrid from "../SponsorsGrid";

function ServiceCard({ title, description, color }) {
    const colorClasses = {
        purple: 'bg-brand-purple text-white',
        white: 'bg-brand-light text-black shadow-md',
    };

    return (
        <div className={`${colorClasses[color]} flex justify-between items-end h-full rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}>
            <h3 className="text-xl font-bold">{title}</h3>
            {/* <p className="leading-relaxed">→</p >*/}
        </div>
    );
}

export default function ServicesSection() {
    const services = [
        {
            title: "Market & Industry Research",
            color: "purple"
        },
        {
            title: "Funding Success",
            color: "white"
        },
        {
            title: "Growth, Data Structures & Implementation",
            color: "white"
        },

    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 mb-20">
                <div className="text-left mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                        Our Services
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 auto-rows-fr">
                    {/* Left column: single card */}
                    <div className="md:row-span-2 h-full">
                        <ServiceCard
                            title={services[0].title}
                            description={services[0].description}
                            color={services[0].color}
                            className="h-fill"
                        />
                    </div>

                    {/* Right column: top card */}
                    <ServiceCard
                        title={services[1].title}
                        description={services[1].description}
                        color={services[1].color}
                    />

                    {/* Right column: bottom card */}
                    <ServiceCard
                        title={services[2].title}
                        description={services[2].description}
                        color={services[2].color}
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 mb-20">
                <div className="text-left mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                        Past Clients
                    </h2>
                </div>
                <SponsorsGrid />
            </div>

            <div className="w-full flex flex-col sm:flex-row relative h-[30vh]">
                <Button
                    variant="solid"
                    className="flex justify-between items-center w-2/3 absolute left-1/2 bottom-10 -translate-x-1/2 -translate-y-1/2"
                >
                    <p>Join Us</p>
                    <p>→</p>
                </Button>
                <div className="flex justify-start sm:w-1/2 h-full w-full">
                    <img src="/photos/home-clientbg.png" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-1 h-fill bg-brand-purple justify-center p-10">
                    <p className="text-white text-2xl font-bold h-fit">Are you the bright minds we are looking for?</p>
                </div>

            </div>

        </section>
    );
}