import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { format } from 'date-fns';

const MoodTrend = ({ data }) => {
  return (
    <motion.div
      className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className='text-2xl font-semibold mb-4'>Mood Score Trend</h2>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={data}>
          <XAxis
            dataKey='date'
            stroke='#fff'
            tickFormatter={(date) => format(new Date(date), 'dd MMM')}
          />
          <YAxis stroke='#fff' />
          <CartesianGrid strokeDasharray='3 3' stroke='rgba(255,255,255,0.2)' />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0,0,0,0.8)',
              border: 'none',
              borderRadius: '4px',
            }}
          />
          <Line
            type='monotone'
            dataKey='moodScore'
            stroke='#4CAF50'
            name='Mood Score'
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default MoodTrend;
