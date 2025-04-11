import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import { motion } from "framer-motion";

function SignInUp() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className=" min-h-screen flex bg-gray-200 justify-center p-10">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md  p-8 h-100 bg-gray-100 rounded-lg shadow-lg text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mt-4 p-3 border rounded-md"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full mt-4 p-3 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mt-4 p-3 border rounded-md"
        />
        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-4 text-gray-600">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-green-600 cursor-pointer underline"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}

export default SignInUp;
