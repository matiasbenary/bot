const programs = [
  {
    tag: "Strength",
    title: "PowerLift",
    desc: "Build raw strength with progressive overload programming designed by Olympic coaches.",
    sessions: "4x / week",
    level: "All levels",
    color: "from-green-900/40 to-black",
    href: "https://www.figma.com/community/file/powerlift-program",
  },
  {
    tag: "Cardio",
    title: "HIIT Blitz",
    desc: "Torch fat with high-intensity intervals that keep your metabolism elevated for hours.",
    sessions: "5x / week",
    level: "Intermediate",
    color: "from-emerald-900/40 to-black",
    href: "https://www.figma.com/community/file/hiit-blitz-program",
  },
  {
    tag: "Mobility",
    title: "FlexFlow",
    desc: "Restore movement, prevent injuries, and unlock performance through advanced mobility work.",
    sessions: "3x / week",
    level: "All levels",
    color: "from-green-800/30 to-black",
    href: "https://www.figma.com/community/file/flexflow-program",
  },
  {
    tag: "Sport",
    title: "Athletic Edge",
    desc: "Sport-specific conditioning for explosive power, agility, and peak performance.",
    sessions: "4x / week",
    level: "Advanced",
    color: "from-lime-900/30 to-black",
    href: "https://www.figma.com/community/file/athletic-edge-program",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-green-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Training
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Programs built for{" "}
            <span className="text-green-500">results.</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Whether you&apos;re starting from zero or pushing past a plateau, we
            have a program engineered for your goal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className={`card-hover rounded-2xl bg-gradient-to-br ${p.color} border border-white/8 p-8 flex flex-col justify-between min-h-[240px]`}
            >
              <div>
                <span className="inline-block bg-green-500/15 text-green-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide">
                  {p.tag}
                </span>
                <h3 className="text-2xl font-black mb-3">{p.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-4">
                  <span className="text-xs text-white/40">{p.sessions}</span>
                  <span className="text-xs text-white/40">·</span>
                  <span className="text-xs text-white/40">{p.level}</span>
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 text-sm font-semibold hover:text-green-300 transition-colors"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
