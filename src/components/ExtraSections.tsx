
import {
  ArrowUpRight,
  Lightbulb,
  Target,
  Layers3,
  Rocket,
  Sparkles,
  Compass,
  PenTool,
  Code2,
  CheckCircle2,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Compass,
    title: "Discover",
    description:
      "We understand your goals, audience and challenges before shaping the right direction.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategize",
    description:
      "We turn ideas into a clear creative strategy built around your brand and objectives.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Design",
    description:
      "We create thoughtful visual experiences with purpose, clarity and personality.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Develop",
    description:
      "We bring the vision to life with responsive, modern and reliable technology.",
  },
];

const strengths = [
  {
    icon: Target,
    title: "Purpose-driven design",
    description: "Every creative decision has a reason and a clear objective.",
  },
  {
    icon: Layers3,
    title: "Thoughtful experiences",
    description: "We focus on usability, visual clarity and meaningful interactions.",
  },
  {
    icon: Rocket,
    title: "Modern technology",
    description: "We use modern tools to create responsive digital experiences.",
  },
  {
    icon: Sparkles,
    title: "Creative perspective",
    description: "We bring fresh ideas and distinctive visual direction to every project.",
  },
];

export function About() {
  return (
    <section className="extra-about section-padding" id="about">
      <div className="extra-about-left">
        <span className="eyebrow">A LITTLE ABOUT US / 01</span>
        <h2>
          NOT JUST
          <br />
          ANOTHER <span>AGENCY.</span>
        </h2>
      </div>

      <div className="extra-about-right">
        <span className="about-mark">N.</span>
        <p className="about-lead">
          We believe great digital experiences begin with bold ideas
          and thoughtful execution.
        </p>
        <p className="about-description">
          NOVA Creative Studio is a digital creative concept focused on
          bringing brands and ideas to life through design, technology
          and strategy. We believe in simplicity, meaningful details
          and experiences that leave a lasting impression.
        </p>
        <a href="#services" className="text-link">
          WHAT WE DO <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}

export function OurProcess() {
  return (
    <section className="extra-process section-padding" id="process">
      <div className="section-heading">
        <div>
          <span className="eyebrow">HOW WE WORK / 03</span>
          <h2>
            IDEAS INTO <span>IMPACT.</span>
          </h2>
        </div>
        <p>
          A thoughtful process that transforms a vision
          into a meaningful digital experience.
        </p>
      </div>

      <div className="process-grid">
        {processSteps.map((step) => {
          const Icon = step.icon;
          return (
            <article className="process-card" key={step.number}>
              <div className="process-card-top">
                <span>{step.number} / STEP</span>
                <Icon size={27} strokeWidth={1.5} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className="process-line" />
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function WhyNova() {
  return (
    <section className="extra-why section-padding" id="why-nova">
      <div className="why-heading">
        <span className="eyebrow">THE NOVA DIFFERENCE / 04</span>
        <h2>
          GOOD DESIGN.
          <br />
          <span>REAL PURPOSE.</span>
        </h2>
        <p>
          We combine creative thinking with practical execution
          to make digital experiences more useful, memorable
          and meaningful.
        </p>
      </div>

      <div className="why-grid">
        {strengths.map((item) => {
          const Icon = item.icon;
          return (
            <article className="why-card" key={item.title}>
              <Icon size={25} strokeWidth={1.5} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <CheckCircle2 className="why-check" size={18} />
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="extra-cta section-padding">
      <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
      <h2>
        LET'S MAKE
        <br />
        SOMETHING <span>MATTER.</span>
      </h2>
      <p>
        Have an idea worth bringing to life?
        Let's turn it into something remarkable.
      </p>
      <a href="#contact" className="button-primary">
        Start a conversation <ArrowUpRight size={19} />
      </a>
      <span className="cta-decoration">NOVA / CREATIVE STUDIO</span>
    </section>
  );
}
