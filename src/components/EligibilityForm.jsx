import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const statesAndUTs = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
  "Ladakh",
  "Jammu and Kashmir",
];

const castes = ["General", "OBC", "SC", "ST"];

function EligibilityForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    income: "",
    occupation: "",
    gender: "",
    state: "",
    caste: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/schemes", { state: formData });
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl font-bold text-gray-900 text-center"
        >
          Eligibility Check
        </motion.h2>
        <motion.form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {["fullName", "age", "income", "occupation"].map((field, index) => (
            <motion.input
              key={index}
              type={field === "age" || field === "income" ? "number" : "text"}
              name={field}
              placeholder={field.replace(/([A-Z])/g, " $1").trim()}
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
            />
          ))}

          {/* Gender Selection */}
          <div className="flex gap-4">
            {["Male", "Female", "Other"].map((gender) => (
              <label key={gender} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={handleChange}
                  className="accent-green-600"
                />
                <span>{gender}</span>
              </label>
            ))}
          </div>

          {/* State Selection */}
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
          >
            <option value="">Select State/UT</option>
            {statesAndUTs.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>

          {/* Caste Selection */}
          <select
            name="caste"
            value={formData.caste}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
          >
            <option value="">Select Caste</option>
            {castes.map((caste, index) => (
              <option key={index} value={caste}>
                {caste}
              </option>
            ))}
          </select>

          <motion.button
            type="submit"
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md w-full shadow-md hover:bg-green-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default EligibilityForm;
