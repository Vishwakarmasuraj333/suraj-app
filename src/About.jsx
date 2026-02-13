import "./About.css";
import myImg from ".src/assets/ss.jpeg";
import resumePDF from ".src/assets/SURAJ RESUME (1).pdf";


function About() {
    return (
        <section className="about-section" >
            <div className="about-img">
                <img src={myImg} alt="Frontend Developer" />
            </div>

            <div className="about-content">
                <h2>About Me</h2>
                <span className="highlight">Frontend Developer</span>

                <p>
                    I am a passionate <strong>Frontend Developer</strong> who loves
                    creating clean, modern, and user-friendly web interfaces. I focus on
                    writing elegant code, building responsive layouts, and turning ideas
                    into visually appealing digital experiences.
                </p><br /><br />
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
