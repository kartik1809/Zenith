import { useState, useEffect } from 'react';
import { generateZenithData, generateZenithInsights } from '../../utils/FakeData';
export const useZenithData = () => {
  const [zenithData, setZenithData] = useState([]);
  const [zenithInsights, setZenithInsights] = useState([]);
  const [zenScore, setZenScore] = useState(0);
  const [dailyInsight, setDailyInsight] = useState('');
  const [growthProgress, setGrowthProgress] = useState(0);

  useEffect(() => {
    setZenithData(generateZenithData());
    setZenithInsights(generateZenithInsights());
    setZenScore(Math.floor(Math.random() * 20) + 70); // score between 70-90
    setGrowthProgress(Math.floor(Math.random() * 30) + 60); // Progress between 60-90%
    setDailyInsight(
      'Great job on maintaining focus yesterday! Your productivity increased by 15%. Keep up the momentum by tackling your most challenging task first thing in the morning.'
    );
  }, []);

  return { zenithData, zenithInsights, zenScore, dailyInsight, growthProgress };
};
