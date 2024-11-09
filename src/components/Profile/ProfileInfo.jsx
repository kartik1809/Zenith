import React from 'react';
import { User, MapPin, Calendar, Users, Camera } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import { Button } from './Button';

export const ProfileInfo = ({ user }) => (
  <Card className='md:col-span-2'>
    <CardHeader>
      <CardTitle>Profile Information</CardTitle>
    </CardHeader>
    <CardContent>
      <div className='flex items-center space-x-4 mb-4'>
        <div className='w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center text-3xl'>
          {user.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <h2 className='text-2xl font-bold'>{user.name}</h2>
          <p className='text-blue-400'>{user.role}</p>
          <div className='flex space-x-2 mt-2'>
            {user.skills.map((skill, index) => (
              <Button key={index} variant='outline' size='sm'>
                {skill}
              </Button>
            ))}
          </div>
        </div>
        <Button variant='secondary' size='icon' className='ml-auto'>
          <Camera className='w-4 h-4' />
        </Button>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex items-center space-x-2'>
          <User className='w-4 h-4' />
          <span>{user.email}</span>
        </div>
        <div className='flex items-center space-x-2'>
          <MapPin className='w-4 h-4' />
          <span>{user.location}</span>
        </div>
        <div className='flex items-center space-x-2'>
          <Calendar className='w-4 h-4' />
          <span>Joined {user.joinDate}</span>
        </div>
        <div className='flex items-center space-x-2'>
          <Users className='w-4 h-4' />
          <span>Team: {user.team}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);
