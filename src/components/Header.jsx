const quotes = [
  "Dream big. Build bigger.",
  "Code your imagination into reality.",
  "Beautiful UI changes everything.",
  "Frontend is digital art.",
];

function Header() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <header className="header" id="home" data-aos="fade-up">
      <div className="hero-glow glow-one"></div>

      <div className="hero-glow glow-two"></div>

      <div className="hero-glow glow-three"></div>

      <div className="floating-icons">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="glow"></div>

      <h2>👋 Hi, I'm</h2>

      <h1>Samira Hakimi</h1>

      <p className="hero-subtitle">
        React Developer building modern, accessible, and interactive web
        experiences.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="primary-btn">
          View My Projects
        </a>

        <a href="#contact" className="secondary-btn">
          Let's Connect
        </a>
      </div>

      <p className="hero-quote">
        "Building beautiful digital experiences one component at a time."
      </p>
    </header>
  );
}

export default Header;
