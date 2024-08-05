const Education = ({ education }) => {
  return (
    <div className="experience education">
      <h2>Education</h2>
      <hr />
      <h3>Course: {education.course}</h3>
      <h3>Year: {education.year}</h3>
      <h3>Branch: {education.branch}</h3>
      <h3>College: {education.college}</h3>
      <h3>Place: {education.place}</h3>
    </div>
  );
};
export default Education;
