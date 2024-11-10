import { format, subDays, startOfWeek, addDays } from 'date-fns';
import {
  Target,
  CheckCircle,
  Calendar,
  Award,
  Trophy,
  Clock,
  Coffee,
  Compass,
  BookOpen,
  Bolt,
} from 'lucide-react';

export const COLORS = ['#007AFF', '#34C759', '#FF9500', '#FF2D55', '#AF52DE', '#5856D6'];

export const generateFakeData = (days) => {
  return Array.from({ length: days }, (_, index) => ({
    date: format(subDays(new Date(), days - 1 - index), 'MMM dd'),
    productivity: Math.floor(Math.random() * 100),
    focus: Math.floor(Math.random() * 100) + 20,
    contentConsumption: Math.floor(Math.random() * 150),
    mood: Math.floor(Math.random() * 5) + 1,
  }));
};

export const generateEvents = () => {
  const today = new Date();
  const startOfCurrentWeek = startOfWeek(today);
  return [
    {
      date: format(addDays(startOfCurrentWeek, 1), 'MMM dd'),
      title: 'Project Review',
      type: 'meeting',
    },
    {
      date: format(addDays(startOfCurrentWeek, 2), 'MMM dd'),
      title: 'Design Sprint',
      type: 'workshop',
    },
    {
      date: format(addDays(startOfCurrentWeek, 4), 'MMM dd'),
      title: 'Team Sync',
      type: 'meeting',
    },
  ];
};

export const totalTimeofApps = (apps = []) => {
  return apps.reduce((total, app) => total + app.time, 0);
};

export const AnalyticsData = {
  name: 'John Doe',
  streak: 7,
  avatar: './avatar.svg',
  totalTime: 36000,
  focusScore: 85,
  productivityScore: 92,
  wellbeingScore: 78,
  contentConsumptionScore: 65,
  COLORS: COLORS,
  websiteUsage: [
    { name: 'Work', value: 14400 },
    { name: 'Learning', value: 7200 },
    { name: 'Social', value: 5400 },
    { name: 'Entertainment', value: 3600 },
  ],
  wellbeingData: [
    { subject: 'Sleep', A: 8 },
    { subject: 'Exercise', A: 7 },
    { subject: 'Nutrition', A: 6 },
    { subject: 'Mindfulness', A: 8 },
    { subject: 'Social', A: 9 },
  ],
  productivityData: [
    { subject: 'Focus', A: 9 },
    { subject: 'Efficiency', A: 8 },
    { subject: 'Task Completion', A: 8.5 },
    { subject: 'Time Management', A: 7 },
    { subject: 'Goal Achievement', A: 9 },
  ],
  creativity: [
    { subject: 'Ideation', A: 8 },
    { subject: 'Innovation', A: 7 },
    { subject: 'Problem Solving', A: 9 },
    { subject: 'Design Thinking', A: 6 },
    { subject: 'Experimentation', A: 8 },
  ],
  topApps: [
    { name: 'VS Code', time: 7200, icon: '🖥️', category: 'Work', change: 5 },
    { name: 'Slack', time: 3600, icon: '💬', category: 'Communication', change: -2 },
    { name: 'Chrome', time: 2700, icon: '🌐', category: 'Browsing', change: 10 },
    { name: 'Notion', time: 1800, icon: '📝', category: 'Productivity', change: 0 },
  ],
  getHistoricalData: (range) => {
    switch (range) {
      case 'day':
        return generateFakeData(24);
      case 'week':
        return generateFakeData(7);
      case 'month':
        return generateFakeData(30);
    }
  },
  contentConsumption: [
    { category: 'Work', value: 2.4 },
    { category: 'Entertainment', value: 1.8 },
    { category: 'Education', value: 1.2 },
    { category: 'Social Media', value: 0.9 },
    { category: 'News', value: 0.6 },
    { category: 'Health & Fitness', value: 0.4 },
    { category: 'Personal Development', value: 1.3 },
  ],
};
export const recommendationData = () => {
  const data = [];
  let productivity = 50;
  let focus = 50;
  for (let i = 7; i >= 0; i--) {
    productivity += Math.random() * 10 - 5;
    focus += Math.random() * 10 - 5;
    productivity = Math.max(0, Math.min(100, productivity));
    focus = Math.max(0, Math.min(100, focus));
    data.push({
      day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][6 - i],
      productivity: Math.round(productivity),
      focus: Math.round(focus),
    });
  }
  return data;
};

