import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 px-4">
      <div className="w-full max-w-lg bg-white shadow-md p-14 space-y-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold">Welcome back. Your well-begin <br />
          starts here.
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-4 flex flex-col gap-6">
          {/* Email */}
          <div>
            <input 
              type="email"
              id="email"
              placeholder="Enter Username"
              className="w-full px-4 py-2 border border-gray-200 bg-gray-200 rounded-b-sm focus:outline-none focus:ring-2 focus:ring-button1"
              required
            />
          </div>

          {/* Password */}
          <div>
            <input 
              type="password"
              id="password"
              placeholder="Enter a password"
              className="w-full px-4 py-2 border border-gray-200 bg-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-button1"
              required
            />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-button1" />
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-button1 py-2 rounded-md font-medium hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account? <a href="/signup" className="font-bold hover:underline">Sign up</a>
        </p>

        <div className='flex flex-col gap-7 justify-center items-center border-t-1 pt-7'>
            <button
            type="submit"
            className="w-full bg-button1 py-2 rounded-md font-medium hover:opacity-90 transition"
          >
            Login
          </button>
          <a href="#" className="font-bold hover:underline">Forgot password?</a>
        </div>
      </div>
    </div>
  )
}

export default Login
