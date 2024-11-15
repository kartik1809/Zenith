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
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({
    ...AnalyticsData,
    moodData: [],
    topApps: [],
  });
  const [events] = useState(generateEvents());



  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  

  const user=JSON.parse(localStorage.getItem('user')) || {Name:'User',avatar:'https://i.pravatar.cc/150?img=68',streak:5}
  

  const dummyData={
    "message": "Analytics retrieved successfully",
    "result": {
        "overallScores": {
            "focusScore": 55.52841971864827,
            "moodScore": 44.2864932232435,
            "creativityScore": 59.43552993716571,
            "productivityScore": 69.41718163092209,
            "sentimentScore": 50.92087725675511,
            "contentScore": 57.2718145782486,
            "totalScore": 172.112486115021,
            "wellbeingScore": 48.6185775093831
        },
        "dayWiseScores": [
            {
                "focusScore": 67.22197961641673,
                "moodScore": 69.22221044823567,
                "creativityScore": 83.82960686658896,
                "productivityScore": 75.94309632298399,
                "sentimentScore": 53.91808837554307,
                "contentScore": 74.20260676062308,
                "totalScore": 69.1215571053259,
                "wellbeingScore": 62.29699697518063
            },
            {
                "focusScore": 50.329774688749055,
                "moodScore": 20.758603974793992,
                "creativityScore": 52.641783809985455,
                "productivityScore": 64.0026660203587,
                "sentimentScore": 51.95710130877364,
                "contentScore": 36.91832283082889,
                "totalScore": 54.351541561706085,
                "wellbeingScore": 42.816494302270776
            },
            {
                "focusScore": 56.446251474135714,
                "moodScore": 43.63090851668597,
                "creativityScore": 54.18728287188125,
                "productivityScore": 73.68407200757974,
                "sentimentScore": 53.071375934308875,
                "contentScore": 64.6897041793873,
                "totalScore": 57.014714994211545,
                "wellbeingScore": 47.93017845681785
            },
            {
                "focusScore": 45.27249157797636,
                "moodScore": 28.720543032786882,
                "creativityScore": 47.93801229508197,
                "productivityScore": 55.89139344262295,
                "sentimentScore": 46.66688012295082,
                "contentScore": 47.40330430327869,
                "totalScore": 46.3583936830878,
                "wellbeingScore": 39.88927162490835
            },
            {
                "focusScore": null,
                "moodScore": 75,
                "creativityScore": 50,
                "productivityScore": 75,
                "sentimentScore": 75,
                "contentScore": 75,
                "totalScore": 70,
                "wellbeingScore": 75
            },
            {
                "focusScore": 47.17032028786806,
                "moodScore": 31.19959677419355,
                "creativityScore": 48.97681451612903,
                "productivityScore": 56.68346774193549,
                "sentimentScore": 39.13054435483871,
                "contentScore": 33.65927419354839,
                "totalScore": 52.76566877124343,
                "wellbeingScore": 40.019791750213486
            },
            {
                "focusScore": 65.79299333773582,
                "moodScore": 52.40534672275749,
                "creativityScore": 65.00882073551364,
                "productivityScore": 73.70742298819378,
                "sentimentScore": 53.49097570905143,
                "contentScore": 58.776631836070024,
                "totalScore": 69.87498873168747,
                "wellbeingScore": 58.377494133765886
            }
        ],
        "categoryData": {
            "Work": 46,
            "Entertainment": 6,
            "Education": 32,
            "Social Media": 8,
            "News": 6,
            "Health and Fitness": 0,
            "Personal Development": 2,
            "Others": 31,
            "Finance": 1
        },
        "visitedDomains": {
            "chatgpt.com": {
                "seconds": 11028
            },
            "github.com": {
                "seconds": 2672
            },
            "console.firebase.google.com": {
                "seconds": 591
            },
            "firebase.google.com": {
                "seconds": 10
            },
            "dashboard.render.com": {
                "seconds": 403
            },
            "www.youtube.com": {
                "seconds": 994
            },
            "accounts.google.com": {
                "seconds": 57
            },
            "gemini.google.com": {
                "seconds": 6
            },
            "open.spotify.com": {
                "seconds": 817
            },
            "www.geeksforgeeks.org": {
                "seconds": 7
            },
            "x.com": {
                "seconds": 2590
            },
            "render.com": {
                "seconds": 2
            },
            "www.linkedin.com": {
                "seconds": 2837
            },
            "www.google.com": {
                "seconds": 879
            },
            "mail.google.com": {
                "seconds": 1315
            },
            "discord.com": {
                "seconds": 180
            },
            "hackcbs.tech": {
                "seconds": 279
            },
            "zenith-davinci.tech": {
                "seconds": 1667
            },
            "docs.google.com": {
                "seconds": 9298
            },
            "spline.design": {
                "seconds": 40
            },
            "trello.com": {
                "seconds": 119
            },
            "groww.in": {
                "seconds": 1117
            },
            "localhost": {
                "seconds": 6632
            },
            "www.canva.com": {
                "seconds": 6082
            },
            "leetcode.com": {
                "seconds": 1596
            },
            "www.sci.gov.in": {
                "seconds": 324
            },
            "api.sci.gov.in": {
                "seconds": 94
            },
            "www.speedtest.net": {
                "seconds": 22
            },
            "tailwindcss.com": {
                "seconds": 110
            },
            "www.instagram.com": {
                "seconds": 4793
            },
            "literate-memory-rjpq79745v43pgxq.github.dev": {
                "seconds": 29
            },
            "copperx.io": {
                "seconds": 13
            },
            "zenith-hackcbs.web.app": {
                "seconds": 3508
            },
            "app.spline.design": {
                "seconds": 5
            },
            "sih.gov.in": {
                "seconds": 125
            },
            "console.cloud.google.com": {
                "seconds": 384
            },
            "devfolio.co": {
                "seconds": 693
            },
            "special-initiatives.livemint.com": {
                "seconds": 1
            },
            "www.hindustantimes.com": {
                "seconds": 15
            },
            "127.0.0.1": {
                "seconds": 16
            },
            "hackcbs-aa0d6.web.app": {
                "seconds": 17
            },
            "drive.google.com": {
                "seconds": 281
            },
            "documentcloud.adobe.com": {
                "seconds": 3
            },
            "studio.youtube.com": {
                "seconds": 70
            },
            "support.microsoft.com": {
                "seconds": 10
            },
            "console.hetzner.cloud": {
                "seconds": 49
            },
            "www.vultr.com": {
                "seconds": 11
            },
            "host.agck.com": {
                "seconds": 1
            },
            "t.co": {
                "seconds": 2
            },
            "zoom.us": {
                "seconds": 7
            },
            "tle-eliminators.com": {
                "seconds": 1
            },
            "www.tle-eliminators.com": {
                "seconds": 1
            },
            "web.telegram.org": {
                "seconds": 514
            },
            "www.maxai.me": {
                "seconds": 2
            },
            "www.amarujala.com": {
                "seconds": 105
            },
            "docs.github.com": {
                "seconds": 54
            },
            "amazonsmbhav2024.hackerearth.com": {
                "seconds": 3
            },
            "hackcbs-7.devfolio.co": {
                "seconds": 325
            },
            "l.facebook.com": {
                "seconds": 1
            },
            "media.licdn.com": {
                "seconds": 98
            },
            "www.humanizeai.pro": {
                "seconds": 24
            },
            "www.edrawsoft.com": {
                "seconds": 15
            },
            "instagram.fdel27-5.fna.fbcdn.net": {
                "seconds": 166
            },
            "assets.leetcode.com": {
                "seconds": 4
            },
            "www.airtel.in": {
                "seconds": 3
            },
            "orchard-eyes.vercel.app": {
                "seconds": 18
            },
            "mybrowseraddon.com": {
                "seconds": 1
            },
            "www.pnbindia.in": {
                "seconds": 67
            },
            "dev-h7oni1avnzc37fk7.us.auth0.com": {
                "seconds": 3
            },
            "www.amazon.jobs": {
                "seconds": 73
            },
            "tech.co": {
                "seconds": 49
            },
            "careers.microsoft.com": {
                "seconds": 18
            },
            "jobs.careers.microsoft.com": {
                "seconds": 40
            },
            "accounts.wondershare.com": {
                "seconds": 8
            },
            "resume.io": {
                "seconds": 12
            },
            "www.jobscan.co": {
                "seconds": 15
            },
            "www.southeastern.edu": {
                "seconds": 55
            },
            "enhancv.com": {
                "seconds": 66
            },
            "www.myperfectresume.com": {
                "seconds": 12
            },
            "one.google.com": {
                "seconds": 25
            },
            "app.enhancv.com": {
                "seconds": 445
            },
            "www.ipuranklist.com": {
                "seconds": 40
            },
            "www.ilovepdf.com": {
                "seconds": 10
            },
            "www.livecareer.com": {
                "seconds": 103
            },
            "app.jobscan.co": {
                "seconds": 12
            },
            "in.indeed.com": {
                "seconds": 9
            },
            "resume.naukri.com": {
                "seconds": 35
            },
            "www.kickresume.com": {
                "seconds": 79
            },
            "www.weekday.works": {
                "seconds": 65
            },
            "instaresume.io": {
                "seconds": 24
            },
            "builder.zety.com": {
                "seconds": 80
            },
            "www.resumego.net": {
                "seconds": 15
            },
            "zety.com": {
                "seconds": 2
            },
            "resumeworded.com": {
                "seconds": 71
            },
            "internshala.com": {
                "seconds": 317
            },
            "www.madeline.one": {
                "seconds": 72
            },
            "www.adnanhashmi.in": {
                "seconds": 185
            },
            "get.tech": {
                "seconds": 31
            },
            "controlpanel.tech": {
                "seconds": 34
            },
            "13002333.dns.bll.myorderbox.com": {
                "seconds": 151
            },
            "zenith-hackcbs.firebaseapp.com": {
                "seconds": 3
            },
            "unstop.com": {
                "seconds": 65
            },
            "contactout.snaphunt.com": {
                "seconds": 274
            },
            "snaphunt.com": {
                "seconds": 717
            },
            "substack.com": {
                "seconds": 1
            },
            "gssoc.girlscript.tech": {
                "seconds": 174
            },
            "substackcdn.com": {
                "seconds": 1
            },
            "www.business-standard.com": {
                "seconds": 12
            },
            "www.moneycontrol.com": {
                "seconds": 123
            },
            "www.amazon.in": {
                "seconds": 251
            },
            "www.investorgain.com": {
                "seconds": 111
            },
            "lnkd.in": {
                "seconds": 3
            },
            "www.overleaf.com": {
                "seconds": 64
            },
            "novoresume.com": {
                "seconds": 45
            },
            "debarghyadas.com": {
                "seconds": 4
            },
            "www.chittorgarh.com": {
                "seconds": 142
            },
            "ipo.alankit.com": {
                "seconds": 9
            },
            "mazagondock.in": {
                "seconds": 26
            },
            "ssp.uk.gov.in": {
                "seconds": 997
            },
            "ekosh.uk.gov.in": {
                "seconds": 21
            },
            "pauri.nic.in": {
                "seconds": 124
            },
            "passbook.epfindia.gov.in": {
                "seconds": 260
            },
            "unifiedportal-mem.epfindia.gov.in": {
                "seconds": 412
            },
            "www.epfindia.gov.in": {
                "seconds": 8
            },
            "hackwithindia.live": {
                "seconds": 138
            },
            "www.proinvitelinks.com": {
                "seconds": 15
            },
            "www.eraser.io": {
                "seconds": 72
            },
            "www.lucidchart.com": {
                "seconds": 13
            },
            "auth.openai.com": {
                "seconds": 2
            },
            "app.eraser.io": {
                "seconds": 330
            },
            "cloud.google.com": {
                "seconds": 2
            },
            "resolute-land-440916-q3.el.r.appspot.com": {
                "seconds": 8
            }
        },
        "allTime": 69786
    }
}

  useEffect(() => {
    setIsLoading(true);
    const fetchAnalytics = async () => {
      const userAnalytics = JSON.parse(localStorage.getItem('userAnalytics'));

      if (userAnalytics && Date.now() - userAnalytics.timestamp < 1000 * 60 * 30) {
        
        dispatch(setUserData(userAnalytics));
        setIsLoading(false)
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
          setIsLoading(false)
        } catch (error) {
          localStorage.setItem('userAnalytics', JSON.stringify({ ...dummyData, timestamp: Date.now() }));
          console.error('Error fetching analytics:', error);
          setIsLoading(false)
        }
      }

    };

    fetchAnalytics();
    
  }, []);

  const transformData = (dayWiseScores) => {
    const today = new Date();

    return dayWiseScores
      .filter(day => day.focusScore !== null)
      .map((day, index) => {
        const date = new Date(today);
        date.setDate(today.getDate() - (5-index));

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
        <Header name={user.result?user.result.Name:'user'} avatar={data.avatar} streak={data.streak} />
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
            change={-5}
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
