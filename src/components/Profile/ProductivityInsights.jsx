import React from 'react';
import { Activity, BarChart, PieChart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';

const InsightItem = ({ icon: Icon, label, value, color }) => (
  <div className='flex items-center justify-between'>
    <div className='flex items-center'>
      <Icon className={`w-5 h-5 mr-2 ${color}`} />
      <span>{label}</span>
    </div>
    <span className='font-semibold'>{value}</span>
  </div>
);

export const ProductivityInsights = ({ insights }) => (
  <Card>
    <CardHeader>
      <CardTitle>Productivity Insights</CardTitle>
    </CardHeader>
    <CardContent>
      <div className='space-y-4'>
        <InsightItem
          icon={Activity}
          label='Most Productive Day'
          value={insights.mostProductiveDay}
          color='text-green-400'
        />
        <InsightItem
          icon={BarChart}
          label='Peak Performance Time'
          value={insights.peakPerformanceTime}
          color='text-blue-400'
        />
        <InsightItem
          icon={PieChart}
          label='Work-Life Balance Score'
          value={insights.workLifeBalanceScore}
          color='text-yellow-400'
        />
      </div>
    </CardContent>
  </Card>
);
