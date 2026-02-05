import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const ReviewBadge: React.FC = () => {
  return (
    <motion.div 
      className="inline-flex items-center gap-2 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="flex items-center gap-1.5">
        <span className="font-bold text-risa-black text-lg leading-none">4.9</span>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={16} className="fill-risa-yellow text-risa-yellow" />
          ))}
        </div>
      </div>
      <span className="text-sm text-gray-400 font-medium ml-1">• aus 12k+ Bewertungen</span>
    </motion.div>
  );
};

export default ReviewBadge;