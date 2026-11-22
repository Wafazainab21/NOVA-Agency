
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import {
  About,
  OurProcess,
  WhyNova,
  FinalCTA,
} from "@/components/ExtraSections";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Portfolio />

      <OurProcess />

      <WhyNova />

      <FinalCTA />

      <Contact />

      <Footer />
    </main>
  );
}
