import { HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

import StarIcon from "@/assets/icons/star.svg";

interface CardHeaderProps {
  title: string;
  description: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export default function CardHeader({
  title,
  description,
  className,
}: CardHeaderProps) {
  return (
    <div
      className={twMerge("flex flex-col p-6 pb-0 md:px-10 md:pt-8", className)}
    >
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-white/60 lg:max-w-xs lg:text-base">
        {description}
      </p>
    </div>
  );
}
