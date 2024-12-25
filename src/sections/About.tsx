import Image from "next/image";

import ChromeIcon from "@/assets/icons/chrome.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import Card from "@/components/card";
import CardHeader from "@/components/card-header";
import SectionHeader from "@/components/section-header";
import ToolboxItems from "@/components/toolbox-items";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
];

const interests = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♀️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="A Glimpse Into My World"
          eyebrow="About Me"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-6">
          <Card className="col-span-2 h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives"
            />

            <div className="mx-auto mt-8 w-40">
              <Image src={bookImage} alt="book cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-4">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
            />
            <ToolboxItems items={toolboxItems} className="mt-6 md:mt-8" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card className="flex h-[320px] flex-col p-0 md:col-span-3 lg:col-span-4">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
            />
            <div className="relative mt-6 flex-1 md:mt-8">
              {interests.map(({ title, emoji, left, top }) => (
                <div
                  key={title}
                  className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
                  style={{ left, top }}
                >
                  <span className="font-medium text-gray-950">{title}</span>
                  <span className="">{emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 md:col-span-2">
            <Image
              src={mapImage}
              alt="map"
              className="h-full object-cover object-left-top"
            />
            <div className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 outline outline-2 -outline-offset-2 outline-gray-950/30">
              <Image src={smileMemoji} alt="smile" className="size-20" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
