import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ZenithCard } from './ZenithCard';

export const FocusFlow = ({ zenithData }) => {
  console.log('focus', zenithData);

  return (
    <ZenithCard className='col-span-1'>
      <h2 className='text-2xl font-semibold mb-4'>Focus Flow</h2>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={zenithData}>
          <CartesianGrid strokeDasharray='3 3' stroke='#2a3a5a' />
          <XAxis dataKey='date' stroke='#8884d8' height={20} interval={1} />
          <YAxis stroke='#8884d8' width={23} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(26, 32, 53, 0.8)',
              backdropFilter: 'blur(4px)',
              border: 'none',
              color: '#fff',
            }}
          />
          <Line type='monotone' dataKey='focus' stroke='#8884d8' strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
      <p className='mt-4 text-center'>Your focus is improving! Keep up the great work!</p>
    </ZenithCard>
  );
};
