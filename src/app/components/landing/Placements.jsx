import Image from "next/image";

const placementLogos = [
    { src: "/placements-logo/bain.png", alt: "Bain & Company" },
    { src: "/placements-logo/accenture.png", alt: "Accenture" },
    { src: "/placements-logo/ey.png", alt: "EY" },
    { src: "/placements-logo/ibm.png", alt: "IBM" },
    { src: "/placements-logo/kpmg.png", alt: "KPMG" },
    { src: "/placements-logo/oliver.png", alt: "Oliver Wyman" },
    { src: "/placements-logo/pwc.png", alt: "PwC" },
    { src: "/placements-logo/mckinsey.png", alt: "McKinsey & Company" },
    { src: "/placements-logo/deloitte.png", alt: "Deloitte" },
];

// Split into two rows for mobile
const mid = Math.ceil(placementLogos.length / 2);
const row1 = placementLogos.slice(0, mid);
const row2 = placementLogos.slice(mid);

function LogoSet({ logos, size = 100 }) {
    return (
        <div className="flex shrink-0 items-center gap-12 sm:gap-16 pr-12 sm:pr-16">
            {logos.map(({ src, alt }) => (
                <div key={alt} className="flex-shrink-0">
                    <Image
                        src={src}
                        alt={alt}
                        width={size}
                        height={size}
                        className="object-contain transition-all duration-300"
                    />
                </div>
            ))}
        </div>
    );
}

function ScrollBanner({ logos, reverse = false, size = 100 }) {
    return (
        <div className={`flex w-max ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'} hover:[animation-play-state:paused]`}>
            <LogoSet logos={logos} size={size} />
            <LogoSet logos={logos} size={size} />
        </div>
    );
}

export default function Placements() {
    return (
        <div className="pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="text-left mb-10 sm:mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                        Where Our Members Go
                    </h2>
                </div>
            </div>

            {/* Desktop: single row */}
            <div className="hidden sm:block relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                <ScrollBanner logos={placementLogos} />
            </div>

            {/* Mobile: two rows scrolling in opposite directions */}
            <div className="sm:hidden relative overflow-hidden flex flex-col gap-6">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                <ScrollBanner logos={row1} size={80} />
                <ScrollBanner logos={row2} size={80} reverse />
            </div>
        </div>
    );
}
