import React from 'react'
import SponsorsGrid from "../SponsorsGrid";
import { Button } from '../Buttons.jsx';
import Link from 'next/link.js';
import { FadeInBlur } from '../animations/FadeInBlur.jsx';
const Clients = () => {
    return (
        <div>
            <div className="container mx-auto px-6 mb-20">
                <div className="text-left mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                        Past Clients
                    </h2>
                </div>
                <SponsorsGrid />
            </div>

            <div className="w-full flex flex-col sm:flex-row relative h-[30vh]">
                <Link href={"/join"}>
                    <Button
                        variant="solid"
                        className="z-2 flex justify-between items-center w-2/3 absolute left-1/2 bottom-10 -translate-x-1/2 -translate-y-1/2"
                    >
                        <p>Join Us</p>
                        <p>→</p>
                    </Button>
                </Link>
                <div className="flex justify-start sm:w-1/2 h-full w-full">
                    <img src="/photos/home-clientbg.png" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-1 h-fill bg-gradient-to-r from-brand-purple-dark/100 to-brand-purple/100 justify-center p-10">
                    <FadeInBlur delay={50} className="inline-block -translate-y-20">
                        <p className="text-white text-2xl font-bold h-fit">Are you the bright minds we are looking for?</p>
                    </FadeInBlur>
                </div>

            </div>
        </div>
    )
}

export default Clients
