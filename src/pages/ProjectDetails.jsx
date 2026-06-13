import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <section className="project-details">
      <button onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <h1>{project.name}</h1>

      <img src={project.image} alt={project.name} />

      <p>{project.description}</p>

      <p>
        <b>Status:</b> {project.status}
      </p>

      <p>
        <b>Tech Stack:</b> {project.tech.join(", ")}
      </p>

      {project.featured && (
        <p style={{ color: "gold" }}>⭐ Featured Project</p>
      )}
    </section>
  );
}

export default ProjectDetails;