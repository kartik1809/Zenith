import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { ZenithCard } from './ZenithCard';
import { useZenithFocus } from '../hooks/useZenithFocus';

export const ZenithFocusTimer = () => {
  const { time, isActive, sessions, toggleFocus, resetFocus } = useZenithFocus(25 * 60); // 25 minutes

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <ZenithCard className='col-span-1'>
      <h2 className='text-2xl font-semibold mb-4'>Zenith Focus Timer</h2>
      <div className='flex flex-col items-center'>
        <div className='text-6xl font-bold mb-4'>{formatTime(time)}</div>
        <div className='flex space-x-4'>
          <button
            onClick={toggleFocus}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isActive ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isActive ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button
            onClick={resetFocus}
            className='p-2 bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-200'
          >
            <RotateCcw size={24} />
          </button>
        </div>
        <p className='mt-4 text-center'>Completed Focus Sessions: {sessions}</p>
      </div>
    </ZenithCard>
  );
};
