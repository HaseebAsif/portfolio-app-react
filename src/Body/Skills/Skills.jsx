import React from "react";
import "./Skills.css";
import Seperator from "../../Components/Common/Seperator";
import { SkillsData } from "../../Components/Data/Skills";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  const data = SkillsData;
  return (
    <div className="skills">
      <Seperator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => (
          <div className="skills-section" key={item.type}>
            <label className="skills-section-title">{item.type}</label>
            <div className="skills-list">
              {item.list.map((skill) => (
                <SkillsCard skill={skill} key={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
