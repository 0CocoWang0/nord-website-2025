import Image from "next/image";

// Grab all sponsor images under /public/sponsors
const sponsorLogos = require
    .context("/public/sponsors", false, /\.(png|jpe?g|svg)$/)
    .keys()
    .map((filename) => `/sponsors/${filename.replace("./", "")}`);

export default function SponsorsGrid() {
    return (
        <div className="flex flex-wrap gap-20 justify-center">
            {sponsorLogos.map((src, i) => (
                <Image
                    key={i}
                    src={src}
                    alt={`Sponsor ${i + 1}`}
                    width={100}
                    height={100}
                    className="object-contain hover:scale-110 transition-all duration-300"
                />
            ))}
        </div>
    );
}