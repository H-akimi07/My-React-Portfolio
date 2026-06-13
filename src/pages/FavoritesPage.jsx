import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import ProjectCard from "../components/ProjectCard";

function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <section className="projects-section">
      <h2 className="projects-title">⭐ My Favorite Projects</h2>

      {favorites.length === 0 ? (
        <p className="empty-state">
          No favorites yet 😢
        </p>
      ) : (
        <div className="carousel">
          {favorites.map((project, index) => (
            <div
              className="carousel-item"
              key={project.id}
              style={{ "--position": index + 1 }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default FavoritesPage;