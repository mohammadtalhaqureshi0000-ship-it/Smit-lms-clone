import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import logo from "../assets/sit-logo-on-dark.png";

const SideBar = () => {
  return (
    <div className="flex ">
      <div className="flex h-screen w-64 flex-col bg-gray-700 text-white shadow-xl">
        <div className="border-b border-black px-6 py-5 ">
          <img src={logo} alt="" />
        </div>
        <nav className="flex flex-1 flex-col gap-2 px-3 py-6">
          <NavLink
            to="/dashboard"
            className="flex items-center gap-3 rounded-lg  px-4 py-3  hover:bg-slate-800 hover:text-white "
          >
            <MdOutlineDashboard className="text-2xl" />
            <span className="font-medium">Dashboard</span>
          </NavLink>

          <NavLink
            to="/Progress"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <FaBookOpen className="text-2xl" />
            <span className="font-medium">Progress</span>
          </NavLink>

          <NavLink
            to="/Attendence"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <MdDateRange className="text-2xl" />
            <span className="font-medium">Attendance</span>
          </NavLink>

          <NavLink
            to="/Payment"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <FaWallet className="text-2xl" />
            <span className="font-medium">Payment</span>
          </NavLink>

          <NavLink
            to="/Assignment"
            className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800 hover:text-white"
          >
            <MdAssignment className="text-2xl" />
            <span className="font-medium">Assignments</span>
          </NavLink>
        </nav>
        <footer>
          <div className="shrink-0 border-t">
            <h1 className="text-2xl font-bold text-white ">
              <span className="flex gap-2  px-3 py-1">
                <img
                  src="https://i.pinimg.com/originals/a8/2d/76/a82d7650231cbc5cbfba1920d07003fb.jpg?nii=t"
                  alt=""
                  className="w-10 rounded-full  "
                />
                Talha
              </span>
            </h1>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SideBar;
