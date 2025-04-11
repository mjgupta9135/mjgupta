import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="bg-gray-100  flex items-center justify-center p-10">
      <header className="w-full max-w-5xl text-center bg-white p-12 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          <span className="text-green-700">Discover</span> Government Schemes
          for You
        </h1>
        <p className="text-xl text-gray-600 mt-6">
          Find personalized welfare schemes based on your eligibility and needs.
          Our platform simplifies the process, ensuring you get the support you
          deserve.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-green-700">
              Education Benefits
            </h3>
            <p className="text-gray-700 mt-2">
              Access scholarships and grants for students.
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-green-700">
              Healthcare Support
            </h3>
            <p className="text-gray-700 mt-2">
              Get medical assistance and health coverage.
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md py-12">
            <h3 className="text-lg font-semibold text-green-700">
              Financial Assistance
            </h3>
            <p className="text-gray-700 mt-2">
              Find subsidies and income support programs.
            </p>
          </div>
        </div>
        <button className="mt-10 bg-green-600 text-white px-8 py-4 rounded-md text-lg shadow-md hover:bg-green-700 transition">
          Find Schemes For You →
        </button>
      </header>
    </div>
  );
}

export default LandingPage;
