import Image from "next/image";

import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import Card from "@/components/card";
import SectionHeader from "@/components/section-header";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Features Projects"
          eyebrow="Real-world Results"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects.map(
            ({ company, year, title, results, link, image }) => (
              <Card
                key={title}
                className="p-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent">
                      <span>{company}</span>
                      <span>&bull;</span> <span>{year}</span>
                    </div>

                    <h3 className="mt-2 font-serif text-2xl md:mt-5 md:text-4xl">
                      {title}
                    </h3>
                    <hr className="mt-4 border-t-2 border-white/5 md:mt-5" />
                    <ul className="mt-4 flex flex-col gap-4 md:mt-5">
                      {results.map((result) => (
                        <li
                          key={result.title}
                          className="flex items-center gap-2"
                        >
                          <CheckCircleIcon className="size-5 text-white/50 md:size-6" />
                          <span className="text-sm text-white/50 md:text-base">
                            {result.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a href={link}>
                      <button className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-900 md:w-auto">
                        <span>Visit Live Site</span>
                        <ArrowUpRight className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image
                      src={image}
                      alt={title}
                      className="-mb-4 mt-8 md:mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};
