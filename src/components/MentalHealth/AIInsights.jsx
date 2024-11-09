import React from 'react';
import { motion } from 'framer-motion';

const AIInsights = ({ insights }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <h2 className='text-2xl font-semibold mb-4'>AI-Generated Insights</h2>
      <ul className='list-disc pl-6 space-y-2'>
        {insights.map((insight, index) => (
          <motion.li key={index} variants={itemVariants}>
            {insight}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AIInsights;
