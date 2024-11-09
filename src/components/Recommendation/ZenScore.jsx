import React from 'react';
import { motion } from 'framer-motion';
import { ZenithCard } from './ZenithCard';

export const ZenScore = ({ zenScore }) => (
  <ZenithCard>
    <h2 className='text-2xl font-semibold mb-4'>Zen Score</h2>
    <div className='flex items-center justify-center'>
      <div className='relative'>
        <svg className='w-48 h-48 transform -rotate-90'>
          <circle
            className='text-gray-700'
            strokeWidth='10'
            stroke='currentColor'
            fill='transparent'
            r='90'
            cx='96'
            cy='96'
          />
          <motion.circle
            className='text-blue-500'
            strokeWidth='10'
            strokeDasharray={565.48}
            strokeDashoffset={565.48 - (565.48 * zenScore) / 100}
            strokeLinecap='round'
            stroke='currentColor'
            fill='transparent'
            r='90'
            cx='96'
            cy='96'
            initial={{ strokeDashoffset: 565.48 }}
            animate={{ strokeDashoffset: 565.48 - (565.48 * zenScore) / 100 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        </svg>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold'>
          {zenScore}
        </div>
      </div>
    </div>
    <p className='text-center mt-4'>
      Great job! Your Zen Score is in the top 20% of Zenith Pro users!
    </p>
  </ZenithCard>
);
