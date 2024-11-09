import { useState, useEffect } from 'react';
import { generateMentalData, generateAIInsights } from '../../utils/AnalyticsData';

const useMentalHealthData = () => {
  const [mentalHealthData, setMentalHealthData] = useState([]);
  const [aiInsights, setAiInsights] = useState([]);
  const [metrics, setMetrics] = useState({
    mentalHealthScore: 0,
    averageMood: 0,
    averageSentiment: 0,
    focusTime: 0,
  });

  useEffect(() => {
    const data = generateMentalData();
    setMentalHealthData(data);

    // Calculate averages and scores
    const avgMood = Math.round(data.reduce((sum, day) => sum + day.moodScore, 0) / data.length);
    const avgSentiment = (
      data.reduce((sum, day) => sum + day.sentimentScore, 0) / data.length
    ).toFixed(2);
    const avgFocusTime = Math.round(
      data.reduce((sum, day) => sum + day.focusTime, 0) / data.length
    );
    const mentalHealthScore = Math.round((avgMood + parseFloat(avgSentiment) * 100) / 2);

    setMetrics({
      mentalHealthScore,
      averageMood: avgMood,
      averageSentiment: avgSentiment,
      focusTime: avgFocusTime,
    });

    setAiInsights(generateAIInsights());
  }, []);

  return { metrics, mentalHealthData, aiInsights };
};

export default useMentalHealthData;