export const generateZenithInsights = () => [
  {
    id: 1,
    text: 'Try the 2-minute rule for small tasks',
    impact: 'Medium',
    category: 'Productivity',
    completed: false,
    details:
      'If a task takes less than 2 minutes, do it immediately. This helps prevent small tasks from piling up and becoming overwhelming.',
  },
  {
    id: 2,
    text: 'Take a 5-minute break every hour',
    impact: 'High',
    category: 'Wellbeing',
    completed: false,
    details:
      'Regular short breaks can help maintain focus and reduce stress. Use this time to stretch, hydrate, or practice quick mindfulness exercises.',
  },
  {
    id: 3,
    text: 'Set three main goals for tomorrow',
    impact: 'High',
    category: 'Planning',
    completed: false,
    details:
      'Before ending your workday, identify the three most important tasks for tomorrow. This helps you start the next day with clear priorities.',
  },
  {
    id: 4,
    text: 'Try the Pomodoro Technique',
    impact: 'Medium',
    category: 'Focus',
    completed: false,
    details:
      'Work in 25-minute focused sessions, followed by 5-minute breaks. After four sessions, take a longer 15-30 minute break.',
  },
  {
    id: 5,
    text: 'Declutter your digital workspace',
    impact: 'Medium',
    category: 'Organization',
    completed: false,
    details:
      'Spend 10 minutes organizing your files, clearing your desktop, and unsubscribing from unnecessary emails. A tidy digital space can boost productivity.',
  },
];
export const generateZenithData = () => {
  const data = [];
  let productivity = 50;
  let focus = 50;
  for (let i = 3; i >= 0; i--) {
    productivity += Math.random() * 10 - 5;
    focus += Math.random() * 10 - 5;
    productivity = Math.max(0, Math.min(100, productivity));
    focus = Math.max(0, Math.min(100, focus));
    data.push({
      day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][6 - i],
      productivity: Math.round(productivity),
      focus: Math.round(focus),
    });
  }
  return data;
};

export const generateMentalData = () => {
  const data = [];
  const today = new Date();

  for (let i = 7; i >= 1; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    data.push({
      date: date.toISOString().split('T')[0],
      moodScore: Math.floor(Math.random() * 50) + 50, // 50-100
      sentimentScore: Math.random() * 0.5 + 0.5, // 0.5-1
      focusTime: Math.floor(Math.random() * 180) + 60, // 60-240 minutes
    });
  }

  return data;
};

export const generateAIInsights = () => {
  return [
    'Your mood has been improving over the past week. Keep up the good work!',
    'Consider practicing mindfulness to help manage your emotional well-being.',
    'Your focus time has increased by 20% this week. Great job on improving productivity!',
    "Your sentiment has been mostly positive lately. Reflect on what's going well in your life.",
    'Try to maintain a consistent daily routine to support your mental health.',
  ];
};

export const ProfileAnalyticsData = {
  user: {
    name: 'Kartik Pokhriyal',
    role: 'Senior Developer',
    email: 'kartik.pokhriyal@zenith.com',
    location: 'New Delhi, India',
    joinDate: 'October 2023',
    team: 'Zenith Innovators',
    skills: ['Full Stack', 'AI Enthusiast'],
  },
  userComparison: {
    productivityScore: 85,
    averageProductivityScore: 72,
    websitesVisited: 32,
    averageWebsitesVisited: 25,
    timeSpent: 480,
    averageTimeSpent: 420,
  },
  badges: [
    {
      name: 'Focus Ninja',
      description: 'Maintained focus for 4 hours without distractions',
      icon: Target,
      color: 'from-purple-400 to-purple-700',
    },
    {
      name: 'Consistency Champ',
      description: 'Logged daily productivity for 30 days straight',
      icon: Calendar,
      color: 'from-green-400 to-teal-600',
    },
    {
      name: 'Time Traveler',
      description: 'Maintained productivity in both day and night sessions',
      icon: Clock,
      color: 'from-pink-500 to-rose-600',
    },
    {
      name: 'Explorer',
      description: 'Visited 20 new productive sites',
      icon: Compass,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Reflection Guru',
      description: 'Reviewed and analyzed productivity weekly for a month',
      icon: BookOpen,
      color: 'from-purple-600 to-violet-700',
    },
  ],
  productivityInsights: {
    mostProductiveDay: 'Wednesday',
    peakPerformanceTime: '10:00 AM - 12:00 PM',
    workLifeBalanceScore: '8.5/10',
  },
  recommendations: [
    'Consider taking more breaks during long coding sessions',
    'Explore new Zenith features to boost your productivity',
    'Collaborate more with team members on challenging projects',
  ],
};
