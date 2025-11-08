'use client'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {app} from '@/app/lib/firebase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

interface Login { 
     email:string
    password:string|number}
    
export default function Login() {
  const router = useRouter();
  const auth= getAuth(app);

  const[email,setEmail]=useState("");
  const [password,setPassword] = useState("");
  
  async function handleLogin (event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email,password)
      router.push("/")
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-2 bg-white'>
        <h1 className="mb-2 text-2xl font-bold text-orange-500 sm:text-2xl md:text-3xl lg:text-4xl">Login Page</h1>
        <form 
           onSubmit={handleLogin}
           className='flex flex-col gap-4 p-4 m-4 bg-gray-200 rounded-lg w-80 sm:w-60 h-80'>
          <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type='email'
          placeholder='UserEmail...'
          required
          className='w-full px-2 py-3 text-center text-gray-600 bg-orange-300 rounded-lg'/>

          <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type='password'
          placeholder='UserPassword...'
          required
          className='w-full p-5 text-center text-gray-600 bg-orange-300 rounded-lg '/>
           
          <button
          className="p-2 text-white bg-orange-500 rounded-lg cursor-pointer btn hover:bg-orange-600" 
          type="submit">Submit
          </button>
          
    <div className="mt-2 text-center text-gray-600">
          <p>Don’t have an account?</p>
          <Link href='/register' className="text-orange-500 cursor-pointer hover:underline">Register</Link>
    </div>

           
        </form>
    </div>
  )
}
