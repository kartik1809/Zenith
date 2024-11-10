import React from 'react';
import { motion } from 'framer-motion';

const MentalHealthResources = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
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
      <h2 className='text-2xl font-semibold mb-4'>Mental Health Resources</h2>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {[
          { text: 'Meditation Techniques', color: 'blue' },
          { text: 'Stress Management Tips', color: 'brown' },
          { text: 'Mood Tracking Guide', color: 'pink' },
          { text: 'Find a Therapist', color: 'purple' },
          { text: 'Emergency Helplines', color: 'orange' },
          { text: 'Self-Care Strategies', color: 'indigo' },
        ].map((item, index) => (
          <motion.li
            key={index}
            className={`cursor-pointer block p-3 bg-opacity-50 rounded-lg hover:bg-opacity-80 transition-colors`}
            style={{ backgroundColor: `${item.color}` }}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`bg=${item.color}-600`}>{item.text}</div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MentalHealthResources;
