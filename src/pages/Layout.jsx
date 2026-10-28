import React from 'react'
import SideBar from "../components/SideBar";
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <SideBar />

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout