import React from 'react';
import { motion } from 'framer-motion';

export const Badge = ({ name, description, icon: Icon, color }) => (
  <motion.div
    className={`relative overflow-hidden rounded-lg p-4 text-white bg-gradient-to-br ${color}`}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className='relative z-10'>
      <Icon className='w-8 h-8 mb-2' />
      <h3 className='font-bold text-lg mb-1'>{name}</h3>
      <p className='text-xs opacity-80'>{description}</p>
    </div>
    <div className='absolute top-0 left-0 w-full h-full opacity-20'>
      <svg className='w-full h-full' viewBox='0 0 100 100' preserveAspectRatio='none'>
        <path d='M0,0 L100,0 L100,100 L0,100 Z' fill='url(#badge-pattern)' />
      </svg>
    </div>
    <svg width='0' height='0'>
      <defs>
        <pattern
          id='badge-pattern'
          x='0'
          y='0'
          width='10'
          height='10'
          patternUnits='userSpaceOnUse'
        >
          <circle cx='1' cy='1' r='1' fill='currentColor' opacity='0.2' />
        </pattern>
      </defs>
    </svg>
  </motion.div>
);
