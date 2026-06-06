import { useState } from "react";

function Feedback() {
  const [feedbacks, setFeedbacks] = useState([
    {
      name: "Ahmad",
      rating: 5,
      comment: "Amazing portfolio!",
    },
    {
      name: "Sara",
      rating: 4,
      comment: "Beautiful design and animations.",
    },
  ]);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const [sortBy, setSortBy] = useState("highest");

  const sortedFeedbacks = [...feedbacks].sort((a, b) => {
    return sortBy === "highest" ? b.rating - a.rating : a.rating - b.rating;
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      name,
      rating: Number(rating),
      comment,
    };

    setFeedbacks([newFeedback, ...feedbacks]);

    setName("");
    setRating(5);
    setComment("");
  };

  return (
    <section className="feedback-section">
      <h2>Visitor Feedback ⭐</h2>
      
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="highest">Highest Rating First</option>

        <option value="lowest">Lowest Rating First</option>
      </select>
      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>

        <textarea
          placeholder="Write your feedback..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />

        <button type="submit">Submit Feedback</button>
      </form>

      <div className="feedback-list">
        {sortedFeedbacks.map((item, index) => (
          <div className="feedback-card" key={index}>
            <h3>
              {item.name}

              {item.rating === 5 && (
                <span className="featured-badge">🌟 Featured</span>
              )}
            </h3>

            <p>{"⭐".repeat(item.rating)}</p>

            <p>{item.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feedback;
