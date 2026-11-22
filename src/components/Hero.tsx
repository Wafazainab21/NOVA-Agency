
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero section-padding" id="home">
      <div className="hero-glow" />

      <div className="hero-topline">
        <span><span className="status-dot" /> INDEPENDENT CREATIVE AGENCY</span>
        <span>DESIGNING THE FUTURE / 2026</span>
      </div>

      <div className="hero-content">
        <div className="hero-label">
          <Sparkles size={15} />
          CREATIVE THINKING. DIGITAL IMPACT.
        </div>

        <h1>
          WE MAKE
          <br />
          DIGITAL <span className="outline-text">MATTER.</span>
        </h1>

        <div className="hero-bottom">
          <p>
            We transform ambitious ideas into extraordinary digital
            experiences through thoughtful design, bold creativity
            and purposeful technology.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button-primary">
              Start a project <ArrowUpRight size={19} />
            </a>
            <a href="#work" className="text-link">
              Explore our work <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-decoration">
        <span>01 / 04</span>
        <span>SCROLL TO EXPLORE ↓</span>
        <span>CREATIVITY WITHOUT LIMITS.</span>
      </div>
    </section>
  );
}
