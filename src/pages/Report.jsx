import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Brain,
  ChevronRight,
  ChevronLeft,
  Activity,
  Coffee,
  Sun,
  Moon,
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Cell,
} from 'recharts';
import { Sidebar } from '../components/shared';
const currentMonthData = [
  { day: 1, productivity: 75, focus: 80, tasks: 12, energy: 85, mood: 7 },
  { day: 2, productivity: 80, focus: 85, tasks: 15, energy: 90, mood: 8 },
  { day: 3, productivity: 70, focus: 75, tasks: 10, energy: 75, mood: 6 },
  { day: 4, productivity: 85, focus: 90, tasks: 18, energy: 95, mood: 9 },
  { day: 5, productivity: 78, focus: 82, tasks: 14, energy: 80, mood: 7 },
  { day: 6, productivity: 82, focus: 88, tasks: 16, energy: 85, mood: 8 },
  { day: 7, productivity: 76, focus: 79, tasks: 13, energy: 70, mood: 6 },
  { day: 8, productivity: 88, focus: 92, tasks: 20, energy: 100, mood: 10 },
  { day: 9, productivity: 84, focus: 87, tasks: 17, energy: 90, mood: 8 },
  { day: 10, productivity: 79, focus: 83, tasks: 15, energy: 85, mood: 7 },
];

const previousMonthData = [
  { day: 1, productivity: 70, focus: 75, tasks: 10, energy: 80, mood: 6 },
  { day: 2, productivity: 72, focus: 78, tasks: 12, energy: 85, mood: 7 },
  { day: 3, productivity: 68, focus: 73, tasks: 9, energy: 70, mood: 5 },
  { day: 4, productivity: 75, focus: 80, tasks: 14, energy: 90, mood: 8 },
  { day: 5, productivity: 71, focus: 76, tasks: 11, energy: 75, mood: 6 },
  { day: 6, productivity: 73, focus: 79, tasks: 13, energy: 80, mood: 7 },
  { day: 7, productivity: 69, focus: 74, tasks: 10, energy: 65, mood: 5 },
  { day: 8, productivity: 76, focus: 82, tasks: 15, energy: 95, mood: 9 },
  { day: 9, productivity: 74, focus: 80, tasks: 13, energy: 85, mood: 7 },
  { day: 10, productivity: 72, focus: 77, tasks: 12, energy: 80, mood: 6 },
];

const calculateAverage = (data, key) => {
  return Math.round(data.reduce((sum, item) => sum + item[key], 0) / data.length);
};

const currentMonthAverages = {
  productivity: calculateAverage(currentMonthData, 'productivity'),
  focus: calculateAverage(currentMonthData, 'focus'),
  tasks: calculateAverage(currentMonthData, 'tasks'),
  energy: calculateAverage(currentMonthData, 'energy'),
  mood: calculateAverage(currentMonthData, 'mood'),
};

const previousMonthAverages = {
  productivity: calculateAverage(previousMonthData, 'productivity'),
  focus: calculateAverage(previousMonthData, 'focus'),
  tasks: calculateAverage(previousMonthData, 'tasks'),
  energy: calculateAverage(previousMonthData, 'energy'),
  mood: calculateAverage(previousMonthData, 'mood'),
};

const productivityByHour = [
  { hour: '6AM', productivity: 65 },
  { hour: '9AM', productivity: 90 },
  { hour: '12PM', productivity: 75 },
  { hour: '3PM', productivity: 80 },
  { hour: '6PM', productivity: 70 },
  { hour: '9PM', productivity: 60 },
];

const taskCategories = [
  { name: 'Deep Work', completed: 45, total: 50 },
  { name: 'Meetings', completed: 15, total: 20 },
  { name: 'Email', completed: 30, total: 35 },
  { name: 'Planning', completed: 10, total: 12 },
  { name: 'Learning', completed: 8, total: 10 },
];

