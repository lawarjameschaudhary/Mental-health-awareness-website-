import React from 'react'
import { NavLink } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <div className='px-4 py-10'>
      <div className='w-full max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10'>

        {/* Logo Section */}
        <div className='flex flex-col items-start gap-4 text-center md:text-left md:items-start'>
          <img 
            src="https://img.freepik.com/free-vector/international-day-yoga-flat-design_23-2148549412.jpg?ga=GA1.1.255780563.1737648427&semt=ais_hybrid&w=740"
            alt="Logo" 
            className="w-20 h-20 object-cover rounded-full"
          />
          <p className="text-sm text-gray-700 leading-relaxed">
            Support mental health<br />
            awareness and wellbeing<br />
            through accessible<br />
            resources.
          </p>
        </div>

        {/* Resources */}
        <div className='flex flex-col gap-4'>
          <div className="text-xl font-semibold">Resources</div>
          <div className="flex flex-col gap-2 font-medium text-gray-600">
            <NavLink to="/articles">Articles</NavLink>
            <NavLink to="/videos">Videos</NavLink>
            <NavLink to="/guides">Self-help Guides</NavLink>
          </div>
        </div>

        {/* Support */}
        <div className='flex flex-col gap-4'>
          <div className="text-xl font-semibold">Support</div>
          <div className="flex flex-col gap-2 font-medium text-gray-600">
            <NavLink to="/helplines">Helplines</NavLink>
            <NavLink to="/therapist">Find a Therapist</NavLink>
            <NavLink to="/community">Community</NavLink>
          </div>
        </div>

        {/* Connect */}
        <div className='flex flex-col gap-4'>
          <div className="text-xl font-semibold">Connect</div>
          <div className="flex gap-4 text-gray-600">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
