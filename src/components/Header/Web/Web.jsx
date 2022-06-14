import React from "react";
import "./Web.css";

const Web = () => {
  return (
    <div className="Web">
      <div className="web-option">
        <a href="#Projects">
          <i className="fas fa-edit option-icon" />
          Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#Skills">
          <i className="fas fa-laptop option-icon" />
          Skills
        </a>
      </div>{" "}
      <div className="web-option">
        <a href="#Work">
          <i className="fas fa-briefcase option-icon" />
          Work
        </a>
      </div>{" "}
      <div className="web-option">
        <a href="#Contact">
          <i className="fas fa-user-edit option-icon" />
          Contact
        </a>
      </div>{" "}
    </div>
  );
};

export default Web;
