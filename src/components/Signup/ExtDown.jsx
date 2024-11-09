import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserGoal = () => {
    const [goals, setGoals] = useState(['']);
    const user=JSON.parse(localStorage.getItem('user'));
    const userId = user.result.uuid; 
    const navigate=useNavigate();

    
    const handleGoalChange = (index, event) => {
        const newGoals = [...goals];
        newGoals[index] = event.target.value;
        setGoals(newGoals);
    };

   
    const addGoalField = () => {
        setGoals([...goals, '']);
    };

    
    const copyUserId = () => {
        navigator.clipboard.writeText(userId).then(() => {
            alert('User ID copied to clipboard!');
        });
    };

    const handleNavigate = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };
    const handleBack = (e) => {
        e.preventDefault();
        navigate('/');
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
                    <h1 className="text-2xl font-semibold">You&apos;re Signed In</h1>
                </div>

                
                <div className="mb-6 text-zinc-200">
                    <p>Please ensure you have downloaded our extension. In case you haven't, click below:</p>
                    <a
                        href="https://example.com/download-extension" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        Download Extension
                    </a>
                </div>

                <div className="mb-6 text-zinc-200">
                    <p>Copy your user ID and paste it into the extension to complete setup:</p>
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            readOnly
                            value={userId}
                            className="block w-full rounded-md border border-zinc-700 bg-zinc-950 p-3 text-zinc-50"
                        />
                        <button
                            onClick={copyUserId}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            Copy
                        </button>
                    </div>
                </div>
                <button
                    type="submit"
                    onClick={handleNavigate}
                    className="relative z-0 flex w-full items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-950 px-3 py-3 text-zinc-50 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-zinc-100 before:transition-transform before:duration-500 before:content-[''] hover:scale-105 hover:text-zinc-900 hover:before:translate-y-[0%] active:scale-100"
                >
                    Done
                </button>

            </div>
        </div>
    );
};

export default UserGoal;
