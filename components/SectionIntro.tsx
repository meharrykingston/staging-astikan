type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionIntro({ eyebrow, title, description, align = "left", light = false }: SectionIntroProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={`mb-3 text-xs font-black uppercase tracking-[0.26em] ${light ? "text-[#ffb8c2]" : "text-[#e7354c]"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-balance text-3xl font-black tracking-[-0.05em] sm:text-5xl ${light ? "text-white" : "text-[#101249]"}`}>{title}</h2>
      {description ? <p className={`mt-5 text-lg leading-8 ${light ? "text-white/72" : "text-[#606783]"}`}>{description}</p> : null}
    </div>
  );
}
