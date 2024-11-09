import React from 'react';
import { Bell, MessageCircle, LogOut } from 'lucide-react';
import { Button } from './Button';

export const ProfileHeader = ({ user, onLogout }) => (
  <div className='flex justify-between items-center mb-8'>
    <h1 className='text-4xl font-bold'>Zenith User Profile</h1>
    <div className='flex items-center space-x-4'>
      <Bell className='w-6 h-6 cursor-pointer' />
      <MessageCircle className='w-6 h-6 cursor-pointer' />
      <Button variant='destructive' size='sm' onClick={onLogout}>
        <LogOut className='w-4 h-4 mr-2' />
        Logout
      </Button>
    </div>
  </div>
);
