import Projects from "../components/Projects";
import { useEffect } from "react";

function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects | Samira Hakimi ";
  }, []);
  return <Projects />;
}

export default ProjectsPage;