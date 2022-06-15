import React from "react";
import { useDarkMode } from "../../Context/DarkMode";
import aboutCodingLight from "../../assets/coding-light.png";
import aboutCodingDark from "../../assets/coding-dark.png";

const About = () => {
  const darkMode = useDarkMode();

  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There, I am{" "}
          <br/>
            <span
              className={darkMode ? "info-name dark-info-name" : "info-name"}
            >
              John
            </span>
          <br/>
          I am an expert Frontend Developer
        </div>
        <div className="about-photo">
          <img
            src={darkMode ? aboutCodingDark : aboutCodingLight}
            alt="About-coding"
            className="about-picture"
          />
        </div>
      </div>
      <div className="about-bottom">Social Component Here</div>
    </div>
  );
};

export default About;
