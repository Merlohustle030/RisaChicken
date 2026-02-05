import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Zap } from 'lucide-react';

const values = [
    {
        icon: ShieldCheck,
        title: "100% Halal, 100% Ehrensache",
        text: "Seit '96, gleicher Schlachter, gleiche Klasse. Kein TK, nur frisches Freiland-Hühnchen. Und ja, „Bismillah“ gehört bei jedem Schnitt dazu."
    },
    {
        icon: Heart,
        title: "Love at First Bite",
        text: "Jedes Chicken-Stück ist ein echtes Herzensding. Mit Passion gewürzt, mariniert und perfekt gebraten."
    },
    {
        icon: Zap,
        title: "Frische, die kickt",
        text: "Bei uns gibt’s keine halben Sachen. Alles wird direkt für dich gemacht – volles Aroma, volle Frische, volle Power. Denn life’s too short for bad chicken!"
    }
];

const Values: React.FC = () => {
    return (
        <section className="bg-white py-24 relative overflow-hidden">
            {/* Background elements for texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-10 left-10 w-96 h-96 bg-risa-red/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-risa-yellow/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-start gap-6 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-risa-red/10 flex items-center justify-center text-risa-red group-hover:bg-risa-red group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-risa-red/30">
                                <item.icon size={32} strokeWidth={2} />
                            </div>

                            <div>
                                <h3 className="text-2xl md:text-3xl font-black text-risa-black uppercase tracking-tight mb-4 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 font-medium leading-relaxed group-hover:text-black transition-colors duration-300">
                                    {item.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
