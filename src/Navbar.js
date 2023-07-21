import React from 'react';

const Navbar = ({ name, email, imageUrl }) => {
  return (
    <nav className="flex items-center justify-between bg-gray-100 p-4 shadow-sm">
      <div className="flex items-center">
        <div className="text-green-900 font-bold text-lg">Scheduled Appointment</div>
      </div>
      <div className="flex items-center">
        <div className="relative inline-block">
          <button className="text-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>
        <div className="ml-2">
          <img src={imageUrl} alt="User" className="h-8 w-8 rounded-full" />
        </div>
        <div className="ml-2">
          <div className="text-black font-semibold">{name}</div>
          <div className="text-black text-sm">{email}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
