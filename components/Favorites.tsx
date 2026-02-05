import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';

const favorites = [
    {
        id: 1,
        title: 'Risa Crispy Burger',
        subtitle: 'THE CLASSIC',
        image: '/images/risa_burger.png',
        price: '9,50'
    },
    {
        id: 2,
        title: 'Wings Bucket',
        subtitle: 'FOR SHARING',
        image: '/images/risa_wings.png',
        price: '24,90'
    },
    {
        id: 3,
        title: 'Risa Mix Box',
        subtitle: 'ALL IN ONE',
        image: '/images/risa_box_menu.png',
        price: '14,90'
    },
    {
        id: 4,
        title: 'Spicy Wrap',
        subtitle: 'HOT & TASTY',
        image: '/images/risa_wrap.png',
        price: '8,90'
    },
    {
        id: 5,
        title: 'Chicken Bites',
        subtitle: 'CRISPY LOVE',
        image: '/images/risa_bites.png',
        price: '11,90'
    }
];

const Favorites: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="relative pt-48 pb-4 bg-white z-20 overflow-hidden">
            {/* Massive Background Text for Visual Interest */}
            <div className="absolute top-32 md:top-10 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03]">
                <h2 className="text-[15vw] font-black uppercase text-center leading-none tracking-tighter text-black whitespace-nowrap">
                    Risa Favorites
                </h2>
            </div>

            <div className="container mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 relative z-10">
                <motion.div
                    className="max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h3 className="text-risa-red font-bold uppercase tracking-widest text-sm mb-2">Die Lieblinge</h3>
                    <h2 className="text-5xl md:text-7xl font-black text-risa-black tracking-tighter uppercase leading-[0.9]">
                        Unsere <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-risa-black to-gray-500">Bestseller</span>
                    </h2>
                </motion.div>

                <div className="flex gap-4">
                    <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                        <ArrowRight className="rotate-180" size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Draggable Slider Area - Full Width bleed */}
            <div className="pl-6 md:pl-12 overflow-x-auto hide-scrollbar pb-20 cursor-grab active:cursor-grabbing">
                <motion.div
                    className="flex gap-8 w-max pr-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                >
                    {favorites.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="relative group w-[300px] md:w-[400px] flex-shrink-0"
                            variants={itemVariants}
                        >
                            {/* Image Container - Tall and Bold */}
                            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-100 mb-6">
                                {/* Halal Badge - Seal Style */}
                                <div className="absolute top-4 left-4 z-20">
                                    <div className="w-16 h-16 rounded-full bg-emerald-800 border-2 border-yellow-400 shadow-xl flex flex-col items-center justify-center p-1 transform -rotate-12 hover:rotate-0 transition-transform duration-300 group-hover:scale-110">
                                        <div className="w-full h-full rounded-full border border-white/20 flex flex-col items-center justify-center relative">
                                            <span className="text-[8px] font-bold text-yellow-300 uppercase leading-none mt-1">100%</span>
                                            <span className="text-sm font-black text-white tracking-wider leading-none my-0.5">HALAL</span>
                                            <div className="flex gap-0.5 mb-1">
                                                <span className="text-yellow-400 text-[6px]">★</span>
                                                <span className="text-yellow-400 text-[6px]">★</span>
                                                <span className="text-yellow-400 text-[6px]">★</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                {/* Gradient Overlay at bottom */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                {/* Price Tag - Floating */}
                                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg z-10">
                                    <span className="font-black text-risa-black">€{item.price}</span>
                                </div>

                                {/* Quick Add Button */}
                                <button className="absolute bottom-6 right-6 w-12 h-12 bg-risa-red text-white output-white rounded-full flex items-center justify-center shadow-lg translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-[0.22,1,0.36,1]">
                                    <Plus size={24} />
                                </button>
                            </div>

                            {/* Minimal Info */}
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <div className="h-[1px] w-8 bg-risa-red"></div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{item.subtitle}</span>
                                </div>
                                <h3 className="text-3xl font-black text-risa-black tracking-tight uppercase group-hover:text-risa-red transition-colors duration-300">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}

                    {/* "See More" Card */}
                    <div className="w-[300px] md:w-[400px] aspect-[4/5] flex items-center justify-center flex-shrink-0">
                        <button className="group flex flex-col items-center gap-4">
                            <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center group-hover:border-risa-black group-hover:scale-110 transition-all duration-300">
                                <ArrowRight size={32} className="text-gray-300 group-hover:text-risa-black transition-colors" />
                            </div>
                            <span className="font-bold text-gray-400 group-hover:text-risa-black uppercase tracking-widest text-sm transition-colors">Alle Ansehen</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Favorites;
