const Skills = ({ skills }) => {
  console.log(skills);
  return (
    <div className="experience skills">
      <h2>Skills</h2>
      <hr />
      <h3>
        <ul>
          <li>{skills[0]}</li>
          <li>{skills[1]}</li>
          <li>{skills[2]}</li>
          <li>{skills[3]}</li>
          <li>{skills[4]}</li>
          <li>{skills[5]}</li>
          <li>{skills[6]}</li>
        </ul>
      </h3>
    </div>
  );
};
export default Skills;
