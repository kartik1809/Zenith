import React from 'react';
import { motion } from 'framer-motion';
import { XIcon } from 'lucide-react';

export const InsightModal = ({ selectedInsight, setSelectedInsight }) => {
  if (!selectedInsight) return null;

  return (
    <motion.div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 max-w-lg w-full'
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-xl font-semibold'>{selectedInsight.text}</h3>
          <button
            onClick={() => setSelectedInsight(null)}
            className='text-gray-400 hover:text-white'
          >
            <XIcon size={24} />
          </button>
        </div>
        <p className='text-gray-300 mb-4'>{selectedInsight.details}</p>
        <div className='flex justify-end'>
          <button
            onClick={() => setSelectedInsight(null)}
            className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200'
          >
            Got it!
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
