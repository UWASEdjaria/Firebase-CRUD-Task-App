'use client'
import { getAuth } from 'firebase/auth';
import React from 'react'
import { app } from './lib/firebase';

export default function Dashboard() {
  
  const auth = getAuth(app);
  const user =auth.currentUser
  
  return (
    <div  className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="mb-2 text-2xl font-bold text-orange-500 sm:text-2xl md:text-3xl lg-text-4xl">Hello,{user?.email}</h1>
      <p className="text-lg text-gray-600">Welcome to your Firebase CRUD Task App!</p>
    </div>
  )
}
