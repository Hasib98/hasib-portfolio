"use client";
import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Massive Stacked Heading */}
          <div className="space-y-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="font-display text-[8rem] md:text-[9rem] leading-none text-ink"
            >
              SOFT
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="font-display text-[8rem] md:text-[9rem] leading-none text-sky"
            >
              WARE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-body italic text-xl md:text-2xl text-ink/80 mt-2"
            >
              Engineer & Mobile Developer
            </motion.p>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="font-body text-lg md:text-xl text-ink/70 max-w-xl"
          >
            Building cross-platform apps that people actually enjoy using.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-cream rounded-full font-display hover:bg-ink/90 transition-all duration-200 hover:scale-105"
            >
              View My Work
            </button>
            <a
              href="/cv/hasib-cv.pdf"
              download="S_M_Hasib_CV.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-candy text-candy rounded-full font-display hover:bg-candy hover:text-white transition-all duration-200 hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>

          {/* Social Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/Hasib98"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-ink/20 hover:border-sky hover:bg-sky/10 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-ink" />
            </a>
            <a
              href="https://www.linkedin.com/in/s-m-hasib-1627a6161/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-ink/20 hover:border-sky hover:bg-sky/10 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-ink" />
            </a>
            <a
              href="mailto:smhasib1999@gmail.com"
              className="p-3 rounded-full border border-ink/20 hover:border-sky hover:bg-sky/10 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-ink" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative flex items-center justify-center"
        >
          {/* Dot Grid Background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, #4FC3F7 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Avatar */}
          <div className="relative z-10">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-avatar.png"
                alt="S. M. Hasib - Software Engineer"
                width={800}
                height={800}
                priority
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -top-6 -left-6 px-4 py-2 bg-white rounded-full shadow-lg border border-sky/20 animate-float"
            >
              <span className="font-body font-medium text-ink text-sm">React Native</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -top-2 -right-8 px-4 py-2 bg-white rounded-full shadow-lg border border-candy/20 animate-float-delay-1"
            >
              <span className="font-body font-medium text-ink text-sm">Next.js</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-4 right-4 px-4 py-2 bg-white rounded-full shadow-lg border border-sun/20 animate-float-delay-2"
            >
              <span className="font-body font-medium text-ink text-sm">TypeScript</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-ink/40 animate-bounce" />
      </motion.div>
    </section>
  );
}
