import React from 'react'
import NavBar from './Navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import Line from './Line/Line'
import Copyright from './Copyright/Copyright'
import Login from './LoginPage/Login'
import SignUp from './SignUp/SignUp'
import Blogs from './Blogs/Blogs'
import AboutUs from './AboutUs/AboutUs'

function App() {
  return (
    <div className='font-primary'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
        <Footer />
        <Copyright/>
    </div>
  )
}

export default App 