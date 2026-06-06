import ScrollTop from "./components/ScrollTop";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectUpdates from "./components/ProjectUpdates";
import Feedback from "./components/Feedback";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";

import "./components/styles/style.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <div className="theme-dropdown">
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="dark">🌙 Dark Mode</option>
          <option value="light">☀️ Light Mode</option>
          <option value="ocean">🌊 Ocean Mode</option>
        </select>
      </div>
      <Navbar />

      <Header message="I create futuristic web experiences with React & JavaScript ✨" />

      <Profile
        name="Samira"
        title="Web Developer"
        bio="Passionate about creating beautiful interactive websites with modern technologies and cinematic user experiences.
        Creative Web Developer, lifelong learner, and future tech innovator building modern digital experiences with passion, imagination, 
        and purpose."
      />

      <About />
      <Skills />
      <Projects />
      <ProjectUpdates />
      <Feedback />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
