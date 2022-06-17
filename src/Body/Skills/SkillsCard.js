import React from "react";
import { useDarkMode } from "../../Context/DarkMode";

const SkillsCard = ({ skill }) => {
  const darkMode = useDarkMode();
  return (
    <div className="skill-card">
      {darkMode ? (
        <div className="" skill-icon>
          <i className={skill.darkiconClass}></i>
        </div>
      ) : (
        <div className="skill-icon">
          <i className={skill.iconClass}></i>
        </div>
      )}
      <label skill-name>{skill.name}</label>
    </div>
  );
};

export default SkillsCard;
