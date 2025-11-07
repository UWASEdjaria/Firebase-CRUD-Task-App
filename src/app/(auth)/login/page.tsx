import React from 'react'
interface Login { 
    id: string; 
    title: string;
     description: string; 
     completed: boolean;
      priority: "Low" | "Medium" | "High"; 
      userEmail: string; }
export default function Login() {
  return (
    <div className='bg-white flex flex-col min-h-screen justify-center items-center p-2'>
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg-text-4xl font-bold text-orange-500 mb-2">Login Page</h1>
        <form className='flex flex-col  bg-gray-200 w-80 sm:w-60 h-80 p-4 m-4 rounded-lg gap-4'>
            <input
           type='Email'
           placeholder='UserEmail...'
           required
           className='text-gray-600  text-center bg-orange-300 rounded-lg w-full p-5'/>

           <input
           type='password'
           placeholder='UserPassword...'
           required
           className='text-gray-600  text-center  bg-orange-300 rounded-lg w-full p-5 '/>
           
           <button
           className="btn bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-2" 
           type="submit">Submit
           </button>

           
        </form>
    </div>
  )
}
