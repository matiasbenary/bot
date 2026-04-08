export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative bg-[#111] border border-green-500/20 rounded-3xl px-8 py-16 overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent pointer-events-none" />

          <p className="text-green-500 text-sm font-semibold tracking-widest uppercase mb-4">
            Limited spots available
          </p>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
            Your next chapter
            <br />
            starts <span className="text-green-500">now.</span>
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto mb-10">
            Join over 2,400 members who made the decision to invest in
            themselves. First 7 days are completely free.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/5 border border-white/10 focus:border-green-500/60 focus:outline-none text-white placeholder-white/30 px-4 py-3.5 rounded-lg text-sm transition-colors"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-black font-black px-6 py-3.5 rounded-lg text-sm tracking-wide transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Claim Free Trial
            </button>
          </form>

          <p className="text-white/25 text-xs">
            No credit card required · Cancel anytime · Instant access
          </p>
        </div>
      </div>
    </section>
  );
}
