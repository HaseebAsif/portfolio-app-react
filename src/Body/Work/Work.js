import React from "react";
import "./Work.css";
import WorkData from "../../Components/Data/Work.json";
import Seperator from "../../Components/Common/Seperator";
import WorkCard from "./WorkCard";

const Work = () => {
  const data = WorkData;
  return (
    <div className="work">
      <Seperator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item) => (
          <WorkCard item={item} key={item.company} />
        ))}
      </div>
    </div>
  );
};

export default Work;
