function Contact() {
  return (
    <section className="contact-section" id="contact">

  <div className="contact-glow glow1"></div>

  <div className="contact-glow glow2"></div>

  <div className="contact-glow glow3"></div>
  
      <h2>Contact Me</h2>

      <p>
        Let’s Connect and Create Something Beautiful Together ✨
      </p>

      <form className="contact-form">

        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Your Email" />

        <textarea
          placeholder="Write your message..."
          rows="6"
        ></textarea>

        <button>Send Message</button>

      </form>

    </section>
  );
}

export default Contact;
