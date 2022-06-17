import React from "react";
import DarkMode from "../../Context/DarkMode";
import "./WorkCard.css";

const WorkCard = ({ item }) => {
  return (
    <div className="work-card">
      <img src={item.company} className="work-logo" alt="" />
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className={DarkMode ? "work-dates dark-work-date" : "work-dates"}>
          <label>{item.dateJoining}</label>
          <label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
