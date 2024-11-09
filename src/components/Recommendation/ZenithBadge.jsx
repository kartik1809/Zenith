import React from 'react';

export const ZenithBadge = ({ children, color = '#6b21a8' }) => (
  <span 
    className={`px-2 py-1 rounded-full text-xs font-semibold text-white`} 
    style={{ backgroundColor: color }}
  >
    {children}
  </span>
);
