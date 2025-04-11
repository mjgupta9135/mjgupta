import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white text-center  shadow-lg pb-4">
        <p className="text-gray-700">
          © 2025 BenefitBridge . All Rights Reserved.
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <Link to="/privacy" className="text-green-700">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-green-700">
            Terms of Use
          </Link>
          <Link to="/contact" className="text-green-700">
            Contact Us
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
