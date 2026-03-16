"use client";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-12 px-6 bg-ink text-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="font-body text-sm text-cream/70">
            S. M. Hasib — 2025 — Built with Next.js
          </p>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-sm text-cream/70 hover:text-sky transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-sky text-white hover:bg-sky/90 transition-all duration-200 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
