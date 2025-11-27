import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Interactive UI Kit",
    desc: "A component library with accessible controls and token-based theming.",
    img: "https://tse4.mm.bing.net/th/id/OIP.ipk1A7ke5bt3Gf6qD8UqXwHaEc?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    title: "Portfolio Website",
    desc: "Personal portfolio with projects, blog and contact form.",
    img: "https://tse4.mm.bing.net/th/id/OIP.AS1Bav3lo_agNTbJKB8L5wHaDt?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 3,
    title: "E-commerce Dashboard",
    desc: "Sales analytics, charts and product management UI.",
    img: "https://tse1.mm.bing.net/th/id/OIP.Cs87ibmeh4DqnP2sC6FLIwHaEw?w=1400&h=900&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 4,
    title: "Mobile App UI",
    desc: "High-fidelity screens and prototypes for mobile interactions.",
    img: "https://th.bing.com/th/id/OIP.E3rAnWCrVokXaNYqFbAajAHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 5,
    title: "Landing Page",
    desc: "Conversion-focused landing with animations and A/B variants.",
    img: "https://th.bing.com/th/id/OIP.Z3s_TzogY1Bd-lZF-h4fVgHaEv?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 6,
    title: "Admin Panel",
    desc: "Robust admin interface for user & permission management.",
    img: "https://tse4.mm.bing.net/th/id/OIP.nBbszpWHsxStVm1nWEHK7QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 7,
    title: "Interactive Map",
    desc: "Map-based data visualizations and custom markers.",
    img: "https://tse3.mm.bing.net/th/id/OIP.IVkvkEudNQLbx1TfP6vOrAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 8,
    title: "Animation Experiments",
    desc: "Micro-interactions and motion systems built with CSS & JS.",
    img: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/02ff6dabc5b9.jpg",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2>Projects</h2>
        <p className="subtitle">Selected work — UI, interactions & front-end engineering</p>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.id} className="project-card">
            <div className="thumb">
              <img src={p.img} alt={p.title} loading="lazy" />
            </div>

            <div className="project-body">
              <h3>{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="project-actions">
                <a
                  className="btn demo"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label={`View live demo of ${p.title}`}
                >
                  Live
                </a>
                <a
                  className="btn code"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label={`View source code of ${p.title}`}
                >
                  Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
