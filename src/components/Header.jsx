const quotes = [
  'Dream big. Build bigger.',
  'Code your imagination into reality.',
  'Beautiful UI changes everything.',
  'Frontend is digital art.'
];

function Header({ message }) {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <header className="header" id = "home">

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

      <h2>Hello, I am</h2>

      <h1>Samira Hakimi</h1>

      <p>{message}</p>

      <span className="quote">“{randomQuote}”</span>

      <button>Explore Portfolio</button>
    </header>
  );
}

export default Header;