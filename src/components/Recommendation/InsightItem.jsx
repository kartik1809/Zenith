import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, CheckCircleIcon, ChevronRight } from 'lucide-react';
import ZenithBadge from './ZenithBadge';

const getButtonStyle = (isActive, baseColor, hoverColor) => `
  p-2 rounded-full transition-colors duration-200 
  ${
    isActive
      ? `bg-${baseColor}-500 hover:bg-${baseColor}-600`
      : `bg-${hoverColor}-500 hover:bg-${hoverColor}-600`
  }
`;

const InsightItem = ({ insight, toggleInsight, setSelectedInsight }) => {
  const toggleInsightHandler = useCallback(() => {
    toggleInsight(insight.id);
  }, [insight.id, toggleInsight]);

  const showDetailsHandler = useCallback(() => {
    setSelectedInsight(insight);
  }, [insight, setSelectedInsight]);

  return <motion.div>{/* Insight item UI */}</motion.div>;
};

export default InsightItem;
