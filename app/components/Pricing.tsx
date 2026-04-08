const plans = [
  {
    name: "Starter",
    price: 39,
    period: "/mo",
    desc: "Everything you need to get moving.",
    features: [
      "Full gym access",
      "2 group classes/week",
      "Locker room & showers",
      "App access",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Elite",
    price: 79,
    period: "/mo",
    desc: "For those who are serious about results.",
    features: [
      "Everything in Starter",
      "Unlimited group classes",
      "1 personal training session/mo",
      "Nutrition consultation",
      "Monthly body scan",
      "Priority booking",
    ],
    cta: "Join Elite",
    highlight: true,
  },
  {
    name: "Pro",
    price: 149,
    period: "/mo",
    desc: "The complete high-performance package.",
    features: [
      "Everything in Elite",
      "4 personal training sessions/mo",
      "Custom meal plan",
      "Recovery suite access",
      "VIP locker",
      "Guest passes (2/mo)",
    ],
    cta: "Go Pro",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-green-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Simple, transparent{" "}
            <span className="text-green-500">plans.</span>
          </h2>
          <p className="text-white/50 mt-4">No hidden fees. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                p.highlight
                  ? "bg-green-500 text-black"
                  : "bg-[#111] border border-white/8 green-border-glow"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-green-400 text-xs font-bold px-4 py-1 rounded-full border border-green-500/40 tracking-widest">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-lg font-black tracking-wide mb-1 ${
                    p.highlight ? "text-black" : "text-white"
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    p.highlight ? "text-black/70" : "text-white/50"
                  }`}
                >
                  {p.desc}
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className={`text-5xl font-black ${
                      p.highlight ? "text-black" : "text-white"
                    }`}
                  >
                    ${p.price}
                  </span>
                  <span
                    className={`mb-2 text-sm ${
                      p.highlight ? "text-black/60" : "text-white/40"
                    }`}
                  >
                    {p.period}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span
                      className={`mt-0.5 ${
                        p.highlight ? "text-black" : "text-green-500"
                      }`}
                    >
                      ✓
                    </span>
                    <span className={p.highlight ? "text-black/80" : "text-white/70"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-black py-3.5 rounded-lg text-sm tracking-wide transition-all hover:scale-105 active:scale-95 ${
                  p.highlight
                    ? "bg-black text-green-400 hover:bg-black/80"
                    : "bg-green-500 text-black hover:bg-green-400"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-8">
          All plans include a 7-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
