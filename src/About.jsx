import "./About.css";
import myImg from "../assets/ss.jpeg";
import resumePDF from "../assets/SURAJ RESUME (1).pdf";

function About() {
    return (
        <section className="about-section">
            <div className="about-img">
                <img src={myImg} alt="Frontend Developer" />
            </div>

            <div className="about-content">
                <h2>About Me</h2>
                <span className="highlight">Frontend Developer</span>

                <p>
                    I am a passionate <strong>Frontend Developer</strong> who loves
                    creating clean, modern, and user-friendly web interfaces.
                </p>

                <div className="about-buttons">
                    <button className="btn hire">Hire Me</button>

                    <a href={resumePDF} download className="btn resume">
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;