export default function Report() {
  const [selectedMonth, setSelectedMonth] = useState('current');

  const downloadReport = () => {
    alert('Downloading report...');
  };

  const renderComparison = (current, previous, label, icon) => {
    const diff = current - previous;
    const isPositive = diff > 0;
    return (
      <div className='flex items-center justify-between p-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg'>
        {icon}
        <div className='ml-4 flex-grow p-5'>
          <p className='text-sm text-slate-200'>{label}</p>
          <p className='text-2xl font-bold text-slate-100'>{current}</p>
        </div>
        <div className={`flex items-center ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? (
            <ArrowUpRight className='w-4 h-4 mr-1' />
          ) : (
            <ArrowDownRight className='w-4 h-4 mr-1' />
          )}
          <span>{Math.abs(diff)}</span>
        </div>
      </div>
    );
  };

  return (
    <div className='flex min-h-screen'>
      <Sidebar selectedNav={'30 Days Report'} />
      <div className='min-h-screen w-full bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex justify-between items-center mb-8'>
            <div>
              <h1 className='text-4xl font-bold mb-2 text-slate-100'>Your 30-Day Zenith Report</h1>
              <p className='text-xl text-slate-200'>
                Insights and analytics for your productivity journey
              </p>
            </div>
            <button
              onClick={downloadReport}
              className='flex items-center px-4 py-2 bg-white text-blue-900 rounded-md transition-colors'
            >
              <Download className='w-4 h-4 mr-2' />
              Download Report
            </button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
            {renderComparison(
              currentMonthAverages.productivity,
              previousMonthAverages.productivity,
              'Avg. Productivity',
              <Zap className='w-8 h-8 text-yellow-400' />
            )}
            {renderComparison(
              currentMonthAverages.energy,
              previousMonthAverages.energy,
              'Avg. Energy Level',
              <Activity className='w-8 h-8 text-blue-400' />
            )}
            {renderComparison(
              currentMonthAverages.mood,
              previousMonthAverages.mood,
              'Avg. Mood Score',
              <Coffee className='w-8 h-8 text-green-400' />
            )}
          </div>

          <div className='bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 mb-8'>
            <h2 className='text-2xl font-bold mb-2 text-slate-100'>Monthly Overview</h2>
            <p className='text-slate-200 mb-4'>Your productivity trends over time</p>
            <div className='flex justify-between items-center mb-4'>
              <div>
                <button
                  onClick={() => setSelectedMonth('previous')}
                  className={`px-4 py-2 rounded-md mr-2 ${
                    selectedMonth === 'previous'
                      ? 'bg-white text-blue-900'
                      : 'bg-transparent text-slate-100 border border-white'
                  }`}
                >
                  Previous Month
                </button>
                <button
                  onClick={() => setSelectedMonth('current')}
                  className={`px-4 py-2 rounded-md ${
                    selectedMonth === 'current'
                      ? 'bg-white text-blue-900'
                      : 'bg-transparent text-slate-100 border border-orange-500'
                  }`}
                >
                  Current Month
                </button>
              </div>
              <div className='flex items-center'>
                <button className='p-1 bg-transparent text-slate-100 border border-orange-500 rounded-md mr-2'>
                  <ChevronLeft className='w-4 h-4' />
                </button>
                <span className='text-sm font-medium text-slate-100'>May 2024</span>
                <button className='p-1 bg-transparent text-slate-100 border border-orange-500 rounded-md ml-2'>
                  <ChevronRight className='w-4 h-4' />
                </button>
              </div>
            </div>
            <ResponsiveContainer width='100%' height={300}>
              <AreaChart data={selectedMonth === 'current' ? currentMonthData : previousMonthData}>
                <XAxis dataKey='day' stroke='#fed7aa' />
                <YAxis stroke='#fed7aa' />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e3a5f', border: 'none', borderRadius: '4px' }}
                />
                <Area
                  type='monotone'
                  dataKey='productivity'
                  stroke='#f97316'
                  fill='#f97316'
                  fillOpacity={0.3}
                />
                <Area
                  type='monotone'
                  dataKey='energy'
                  stroke='#3b82f6'
                  fill='#3b82f6'
                  fillOpacity={0.3}
                />
                <Area
                  type='monotone'
                  dataKey='mood'
                  stroke='#22c55e'
                  fill='#22c55e'
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
            <div className='bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6'>
              <h2 className='text-2xl font-bold mb-2 text-slate-100'>
                Productivity by Time of Day
              </h2>
              <p className='text-slate-200 mb-4'>Identify your most productive hours</p>
              <ResponsiveContainer width='100%' height={300}>
                <BarChart data={productivityByHour}>
                  <XAxis dataKey='hour' stroke='#fed7aa' />
                  <YAxis stroke='#fed7aa' />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e3a5f',
                      border: 'none',
                      borderRadius: '4px',
                    }}
                  />
                  <Bar dataKey='productivity' fill='#f97316'>
                    {productivityByHour.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.hour.includes('AM') ? '#3b82f6' : '#f97316'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className='bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6'>
              <h2 className='text-2xl font-bold mb-2 text-slate-100'>
                Task Completion by Category
              </h2>
              <p className='text-slate-200 mb-4'>Your task performance across different areas</p>
              {taskCategories.map((category, index) => (
                <div key={index} className='mb-4'>
                  <div className='flex justify-between mb-1'>
                    <span className='text-sm font-medium text-slate-100'>{category.name}</span>
                    <span className='text-sm font-medium text-slate-100'>
                      {category.completed}/{category.total}
                    </span>
                  </div>
                  <div className='w-full bg-blue-900 rounded-full h-2.5'>
                    <div
                      className='bg-blue-500 h-2.5 rounded-full'
                      style={{ width: `${(category.completed / category.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6'>
            <h2 className='text-2xl font-bold mb-2 text-slate-100'>Productivity Insights</h2>
            <p className='text-slate-200 mb-4'>Key observations and actionable tips</p>
            <ul className='space-y-2'>
              <li className='flex items-center'>
                <Sun className='w-4 h-4 mr-2 text-yellow-400' />
                <span className='text-slate-100'>
                  Your productivity peaks at 9AM. Schedule your most important tasks for this time.
                </span>
              </li>
              <li className='flex items-center'>
                <Brain className='w-4 h-4 mr-2 text-purple-400' />
                <span className='text-slate-100'>
                  Deep Work tasks have the highest completion rate. Try to allocate more time for
                  focused work.
                </span>
              </li>
              <li className='flex items-center'>
                <Activity className='w-4 h-4 mr-2 text-blue-400' />
                <span className='text-slate-100'>
                  Your energy levels correlate strongly with productivity. Consider energy
                  management techniques.
                </span>
              </li>
              <li className='flex items-center'>
                <Moon className='w-4 h-4 mr-2 text-gray-400' />
                <span className='text-slate-100'>
                  Productivity dips after 6PM. Avoid scheduling critical tasks for late evening
                  hours.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
