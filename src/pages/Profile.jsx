import React from 'react';
import { motion } from 'framer-motion';
import { Sidebar } from '../components/shared';
import { ProfileHeader } from '../components/Profile/ProfileHeader.jsx';
import { ProfileInfo } from '../components/Profile/ProfileInfo.jsx';
import { PerformanceOverview } from '../components/Profile/PerformanceOverview';
import { EarnedBadges } from '../components/Profile/EarnedBadges.jsx';
import { ProductivityInsights } from '../components/Profile/ProductivityInsights.jsx';
import { Recommendations } from '../components/Profile/Recommendations.jsx';
import { ProfileAnalyticsData } from '../utils/AnalyticsData.js';

export default function Profile() {
  const { user, userComparison, badges, productivityInsights, recommendations } = ProfileAnalyticsData;

  const handleLogout = () => {
    // Implement logout functionality
    console.log('Logging out...');
  };

  return (
    <div className='flex min-h-screen'>
      <Sidebar selectedNav='Profile' />
      <div className='min-h-screen w-full bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProfileHeader user={user} onLogout={handleLogout} />

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
            <ProfileInfo user={user} />
            <PerformanceOverview userComparison={userComparison} />
          </div>

          <EarnedBadges badges={badges} />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
            <ProductivityInsights insights={productivityInsights} />
            <Recommendations recommendations={recommendations} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
