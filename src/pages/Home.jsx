import Header from "../components/Header";
import Profile from "../components/Profile";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ProjectUpdates from "../components/ProjectUpdates";
import Feedback from "../components/Feedback";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;