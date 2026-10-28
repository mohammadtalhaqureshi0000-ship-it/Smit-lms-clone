import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Layout from './pages/Layout';
import Progress from './pages/Progress';
import Attendence from './pages/Attendence';
import Payment from './pages/Payment';
import Assignment from './pages/Assignment';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/progress",
          element: <Progress />,
        },
        {
          path: "/attendence",
          element: <Attendence />,
        },
        {
          path: "/payment",
          element: <Payment />,
        },
        {
          path: "/assignment",
          element: <Assignment/>
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
