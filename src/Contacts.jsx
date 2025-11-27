import "./Contacts.css";

export default function Contacts() {
  return (
    <section className="contacts-section" id="contact">
      <div className="contacts-header">
        <h2>Contact Me</h2>
        <p className="subtitle">
          Let's build something amazing together — feel free to reach out!
        </p>
      </div>

      <div className="contacts-container">
        {/* Contact Form */}
        <form className="contact-form" action="#" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="6" placeholder="Your Message" required />
          <button type="submit" className="btn send">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Email: <a href="mailto:youremail@example.com">itxsuraj@gmail.com</a></p>
          <p>Phone: <a href="tel:+9370944696">+91 9370944696</a></p>

          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}
