import React from 'react';
import { motion } from 'framer-motion';
import MetricCard from './MetricCard';

const MetricCards = ({ metrics }) => {
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
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div variants={itemVariants}>
        <MetricCard
          title='Mental Health Score'
          value={metrics.mentalHealthScore}
          icon='🧠'
          color='text-green-400'
          change={3}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <MetricCard
          title='Average Mood'
          value={metrics.averageMood}
          icon='😊'
          color='text-yellow-400'
          change={5}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <MetricCard
          title='Average Sentiment'
          value={metrics.averageSentiment}
          icon='💖'
          color='text-pink-400'
          change={2}
        />
      </motion.div>
    </motion.div>
  );
};

export default MetricCards;
