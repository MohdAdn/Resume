const Projects = ({ projects }) => {
  return (
    <div className="experience project">
      <h2>Projects</h2>
      <hr />
      {
        <ul>
          {projects.map((ele, index) => (
            <li key={index}>
              <a href={ele}>Project {index + 1}</a>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
export default Projects;
