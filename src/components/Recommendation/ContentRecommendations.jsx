import React from 'react';
import { motion } from 'framer-motion';

export const ContentRecommendations = ({ recommendations }) => {
  return (
    <motion.div
      className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg col-span-2'
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className='text-2xl font-semibold mb-4 text-gray-200'>Zen Recommendations</h2>
      <p className='text-gray-400 mb-4'>
        Curated content to boost your productivity, well-being, and personal growth
      </p>
      <div className='grid grid-cols-3 gap-4'>
        {recommendations.map((content) => (
          <div
            key={content.id}
            className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-md'
          >
            <div className='flex items-center mb-2 '>
              <content.icon className='w-6 h-6 mr-2 text-blue-400' />
              <h3 className='text-lg font-semibold text-gray-200'>{content.title}</h3>
            </div>
            <div className='flex items-center justify-between text-sm text-gray-400 mb-2'>
              <span>{content.type}</span>
              <span>{content.duration}</span>
            </div>
            <span className='inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full'>
              {content.category}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
