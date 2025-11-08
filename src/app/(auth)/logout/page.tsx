'use client'
import { app } from '@/app/lib/firebase';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Logout() {
  const router =useRouter();
  const auth =getAuth(app);

  async function handleLogout(){
    await signOut(auth)
    router.push('/login')
  }
  return (
    <div>
       <button
          onClick={handleLogout}
          className="p-2 mt-2 text-white bg-orange-500 rounded-lg btn hover:bg-orange-600"
        >
          logout
        </button>
        
    </div>
  )
}


