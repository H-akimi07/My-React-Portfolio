import FavoritesPage from "./pages/FavoritesPage";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ScrollTop from "./components/ScrollTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import "./components/styles/style.css";

function App() {
   const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    <main className="app">
      <div className="theme-dropdown">
        <select 
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        >
          <option value="dark">🌙 Dark Mode</option>
          <option value="light">☀️ Light Mode</option>
          <option value="ocean">🌊 Ocean Mode</option>
        </select>
      </div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/about" element={<AboutPage />} />

        <Route path="/projects" element={<ProjectsPage />} />

        <Route path="/projects/:id" element={<ProjectDetails />} />
        
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      <ScrollTop />
    </main>
  );
}

export default App;
