import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.myscheme.in/images/logos/emblem-black.svg"
            alt="Government Logo"
            className="h-10"
          />
          <span className="text-2xl font-bold text-green-700">
            BenefitBridge{" "}
          </span>
          <img
            src="https://cdn.myscheme.in/images/logos/digital-india-black.svg"
            alt="Government Logo"
            className="h-10"
          />
        </div>
        <div className="flex border p-2 rounded-md bg-white shadow-sm">
          <input
            type="text"
            placeholder="Enter scheme name to search..."
            className="border-none outline-none w-56"
          />
          <button className=" text-white px-4 py-2 rounded-md">🔍</button>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md">
            Sign In →
          </button>
          <button className="text-gray-700">🌙</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
