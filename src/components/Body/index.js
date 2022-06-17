import React from "react";
import "./Body.css";
import About from "./About/index";
import Projects from "./Projects";

function Body() {
  return (
    <div className="body">
      <section id="About">
        <About />
      </section>
      <section id="Projects">
        <Projects />
      </section>
    </div>
  );
}

export default Body;
