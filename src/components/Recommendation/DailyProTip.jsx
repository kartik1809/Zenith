import React from 'react';
import { Lightbulb } from 'lucide-react';
import { ZenithCard } from './ZenithCard';

export const DailyProTip = ({ dailyInsight }) => (
  <ZenithCard className='col-span-full'>
    <h2 className='text-2xl font-semibold mb-4'>Daily Pro Tip</h2>
    <div className='flex items-start'>
      <Lightbulb className='w-8 h-8 mr-3 text-yellow-400 flex-shrink-0' />
      <p className='text-white'>{dailyInsight}</p>
    </div>
  </ZenithCard>
);
