import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export const VideoRecommendations = ({ recommendations }) => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoPlay = (videoId) => {
    setActiveVideo(activeVideo === videoId ? null : videoId);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (!recommendations || !Array.isArray(recommendations) || recommendations.length === 0) {
    return (
      <motion.div
        className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg col-span-3'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className='text-2xl font-semibold mb-4 text-gray-100'>Zen Video Recommendations</h2>
        <p className='text-gray-200 mb-4'>
          No recommendations available at the moment. Check back later!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg col-span-3'
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className='text-2xl font-semibold mb-4 text-gray-100'>Zen Video Recommendations</h2>
      <p className='text-gray-200 mb-4'>
        Curated videos to help you to acheive your milestones, targets
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {recommendations?.map((video) => {
          if (!video || typeof video !== 'object') return null;
          return (
            <motion.div
              key={video.id}
              className='bg-white bg-opacity-10 rounded-lg overflow-hidden'
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className='relative aspect-video'>
                <iframe
                  src={`${video.url}${activeVideo === video.id ? '?autoplay=1' : ''}`}
                  title={video.title}
                  className='w-full h-full'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  loading='lazy'
                ></iframe>
              </div>
              <div className='p-4'>
                <h3 className='text-lg font-semibold text-gray-200 mb-5'>{video.title}</h3>
                <div className='flex items-center justify-between text-sm text-gray-300'>
                  <span>{video.type}</span>
                  <span className='bg-blue-600 text-white text-xs px-2 py-1 rounded-full'>
                    {video.category}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
