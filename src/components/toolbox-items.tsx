import { ElementType, HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

import TechIcon from "@/components/tech-icon";

interface ToolboxItemsProps {
  items: {
    title: string;
    iconType: ElementType;
  }[];
  className?: HTMLAttributes<HTMLDivElement>["className"];
  itemsWrapperClassName?: HTMLAttributes<HTMLDivElement>["className"];
}

export default function ToolboxItems({
  items,
  className,
  itemsWrapperClassName,
}: ToolboxItemsProps) {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none gap-6 py-0.5 pr-6",
          itemsWrapperClassName
        )}
      >
        {[...items, ...items].map(({ title, iconType }, index) => (
          <div
            key={title + index}
            className="inline-flex items-center gap-4 rounded-lg px-3 py-2 outline outline-2 outline-white/10"
          >
            <TechIcon component={iconType} />
            <span className="font-semibold">{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
