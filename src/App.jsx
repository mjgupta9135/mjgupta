import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignInUp from "./components/SignInUp";
import EligibilityForm from "./components/EligibilityForm";
import EligibleSchemes from "./components/EligibleSchemes";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signinup" element={<SignInUp />} />
            <Route path="/eligibility" element={<EligibilityForm />} />
            <Route path="/schemes" element={<EligibleSchemes />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
