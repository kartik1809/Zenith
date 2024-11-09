import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card';
import { Badge } from './Badge.jsx';

export const EarnedBadges = ({ badges }) => (
  <Card className='mb-8'>
    <CardHeader>
      <CardTitle>Earned Badges</CardTitle>
      <CardDescription>Your Zenith achievements and recognitions</CardDescription>
    </CardHeader>
    <CardContent>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {badges.map((badge, index) => (
          <Badge key={index} {...badge} />
        ))}
      </div>
    </CardContent>
  </Card>
);
