import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

const locations = [
    {
        id: 1,
        area: "Wedding",
        address: "Müllerstraße 140",
        zip: "13353 Berlin",
        phone: "030 460 66 110",
        hours: "Täglich 10:00 - 03:00",
        image: "/images/risa_loc_wedding.png",
    },
    {
        id: 2,
        area: "Moabit",
        address: "Turmstraße 36",
        zip: "10551 Berlin",
        phone: "030 394 04 290",
        hours: "Täglich 10:00 - 03:00",
        image: "/images/risa_loc_moabit.png",
    },
    {
        id: 3,
        area: "Tempelhof",
        address: "Tempelhofer Damm 2",
        zip: "12101 Berlin",
        phone: "030 756 50 110",
        hours: "Täglich 10:00 - 02:00",
        image: "/images/risa_loc_tempelhof.png",
    },
    {
        id: 4,
        area: "Prenzlauer Berg",
        address: "Eberswalder Str. 20",
        zip: "10437 Berlin",
        phone: "030 440 33 110",
        hours: "Täglich 11:00 - 02:00",
        image: "/images/risa_loc_prenzlauer.png",
    },
    {
        id: 5,
        area: "Neukölln",
        address: "Sonnenallee 24",
        zip: "12047 Berlin",
        phone: "030 627 30 110",
        hours: "Täglich 10:00 - 04:00",
        image: "/images/risa_loc_neukoelln.png",
    }
];

// Desktop Sticky Card Component
const DesktopLocationCard: React.FC<{ item: any; index: number; range: [number, number]; targetScale: number; progress: any }> = ({ item, index, range, targetScale, progress }) => {
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-10% + ${index * 25}px)` }}
                className="relative w-full max-w-5xl h-[600px] rounded-[3rem] overflow-hidden shadow-2xl origin-top"
            >
                <div className="absolute inset-0">
                    <img src={item.image} alt={item.area} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                </div>

                <div className="absolute inset-0 p-12 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full">
                            <h3 className="text-2xl font-black uppercase tracking-widest">{item.area}</h3>
                        </div>
                        <button className="w-16 h-16 bg-white text-risa-black rounded-full flex items-center justify-center hover:bg-risa-red hover:text-white transition-all duration-300">
                            <ArrowUpRight size={32} />
                        </button>
                    </div>
                    <div>
                        <h2 className="text-6xl font-black uppercase tracking-tighter mb-6 leading-none">{item.address}</h2>
                        <div className="flex flex-col gap-2 text-lg font-medium text-gray-300">
                            <div className="flex items-center gap-3"><MapPin size={20} className="text-risa-red" /><span>{item.zip}</span></div>
                            <div className="flex items-center gap-3"><Phone size={20} className="text-risa-red" /><span>{item.phone}</span></div>
                            <div className="flex items-center gap-3"><Clock size={20} className="text-risa-red" /><span>{item.hours}</span></div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// Mobile Card Component
const MobileLocationCard: React.FC<{ item: any }> = ({ item }) => (
    <div className="w-[85vw] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl relative h-[450px]">
        <div className="absolute inset-0">
            <img src={item.image} alt={item.area} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
        </div>
        <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
            <div className="flex justify-between items-start">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full">
                    <h3 className="text-sm font-black uppercase tracking-widest">{item.area}</h3>
                </div>
                <button className="w-10 h-10 bg-white text-risa-black rounded-full flex items-center justify-center">
                    <ArrowUpRight size={20} />
                </button>
            </div>
            <div>
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-3 leading-none">{item.address}</h2>
                <div className="flex flex-col gap-1.5 text-sm font-medium text-gray-300">
                    <div className="flex items-center gap-2"><MapPin size={16} className="text-risa-red" /><span>{item.zip}</span></div>
                    <div className="flex items-center gap-2"><Phone size={16} className="text-risa-red" /><span>{item.phone}</span></div>
                    <div className="flex items-center gap-2"><Clock size={16} className="text-risa-red" /><span>{item.hours}</span></div>
                </div>
            </div>
        </div>
    </div>
);

const Locations: React.FC = () => {
    const containerRef = useRef(null);
    const mobileSliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const scrollToCard = (direction: 'left' | 'right') => {
        if (!mobileSliderRef.current) return;
        const cardWidth = mobileSliderRef.current.scrollWidth / locations.length;
        let newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
        newIndex = Math.max(0, Math.min(locations.length - 1, newIndex));
        setCurrentIndex(newIndex);
        mobileSliderRef.current.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
    };

    return (
        <section className="bg-white pt-16 md:pt-24 pb-0 md:pb-12 relative z-10">
            {/* Header */}
            <div className="container mx-auto px-4 md:px-12 mb-12 md:mb-24 flex justify-center">
                <div className="relative inline-block transform -skew-x-6">
                    <div className="absolute inset-x-[-10%] inset-y-[10%] flex flex-col justify-between z-0">
                        <div className="h-[28%] bg-risa-red w-full rounded-sm shadow-[0_0_20px_rgba(225,29,43,0.5)]"></div>
                        <div className="h-[28%] bg-risa-red w-full rounded-sm shadow-[0_0_20px_rgba(225,29,43,0.5)]"></div>
                        <div className="h-[28%] bg-risa-red w-full rounded-sm shadow-[0_0_20px_rgba(225,29,43,0.5)]"></div>
                    </div>
                    <h2 className="relative z-10 text-5xl md:text-8xl font-black uppercase text-white tracking-tighter leading-none px-3 md:px-4 py-1 md:py-2 drop-shadow-md">
                        STANDORT<span className="text-risa-yellow">E</span>
                    </h2>
                </div>
            </div>

            {/* Mobile Slider - Only visible on small screens */}
            <div className="block md:hidden">
                <div
                    ref={mobileSliderRef}
                    className="flex gap-4 overflow-x-auto hide-scrollbar px-4 snap-x snap-mandatory"
                >
                    {locations.map((location) => (
                        <div key={location.id} className="snap-center">
                            <MobileLocationCard item={location} />
                        </div>
                    ))}
                </div>
                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-6">
                    <button
                        onClick={() => scrollToCard('left')}
                        disabled={currentIndex === 0}
                        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-30 hover:bg-black hover:text-white hover:border-black transition-all"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={() => scrollToCard('right')}
                        disabled={currentIndex === locations.length - 1}
                        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-30 hover:bg-black hover:text-white hover:border-black transition-all"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Desktop Sticky Stack - Only visible on medium screens and up */}
            <div ref={containerRef} className="hidden md:block px-4 md:px-0">
                {locations.map((location, index) => {
                    const targetScale = 1 - ((locations.length - index) * 0.05);
                    return (
                        <DesktopLocationCard
                            key={index}
                            item={location}
                            index={index}
                            range={[index * 0.25, 1]}
                            targetScale={targetScale}
                            progress={scrollYProgress}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Locations;
