import ResumeData from "../Data/ResumeData";
const Experience = ({ experience }) => {
  //console.log(experience);
  return (
    <div className="experience">
      <h2>Experience</h2>
      <hr />
      <h3>Year: {experience.year}</h3>
      <h3>Organisation: {experience.company}</h3>
      <h3>Role: {experience.role}</h3>
      <h3>Joining: {experience.monj}</h3>
      <h3>Last Day: {experience.lwd}</h3>
    </div>
  );
};
export default Experience;
