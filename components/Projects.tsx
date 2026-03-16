"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface Project {
  name: string;
  description: string;
  tech: string[];
  accentColor: string;
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    name: "SpaceInfoScope",
    description:
      "Interactive exoplanet exploration app built for NASA Space Apps Challenge 2024. Users explore confirmed exoplanets via 3D visualizations, educational quizzes, and real NASA API data.",
    tech: ["React.js", "Three.js", "NASA API", "Figma", "Tailwind CSS"],
    accentColor: "#0D1B2A",
    github: "https://github.com/Hasib98",
    live: "https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/acranox/",
  },
  {
    name: "Blockchain Music Platform",
    description:
      "Decentralized music streaming platform where artists are compensated directly via smart contracts. Built for Blockchain Olympiad Bangladesh 2023.",
    tech: ["Blockchain", "Smart Contracts", "React", "Decentralized Architecture"],
    accentColor: "#2D1B69",
    github: "https://github.com/Hasib98",
    live: "https://www.linkedin.com/posts/s-m-hasib-1627a6161_aiubnoxter-activity-7090989539074199552-O6EN",
  },
  {
    name: "Wild Oasis Admin",
    description:
      "Full-featured hotel management dashboard with booking management, cabin analytics, and dark mode. Built with React, React Query, and Supabase.",
    tech: ["React.js", "React Query", "Supabase", "Styled Components", "React Router"],
    accentColor: "#1A3A2A",
    github: "https://github.com/Hasib98",
  },
  {
    name: "Wild Oasis Client",
    description:
      "Customer-facing booking platform for the Wild Oasis cabin resort. Features server-side rendering, Google authentication, and real-time availability.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "NextAuth", "SSR/SSG/ISR"],
    accentColor: "#1C2B1A",
    github: "https://github.com/Hasib98",
  },
  {
    name: "World-Wise Travel Tracker",
    description:
      "Advanced travel tracking app with interactive map integration. Users pin visited countries, add notes, and track travel history.",
    tech: ["React.js", "React Leaflet", "Context API", "React Router"],
    accentColor: "#1A2640",
    github: "https://github.com/Hasib98",
  },
];

function PhoneMockup({ color, index }: { color: string; index: number }) {
  const rotations = [-8, 0, 8];
  const zIndexes = [1, 3, 2];

  return (
    <motion.div
      className="phone-mockup"
      style={{
        position: "absolute",
        left: `${index * 15}%`,
        zIndex: zIndexes[index],
      }}
      initial={{ rotate: rotations[index] }}
      whileHover={{ rotate: rotations[index] * 1.5, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-32 md:w-40 h-64 md:h-80 bg-ink rounded-[2rem] p-2 shadow-2xl border-4 border-ink">
        <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-ink rounded-b-2xl z-10" />
          {/* Screen Content */}
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(135deg, ${color}, ${color}CC)`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="bg-white rounded-2xl shadow-lg border border-ink/10 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="grid lg:grid-cols-2 gap-8 p-8">
          {/* Left Panel */}
          <div className="space-y-4">
            <h3 className="font-display text-3xl text-ink">{project.name}</h3>
            <p className="font-body text-ink/70 leading-relaxed">{project.description}</p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-ink/5 border border-ink/10 rounded-full font-body text-xs font-medium text-ink"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-ink text-ink rounded-lg hover:bg-ink hover:text-white transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                <span className="font-body text-sm">GitHub</span>
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-sky text-sky rounded-lg hover:bg-sky hover:text-white transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="font-body text-sm">Live</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Panel - Phone Mockups */}
          <div
            className="relative h-80 flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                className="relative"
                animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {[0, 1, 2].map((i) => (
                  <PhoneMockup key={i} color={project.accentColor} index={i} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="font-display text-6xl md:text-7xl">
              <span className="text-ink">FEATURED</span>
              <br />
              <span className="text-sky">WORK</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
