import React from "react";

export default function Register() {
  return (
    <div className="bg-white min-h-screen  flex flex-col  justify-center items-center p-4 sm:p-2">
      <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-orange-500 mb-6">
        Register Page
      </h1>

      <form className="flex flex-col  bg-gray-200 w-72 sm:w-80 p-6 sm:p-3 rounded-lg gap-4">
        <input
          type="text"
          placeholder="Full Name..."
          required
          className="text-gray-700 text-center bg-orange-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="email"
          placeholder="Email..."
          required
          className="text-gray-700 text-center bg-orange-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="password"
          placeholder="Password..."
          required
          className="text-gray-700 text-center bg-orange-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="password"
          placeholder="Confirm Password..."
          required
          className="text-gray-700 text-center bg-orange-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="btn bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-2 mt-2"
        >
          Register
        </button>
      </form>

      <p className="text-center text-gray-600 mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-orange-500 hover:underline">
          Login
        </a>
      </p>
    </div>
  );
}
