import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, CalendarIcon } from 'lucide-react';
import { format, startOfWeek, addDays, subDays } from 'date-fns';

const DateNavigation = ({ viewMode, currentDate, navigateDate }) => {
  const navigateHandler = useCallback(
    (direction) => {
      navigateDate(direction);
    },
    [navigateDate]
  );

  return (
    <motion.div
      className='flex items-center justify-between mb-6 bg-gray-800 p-4 rounded-xl'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Date navigation UI */}
    </motion.div>
  );
};

export default DateNavigation;
