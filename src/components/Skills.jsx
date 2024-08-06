const Skills = ({ skills }) => {
  console.log(skills);
  return skills.length > 0 ? (
    <div className="experience skills">
      <h2>Skills</h2>
      <hr />
      <h3>
        {skills.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </h3>
    </div>
  ) : (
    <></>
  );
};
export default Skills;
