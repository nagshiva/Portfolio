import React from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
  return (
    <div className="pt-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Journey
      </motion.h1>
      {/* Content will be added later */}
      <p className="text-gray-300">Journey content coming soon...</p>
    </div>
  );
};

export default Journey;