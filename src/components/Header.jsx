import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer">
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
        </Link>
        <div className="flex border p-2 rounded-md bg-white shadow-sm">
          <input
            type="text"
            placeholder="Enter scheme name to search..."
            className="border-none outline-none w-56"
          />
          <button className=" text-white px-4 py-2 rounded-md">🔍</button>
        </div>
        <div className="flex items-center gap-4 ">
          <Link to="/signinup">
            {" "}
            <button className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded-md">
              Sign In →
            </button>
          </Link>
          <button className="text-gray-700">🌙</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
