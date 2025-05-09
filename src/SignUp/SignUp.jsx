import React from 'react'

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 px-4">
      <div className="w-full max-w-lg bg-white shadow-md p-14 space-y-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Create your account <br />
            and start your journey.
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-4 flex flex-col gap-6">
          {/* Username */}
          <div>
            <input 
              type="text"
              id="username"
              placeholder="Enter Username"
              className="w-full px-4 py-2 border border-gray-200 bg-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-button1"
              required
            />
          </div>


          {/* Email */}
          <div>
            <input 
              type="email"
              id="email"
              placeholder="Enter Email"
              className="w-full px-4 py-2 border border-gray-200 bg-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-button1"
              required
            />
          </div>

          {/* Password */}
          <div>
            <input 
              type="password"
              id="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border border-gray-200 bg-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-button1"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <input 
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-200 bg-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-button1"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-button1 py-2 rounded-md font-medium hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="font-bold hover:underline">Login</a>
        </p>

        <div className='border-t-1 pt-9'>
        <button
            type="submit"
            className="w-full bg-button1 py-2 rounded-md font-medium hover:opacity-90 transition"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
