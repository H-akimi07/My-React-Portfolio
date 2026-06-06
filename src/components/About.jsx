import { useState } from 'react';

function About() {
  const [showMore, setShowMore] = useState(false);

  const hobbies = [
    'Reading',
    'Exploring new technologies',
    'Photography',
    'Learning New Skills',
    'Walking in Nature'
  ];

  return (
    <section className="about-section" id = "about" data-aos="fade-up">
      <h2>About Me</h2>

      <p>
        I am a creative Web developer who loves building modern,
        responsive and interactive web applications.
      </p>

      {showMore && (
        <p>
          My goal is to become a professional Web + AI developer and create
          futuristic digital experiences that feel premium and unforgettable.
        </p>
      )}

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'Show More'}
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