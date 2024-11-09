import React from 'react';

export const Card = ({ children, className }) => (
  <div
    className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg ${className}`}
  >
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className='px-6 py-4 border-b border-gray-700'>{children}</div>
);

export const CardTitle = ({ children }) => <h2 className='text-xl font-semibold'>{children}</h2>;

export const CardDescription = ({ children }) => (
  <p className='text-sm text-gray-400'>{children}</p>
);

export const CardContent = ({ children }) => <div className='px-6 py-4'>{children}</div>;
