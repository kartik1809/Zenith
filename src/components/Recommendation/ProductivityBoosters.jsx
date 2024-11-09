import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ChevronRight, CheckCircleIcon } from 'lucide-react';
import { ZenithCard } from './ZenithCard';
import { ZenithBadge } from './ZenithBadge';

export const ProductivityBoosters = ({ zenithInsights, setSelectedInsight }) => {
  const toggleInsight = (id) => {
    // Implement the toggle logic here
    setSelectedInsight((insights) =>
      insights.map((insight) =>
        insight.id == id ? { ...insight, completed: insight.completed } : insight
      )
    );
  };

  const completedInsights = zenithInsights.filter((r) => r.completed).length;

  return (
    <ZenithCard className='col-span-full'>
      <h2 className='text-2xl font-semibold mb-4'>Productivity Boosters</h2>
      <div className='space-y-4'>
        {zenithInsights.map((insight) => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='flex items-center justify-between p-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg'
          >
            <div>
              <p className={insight.completed ? 'line-through text-gray-400' : ''}>
                {insight.text}
              </p>
              <div className='flex space-x-2 mt-2'>
                <ZenithBadge color={insight.impact == 'Medium' ? 'yellow' : 'red'}>
                  {insight.impact} Impact
                </ZenithBadge>
                <ZenithBadge>{insight.category}</ZenithBadge>
              </div>
            </div>
            <div className='flex space-x-2'>
              <button
                onClick={() => setSelectedInsight(insight)}
                className='p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-200'
              >
                <Lightbulb size={24} />
              </button>
              <button
                onClick={() => toggleInsight(insight.id)}
                className={`p-2 rounded-full ${
                  insight.completed
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-blue-500 hover:bg-blue-600'
                } transition-colors duration-200`}
              >
                {console.log('Insight ID: ', insight)}
                {insight.completed ? <CheckCircleIcon size={24} /> : <ChevronRight size={24} />}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <p className='mt-4 text-center'>
        You've activated {completedInsights} out of {zenithInsights.length} boosters
      </p>
    </ZenithCard>
  );
};
