
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/data/projects.json");
      const data = await response.json();
      setClients(data);
    }
    getData();
  }, []);
  return (
    <section id="projects">
      <div className="headline-container">
        <h2>Projects</h2>
      </div>
      {projects.map((project) => (
        <div key={project.id}>
          <NavLink to={`/projects/${project.id}`}>Læs mere</NavLink>
        </div>
      ))}
    </section>
  );
  console.log(projects);
}