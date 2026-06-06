
const quotes = [
  "Dream big. Build bigger.",
  "Code your imagination into reality.",
  "Beautiful UI changes everything.",
  "Frontend is digital art.",
];

function Header({ message }) {
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

      <h2 data-aos="fade-up" data-aos-delay="100">
        Hello, I am
      </h2>

      <h1 data-aos="fade-up" data-aos-delay="200">
        Samira Hakimi
      </h1>

      <p data-aos="fade-up" data-aos-delay="300">
        {message}
      </p>

      <span className="quote" data-aos="fade-up" data-aos-delay="400">
        “{randomQuote}”
      </span>

      <button data-aos="zoom-in" data-aos-delay="500">
        Explore Portfolio
      </button>
    </header>
  );
}

export default Header;
