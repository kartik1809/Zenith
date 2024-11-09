import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './Card.jsx';

export const Recommendations = ({ recommendations }) => (
  <Card>
    <CardHeader>
      <CardTitle>Recommendations</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className='space-y-2'>
        {recommendations.map((recommendation, index) => (
          <li key={index} className='flex items-center'>
            <ChevronRight className='w-4 h-4 mr-2 text-green-400' />
            <span>{recommendation}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);
