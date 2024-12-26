import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performance",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User-friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <section className="overflow-x-clip py-16 lg:py-24">
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-emerald-300 to-sky-400">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className="animate-move-left flex flex-none -translate-x-1/2 gap-4 py-3 pr-4 [animation-duration:30s]"
            style={
              {
                // transform: "translateX(-50%)",
              }
            }
          >
            {[...words, ...words].map((word, index) => (
              <div
                key={word + index}
                className="inline-flex items-center gap-4"
              >
                <span className="text-sm font-extrabold uppercase text-gray-900">
                  {word}
                </span>
                <StarIcon className="size-6 -rotate-12 text-gray-900" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
