import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./projects";
import { useState } from "react";
import resume from "../Data/ResumeData";
const Resume = () => {
  const [color, setColor] = useState("#111111");

  function getColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 16)];
    }
    return color;
  }
  function handleClick() {
    setColor(getColor());
  }

  return (
    <div style={{ backgroundColor: color }} className="container">
      <h1>My Resume</h1>
      <button onClick={handleClick} className="btn">
        Change Background{" "}
      </button>
      <button className="btn" onClick={() => window.print()}>
        Print
      </button>
      <hr />
      <div className="component">
        <Experience experience={resume.experience[0]}></Experience>
        <Education education={resume.education[0]}></Education>
      </div>
      <div className="child">
        <Skills skills={resume.skills}></Skills>
        <Projects projects={resume.projects}></Projects>
      </div>
    </div>
  );
};
export default Resume;
