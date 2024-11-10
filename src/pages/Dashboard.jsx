import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  RadarChart,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Cell,
} from 'recharts';

import { Sidebar, LoadingSpinner } from '../components/shared';
import {
  Header,
  MetricCard,
  ChartCard,
  TimeRangeSelector,
  TopApps,
  CalendarView,
  WeeklySummary,
  MoodTracker,
} from '../components/Dashboard';

import { COLORS, generateEvents, AnalyticsData } from '../utils/AnalyticsData.js';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../redux/userSlice';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    ...AnalyticsData,
    moodData: [],
    topApps: [],
  });
  const [events] = useState(generateEvents());



  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  

  useEffect(() => {
    setIsLoading(true);
    const fetchAnalytics = async () => {
      const userAnalytics = JSON.parse(localStorage.getItem('userAnalytics'));

      if (userAnalytics && Date.now() - userAnalytics.timestamp < 1000 * 60 * 30) {
        
        dispatch(setUserData(userAnalytics));
      } else {
        try {
          const response = await fetch('https://resolute-land-440916-q3.el.r.appspot.com/analytics/getanalytics', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ uuid: 'd54f5e6a-7472-4053-bd1e-3d14e59c2431' }),
          });

          if (!response.ok) {
            throw new Error('Failed to fetch analytics');
          }
          const data = await response.json();
          localStorage.setItem('userAnalytics', JSON.stringify({ ...data, timestamp: Date.now() }));
          
          dispatch(setUserData(data));
        } catch (error) {
          console.error('Error fetching analytics:', error);
        }
      }

    };

    fetchAnalytics();
    setIsLoading(false)
  }, []);

  const transformData = (dayWiseScores) => {
    const today = new Date();

    return dayWiseScores
      .filter(day => day.focusScore !== null)
      .map((day, index) => {
        const date = new Date(today);
        date.setDate(today.getDate() - (3-index));

        const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

        return {
          date: formattedDate,
          productivity: Math.round(day.productivityScore),
          focus: Math.round(day.focusScore),
          contentConsumption: Math.round(day.contentScore),
          mood: Math.round(day.moodScore)
        };
      });
  };

  const convertCategoryData = (categoryData) => {
    const maxValue = Math.max(...Object.values(categoryData));
  
    return Object.entries(categoryData)
      .filter(([category, value]) => value !== 0 && value !== null) 
      .map(([category, value]) => ({
        category,
        value: (value / maxValue) * 2.4
      }));
  };
  
  function getTopVisitedDomains(visitedDomains) {
    if (!visitedDomains || typeof visitedDomains !== 'object') {
      return [];
    }
  
    return Object.entries(visitedDomains)
      .sort((a, b) => b[1].seconds - a[1].seconds)
      .slice(0, 4)
      .map(([name, { seconds }]) => ({
        name,
        time: seconds,
        change: Math.floor(Math.random() * 10) - 5
      }));
  }
  
  

  if (isLoading) {
    return <LoadingSpinner />;
  }


  return !isLoading && (
    <div className='flex min-h-screen'>
      <Sidebar selectedNav={'Dashboard'} />

      <div className='min-h-screen w-full bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8'>
        <Header name={data.name} avatar={data.avatar} streak={data.streak} />
        <TimeRangeSelector timeRange={timeRange} setTimeRange={setTimeRange} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6'>
          <MetricCard
            title='Focus Score'
            value={(userData.result && userData.result.overallScores.focusScore || 0).toFixed(2)}
            icon='🎯'
            color='text-blue-400'
            change={3}
          />
          <MetricCard
            title='Productivity'
            value={(userData.result && userData.result.overallScores.productivityScore || 0).toFixed(2)}
            icon='📈'
            color='text-green-400'
            change={-2}
          />
          <MetricCard
            title='Wellbeing'
            value={(userData.result && userData.result.overallScores.wellbeingScore || 0).toFixed(2)}
            icon='🌿'
            color='text-yellow-400'
            change={5}
          />
          <MetricCard
            title='Content Consumption'
            value={(userData.result && userData.result.overallScores.contentScore || 0).toFixed(2)}
            icon='📚'
            color='text-purple-400'
            change={-1}
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
          <ChartCard title='Productivity Trend'>
            <ResponsiveContainer width='100%' height={200}>
              <AreaChart data={transformData(userData.result?.dayWiseScores || [])}>
                <CartesianGrid strokeDasharray='3 3' stroke='#2a3a5a' />
                <XAxis dataKey='date' stroke='#8884d8' />
                <YAxis stroke='#8884d8' />
                <Tooltip contentStyle={{ backgroundColor: '#1a2035', border: 'none' }} />
                <Area
                  type='monotone'
                  dataKey='productivity'
                  stroke='#8884d8'
                  fill='#8884d8'
                  fillOpacity={0.8}
                />
                <Area
                  type='monotone'
                  dataKey='focus'
                  stroke='#82ca9d'
                  fill='#82ca9d'
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
          <ChartCard title='Content Consumption'>
            <ResponsiveContainer width='100%' height={200}>
              <BarChart data={convertCategoryData(userData.result?.categoryData || {})} layout='vertical'>
                <CartesianGrid strokeDasharray='3 3' stroke='#2a3a5a' />
                <XAxis type='number' stroke='#8884d8' />
                <YAxis dataKey='category' type='category' stroke='#8884d8' />
                <Tooltip contentStyle={{ backgroundColor: '#1a2035', border: 'none' }} />
                <Bar dataKey='value'>
                  {convertCategoryData(userData.result?.categoryData || {}).map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
          <ChartCard title='Wellbeing Factors'>
            <ResponsiveContainer width='100%' height={200}>
              <RadarChart data={data.wellbeingData}>
                <PolarGrid stroke='#2a3a5a' />
                <PolarAngleAxis dataKey='subject' stroke='#8884d8' />
                <PolarRadiusAxis angle={30} domain={[0, 10]} stroke='#8884d8' />
                <Radar
                  name='Wellbeing'
                  dataKey='A'
                  stroke='#FF9500'
                  fill='#FF9500'
                  fillOpacity={0.6}
                />
                <Tooltip contentStyle={{ backgroundColor: '#1a2035', border: 'none' }} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>
          <ChartCard title='Productivity Factors'>
            <ResponsiveContainer width='100%' height={200}>
              <RadarChart data={data.productivityData}>
                <PolarGrid stroke='#2a3a5a' />
                <PolarAngleAxis dataKey='subject' stroke='#82ca9d' />
                <PolarRadiusAxis angle={30} domain={[0, 10]} stroke='#82ca9d' />
                <Radar
                  name='Productivity'
                  dataKey='A'
                  stroke='#34C759'
                  fill='#34C759'
                  fillOpacity={0.6}
                />
                <Tooltip contentStyle={{ backgroundColor: '#1a2035', border: 'none' }} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>
          <ChartCard title='Creativity Factors'>
            <ResponsiveContainer width='100%' height={200}>
              <RadarChart data={AnalyticsData.creativity}>
                <PolarGrid stroke='#2a3a5a' />
                <PolarAngleAxis dataKey='subject' stroke='#AF52DE' />
                <PolarRadiusAxis angle={30} domain={[0, 10]} stroke='#AF52DE' />
                <Radar
                  name='Creativity'
                  dataKey='A'
                  stroke='#AF52DE'
                  fill='#AF52DE'
                  fillOpacity={0.6}
                />
                <Tooltip contentStyle={{ backgroundColor: '#1a2035', border: 'none' }} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
          <TopApps apps={getTopVisitedDomains(userData.result?.visitedDomains) || []} timeRange={timeRange} />
          <MoodTracker moodData={transformData(userData.result?.dayWiseScores || [])} />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
        <CalendarView events={events} />
          <WeeklySummary data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
