import { HTMLAttributes, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

import grainImage from "@/assets/images/grain.jpg";

interface CardProps {
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export default function Card({ children, className }: CardProps) {
  return (
    <article
      className={twMerge(
        "relative z-0 overflow-hidden rounded-3xl bg-gray-800 p-6 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:content-['']",
        className
      )}
    >
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </article>
  );
}
