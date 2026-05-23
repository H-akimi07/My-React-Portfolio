function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {project.featured && <span className="featured">Featured</span>}

      <img src={project.image} alt={project.name} />

      <h3>{project.name}</h3>

      <p>{project.description}</p>

      <div className="tech-stack">
        {project.tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <a href={project.link}>View Project</a>
    </div>
  );
}

export default ProjectCard;