import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import {
  Landing,
  Dashboard,
  Profile,
  GoalTracker,
  Settings,
  MentalHealth,
  Recommendation,
  VisitedWebsite,
  Report,
  SignIn,
  SignUp
} from './pages';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from './redux/userSlice';


const App = () => {

  const dispatch = useDispatch();
  
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
          localStorage.setItem('userAnalytics', JSON.stringify({ ...dummyData, timestamp: Date.now() }));
          console.error('Error fetching analytics:', error);
         
        }
      }

    };

    fetchAnalytics();
    
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/goaltracker' element={<GoalTracker />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/mentalhealth' element={<MentalHealth />} />
        <Route path='/recommendation' element={<Recommendation />} />
        <Route path='/visitedwebsite' element={<VisitedWebsite />} />
        <Route path='/report' element={<Report />} />
      </Routes>
    </Router>
  );
};

export default App;
