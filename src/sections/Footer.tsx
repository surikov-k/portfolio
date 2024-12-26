import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const links = [
  {
    name: "YouTube",
    href: "#",
  },
  {
    name: "Twitter",
    href: "#",
  },
  {
    name: "Instagram",
    href: "#",
  },
  {
    name: "LinkedIn",
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="-x-10 absolute bottom-0 left-1/2 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="flex flex-col items-center gap-8 border-t border-white/15 py-6 text-center text-sm md:flex-row md:justify-between">
          <p className="text-white/40">&copy; 2024. All rights reserved.</p>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {links.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="inline-flex items-center gap-1.5"
              >
                <span className="text-sm font-semibold">{name}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
