import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Flag, Star, Award, BookOpen, BarChart, History } from 'lucide-react';
import { Sidebar } from '../components/shared';

const goals = [
  {
    id: 1,
    title: 'Learn React',
    category: 'Education',
    progress: 75,
    deadline: '2024-06-30',
    priority: 'High',
    status: 'in-progress',
    milestones: ['Complete basics', 'Build first app', 'Master hooks'],
    completed: 2,
  },
  {
    id: 2,
    title: 'Run a marathon',
    category: 'Health',
    progress: 40,
    deadline: '2024-12-31',
    priority: 'Medium',
    status: 'in-progress',
    milestones: ['5K run', '10K run', 'Half marathon'],
    completed: 1,
  },
  {
    id: 3,
    title: 'Write a novel',
    category: 'Personal',
    progress: 0,
    deadline: '2025-01-31',
    priority: 'Low',
    status: 'todo',
    milestones: ['Outline story', 'Write first draft', 'Edit and revise'],
    completed: 0,
  },
  {
    id: 4,
    title: 'Launch startup',
    category: 'Career',
    progress: 100,
    deadline: '2024-09-30',
    priority: 'High',
    status: 'completed',
    milestones: ['Develop MVP', 'Secure funding', 'Beta launch'],
    completed: 3,
  },
  {
    id: 5,
    title: 'Learn Piano',
    category: 'Personal',
    progress: 0,
    deadline: '2024-12-31',
    priority: 'Medium',
    status: 'todo',
    milestones: ['Learn basics', 'Practice daily', 'Play first song'],
    completed: 0,
  },
  {
    id: 6,
    title: 'Build Portfolio',
    category: 'Career',
    progress: 100,
    deadline: '2024-05-30',
    priority: 'High',
    status: 'completed',
    milestones: ['Design layout', 'Add projects', 'Deploy website'],
    completed: 3,
  },
];

const achievements = [
  {
    id: 1,
    title: 'Goal Setter',
    description: 'Set your first goal',
    icon: <Flag className='w-6 h-6 text-yellow-400' />,
  },
  {
    id: 2,
    title: 'Milestone Master',
    description: 'Complete 5 milestones',
    icon: <CheckCircle className='w-6 h-6 text-green-400' />,
  },
  {
    id: 3,
    title: 'Consistent Achiever',
    description: 'Maintain streak for 30 days',
    icon: <Award className='w-6 h-6 text-purple-400' />,
  },
];

const goalHistory = [
  { id: 1, title: 'Learn Spanish', completedDate: '2024-03-15', category: 'Education' },
  { id: 2, title: 'Travel to Japan', completedDate: '2024-02-28', category: 'Personal' },
  { id: 3, title: 'Launch mobile app', completedDate: '2024-01-10', category: 'Career' },
];

