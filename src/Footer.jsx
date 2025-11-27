import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About / Name */}
        <div className="footer-about">
          <h3>Suraj Vishwakarma</h3>
          <p>Frontend Developer passionate about building modern, responsive, and beautiful web experiences.</p>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Phone: <a href="tel:+919370944696">+91 9370944696</a></p>
          <p>Email: <a href="mailto:suraj@example.com">suraj@example.com</a></p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://github.com/Vishwakarmasuraj333" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2025 Suraj Vishwakarma. All rights reserved.</p>
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ 
        </button>
      </div>
    </footer>
  );
}
