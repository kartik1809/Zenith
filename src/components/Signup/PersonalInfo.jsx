import React from 'react'
import { useNavigate } from 'react-router-dom';

const PersonalInfo = ({nextPage,setUserData,userData}) => {
    const navigate=useNavigate();
    const handlePage = (e) => {
        e.preventDefault();
        nextPage('3')
        
    }
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
                    <h1 className="text-2xl font-semibold">Personal and Work Info</h1>
                </div>
                <form>
                    <div className="mb-3">
                        <label className="block text-sm font-medium text-zinc-200" htmlFor="location">Location</label>
                        <input
                            type="text"
                            id="location"
                            onChange={(e) => setUserData({...userData,location:e.target.value}) }
                            required
                            className="block w-full rounded-md border border-zinc-700 bg-zinc-950 p-3 text-zinc-50 focus:border-blue-100 focus:outline-none"
                            placeholder="Enter your location"
                        />
                    </div>
                    
                    <div className='flex gap-4'>
                        <div className="mb-3 w-1/2">
                            <label className="block text-sm font-medium text-zinc-200" htmlFor="age">Age</label>
                            <input
                                type="number"
                                id="age"
                                onChange={(e) => setUserData({...userData,age:e.target.value}) }
                                required
                                className="block w-full rounded-md border border-zinc-700 bg-zinc-950 p-3 text-zinc-50 focus:border-blue-100 focus:outline-none"
                                placeholder="Enter your age"
                            />
                        </div>
                        <div className="mb-3 w-1/2">
                            <label className="block text-sm font-medium text-zinc-200" htmlFor="occupation">Occupation</label>
                            <input
                                type="text"
                                id="occupation"
                                onChange={(e) => setUserData({...userData,Occupation:e.target.value}) }
                                required
                                className="block w-full rounded-md border border-zinc-700 bg-zinc-950 p-3 text-zinc-50 focus:border-blue-100 focus:outline-none"
                                placeholder="Enter your occupation"
                            />
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className="mb-3 w-1/2">
                            <label className="block text-sm font-medium text-zinc-200" htmlFor="institute">Institute/Work Place</label>
                            <input
                                type="text"
                                id="institute"
                                onChange={(e) => setUserData({...userData,Institute:e.target.value}) }
                                required
                                className="block w-full rounded-md border border-zinc-700 bg-zinc-950 p-3 text-zinc-50 focus:border-blue-100 focus:outline-none"
                                placeholder="Enter your Institute or Workplace"
                            />
                        </div>
                        <div className="mb-3 w-1/2">
                            <label className="block text-sm font-medium whitespace-nowrap text-zinc-200" htmlFor="workEnv">Work Environment</label>
                            <select
                                id="workEnv"
                                onChange={(e) => setUserData({...userData,WorkEnv:e.target.value}) }
                                required
                                className="block w-full rounded-md border border-zinc-700 bg-zinc-950 p-3 text-zinc-50 focus:border-blue-100 focus:outline-none"
                            >
                                <option value="">Select Work Environment</option>
                                <option value="Remote">Remote</option>
                                <option value="Onsite">Onsite</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>
                    </div>
                    <button
                        type="submit"
                        onClick={(e)=>{handlePage(e)}}
                        className="relative z-0 flex w-full items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-950 px-3 py-3 text-zinc-50 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-zinc-100 before:transition-transform before:duration-500 before:content-[''] hover:scale-105 hover:text-zinc-900 hover:before:translate-y-[0%] active:scale-100"
                    >
                        Next
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PersonalInfo
