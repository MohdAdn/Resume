const Projects = ({ projects }) => {
  return (
    <div className="experience project">
      <h2>Projects</h2>
      <hr />
      <ul>
        <li>
          <a href={projects[0]}>Rest Country</a>
        </li>
        <li>
          <a href={projects[1]}>IP Address Tracker</a>
        </li>
        <li>
          <a href={projects[2]}>Movies Information</a>
        </li>
        <li>
          <a href={projects[3]}>Advice Generator</a>
        </li>
        <li>
          <a href={projects[4]}>Meme Generator</a>
        </li>
      </ul>
    </div>
  );
};
export default Projects;
