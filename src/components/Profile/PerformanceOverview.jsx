import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import { Progress } from './Progress.jsx';

const PerformanceItem = ({ label, value, average, unit }) => (
  <div>
    <div className='flex justify-between mb-1'>
      <span className='text-sm font-medium'>{label}</span>
      <span className='text-sm font-medium'>
        {value} {unit}
      </span>
    </div>
    <Progress value={(value / average) * 100} className='w-full' />
    <p className='text-xs text-gray-400 mt-1'>
      {Math.abs(value - average)} {unit} {value > average ? 'above' : 'below'} average
    </p>
  </div>
);

export const PerformanceOverview = ({ userComparison }) => (
  <Card>
    <CardHeader>
      <CardTitle>Performance Overview</CardTitle>
    </CardHeader>
    <CardContent>
      <div className='space-y-4'>
        <PerformanceItem
          label='Productivity Score'
          value={userComparison.productivityScore}
          average={userComparison.averageProductivityScore}
          unit='%'
        />
        <PerformanceItem
          label='Websites Visited'
          value={userComparison.websitesVisited}
          average={userComparison.averageWebsitesVisited}
          unit='Websites'
        />
        <PerformanceItem
          label='Time Spent'
          value={userComparison.timeSpent}
          average={userComparison.averageTimeSpent}
          unit='min'
        />
      </div>
    </CardContent>
  </Card>
);
