import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.tech.includes(filter));

  return (
    <section className="projects-section" id="projects" data-aos="fade-up">
      <h2 className="projects-title">My Projects ✨</h2>

      <div className="filter-buttons">
        <button onClick={() => setFilter("All")}>All</button>

        <button onClick={() => setFilter("React")}>React</button>

        <button onClick={() => setFilter("HTML")}>HTML</button>

        <button onClick={() => setFilter("CSS")}>CSS</button>

        <button onClick={() => setFilter("JavaScript")}>JavaScript</button>
      </div>

      {filteredProjects.length === 0 && (
        <p className="empty-state">No projects found 😢</p>
      )}
      <div className="carousel">
        {filteredProjects.map((project, index) => (
          <div
            className="carousel-item"
            key={project.id}
            style={{
              "--position": index + 1,
            }}
          >
            <Link to={`/projects/${project.id}`}>
              <ProjectCard project={project} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
