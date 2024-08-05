import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./projects";
const Resume = () => {
  const resume = {
    experience: [
      {
        year: "2021-2024",
        company: "Shadow Infosystem",
        role: "Front End Developer",
        monj: "06/2021",
        lwd: "06/2024",
      },
    ],
    education: [
      {
        course: "Btech",
        year: 2019,
        branch: "CSE",
        college: "Ganeshi Lal Bajaj Institute",
        place: "Greater Noida",
      },
    ],
    skills: [
      "Javascript",
      "TypeScript",
      "React jS",
      "HTML",
      "CSS",
      "Redux",
      "Problem Solving",
    ],
    projects: [
      "https://rest-countries-infos.netlify.app/",
      "https://internet-protocol-address-track.netlify.app/",
      "https://online-movie-search.netlify.app/",
      "https://advice-genration.netlify.app/",
      "https://meme-gene-ration.netlify.app/",
    ],
  };

  return (
    <div className="container">
      <h1>My Resume</h1>
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
