import { Header } from "@/sections/header";
import { HeroSection } from "@/sections/hero";
import { ProjectsSection } from "@/sections/projects";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
