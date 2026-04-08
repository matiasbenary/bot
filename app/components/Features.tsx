const features = [
  {
    icon: "⚡",
    title: "High-Performance Equipment",
    desc: "State-of-the-art machines from top brands. Everything you need, maintained daily.",
  },
  {
    icon: "🏋️",
    title: "Expert Coaching",
    desc: "Certified trainers design personalized programs and keep you accountable every step.",
  },
  {
    icon: "🔥",
    title: "Group Classes",
    desc: "HIIT, CrossFit, Yoga, Spin — 120+ classes per week at all skill levels.",
  },
  {
    icon: "📈",
    title: "Progress Tracking",
    desc: "Monthly assessments and body scans so you can see exactly how far you've come.",
  },
  {
    icon: "🥗",
    title: "Nutrition Guidance",
    desc: "Dietitian consultations and meal plans tailored to your specific goals.",
  },
  {
    icon: "🌙",
    title: "Open 24/7",
    desc: "Train on your schedule. Doors never close — access any time, any day.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-green-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Why FORGE
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Everything you need to{" "}
            <span className="text-green-500">succeed.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-hover green-border-glow bg-[#111] rounded-2xl p-7"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
