// import React from 'react';
// import {
//   ResponsiveContainer,
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from 'recharts';

// const ProductivityPulseChart = ({ data }) => (
//   <ResponsiveContainer width='100%' height={300}>
//     <AreaChart data={data}>
//       <CartesianGrid strokeDasharray='3 3' stroke='#2a3a5a' />
//       <XAxis dataKey='day' stroke='#8884d8' />
//       <YAxis stroke='#8884d8' />
//       <Tooltip contentStyle={{ backgroundColor: '#1a2035', border: 'none' }} />
//       <Area
//         type='monotone'
//         dataKey='productivity'
//         stroke='#8884d8'
//         fill='#8884d8'
//         fillOpacity={0.8}
//       />
//       <Area type='monotone' dataKey='focus' stroke='#82ca9d' fill='#82ca9d' fillOpacity={0.3} />
//     </AreaChart>
//   </ResponsiveContainer>
// );

// export default ProductivityPulseChart;

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ZenithCard } from './ZenithCard';

export const ProductivityPulse = ({ zenithData }) => (
  <ZenithCard className='col-span-full lg:col-span-2'>
    <h2 className='text-2xl font-semibold mb-4'>Your Productivity Pulse</h2>
    <ResponsiveContainer width='100%' height={300}>
      <AreaChart data={zenithData}>
        <CartesianGrid strokeDasharray='3 3' stroke='#2a3a5a' />
        <XAxis dataKey='day' stroke='#8884d8' />
        <YAxis stroke='#8884d8' />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(26, 32, 53, 0.8)',
            backdropFilter: 'blur(4px)',
            border: 'none',
          }}
        />
        <Area
          type='monotone'
          dataKey='productivity'
          stroke='#8884d8'
          fill='#8884d8'
          fillOpacity={0.8}
        />
        <Area type='monotone' dataKey='focus' stroke='#82ca9d' fill='#82ca9d' fillOpacity={0.3} />
      </AreaChart>
    </ResponsiveContainer>
  </ZenithCard>
);
