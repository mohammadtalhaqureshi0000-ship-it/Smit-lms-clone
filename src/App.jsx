import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/dashboard",
      element:<Dashboard/>
    },
    // {
    //   path: "/progress",
    //   element: <Progress/>
    // },
    // {
    //   path: "/Attendance",
    //   element: <Attendance/>
    // },
    // {
    //   path: "Payment",
    //   element: ""
    // },
    // {
    //   path: "Assignment"
    // }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
