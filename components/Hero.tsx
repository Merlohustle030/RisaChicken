import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Play } from 'lucide-react';
import ReviewBadge from './ReviewBadge';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">

      {/* =========================================================================
          DESKTOP VERSION (Hidden on Mobile)
          ========================================================================= */}
      <div className="hidden md:block relative pt-40 pb-32">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left Column: Content */}
            <div className="col-span-7 flex flex-col items-start z-20">
              <ReviewBadge />

              {/* Main Title Area */}
              <motion.div
                className="mb-6 w-full max-w-[120%]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                <div className="relative inline-block pl-4 pr-8 py-2">
                  {/* Background Neon Stripes for Main Title */}
                  <div className="absolute inset-0 w-full h-full flex flex-col justify-between py-3 opacity-100 -skew-x-6 origin-left">
                    <div className="w-full h-[26%] bg-risa-red rounded-sm shadow-[0_0_20px_rgba(225,29,43,0.5)]"></div>
                    <div className="w-full h-[26%] bg-risa-red rounded-sm shadow-[0_0_20px_rgba(225,29,43,0.5)]"></div>
                    <div className="w-full h-[26%] bg-risa-red rounded-sm shadow-[0_0_20px_rgba(225,29,43,0.5)]"></div>
                  </div>

                  {/* Main Logo Text */}
                  <h1 className="relative z-10 text-7xl lg:text-8xl font-black italic tracking-tighter leading-none transform -skew-x-6 drop-shadow-xl whitespace-nowrap">
                    <span className="text-white drop-shadow-md">RIS</span>
                    <span className="text-risa-yellow drop-shadow-md">A</span>
                    <span className="text-white ml-4 drop-shadow-md">CHICKEN</span>
                  </h1>
                </div>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h2 className="text-3xl font-black text-risa-black tracking-tight uppercase leading-tight">
                  Best Chicken in Berlin. <br />
                  <span className="text-risa-black">Das Original. Kein Hype, nur Geschmack.</span>
                </h2>
              </motion.div>

              <motion.div
                className="flex flex-row gap-4 w-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <button className="group relative overflow-hidden bg-risa-black text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    Ganze Karte
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-risa-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                </button>

                <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-risa-black bg-white border-2 border-gray-100 hover:border-risa-black transition-colors duration-300">
                  <MapPin size={20} className="text-risa-red" />
                  <span>Standort finden</span>
                </button>
              </motion.div>

              {/* Sub-info */}
              <motion.div
                className="mt-8 flex items-center gap-8 text-sm font-semibold text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Geöffnet bis 4 Uhr morgens
                </span>
                <span>•</span>
                <span>10 Standorte</span>
              </motion.div>
            </div>

            {/* Right Column: Video */}
            <div className="col-span-5 relative flex justify-end">
              {/* Abstract Background Blob */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-red-50 to-yellow-50 rounded-full blur-3xl -z-10 opacity-60"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* The Video Card */}
              <motion.div
                className="relative w-[380px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-gray-100 bg-black"
                initial={{ opacity: 0, y: 100, rotate: 5 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.4 } }}
              >
                {/* Video Placeholder */}
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1287&auto=format&fit=crop"
                    alt="Risa Chicken Bucket"
                    className="w-full h-full object-cover opacity-90 scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                </div>

                {/* UI Overlays */}
                <div className="absolute top-4 left-0 right-0 px-4 flex justify-between items-center z-10">
                  <div className="flex gap-1 w-full">
                    <div className="flex-1 h-1 bg-white/90 rounded-full" />
                    <div className="flex-1 h-1 bg-white/30 rounded-full" />
                    <div className="flex-1 h-1 bg-white/30 rounded-full" />
                  </div>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform border border-white/20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Play size={32} className="text-white fill-white ml-2" />
                  </motion.div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-10 left-0 right-0 px-6 z-10 text-center flex flex-col items-center">
                  <h2 className="text-5xl font-black italic tracking-tighter drop-shadow-xl leading-none transform -skew-x-6 uppercase whitespace-nowrap">
                    <span className="text-[#FFC000] mr-2 drop-shadow-sm">100%</span>
                    <span className="text-white">HALAL</span>
                  </h2>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>


      {/* =========================================================================
          MOBILE VERSION (Visible on Mobile)
          ========================================================================= */}
      <div className="block md:hidden relative pt-28 pb-12 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">

          {/* 1. Review Badge - Scaled Down */}
          <div className="mb-6 transform scale-90 origin-center">
            <ReviewBadge />
          </div>

          {/* 2. Main Title - Stacked & Scaled for Clean Fit */}
          <motion.div
            className="mb-6 relative w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block px-4 py-2">
              {/* Neon Stripes - Adjusted for Mobile */}
              <div className="absolute inset-0 w-full h-full flex flex-col justify-between py-0 opacity-100 -skew-x-6">
                <div className="w-full h-[26%] bg-risa-red rounded-sm shadow-[0_0_15px_rgba(225,29,43,0.4)]"></div>
                <div className="w-full h-[26%] bg-risa-red rounded-sm shadow-[0_0_15px_rgba(225,29,43,0.4)]"></div>
                <div className="w-full h-[26%] bg-risa-red rounded-sm shadow-[0_0_15px_rgba(225,29,43,0.4)]"></div>
              </div>

              {/* Title Text - Reduced size for breathing room */}
              {/* Title Text - Massive RISA only */}
              <h1 className="relative z-10 text-[6.5rem] leading-[0.8] font-black italic tracking-tighter transform -skew-x-6 drop-shadow-lg whitespace-nowrap">
                <span className="text-white drop-shadow-md">RIS</span>
                <span className="text-risa-yellow drop-shadow-md">A</span>
              </h1>
            </div>
          </motion.div>

          {/* 3. Subtitle - Lighter & Smaller */}
          <motion.p
            className="text-lg font-bold text-risa-black leading-tight uppercase mb-6 max-w-[80%]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Best Chicken in Berlin. <br />
            <span className="text-gray-500 font-bold text-sm">Kein Hype, nur Geschmack.</span>
          </motion.p>

          {/* 4. Action Buttons - Compact Vertical Stack */}
          <motion.div
            className="flex flex-col w-full gap-3 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button className="w-full bg-risa-black text-white py-3.5 rounded-xl font-bold text-base uppercase tracking-wide shadow-lg flex items-center justify-center gap-2">
              Ganze Karte
              <ArrowRight size={18} />
            </button>
            <button className="w-full bg-white text-risa-black border border-gray-200 py-3.5 rounded-xl font-bold text-base uppercase tracking-wide flex items-center justify-center gap-2">
              <MapPin size={18} className="text-risa-red" />
              Standort finden
            </button>
          </motion.div>

          {/* 5. Minimal Info Line - Single Line forced */}
          <motion.div
            className="flex items-center justify-center gap-3 text-xs font-bold text-gray-400 uppercase tracking-wide mb-10 w-full whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Bis 4 Uhr Offen
            </span>
            <span className="text-gray-300">•</span>
            <span>10 Standorte</span>
          </motion.div>

          {/* 6. Mobile Card Visual - Scaled Down & Rotated less */}
          <motion.div
            className="relative w-[70%] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-xl border-[4px] border-white ring-1 ring-gray-100 bg-black mx-auto"
            initial={{ opacity: 0, y: 30, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1287&auto=format&fit=crop"
              alt="Risa Mobile"
              className="w-full h-full object-cover opacity-90"
            />
            {/* Simple Overlay for Mobile */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <Play size={20} className="text-white fill-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <h2 className="text-2xl font-black italic tracking-tighter text-white transform -skew-x-6">
                <span className="text-[#FFC000]">100%</span> HALAL
              </h2>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;