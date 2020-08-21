import React from "react";
import "./generalInfo.css";

const generalInfo = () => {
  const industries = [
    {
      id: 10537,
      name: "Plumber",
    },
    {
      id: 10391,
      name: "Software Developer",
    },
    {
      id: 10415,
      name: "Lawyer",
    },
    {
      id: 10109,
      name: "Handyman",
    },
  ];

  return (
    <div className="general-info-container">
      <h1>General Information</h1>
      <form>
        <div>
          <label></label>
          <input type="text" placeholder="Business Name" />
        </div>

        <div>
          <label></label>
          <select defaultValue="Select Industry">
            {industries.map((industry) => {
              return <option value={industry.id}>{industry.name}</option>;
            })}
          </select>
        </div>

        <div>
          <label></label>
          <input type="email" placeholder="Email Address" />
        </div>

        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default generalInfo;
