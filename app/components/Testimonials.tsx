const testimonials = [
  {
    name: "Marcus R.",
    role: "Lost 28 lbs in 4 months",
    quote:
      "FORGE completely changed my life. The coaches are relentless in the best way — they don't let you coast. I'm in the best shape of my life at 38.",
    rating: 5,
  },
  {
    name: "Sofia T.",
    role: "Powerlifting competitor",
    quote:
      "I've been to gyms all over the city. Nothing compares. The programming is smart, the community is real, and the results speak for themselves.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Gained 15 lbs of muscle",
    quote:
      "The Elite plan was worth every penny. My personal trainer built a program specifically for my body and schedule. 6 months later — unrecognizable.",
    rating: 5,
  },
  {
    name: "Priya M.",
    role: "Marathon runner",
    quote:
      "I joined for strength training to complement my running. The coaches actually understood endurance sports. My race times dropped by 12 minutes.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-green-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Results
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Real people.{" "}
            <span className="text-green-500">Real transformations.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover green-border-glow bg-[#111] rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-green-400 text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-6 text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-green-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
