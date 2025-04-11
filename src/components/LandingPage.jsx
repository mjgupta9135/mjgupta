import React from "react";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-10">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl text-center bg-white p-16 rounded-lg shadow-lg"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl font-bold text-gray-900 leading-tight"
        >
          <span className="text-green-700">Discover</span> Government Schemes
          for You
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl text-gray-600 mt-6"
        >
          Find personalized welfare schemes based on your eligibility and needs.
          Our platform simplifies the process, ensuring you get the support you
          deserve.
        </motion.p>
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.3 }}
        >
          {[
            {
              title: "Education Benefits",
              desc: "Access scholarships, grants, and financial aid programs tailored for students.",
            },
            {
              title: "Healthcare Support",
              desc: "Get assistance with medical treatments, health insurance, and wellness programs.",
            },
            {
              title: "Financial Assistance",
              desc: "Find subsidies, pensions, and economic relief programs designed for various communities.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-green-100 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <h3 className="text-xl font-semibold text-green-700">
                {item.title}
              </h3>
              <p className="text-gray-700 mt-3">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.button
          className="mt-12 bg-green-600 cursor-pointer text-white px-10 py-4 rounded-md text-lg shadow-md hover:bg-green-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Find Schemes For You →
        </motion.button>
      </motion.header>
    </div>
  );
}

export default LandingPage;
