import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const FocusFlowChart = ({ data }) => (
  <ResponsiveContainer width='100%' height={200}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray='3 3' stroke='#2a3a5a' />
      <XAxis dataKey='day' stroke='#8884d8' />
      <YAxis stroke='#8884d8' />
      <Tooltip contentStyle={{ backgroundColor: '#1a2035', border: 'none' }} />
      <Line type='monotone' dataKey='focus' stroke='#8884d8' strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
);

export default FocusFlowChart;