const GoalTracker = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const getGoalsByStatus = (status) => {
    return goals.filter((goal) => {
      switch (status) {
        case 'todo':
          return goal.status === 'todo';
        case 'in-progress':
          return goal.status === 'in-progress';
        case 'completed':
          return goal.status === 'completed';
        default:
          return false;
      }
    });
  };

  const renderKanbanColumn = (title, status) => (
    <div className='flex-1 bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4'>
      <h3 className='text-xl font-bold mb-4 text-slate-100'>{title}</h3>
      {getGoalsByStatus(status).map((goal) => (
        <div
          key={goal.id}
          className='bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 mb-4 cursor-pointer transition-all hover:bg-opacity-30'
          onClick={() => setSelectedGoal(goal)}
        >
          <div className='flex justify-between items-start mb-2'>
            <h4 className='text-lg font-semibold text-slate-100'>{goal.title}</h4>
            <span
              className={`text-xs px-2 py-1 rounded ${
                goal.priority === 'High'
                  ? 'bg-red-500'
                  : goal.priority === 'Medium'
                  ? 'bg-yellow-500'
                  : 'bg-green-500'
              } text-white`}
            >
              {goal.priority}
            </span>
          </div>
          <p className='text-sm text-slate-200'>Category: {goal.category}</p>
          <div className='mt-2 w-full bg-blue-900 rounded-full h-2.5'>
            <div
              className='bg-orange-500 h-2.5 rounded-full transition-all duration-300'
              style={{ width: `${goal.progress}%` }}
            ></div>
          </div>
          <div className='mt-2 flex justify-between text-xs text-slate-200'>
            <span>Progress: {goal.progress}%</span>
            <span>Due: {goal.deadline}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className='flex min-h-screen'>
      <Sidebar selectedNav={'Goal Tracker'} />
      <div className='min-h-screen w-full bg-gradient-to-br from-gray-900 to-blue-900 text-slate-100 p-8'>
        <h1 className='text-4xl font-bold mb-8'>Zenith Goal Tracker</h1>

        {/* Kanban Board */}
        <div className='flex gap-4 mb-8'>
          {renderKanbanColumn('To Do', 'todo')}
          {renderKanbanColumn('In Progress', 'in-progress')}
          {renderKanbanColumn('Completed', 'completed')}
        </div>

        {/* Bento Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {/* Goal Details */}
          <div className='bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 col-span-2'>
            <h2 className='text-2xl font-bold mb-4'>Goal Details</h2>
            {selectedGoal ? (
              <div>
                <div className='flex justify-between items-start mb-4'>
                  <div>
                    <h3 className='text-xl font-semibold mb-2'>{selectedGoal.title}</h3>
                    <p className='mb-2'>Category: {selectedGoal.category}</p>
                    <p className='mb-2'>Priority: {selectedGoal.priority}</p>
                    <p className='mb-2'>Deadline: {selectedGoal.deadline}</p>
                  </div>
                  <span
                    className={`text-sm px-3 py-1 rounded-full ${
                      selectedGoal.status === 'completed'
                        ? 'bg-green-500'
                        : selectedGoal.status === 'in-progress'
                        ? 'bg-yellow-500'
                        : 'bg-blue-500'
                    } text-white`}
                  >
                    {selectedGoal.status.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                <div className='mb-4'>
                  <div className='w-full bg-blue-900 rounded-full h-3'>
                    <div
                      className='bg-orange-500 h-3 rounded-full transition-all duration-300'
                      style={{ width: `${selectedGoal.progress}%` }}
                    ></div>
                  </div>
                  <p className='text-sm text-center mt-1'>{selectedGoal.progress}% Complete</p>
                </div>
                <h4 className='font-semibold mt-4 mb-2'>Milestones:</h4>
                <ul className='space-y-2'>
                  {selectedGoal.milestones.map((milestone, index) => (
                    <li key={index} className='flex items-center space-x-2'>
                      <CheckCircle
                        className={`w-5 h-5 ${
                          index < selectedGoal.completed ? 'text-green-400' : 'text-slate-400'
                        }`}
                      />
                      <span className={index < selectedGoal.completed ? 'text-green-400' : ''}>
                        {milestone}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className='text-center py-8 text-slate-400'>
                <BarChart className='w-12 h-12 mx-auto mb-4 opacity-50' />
                <p>Select a goal to view details</p>
              </div>
            )}
          </div>

          {/* Achievements */}
          <div className='bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4'>
            <h2 className='text-2xl font-bold mb-4'>Achievements</h2>
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className='flex items-center mb-4 p-3 bg-white bg-opacity-5 rounded-lg'
              >
                {achievement.icon}
                <div className='ml-4'>
                  <h3 className='font-semibold'>{achievement.title}</h3>
                  <p className='text-sm text-slate-200'>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Goal Journaling */}
          <div className='bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4'>
            <h2 className='text-2xl font-bold mb-4'>Goal Journal</h2>
            <textarea
              className='w-full h-32 bg-blue-900 bg-opacity-50 rounded-md p-2 text-slate-100 placeholder-slate-400'
              placeholder='Reflect on your progress...'
            ></textarea>
            <button className='mt-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors'>
              Save Entry
            </button>
          </div>

          {/* Goal Reflection and Analysis */}
          <div className='bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4'>
            <h2 className='text-2xl font-bold mb-4'>Reflection & Analysis</h2>
            <div className='space-y-4'>
              <div className='p-3 bg-white bg-opacity-5 rounded-lg'>
                <div className='flex items-center justify-between mb-2'>
                  <span>Goals Completed</span>
                  <span className='text-2xl font-bold text-green-400'>2/6</span>
                </div>
                <div className='w-full bg-blue-900 rounded-full h-2'>
                  <div className='bg-green-400 h-2 rounded-full' style={{ width: '33%' }}></div>
                </div>
              </div>
              <div className='p-3 bg-white bg-opacity-5 rounded-lg'>
                <div className='flex items-center justify-between mb-2'>
                  <span>On Track Goals</span>
                  <span className='text-2xl font-bold text-yellow-400'>2/6</span>
                </div>
                <div className='w-full bg-blue-900 rounded-full h-2'>
                  <div className='bg-yellow-400 h-2 rounded-full' style={{ width: '33%' }}></div>
                </div>
              </div>
              <div className='p-3 bg-white bg-opacity-5 rounded-lg'>
                <div className='flex items-center justify-between mb-2'>
                  <span>At Risk Goals</span>
                  <span className='text-2xl font-bold text-red-400'>2/6</span>
                </div>
                <div className='w-full bg-blue-900 rounded-full h-2'>
                  <div className='bg-red-400 h-2 rounded-full' style={{ width: '33%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Goal History */}
          <div className='bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4'>
            <h2 className='text-2xl font-bold mb-4'>Goal History</h2>
            {goalHistory.map((goal) => (
              <div key={goal.id} className='mb-4 p-3 bg-white bg-opacity-5 rounded-lg'>
                <h3 className='font-semibold'>{goal.title}</h3>
                <div className='flex justify-between items-center mt-2'>
                  <p className='text-sm text-slate-200'>{goal.category}</p>
                  <p className='text-sm text-slate-200'>{goal.completedDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalTracker;
