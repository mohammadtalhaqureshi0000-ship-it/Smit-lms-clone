import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import SpringModal from './Modal';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full px-6 py-4 bg-gray-950">
      <main className="flex items-center justify-between gap-6">
        <div className="shrink-0">
          <h1 className="text-2xl font-bold text-white ">
            <span className="flex gap-2 border rounded-3xl justify-center items-center px-3 py-1" >
              <img
                src="https://i.pinimg.com/originals/a8/2d/76/a82d7650231cbc5cbfba1920d07003fb.jpg?nii=t"
                alt=""
                className="w-10 rounded-full  "
              />
              Talha
            </span>
          </h1>
        </div>
        <div className="flex flex-1 items-center justify-center gap-2">
          <div className="w-full max-w-md">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-lg border bg-gray-800 border-gray-300 px-4 py-2 pr-10 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-gray-400" />
            </div>
          </div>
          <select className="rounded-lg border bg-black border-blue-500 text-gray-200 px-4 py-2 outline-none focus:border-blue-500">
            <option value="">All</option>
            <option value="">PENDING</option>
            <option value="">ENROLLED</option>
          </select>
        </div>
        {/* Feedback Button */}
        <div className="shrink-0">
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Feedback
          </button>

          <SpringModal open={open} onClose={() => setOpen(false)} />
        </div>
      </main>
    </div>
  );
}

export default Navbar