import { Mail, Linkedin, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-cream">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="mb-8">
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              <span className="text-ink">LET&apos;S BUILD</span>
              <br />
              <span className="text-ink">SOMETHING</span>
              <br />
              <span className="text-candy">TOGETHER</span>
            </h2>
            <p className="font-body text-lg text-ink/70">
              Open to full-time roles, freelance projects, and meaningful collaborations.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:smhasib1999@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-sky text-sky rounded-full font-body font-medium hover:bg-sky hover:text-white transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/s-m-hasib-1627a6161/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-candy text-candy rounded-full font-body font-medium hover:bg-candy hover:text-white transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Hasib98"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-ink text-ink rounded-full font-body font-medium hover:bg-ink hover:text-white transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
