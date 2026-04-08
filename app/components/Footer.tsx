const footerLinks = {
  Company: ["About", "Careers", "Press", "Blog"],
  Programs: ["PowerLift", "HIIT Blitz", "FlexFlow", "Athletic Edge"],
  Support: ["FAQ", "Contact", "Locations", "App"],
};

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center font-black text-black text-sm">
                F
              </div>
              <span className="font-black text-xl tracking-widest">
                FORGE<span className="text-green-500">GYM</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Elite training facilities for those who refuse to settle for
              average.
            </p>
            <div className="flex gap-4 mt-6">
              {["ig", "tw", "yt", "fb"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded bg-white/5 hover:bg-green-500/20 hover:text-green-400 flex items-center justify-center text-white/40 text-xs font-bold transition-colors"
                >
                  {s.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">
                {group}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-green-400 text-sm transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2026 FORGE GYM. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-white/25 hover:text-white/60 text-xs transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
