"use client";

import { useState } from "react";

import { twMerge } from "tailwind-merge";

const links = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Projects",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export const Header = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState(3);
  return (
    <div className="relative top-3 flex items-center justify-center">
      <nav className="flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
        {links.map(({ name, href }, index) => (
          <a
            key={name}
            href={href}
            className={twMerge(
              "nav-item",
              currentMenuItem === index &&
                "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
            )}
            onClick={() => setCurrentMenuItem(index)}
          >
            {name}
          </a>
        ))}
      </nav>
    </div>
  );
};
