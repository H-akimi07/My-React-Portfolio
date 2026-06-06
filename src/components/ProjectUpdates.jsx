import { useState, useEffect } from "react";

function ProjectUpdates() {
  const updatesList = [
    "🚀 New React feature added to portfolio",
    "🎨 Improved UI animations",
    "🔥 Fixed mobile responsiveness",
    "⚡ Optimized project loading speed",
    "🌙 Added dark/light theme system",
    "📦 Improved component structure"
  ];

  const [update, setUpdate] = useState(updatesList[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % updatesList.length;
      setUpdate(updatesList[index]);
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="updates-section">
      <h2>Live Project Updates ⚡</h2>

      <div className="update-box">
        <p>{update}</p>
      </div>
    </section>
  );
}

export default ProjectUpdates;