import React from 'react';

const LocationMarquee: React.FC = () => {
    const items = [
        "BERLINS #1 CHICKEN",
        "KOMM VORBEI",
        "FRISCH & LECKER",
        "BERLINS #1 CHICKEN",
        "KOMM VORBEI",
        "FRISCH & LECKER"
    ];

    return (
        <div className="relative bg-risa-yellow py-3 overflow-hidden z-30">
            {/* No rotation, straight edge */}
            <div className="flex whitespace-nowrap animate-marquee">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        {items.map((item, index) => (
                            <React.Fragment key={`${i}-${index}`}>
                                <span className="text-xl md:text-2xl font-black text-risa-black tracking-tighter px-8 uppercase">
                                    {item}
                                </span>
                                <span className="text-risa-red text-lg md:text-xl">●</span>
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LocationMarquee;
