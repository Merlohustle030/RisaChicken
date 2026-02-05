import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    "ORIGINAL REZEPT",
    "100% HALAL",
    "KNUSPRIG",
    "SAFTIG",
    "BERLINS BESTE",
    "OFFEN BIS SPÄT",
    "FRISCHES HÄHNCHEN",
    "RISA VIBES"
  ];

  return (
    <div className="relative bg-risa-red py-4 md:py-6 overflow-hidden border-y-4 border-white shadow-xl">
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-risa-red to-transparent z-10" />
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-risa-red to-transparent z-10" />

      <div className="flex whitespace-nowrap animate-marquee md:[animation-duration:20s] [animation-duration:10s]">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, index) => (
              <React.Fragment key={`${i}-${index}`}>
                <span className="text-4xl md:text-4xl font-black text-white italic tracking-tighter px-8 uppercase">
                  {item}
                </span>
                <span className="text-risa-yellow text-xl md:text-2xl">★</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;