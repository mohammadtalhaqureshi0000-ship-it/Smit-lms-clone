import React from 'react'
// import Navbar from '../components/Navbar'
import PrimarySearchAppBar from '../components/Appbar'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
      <div>
      <PrimarySearchAppBar />
      <NavLink to="/dashboard">

      <div className=' border-2 w-30 text-center p-5  m-5 bg-amber-500 text-amber-50 hover:bg-amber-300'>
      
        Dashboard
      </div>
      </NavLink>
    </div>
  )
}

export default Home