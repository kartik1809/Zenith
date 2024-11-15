import { useState, useEffect } from 'react';
import { generateZenithData, generateZenithInsights } from '../../utils/AnalyticsData';

export const useZenithData = () => {
  const [zenithData, setZenithData] = useState([]);
  const [zenithInsights, setZenithInsights] = useState([]);
  const [zenScore, setZenScore] = useState(0);
  const [dailyInsight, setDailyInsight] = useState('');
  const [growthProgress, setGrowthProgress] = useState(0);

  useEffect(() => {
    setZenithData(generateZenithData());
    setZenithInsights(generateZenithInsights());
    setZenScore(82);
    setGrowthProgress(73);
    setDailyInsight(
      'Great job on maintaining focus yesterday! Your productivity increased by 15%. Keep up the momentum by tackling your most challenging task first thing in the morning.'
    );
  }, []);

  return { zenithData, zenithInsights, setZenithInsights, zenScore, dailyInsight, growthProgress };
};
