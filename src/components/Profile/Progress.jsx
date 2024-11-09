import React from 'react';

export const Progress = ({ value, className }) => (
  <div className={`w-full bg-gray-700 rounded-full h-2 ${className}`}>
    <div className='bg-blue-500 h-2 rounded-full' style={{ width: `${value}%` }}></div>
  </div>
);
