interface SectionHeaderProps {
  title: string;
  eyebrow: string;
  description: string;
}

export default function SectionHeader({
  title,
  eyebrow,
  description,
}: SectionHeaderProps) {
  return (
    <>
      <div className="flex justify-center">
        <p className="inline-flex bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text font-semibold uppercase tracking-widest text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 text-center text-white/60 md:max-w-md md:text-lg lg:text-xl">
        {description}
      </p>
    </>
  );
}
