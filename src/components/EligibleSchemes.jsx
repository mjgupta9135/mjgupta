import { useLocation } from "react-router-dom";
import schemes from "../utils/schemes.json";
import React from "react";

const EligibleSchemes = () => {
  const location = useLocation();
  const userData = location.state;

  const isEligible = (scheme) => {
    const { age, income, occupation, state, gender, caste } = userData;
    return (
      age >= scheme.eligibility.age[0] &&
      age <= scheme.eligibility.age[1] &&
      income >= scheme.eligibility.income[0] &&
      income <= scheme.eligibility.income[1] &&
      (scheme.eligibility.occupation === "All" ||
        scheme.eligibility.occupation.includes(occupation)) &&
      (scheme.eligibility.state === "All" ||
        scheme.eligibility.state === state) &&
      (scheme.eligibility.gender === "All" ||
        scheme.eligibility.gender === gender) &&
      (scheme.eligibility.caste === "All" ||
        scheme.eligibility.caste.includes(caste))
    );
  };

  const eligibleSchemes = schemes.filter(isEligible);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Eligible Schemes</h2>
      {eligibleSchemes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {eligibleSchemes.map((scheme) => (
            <div key={scheme.id} className="border p-4 rounded shadow-md">
              <h3 className="text-xl font-semibold">{scheme.name}</h3>
              <p>{scheme.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No eligible schemes found.</p>
      )}
    </div>
  );
};

export default EligibleSchemes;
