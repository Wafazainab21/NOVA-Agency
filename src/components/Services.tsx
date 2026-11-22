
import {
  Palette,
  Code2,
  Fingerprint,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Palette,
    title: "UI / UX Design",
    description:
      "We craft intuitive, beautiful interfaces that make every interaction feel effortless and memorable.",
    tags: ["Research", "Wireframing", "Prototyping"],
  },
  {
    number: "02",
    icon: Code2,
    title: "Web Development",
    description:
      "We build fast, responsive and scalable digital experiences using modern web technologies.",
    tags: ["Next.js", "React", "Development"],
  },
  {
    number: "03",
    icon: Fingerprint,
    title: "Brand Identity",
    description:
      "We create distinctive brand identities that tell your story and make your business unforgettable.",
    tags: ["Strategy", "Visual Identity", "Guidelines"],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Digital Strategy",
    description:
      "We combine creative thinking and digital insights to help brands grow with purpose.",
    tags: ["Growth", "Analytics", "Strategy"],
  },
];

export default function Services() {
  return (
    <section className="services section-padding" id="services">
      <div className="section-heading">
        <div>
          <span className="eyebrow">WHAT WE DO / 01</span>
          <h2>
            BUILT ON <span>GOOD IDEAS.</span>
          </h2>
        </div>
        <p>
          Creative solutions for brands that want to
          stand out, move forward and make an impact.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span>{service.number} / SERVICE</span>
                <Icon size={27} strokeWidth={1.5} />
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a href="#contact" className="service-link" aria-label={`Discuss ${service.title}`}>
                <ArrowUpRight size={20} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
