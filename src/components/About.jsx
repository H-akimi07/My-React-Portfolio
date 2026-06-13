import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  const hobbies = [
    "Reading",
    "Exploring new technologies",
    "Photography",
    "Learning New Skills",
    "Walking in Nature",
  ];

  return (

    
    <section className="about-section" id="about" data-aos="fade-up">
      
      <a href="/Samira-Hakimi-CV.pdf" download className="primary-btn">
        Download Resume
      </a>

      <h2>About Me</h2>

      <p>
        I am a creative Web developer who loves building modern, responsive and
        interactive web applications.
      </p>

      <h3>Career Goal</h3>

      <p>
        My goal is to become a professional frontend developer creating modern,
        user-friendly, and accessible web applications that solve real-world
        problems.
      </p>

      <h3>My Philosophy</h3>

      <p>
        I believe great software should be beautiful, accessible, and intuitive
        for everyone.
      </p>

      {showMore && (
        <p>
          My goal is to become a professional Web + AI developer and create
          futuristic digital experiences that feel premium and unforgettable.
        </p>
      )}

      

      <button 
      aria-expanded={showMore}
      onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>

      <div className="hobbies">
        {hobbies.map((hobby, index) => (
          <span key={index}>{hobby}</span>
        ))}
      </div>
    </section>
  );
}

export default About;
