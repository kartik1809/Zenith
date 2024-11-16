import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sidebar } from '../components/shared';
import {
  ProductivityPulse,
  ZenScore,
  ProductivityBoosters,
  FocusFlow,
  DailyProTip,
  GrowthJourney,
  InsightModal,
  ContentRecommendations,
  VideoRecommendations,
} from '../components/Recommendation';
import { contentRecommendations, videoRecommendations } from '../utils/AnalyticsData';
import { useZenithData } from '../components/hooks/useZenithData';
import { useSelector } from 'react-redux';

const Recommendation = () => {
  const [viewMode, setViewMode] = useState('day');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedInsight, setSelectedInsight] = useState(null);

  const { zenithData, zenithInsights, setZenithInsights, zenScore, dailyInsight, growthProgress } =
    useZenithData();

  const userData = useSelector((state) => state.user?.userData || {});

  const transformData = (dayWiseScores = []) => {
    const today = new Date();
    return dayWiseScores
      .filter((day) => day.focusScore !== null)
      .map((day, index) => {
        const date = new Date(today);
        date.setDate(today.getDate() - (4 - index));
        return {
          date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          productivity: Math.round(day.productivityScore),
          focus: Math.round(day.focusScore),
          contentConsumption: Math.round(day.contentScore),
          mood: Math.round(day.moodScore),
        };
      });
  };

  return (
    <div className='flex min-h-screen'>
      <Sidebar selectedNav={'Recommendation'} />
      <div className='min-h-screen w-full bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8'>
        <motion.h1
          className='text-4xl font-bold mb-2'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Zenith Pro Insights
        </motion.h1>
        <motion.p
          className='text-xl mb-8'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Boost your productivity and reach new heights
        </motion.p>

        <DailyProTip dailyInsight={dailyInsight} />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
          <ProductivityPulse zenithData={transformData(userData.result?.dayWiseScores || [])} />
          <ZenScore zenScore={zenScore} />
          <ProductivityBoosters
            zenithInsights={zenithInsights}
            setZenithInsights={setZenithInsights}
            setSelectedInsight={setSelectedInsight}
          />
          <ContentRecommendations recommendations={contentRecommendations} />
          <FocusFlow zenithData={transformData(userData.result?.dayWiseScores || [])} />
          <VideoRecommendations recommendations={videoRecommendations} />
          <GrowthJourney growthProgress={growthProgress} />
        </div>

        <InsightModal selectedInsight={selectedInsight} setSelectedInsight={setSelectedInsight} />
      </div>
    </div>
  );
};

export default Recommendation;
