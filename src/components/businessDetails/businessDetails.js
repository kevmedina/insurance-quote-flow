import React from "react";
import "./businessDetails.css";

const businessDetails = () => {
  return (
    <div className="business-details-container">
      <form>
        <div>
          <label></label>
          <select>
            <option>$50k</option>
            <option>$75k</option>
            <option>$100k</option>
            <option>$150k</option>
            <option>$200k</option>
          </select>
        </div>

        <div>
          <label></label>
          <select>
            <option>$50k</option>
            <option>$75k</option>
            <option>$100k</option>
            <option>$150k</option>
            <option>$200k</option>
          </select>
        </div>

        <div>
          <label></label>
          <input type="number" placeholder="Number of employees" />
        </div>

        <div>
          <label></label>
          <input type="text" placeholder="Zip code" />
        </div>

        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default businessDetails;
