import React from "react";
import {useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <div className="text-white">
      <div className="flex gap-4">
        <div className="rounded-lg bg-gray-800 p-6">
          <h1 className="text-2xl font-bold">91/102</h1>
          <span>Attendance</span>
        </div>
        <div className="rounded-lg bg-gray-800 p-6">Students</div>

        <div className="rounded-lg bg-gray-800 p-6">Courses</div>

        <button
          onClick={() => navigate("/")}
          className="ml-130 text-3xl h-fit rounded-lg p-2 hover:bg-gray-700"
        >
          🔙
        </button>
      </div>

      <div className="mt-6 rounded-lg bg-gray-800 p-6">Calendar</div>
    </div>
  );
};

export default Dashboard;
