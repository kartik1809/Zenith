import React from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const SentimentAnalysis = ({ data }) => {
  return (
    <motion.div
      className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className='text-2xl font-semibold mb-4'>Sentiment Analysis</h2>
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id='colorSentiment' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='date' stroke='#fff' />
          <YAxis stroke='#fff' />
          <CartesianGrid strokeDasharray='3 3' stroke='rgba(255,255,255,0.2)' />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0,0,0,0.8)',
              border: 'none',
              borderRadius: '4px',
            }}
          />
          <Area
            type='monotone'
            dataKey='sentimentScore'
            stroke='#8884d8'
            fillOpacity={1}
            fill='url(#colorSentiment)'
            name='Sentiment Score'
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default SentimentAnalysis;
