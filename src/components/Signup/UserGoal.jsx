import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserGoal = ({ nextPage, setUserData, userData }) => {
    const [goals, setGoals] = useState(['']);
    const navigate = useNavigate();
    const handleGoalChange = (index, event) => {
        const newGoals = [...goals];
        newGoals[index] = event.target.value;
        setGoals(newGoals);
    };

    const addGoalField = () => {
        setGoals([...goals, '']);
    };

    const sendDataToServer = async (userData) => {
        try {
            const response = await fetch('ttps://resolute-land-440916-q3.el.r.appspot.com/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            
            return data;
        }
        catch (err) {
            console.log(err);
        }
    }
    const handleBack = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const handleSubmit =async (e) => {
        e.preventDefault();
        setUserData({ ...userData, Goals: goals });
        const user = await sendDataToServer(userData);
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            nextPage('4')
        }
    }
    
    return (
        <div className='h-screen'>
            <button onClick={(e)=>{handleBack(e)}} className="z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-950 px-3 py-1.5 text-zinc-50 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-zinc-100 before:transition-transform before:duration-500 before:content-[''] hover:scale-105 hover:text-zinc-900 hover:before:translate-y-[0%] active:scale-100 absolute left-4 top-6 text-sm">
                <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Go back
            </button>
            <div className="relative z-10 mx-auto w-full max-w-xl p-4" style={{ opacity: 1, transform: 'none' }}>
                <div className="mb-9 mt-6 space-y-1.5">
                    <h1 className="text-2xl font-semibold">Tell Us About Your Goals</h1>
                </div>
                <form>
                    <div className="mb-3">
                        <label className="block text-sm font-medium text-zinc-200" htmlFor="intro">
                            Brief Introduction
                        </label>
                        <textarea
                            id="intro"
                            required
                            onChange={(e) => setUserData({ ...userData, Intro: e.target.value })}
                            rows="4"
                            className="block w-full rounded-md border border-zinc-700 bg-zinc-950 p-3 text-zinc-50 focus:border-blue-100 focus:outline-none"
                            placeholder="Write a brief introduction about yourself"
                        />
                    </div>

                    {goals.map((goal, index) => (
                        <div className="mb-3" key={index}>
                            <label className="block text-sm font-medium text-zinc-200" htmlFor={`goal-${index}`}>
                                Goal {index + 1}
                            </label>
                            <input
                                type="text"
                                id={`goal-${index}`}
                                value={goal}
                                onChange={(event) => handleGoalChange(index, event)}
                                required
                                className="block w-full rounded-md border border-zinc-700 bg-zinc-950 p-3 text-zinc-50 focus:border-blue-100 focus:outline-none"
                                placeholder="Enter your goal"
                            />
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={addGoalField}
                        className="block w-full text-center mb-4 text-sm text-blue-400 hover:underline"
                    >
                        + Add another goal
                    </button>

                    <button
                        type="submit"
                        onClick={(e) => { handleSubmit(e) }}
                        className="relative z-0 flex w-full items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-950 px-3 py-3 text-zinc-50 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-zinc-100 before:transition-transform before:duration-500 before:content-[''] hover:scale-105 hover:text-zinc-900 hover:before:translate-y-[0%] active:scale-100"
                    >
                        Submit Goals
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserGoal;
