import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { FooterSection } from "@/sections/footer-section";
import { Header } from "@/sections/header";
import { HeroSection } from "@/sections/hero-section";
import { ProjectsSection } from "@/sections/projects-section";
import { TapeSection } from "@/sections/tape-section";
import { TestimonialsSection } from "@/sections/testimonials-section";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
