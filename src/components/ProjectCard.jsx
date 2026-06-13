import {useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

function ProjectCard({ project }) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFav = favorites.some((p) => p.id === project.id);
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

        <Link to={`/projects/${project.id}`}>View Project</Link>
      </div>

      {/* MODAL OUTSIDE CARD BUT INSIDE RETURN */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{project.name}</h2>

            <p>{project.description}</p>

            <p>
              <b>Tech Stack:</b> {project.tech.join(", ")}
            </p>

            {project.featured && (
              <p style={{ color: "gold" }}>🌟 Featured Project</p>
            )}

            <button onClick={() => toggleFavorite(project)}>
              {isFav ? "⭐ Remove Favorite" : "🤍 Add Favorite"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
