
import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <a href="#home" className="footer-logo">
          NOVA<span>.</span>
        </a>

        <p>
          THINK BOLD.
          <br />
          CREATE DIFFERENT.
        </p>

        <a href="#home" className="back-to-top">
          BACK TO TOP <ArrowUp size={16} />
        </a>
      </div>

      <div className="footer-bottom">
        <span>© 2026 NOVA CREATIVE STUDIO</span>
        <span>INDEPENDENT BY DESIGN.</span>
        <a href="#contact">
          LET'S CONNECT <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
}
