import React from 'react';
import { motion } from 'framer-motion';
import {
  AIInsights,
  MentalHealthResources,
  MetricCards,
  MoodTrend,
  SentimentAnalysis,
} from '../components/MentalHealth';
import { Sidebar } from '../components/shared';
import useMentalHealthData from '../components/hooks/useMentalHealthData.jsx';
import { useSelector } from 'react-redux';

const MentalHealthPage = () => {
  const { metrics, mentalHealthData, aiInsights } = useMentalHealthData();
  const userData = useSelector((state) => state.user.userData);
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  
  const transformData = (dayWiseScores) => {
    const today = new Date();
    return dayWiseScores
      .filter(day => day.focusScore !== null)
      .map((day, index) => {
        const date = new Date(today);
        date.setDate(today.getDate() - (3 - index));
        const formattedDate = date.toISOString().split('T')[0];
        return {
          date: formattedDate,
          moodScore: Math.round(day.moodScore),
          sentimentScore: day.sentimentScore,
          focusTime: Math.round(day.focusScore)
        };
      });
  };


  

  return (
    <div className='flex min-h-screen'>
      <Sidebar selectedNav={'Mental Health'} />
      <motion.div
        className='min-h-screen w-full bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8'
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
        transition={pageTransition}
      >
        <motion.h1
          className='text-4xl font-bold mb-1'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Zenith Wellness Dashboard
        </motion.h1>
        <motion.p
          className='text-xl mb-8'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Elevate Your Mind, Track Your Progress
        </motion.p>
        <MetricCards metrics={metrics} />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <MoodTrend data={transformData(userData.result?.dayWiseScores || [])} />
          <SentimentAnalysis data={transformData(userData.result?.dayWiseScores || [])} />
        </div>

        <div className='grid grid-cols-1 gap-6 mb-8'>
          <AIInsights insights={aiInsights} />
        </div>

        <MentalHealthResources />
      </motion.div>
    </div>
  );
};

export default MentalHealthPage;
