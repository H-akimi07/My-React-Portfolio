import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccess(true);

      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow glow1"></div>

      <div className="contact-glow glow2"></div>

      <div className="contact-glow glow3"></div>

      <h2>Contact Me</h2>

      <p>Let’s Connect and Create Something Beautiful Together ✨</p>

      <p className="contact-note">
        I'm open to internships, collaborations, and freelance opportunities.
      </p>

      <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up">
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="text"
          placeholder="Your Name"
          aria-label="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your Email"
          aria-label="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {errors.email && <p className="error">{errors.email}</p>}

        <textarea
          placeholder="Write your message..."
          aria-label="Your Message"
          rows="6"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        {errors.message && <p className="error">{errors.message}</p>}

        <button>Send Message</button>
      </form>

      {success && (
        <div className="success-toast">Message sent successfully 🚀</div>
      )}
    </section>
  );
}

export default Contact;
