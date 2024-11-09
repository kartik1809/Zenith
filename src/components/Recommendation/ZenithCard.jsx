import React from 'react';
import { motion } from 'framer-motion';

export const ZenithCard = ({ children, className = '' }) => (
  <motion.div
    className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);
