import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import LocationMarquee from './LocationMarquee';

const LocationPromo: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for the background image
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

    return (
        <section ref={sectionRef} className="relative h-[80vh] min-h-[600px] overflow-hidden flex flex-col">
            {/* Top Marquee */}
            <div className="relative z-30">
                <LocationMarquee />
            </div>

            <div className="flex-1 flex items-center justify-center relative">
                {/* Parallax Background Image */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y, opacity }}
                >
                    <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay for text readability */}
                    <img
                        src="/images/risa_feast_bg_red.png"
                        alt="Risa Chicken Feast"
                        className="w-full h-full object-cover scale-110"
                    />
                </motion.div>

                {/* Content Container */}
                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center gap-6"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-risa-red/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg">
                            Berlin Original
                        </span>

                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                            Berlins Beste <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-risa-yellow to-orange-400">Chicken</span>
                        </h2>

                        <p className="max-w-xl text-lg md:text-xl text-gray-100 font-medium leading-relaxed drop-shadow-md">
                            Bestelle direkt über unsere Webseite oder komm vorbei und überzeuge dich selbst von der Qualität.
                        </p>

                        <motion.a
                            href="https://www.google.com/maps/search/Risa+Chicken"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-risa-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 font-black uppercase tracking-wide">Jetzt zu Google Maps</span>
                            <div className="relative z-10 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-risa-black group-hover:text-white transition-colors duration-300">
                                <ArrowUpRight size={18} />
                            </div>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LocationPromo;
