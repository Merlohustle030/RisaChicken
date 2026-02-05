import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, CheckCircle } from 'lucide-react';

const Franchise: React.FC = () => {
    return (
        <section className="relative px-0 pt-12 pb-24 md:pt-16 md:pb-32 bg-white overflow-hidden selection:bg-risa-red selection:text-white">

            {/* Background Texture similar to Hero */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-red-50 to-yellow-50 rounded-full blur-3xl -z-10 opacity-60" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Content */}
                    <div className="flex flex-col items-center text-center">

                        {/* Title Construction matching Hero Vibe */}
                        <div className="relative mb-8">
                            {/* Neon Stripes Background for emphasis word */}
                            <div className="absolute -inset-x-4 top-[60%] -translate-y-1/2 h-[45%] -skew-x-6 opacity-100 z-0">
                                <div className="w-full h-full bg-risa-red rounded-sm shadow-[0_0_20px_rgba(225,29,43,0.3)] opacity-0" />
                            </div>

                            <h2 className="relative z-10 text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.9] transform -skew-x-6 uppercase flex flex-col items-center">
                                <span className="text-risa-black block mb-2 whitespace-nowrap">Grow with</span>
                                <span className="text-risa-red drop-shadow-md px-2">Family</span>
                            </h2>
                        </div>

                        <p className="text-xl md:text-2xl font-bold text-gray-800 mb-8 max-w-lg leading-tight uppercase tracking-tight transform -skew-x-6">
                            Kein Hype. Kein Bullshit. <br />
                            <span className="text-risa-red">Echtes Business.</span>
                        </p>

                        <div className="flex flex-col gap-6 mb-10 w-fit mx-auto text-left">
                            {[
                                { title: "Proven Concept", text: "Seit 1996 erfolgreich am Markt." },
                                { title: "High Revenue", text: "Starke Umsätze, treue Kunden." },
                                { title: "Full Support", text: "Wir lassen dich nicht hängen." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-12 h-1 bg-gray-200 group-hover:bg-risa-red transition-colors duration-300 rounded-full shrink-0" />
                                    <div>
                                        <h4 className="font-black italic uppercase text-lg leading-none">{item.title}</h4>
                                        <p className="text-sm font-medium text-gray-500">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Button matching Hero Primary Button EXACTLY */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative overflow-hidden bg-risa-black text-white px-8 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 w-full md:w-auto"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-wide">
                                Jetzt Partner Werden
                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-risa-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                        </motion.button>

                    </div>

                    {/* Right Column: Visuals */}
                    <div className="relative flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, rotate: 5, y: 50 }}
                            whileInView={{ opacity: 1, rotate: -2, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-gray-100 bg-black"
                        >
                            <img
                                src="/images/risa_franchise_partners.jpg"
                                alt="Risa Franchise Success"
                                className="w-full h-full object-cover opacity-90"
                            />

                            {/* Overlay Stripes */}
                            <div className="absolute top-6 right-6 flex flex-col gap-1 items-end z-20">
                                <div className="w-16 h-1 bg-white rounded-full" />
                                <div className="w-10 h-1 bg-risa-yellow rounded-full" />
                                <div className="w-24 h-1 bg-risa-red rounded-full" />
                            </div>

                            {/* Bottom Badge */}
                            <div className="absolute bottom-8 left-8 right-8 z-20">
                                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl transform skew-x-2 border-l-4 border-risa-red">
                                    <div className="transform -skew-x-2">
                                        <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Marktanteil</p>
                                        <h3 className="text-4xl font-black italic tracking-tighter text-risa-black">
                                            #1 <span className="text-risa-red">BERLIN</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative background element behind image */}
                        <div className="absolute top-10 -right-10 w-full h-full bg-gray-100 rounded-[3rem] -z-10 transform rotate-6 border border-gray-200" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Franchise;
