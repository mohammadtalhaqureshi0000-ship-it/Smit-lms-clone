import React from 'react'
import Navbar from '../components/Navbar'
import BasicCard from '../components/Card';
// import PrimarySearchAppBar from '../components/Appbar'
// import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-gray-900 h-screen'>
      <div>

      <Navbar />
      </div>
      <div className='mt-10 w-50'>
      <BasicCard  />
      </div>
    </div>
  );
}

export default Home