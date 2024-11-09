import React from 'react';

export const ZenithBadge = ({ children, color = 'purple' }) => (
  <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-${color}-600 text-white`}>
    {children}
  </span>
);
