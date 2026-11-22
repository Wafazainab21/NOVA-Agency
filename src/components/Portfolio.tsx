
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AURA SKINCARE",
    category: "Brand Identity / E-Commerce",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1598528738936-c50861cc75a9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    style: "project-aura",
  },
  {
    number: "02",
    title: "FORM & FUNCTION",
    category: "Digital Experience / UI Design",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=90",
    style: "project-form",
  },
  {
    number: "03",
    title: "MONO STUDIO",
    category: "Creative Direction / Branding",
    year: "2026",
    image:
    "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=1200&q=90",  
    style: "project-mono",
  },
  {
    number: "04",
    title: "OBJECTIVE",
    category: "Web Development / Strategy",
    year: "2026",
    image:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=90",
    style: "project-objective",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio section-padding" id="work">
      <div className="section-heading">
        <div>
          <span className="eyebrow">SELECTED WORK / 02</span>
          <h2>
            MADE TO <span>STAND OUT.</span>
          </h2>
        </div>
        <p>
          A selection of concepts and creative projects
          showcasing our approach to digital experiences.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className={`project-image ${project.style}`}>
              <img
                src={project.image}
                alt={`${project.title} project showcase`}
                loading="lazy"
              />
              <span className="project-number">{project.number}</span>
              <span className="project-view">
                <ArrowUpRight size={23} />
              </span>
            </div>

            <div className="project-info">
              <div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
              <span>{project.year}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="portfolio-bottom">
        <span>GOOD WORK. GOOD PEOPLE. GREAT RESULTS.</span>
        <a href="#contact">
          HAVE A PROJECT IN MIND? <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
