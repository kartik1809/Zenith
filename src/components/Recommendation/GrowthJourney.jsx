import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Zap } from 'lucide-react';
import { ZenithCard } from './ZenithCard';

export const GrowthJourney = ({ growthProgress }) => (
  <ZenithCard className='col-span-full'>
    <h2 className='text-2xl font-semibold mb-4'>Your Growth Journey</h2>
    <div className='bg-white bg-opacity-20 rounded-full h-4 mb-4'>
      <motion.div
        className='bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full'
        initial={{ width: 0 }}
        animate={{ width: `${growthProgress}%` }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
    </div>
    <p className='text-gray-300 mb-4'>
      You've completed {growthProgress}% of your growth plan. Fantastic progress!
    </p>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      <div className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-lg flex items-center'>
        <Award className='w-8 h-8 mr-3 text-yellow-400' />
        <span>Productivity Champion</span>
      </div>
      <div className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-lg flex items-center'>
        <TrendingUp className='w-8 h-8 mr-3 text-green-400' />
        <span>Consistent Improver</span>
      </div>
      <div className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-lg flex items-center'>
        <Zap className='w-8 h-8 mr-3 text-blue-400' />
        <span>Focus Master</span>
      </div>
    </div>
  </ZenithCard>
);
