import Image from "next/image";

const placementLogos = [
    { src: "/placements-logo/bain.png", alt: "Bain & Company" },
    { src: "/placements-logo/accenture.png", alt: "Accenture" },
    { src: "/placements-logo/ey.png", alt: "EY" },
    { src: "/placements-logo/ibm.png", alt: "IBM" },
    { src: "/placements-logo/kpmg.png", alt: "KPMG" },
    { src: "/placements-logo/oliver.png", alt: "Oliver Wyman" },
    { src: "/placements-logo/pwc.png", alt: "PwC" },
];

export default function Placements() {
    return (
        <div className="container mx-auto px-6 pt-20">
            <div className="text-left mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                    Where Our Members Go
                </h2>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-8 justify-items-center items-center">
                {placementLogos.map(({ src, alt }) => (
                    <Image
                        key={alt}
                        src={src}
                        alt={alt}
                        width={100}
                        height={100}
                        className="object-contain hover:scale-110 transition-all duration-300"
                    />
                ))}
            </div>
        </div>
    );
}
