import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "Freelance Invoice App",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    description:
      "A modern invoice management application for freelancers with elegant UI, responsive layouts, and smooth user experience.",
    link: "#",
    tech: ["React", "CSS", "JavaScript"],
    featured: true,
  },

  {
    name: "School Portal",
    image:
      "https://i.pinimg.com/736x/45/57/36/455736f389f8d71a9397387e3833d8ab.jpg",
    description:
      "A responsive educational portal designed for students and teachers with clean dashboards and organized content.",
    link: "#",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: true,
  },

  {
    name: "Reading Championship",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
    description:
      "Interactive reading competition website encouraging students through engaging visuals and motivational ranking systems.",
    link: "#",
    tech: ["React", "CSS"],
    featured: false,
  },

  {
    name: "Movie Theater Page",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    description:
      "A cinematic movie theater landing page featuring immersive layouts, trailers, and modern entertainment-inspired design.",
    link: "#",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: true,
  },

  {
    name: "Personal Webpage",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    description:
      "A stylish personal portfolio webpage showcasing creativity, responsive UI, and smooth modern layouts.",
    link: "#",
    tech: ["React", "Vite", "CSS"],
    featured: false,
  },

  {
    name: "Restaurant Webpage",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    description:
      "A visually rich restaurant website with elegant food presentation, menu sections, and modern customer-focused design.",
    link: "#",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: true,
  },

  {
    name: "Clock Project",
    image:
      "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1200&auto=format&fit=crop",
    description:
      "A sleek digital clock application with live time updates, minimalist aesthetics, and interactive styling.",
    link: "#",
    tech: ["JavaScript", "CSS", "HTML"],
    featured: false,
  },
];

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
         <p className="empty-state">
              No projects found 😢
         </p>
)}
 <div className="carousel">
        {filteredProjects.map((project, index) => (
          <div
            className="carousel-item"
            key={index}
            style={{
              "--position": index + 1,
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
        </div>
        </section>
  );
}

export default Projects;
