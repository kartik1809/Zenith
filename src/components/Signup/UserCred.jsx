import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserCred = ({ nextPage, setUserData, userData }) => {
    const navigate=useNavigate();   
    const handlePage = (e) => {
        e.preventDefault();
        nextPage('2')
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
                    <h1 className="text-2xl font-semibold">Create a new account</h1>
                    <p className="text-zinc-400">
                        Already have an account?{' '}
                        <a href="#" className="text-blue-400">Sign in.</a>
                    </p>
                </div>
                <div>
                    <div className="mb-3 flex gap-3">
                        <button className="relative z-0 items-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-950 px-3 text-zinc-50 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-zinc-100 before:transition-transform before:duration-500 before:content-[''] hover:scale-105 hover:text-zinc-900 hover:before:translate-y-[0%] active:scale-100 flex w-full justify-center py-3">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                role="img"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                            </svg>
                        </button>
                        <button className="relative z-0 items-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-950 px-3 text-zinc-50 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-zinc-100 before:transition-transform before:duration-500 before:content-[''] hover:scale-105 hover:text-zinc-900 hover:before:translate-y-[0%] active:scale-100 flex w-full justify-center py-3">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                role="img"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                            </svg>
                        </button>
                    </div>
                    <button className="relative z-0 items-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-950 px-3 text-zinc-50 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-zinc-100 before:transition-transform before:duration-500 before:content-[''] hover:scale-105 hover:text-zinc-900 hover:before:translate-y-[0%] active:scale-100 flex w-full justify-center py-3">
                        Sign up with SSO
                    </button>
                </div>
                <div className="my-6 flex items-center gap-3">
                    <div className="h-[1px] w-full bg-zinc-700"></div>
                    <span className="text-zinc-400">OR</span>
                    <div className="h-[1px] w-full bg-zinc-700"></div>
                </div>
                <form>

                    <div className='flex gap-4 '>
                        <div className="mb-3 w-1/2">
                            <label className="block text-sm font-medium text-zinc-200" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                className="block w-full rounded-md border border-zinc-700 bg-zinc-950 p-3 text-zinc-50 focus:border-blue-100 focus:outline-none"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-3 w-1/2">
                            <label className="block text-sm font-medium text-zinc-200" htmlFor="name">Full name</label>
                            <input
                                type="name"
                                id="name"
                                onChange={(e) => setUserData({ ...userData, Name: e.target.value })}
                                required
                                className="block w-full rounded-md border border-zinc-700 bg-zinc-950 p-3 text-zinc-50 focus:border-blue-100 focus:outline-none"
                                placeholder="Enter your Full name"
                            />
                        </div>
                    </div>
                    <div className='flex gap-4 '>
                        <div className="mb-3 w-1/2">
                            <label className="block text-sm font-medium text-zinc-200" htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                                required
                                className="block w-full rounded-md border border-zinc-700 bg-zinc-950 p-3 text-zinc-50 focus:border-blue-100 focus:outline-none"
                                placeholder="Choose a username"
                            />
                        </div>
                        <div className="mb-3 w-1/2">
                            <label className="block text-sm font-medium text-zinc-200" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                                required
                                className="block w-full rounded-md border border-zinc-700 bg-zinc-950 p-3 text-zinc-50 focus:border-blue-100 focus:outline-none"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        onClick={(e) => { handlePage(e) }}
                        className="relative z-0 flex w-full items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-950 px-3 py-3 text-zinc-50 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-zinc-100 before:transition-transform before:duration-500 before:content-[''] hover:scale-105 hover:text-zinc-900 hover:before:translate-y-[0%] active:scale-100">
                        Sign Up
                    </button>
                </form>

            </div>
        </div>
    )
}

export default UserCred
