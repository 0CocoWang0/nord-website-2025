import Image from "next/image";

// Grab all sponsor images under /public/sponsors
const sponsorLogos = require
    .context("/public/sponsors", false, /\.(png|jpe?g|svg)$/)
    .keys()
    .map((filename) => `/sponsors/${filename.replace("./", "")}`);

export default function SponsorsGrid() {
    return (
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-6 justify-items-center items-center">
            {sponsorLogos.map((src, i) => (
                <Image
                    key={i}
                    src={src}
                    alt={`Sponsor ${i + 1}`}
                    width={80}
                    height={80}
                    className="object-contain hover:scale-110 transition-all duration-300"
                />
            ))}
        </div>
    );
}