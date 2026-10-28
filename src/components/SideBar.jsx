import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import logo from "../assets/sit-logo-on-dark.png";
const SideBar = () => {
  return (
    <div className="flex ">
      <div className="flex h-screen w-64 flex-col bg-slate-900 text-white shadow-xl">
        <div className="border-b border-slate-700 px-6 py-5">
                  <img src={ logo} alt="" />
        </div>
        <nav className="flex flex-1 flex-col gap-2 px-3 py-6">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-lg  px-4 py-3 "
          >
            <MdOutlineDashboard className="text-2xl" />
            <span className="font-medium">Dashboard</span>
          </Link>

          <Link
            to="/Progress"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <FaBookOpen className="text-2xl" />
            <span className="font-medium">Progress</span>
          </Link>

          <Link
            to="/Attendence"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <MdDateRange className="text-2xl" />
            <span className="font-medium">Attendance</span>
          </Link>

          <Link
            to="/Payment"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <FaWallet className="text-2xl" />
            <span className="font-medium">Payment</span>
          </Link>

          <Link
            to="/Assignment"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-300  hover:text-white"
          >
            <MdAssignment className="text-2xl" />
            <span className="font-medium">Assignments</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
