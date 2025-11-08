'use client'
import { app } from "@/app/lib/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Link from "next/link";
import {useRouter } from "next/navigation";
import React, { useState } from "react";


export default function Register() {
    const router = useRouter();
    const auth = getAuth(app);

    const [email ,setEmail] = useState("");
    const [password ,setPassword] =useState("")
    const [ConfirmPassword ,setConfirmPassword]= useState("")
    const [error ,setError] = useState("")
    
    async function handleRegister(event:React.FormEvent<HTMLFormElement>){
       event.preventDefault();
       setError("")
       if(ConfirmPassword!== password){
        setError('Passwords do not match')
        return;
        
        if (password.length < 6) {
        setError("Password must be at least 6 characters long");
  return;
}

       }
    try {
       await createUserWithEmailAndPassword(auth,email,password)
          router.push("/dashboard")
    } catch (error) {
      alert(error)
    }
   }
   
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white sm:p-2">
      <h1 className="mb-6 text-2xl font-bold text-orange-500 sm:text-3xl md:text-3xl lg:text-4xl">
        Register Page
      </h1>

      <form
          onSubmit={handleRegister}
          className="flex flex-col gap-4 p-6 bg-gray-200 rounded-lg w-72 sm:w-80 sm:p-3">
        {error && (
          <div className="p-2 mb-2 text-sm text-center text-red-600 bg-red-100 rounded">
            {error}
          </div>
        )}
        <input
          type="email"
          placeholder="Email..."
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full p-3 text-center text-gray-700 bg-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="password"
          placeholder="Password..."
          required
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full p-3 text-center text-gray-700 bg-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="password"
          placeholder="Confirm Password..."
          required
          value={ConfirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
          className="w-full p-3 text-center text-gray-700 bg-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="p-2 mt-2 text-white bg-orange-500 rounded-lg btn hover:bg-orange-600"
        >
          Register
        </button>
      </form>

      <p className="mt-4 text-center text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-orange-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
