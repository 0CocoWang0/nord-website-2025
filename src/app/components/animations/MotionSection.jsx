"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ServiceSection = ({ service, id }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    // Morph image from card → fullscreen in first half of section

    const height = useTransform(scrollYProgress, [0, 0.3], ["40vh", "100vh"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.3], ["1rem", "0rem"]);

    // lower half solid content
    const panelY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
    const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);


    return (
        <section id={id} ref={ref} className="relative min-h-[200vh]">
            {/* Sticky background wrapper */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute top-15 left-0 right-0 bottom-0 z-2 bg-white backdrop-blur-lg h-fit p-10"
                >
                    <h2 className="text-black">{service.title}</h2>
                </motion.div>
                <motion.div
                    style={{
                        scale,
                        height,
                        borderRadius,
                        backgroundImage: `url(${service.bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="absolute top-20 left-0 right-0 bottom-0 z-0"
                />

                {/* lower half solid content pulling up */}
                <motion.div
                    style={{ opacity: contentOpacity, y: panelY }}
                    className="absolute bottom-0 z-3 w-full flex flex-col sm:flex-row justify-end gap-10 bg-white/80 backdrop-blur-md p-10 rounded-t-xl text-black shadow-lg "
                >
                    <div className="sm:w-1/2">
                        <p className="text-md mb-6">{service.fullDescription}</p>
                    </div>

                    <div className="flex-1">
                        <h4 className="text-sm font-semibold mb-4 text-brand-purple-dark">KEY FEATURES</h4>
                        <ul className="space-y-3">
                            {service.features.map((f, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                    className="border-t-2 border-brand-purple/20 pt-2 text-sm"
                                >
                                    {f}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceSection;