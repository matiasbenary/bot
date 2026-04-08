export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-gradient relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16"
    >
      {/* Background decorative element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-green-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-green-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-green-500/10" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full pulse-green" />
          Now Enrolling New Members
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6">
          FORGE YOUR
          <br />
          <span className="text-green-500">LIMITS.</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Elite equipment. Expert coaches. A community that pushes you beyond
          what you thought possible. This is where champions are made.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="bg-green-500 hover:bg-green-400 text-black font-black px-8 py-4 rounded text-lg tracking-wide transition-all hover:scale-105 active:scale-95"
          >
            Start Today — Free Trial
          </a>
          <a
            href="#programs"
            className="border border-white/20 hover:border-green-500/60 text-white font-semibold px-8 py-4 rounded text-lg transition-all hover:bg-white/5"
          >
            Explore Programs
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 mt-20 w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
        {[
          { value: "2,400+", label: "Active Members" },
          { value: "50+", label: "Expert Coaches" },
          { value: "120+", label: "Weekly Classes" },
          { value: "98%", label: "Member Retention" },
        ].map(({ value, label }) => (
          <div
            key={label}
            className="bg-[#0f0f0f] px-6 py-6 flex flex-col items-center text-center"
          >
            <span className="text-3xl font-black text-green-400">{value}</span>
            <span className="text-xs text-white/50 mt-1 tracking-wide">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
