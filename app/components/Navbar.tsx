"use client";
import { useState, useEffect } from "react";

const links = ["Programs", "Pricing", "Testimonials", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur border-b border-white/5 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center font-black text-black text-sm group-hover:scale-110 transition-transform">
            F
          </div>
          <span className="font-black text-xl tracking-widest text-white">
            FORGE<span className="text-green-500">GYM</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm font-medium text-white/70 hover:text-green-400 transition-colors tracking-wide"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#pricing"
          className="hidden md:inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold px-5 py-2.5 rounded text-sm tracking-wide transition-colors"
        >
          Join Now
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-6 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-white/80 hover:text-green-400 font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#pricing"
            className="bg-green-500 text-black font-bold px-4 py-2 rounded text-center text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}
