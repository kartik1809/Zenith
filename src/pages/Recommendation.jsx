import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format, startOfWeek, addDays, subDays } from 'date-fns';
import { ChevronLeft, ChevronRight, CalendarIcon } from 'lucide-react';
import { Sidebar } from '../components/shared';
import {
  ProductivityPulse,
  ZenScore,
  ProductivityBoosters,
  FocusFlow,
  ZenithFocusTimer,
  DailyProTip,
  GrowthJourney,
  InsightModal,
} from '../components/Recommendation';

import { useZenithData } from '../components/hooks/useZenithData';

const Recommendation = () => {
  const [viewMode, setViewMode] = useState('week');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedInsight, setSelectedInsight] = useState(null);
  const { zenithData, zenithInsights, zenScore, dailyInsight, growthProgress } = useZenithData();

  const navigateDate = (direction) => {
    setCurrentDate((prevDate) => {
      if (viewMode === 'day') {
        return direction === 'next' ? addDays(prevDate, 1) : subDays(prevDate, 1);
      } else {
        return direction === 'next' ? addDays(prevDate, 7) : subDays(prevDate, 7);
      }
    });
  };

  const renderDateNavigation = () => (
    <motion.div
      className='flex items-center justify-between mb-6 p-4 rounded-xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <button onClick={() => navigateDate('prev')} className='hover:text-blue-300'>
        <ChevronLeft size={24} />
      </button>
      <div className='flex items-center'>
        <CalendarIcon className='mr-2 ' size={24} />
        <span className='text-lg font-semibold text-white'>
          {viewMode === 'day'
            ? format(currentDate, 'MMMM d, yyyy')
            : `Week of ${format(startOfWeek(currentDate), 'MMMM d, yyyy')}`}
        </span>
      </div>
      <button onClick={() => navigateDate('next')} className=' hover:text-blue-300'>
        <ChevronRight size={24} />
      </button>
    </motion.div>
  );

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

        <motion.div
          className='mb-6 flex space-x-4'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={() => setViewMode('day')}
            className={`px-4 py-2 rounded-full transition-colors ${
              viewMode === 'day'
                ? 'bg-blue-600 text-white'
                : 'bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-blue-400 hover:bg-opacity-20'
            }`}
          >
            Day View
          </button>
          <button
            onClick={() => setViewMode('week')}
            className={`px-4 py-2 rounded-full transition-colors ${
              viewMode === 'week'
                ? 'bg-blue-600 text-white'
                : 'bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-blue-400 hover:bg-opacity-20'
            }`}
          >
            Week View
          </button>
        </motion.div>

        {renderDateNavigation()}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          <ProductivityPulse zenithData={zenithData} />
          <ZenScore zenScore={zenScore} />
          <ProductivityBoosters
            zenithInsights={zenithInsights}
            setSelectedInsight={setSelectedInsight}
          />
          <FocusFlow zenithData={zenithData} />
          <ZenithFocusTimer />
          <DailyProTip dailyInsight={dailyInsight} />
          <GrowthJourney growthProgress={growthProgress} />
        </div>

        <InsightModal selectedInsight={selectedInsight} setSelectedInsight={setSelectedInsight} />
      </div>
    </div>
  );
};

export default Recommendation;
