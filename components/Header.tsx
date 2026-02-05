import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'py-4 bg-white/95 backdrop-blur-md shadow-sm'
          : 'py-6 bg-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="relative group cursor-pointer z-50">
            <div className="flex items-baseline tracking-tighter font-black text-4xl md:text-5xl">
              <span className="text-risa-red">RIS</span>
              <span className="text-risa-yellow drop-shadow-sm">A</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {['Speisekarte', 'Standorte', 'Story', 'Halal', 'Franchise'].map((item) => (
              <a
                key={item}
                href="#"
                className={`relative group font-black uppercase text-sm tracking-wider transition-colors ${item === 'Franchise' ? 'text-risa-red' : 'text-risa-black'
                  }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${item === 'Franchise' ? 'bg-risa-red' : 'bg-risa-yellow'
                  }`} />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 z-50">

            <button className="hidden md:flex items-center gap-3 bg-risa-red text-white px-6 py-3 rounded-none skew-x-[-12deg] group hover:bg-red-600 transition-all duration-300 shadow-xl">
              <span className="skew-x-[12deg] font-black uppercase tracking-wider flex items-center gap-2">
                Bestellen
                <ShoppingBag size={18} className="mb-1" />
              </span>
            </button>

            {/* Mobile Burger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-risa-black hover:text-risa-red transition-colors"
            >
              <Menu size={32} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Mobile Menu - Poster Style */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-risa-red z-[60] flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-white hover:rotate-90 transition-transform duration-300"
            >
              <X size={40} />
            </button>

            <nav className="flex flex-col gap-8 text-center">
              {['Speisekarte', 'Standorte', 'Story', 'Halal', 'Franchise'].map((item, i) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white hover:text-risa-yellow transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 flex gap-8"
            >
              {/* Socials Placeholder */}
              <div className="w-3 h-3 bg-risa-yellow rounded-full opacity-100" />
              <div className="w-3 h-3 bg-risa-yellow rounded-full opacity-100" />
              <div className="w-3 h-3 bg-risa-yellow rounded-full opacity-100" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;