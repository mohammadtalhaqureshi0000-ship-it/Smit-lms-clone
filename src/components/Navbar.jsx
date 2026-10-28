import React from 'react'

const Navbar = () => {
  return (
    <div>
      <main className="flex justify-between">
        <div className="navbar">
          <h1>
            <span>LG - Talha</span>
          </h1>
        <div>
        <div className="form">
            <input type="text" placeholder="Search" />
        </div>
            <select>
              <option value="">A</option>
              <option value="">B</option>
            </select>
          </div>

          <button>FeedBack</button>
        </div>
      </main>
    </div>
  );
}

export default Navbar