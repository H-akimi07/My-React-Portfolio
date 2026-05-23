import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Profile from './components/Profile.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';

import './components/styles/style.css';


function App() {
  return (
    <div className="app">
      <Navbar />

      <Header
        message="I create futuristic web experiences with React & JavaScript ✨"
      />

      <Profile
        name="Samira"
        title="Web Developer"
        bio="Passionate about creating beautiful interactive websites with modern technologies and cinematic user experiences.
        Creative Web Developer, lifelong learner, and future tech innovator building modern digital experiences with passion, imagination, 
        and purpose."
      />

      <About />
      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;