import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white pt-24 pb-8 overflow-hidden relative">

            {/* Subtle Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-risa-red opacity-5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">

                {/* 1. Branding Section - Massive Hero Style Logo */}
                <div className="mb-20 transform scale-90 md:scale-100">
                    <div className="relative inline-block px-8 py-4">
                        {/* Background Neon Stripes */}
                        <div className="absolute inset-0 w-full h-full flex flex-col justify-between py-3 opacity-100 -skew-x-6">
                            <div className="w-full h-[26%] bg-risa-red rounded-sm shadow-[0_0_20px_rgba(225,29,43,0.5)]"></div>
                            <div className="w-full h-[26%] bg-risa-red rounded-sm shadow-[0_0_20px_rgba(225,29,43,0.5)]"></div>
                            <div className="w-full h-[26%] bg-risa-red rounded-sm shadow-[0_0_20px_rgba(225,29,43,0.5)]"></div>
                        </div>

                        {/* Main Logo Text "RISA" */}
                        <h1 className="relative z-10 text-8xl md:text-[10rem] font-black italic tracking-tighter leading-none transform -skew-x-6 drop-shadow-xl whitespace-nowrap px-6">
                            <span className="text-white drop-shadow-md">RIS</span>
                            <span className="text-risa-yellow drop-shadow-md">A</span>
                        </h1>
                    </div>
                    <p className="text-center mt-6 text-xl font-bold uppercase tracking-widest text-white/50 transform -skew-x-6">
                        Berlin's Original <span className="text-risa-red">Since 1996</span>
                    </p>
                </div>

                {/* 2. Functional Grid: Newsletter & Links */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 border-t border-white/10 pt-16 mb-16">

                    {/* Newsletter Side */}
                    <div className="flex flex-col items-start">
                        <h3 className="text-3xl font-black italic uppercase mb-6">Don't Miss Out</h3>
                        <p className="text-gray-400 mb-8 max-w-md">
                            Hol dir die neuesten Deals, Event-Infos und Franchise-News direkt in deine Inbox. Kein Spam, nur Chicken.
                        </p>
                        <div className="flex w-full max-w-md bg-white/5 border border-white/10 rounded-full p-2 focus-within:border-risa-red transition-colors">
                            <input
                                type="email"
                                placeholder="Deine Email Adresse"
                                className="bg-transparent flex-1 px-6 outline-none text-white placeholder:text-gray-600 font-medium"
                            />
                            <button className="bg-risa-red hover:bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Links Side - Clean Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-risa-yellow uppercase tracking-wider text-sm mb-2">Entdecken</h4>
                            <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all">Speisekarte</a>
                            <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all">Standorte</a>
                            <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all">Unsere Story</a>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-risa-yellow uppercase tracking-wider text-sm mb-2">Business</h4>
                            <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all">Franchise</a>
                            <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all">Karriere</a>
                            <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all">Partner</a>
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-risa-yellow uppercase tracking-wider text-sm mb-2">Legal</h4>
                            <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all">Impressum</a>
                            <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all">Datenschutz</a>
                            <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all">AGB</a>
                        </div>
                    </div>
                </div>

                {/* 3. Bottom Bar: Socials & Copy */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium">
                    {/* Social Icons */}
                    <div className="flex gap-6 mb-6 md:mb-0">
                        {[Instagram, Facebook, Twitter].map((Icon, i) => (
                            <a key={i} href="#" className="hover:text-white transition-colors">
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <span>&copy; 2025 Risa Chicken</span>
                        <span className="hidden md:inline">•</span>
                        <span>Made in Berlin</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
