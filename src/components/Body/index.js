import React from "react";
import "./Body.css";
import About from "./About/index";
import Projects from "./Projects";
import Work from "../../Body/Work/Work";
import Skills from "../../Body/Skills/Skills";

function Body() {
  return (
    <div className="body">
      <section id="About">
        <About />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="#Skills">
        <Skills />
      </section>
      <section id="#Work">
        <Work />
      </section>
    </div>
  );
}

export default Body;
