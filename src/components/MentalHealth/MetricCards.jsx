import React from 'react';
import { motion } from 'framer-motion';
import MetricCard from './MetricCard';
import { useSelector } from 'react-redux';

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

  const userData = useSelector((state) => state.user.userData);
  console.log(userData);

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
          value={((userData.result) ? userData.result.overallScores.wellbeingScore : 0).toFixed(2)}
          icon='🧠'
          color='text-green-400'
          change={3}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <MetricCard
          title='Average Mood'
          value={((userData.result) ? userData.result.overallScores.moodScore : 0).toFixed(2)}
          icon='😊'
          color='text-yellow-400'
          change={5}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <MetricCard
          title='Average Sentiment'
          value={((userData.result) ? userData.result.overallScores.wellbeingScore/100 : 0).toFixed(2)}
          icon='💖'
          color='text-pink-400'
          change={-2}
        />
      </motion.div>
    </motion.div>
  );
};

export default MetricCards;
