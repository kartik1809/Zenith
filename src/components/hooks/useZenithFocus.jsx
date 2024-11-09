import { useState, useEffect } from 'react';

export const useZenithFocus = (initialTime) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    let interval;
    if (isActive && time > 0) {
      interval = setInterval(() => setTime((t) => t - 1), 1000);
    } else if (time === 0) {
      setIsActive(false);
      setSessions((s) => s + 1);
      setTime(initialTime);
    }
    return () => clearInterval(interval);
  }, [isActive, time, initialTime]);

  const toggleFocus = () => setIsActive(!isActive);
  const resetFocus = () => {
    setIsActive(false);
    setTime(initialTime);
  };

  return { time, isActive, sessions, toggleFocus, resetFocus };
};
