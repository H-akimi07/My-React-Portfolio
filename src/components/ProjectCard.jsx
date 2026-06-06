import { useState } from "react";

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
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

        <button
          className="details-btn"
          onClick={() => setOpen(true)}
        >
          View Details
        </button>
      </div>

      {/* MODAL OUTSIDE CARD BUT INSIDE RETURN */}
      {open && (
        <div
          className="modal-overlay"
          onClick={() => setOpen(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{project.name}</h2>

            <p>{project.description}</p>

            <p>
              <b>Tech Stack:</b> {project.tech.join(", ")}
            </p>

            {project.featured && (
              <p style={{ color: "gold" }}>
                🌟 Featured Project
              </p>
            )}

            <button onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;