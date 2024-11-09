import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import { Sidebar } from '../components/shared';

const websiteData = [
  { name: 'Mon', productivity: 65, time: 120 },
  { name: 'Tue', productivity: 59, time: 100 },
  { name: 'Wed', productivity: 80, time: 150 },
  { name: 'Thu', productivity: 81, time: 160 },
  { name: 'Fri', productivity: 56, time: 90 },
  { name: 'Sat', productivity: 55, time: 85 },
  { name: 'Sun', productivity: 40, time: 60 },
];

const topWebsites = [
  { name: 'github.com', time: 420, category: 'Work', change: 5 },
  { name: 'stackoverflow.com', time: 300, category: 'Learning', change: -2 },
  { name: 'youtube.com', time: 180, category: 'Entertainment', change: 10 },
  { name: 'docs.google.com', time: 150, category: 'Work', change: 3 },
  { name: 'chat.openai.com', time: 120, category: 'AI', change: 15 },
];

const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

const VisitedWebsites = () => {
  return (
    <div className='flex min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white'>
      <Sidebar selectedNav='Visited Websites' />
      <div className='flex-1 p-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-4xl font-bold mb-1'>Visited Websites Dashboard</h1>
          <p className='text-xl mb-8'>Track Your Online Productivity</p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
            <MetricCard
              title='Total Websites'
              value='76'
              icon='🌐'
              color='text-blue-400'
              change={3}
            />
            <MetricCard
              title='Total Time'
              value='19h 18m'
              icon='⏱️'
              color='text-green-400'
              change={-2}
            />
            <MetricCard
              title='Productivity Score'
              value='72%'
              icon='📈'
              color='text-yellow-400'
              change={5}
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
            <WebsiteChart data={websiteData} />
            <TopWebsites websites={topWebsites} />
          </div>

          <WebsiteCategories />
        </motion.div>
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, icon, color, change }) => (
  <motion.div
    className='bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl'
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className='flex justify-between items-center mb-4'>
      <h3 className='text-lg font-semibold text-gray-300'>{title}</h3>
      <span className='text-2xl'>{icon}</span>
    </div>
    <div className={`text-4xl font-bold ${color}`}>{value}</div>
    {change !== undefined && (
      <div className={`mt-2 ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
        {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
      </div>
    )}
  </motion.div>
);

const WebsiteChart = ({ data }) => (
  <motion.div
    className='bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className='text-2xl font-semibold mb-4'>Website Usage Trend</h2>
    <ResponsiveContainer width='100%' height={300}>
      <LineChart data={data}>
        <XAxis dataKey='name' stroke='#fff' />
        <YAxis stroke='#fff' />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            border: 'none',
            borderRadius: '4px',
          }}
        />
        <Line
          type='monotone'
          dataKey='productivity'
          stroke='#4CAF50'
          name='Productivity'
          strokeWidth={2}
          dot={{ r: 4 }}
        />
        <Line
          type='monotone'
          dataKey='time'
          stroke='#2196F3'
          name='Time Spent (min)'
          strokeWidth={2}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </motion.div>
);

const TopWebsites = ({ websites }) => (
  <motion.div
    className='bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className='text-2xl font-semibold mb-4'>Top Visited Websites</h2>
    <div className='space-y-4'>
      {websites.map((website, index) => (
        <motion.div
          key={index}
          className='flex items-center justify-between'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div>
            <div className='font-medium'>{website.name}</div>
            <div className='text-sm text-gray-400'>{website.category}</div>
          </div>
          <div className='text-right'>
            <div>{formatTime(website.time)}</div>
            <div className={website.change >= 0 ? 'text-green-400' : 'text-red-400'}>
              {website.change >= 0 ? (
                <ArrowUpIcon className='inline w-4 h-4' />
              ) : (
                <ArrowDownIcon className='inline w-4 h-4' />
              )}
              {Math.abs(website.change)}%
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const WebsiteCategories = () => {
  const categories = [
    { name: 'Work', percentage: 45, color: 'bg-blue-500' },
    { name: 'Learning', percentage: 30, color: 'bg-green-500' },
    { name: 'Entertainment', percentage: 15, color: 'bg-yellow-500' },
    { name: 'Social', percentage: 10, color: 'bg-red-500' },
  ];

  return (
    <motion.div
      className='bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className='text-2xl font-semibold mb-4'>Website Categories</h2>
      <div className='space-y-4'>
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className='flex items-center'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className='w-24 text-sm'>{category.name}</div>
            <div className='flex-1'>
              <div className='h-4 bg-gray-700 rounded-full'>
                <div
                  className={`h-4 rounded-full ${category.color}`}
                  style={{ width: `${category.percentage}%` }}
                ></div>
              </div>
            </div>
            <div className='w-12 text-right text-sm'>{category.percentage}%</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default VisitedWebsites;
