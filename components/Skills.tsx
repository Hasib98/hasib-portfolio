"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Monitor, Wrench, Telescope } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Skill {
  name: string;
  progress: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Mobile",
    icon: <Smartphone className="w-5 h-5" />,
    color: "sky",
    skills: [
      { name: "React Native", progress: 90 },
      { name: "Expo", progress: 85 },
      { name: "TypeScript", progress: 88 },
      { name: "Redux", progress: 82 },
    ],
  },
  {
    title: "Frontend",
    icon: <Monitor className="w-5 h-5" />,
    color: "candy",
    skills: [
      { name: "React.js", progress: 92 },
      { name: "Next.js", progress: 88 },
      { name: "JavaScript", progress: 90 },
      { name: "HTML/CSS", progress: 95 },
      { name: "Tailwind CSS", progress: 93 },
    ],
  },
  {
    title: "Tools & Backend",
    icon: <Wrench className="w-5 h-5" />,
    color: "sun",
    skills: [
      { name: "Git", progress: 87 },
      { name: "Node.js", progress: 80 },
      { name: "REST APIs", progress: 85 },
      { name: "Supabase", progress: 82 },
      { name: "MongoDB", progress: 78 },
    ],
  },
  {
    title: "Exploring",
    icon: <Telescope className="w-5 h-5" />,
    color: "ink",
    skills: [
      { name: "Python", progress: 70 },
      { name: "AI/ML basics", progress: 65 },
      { name: "Blockchain/Web3", progress: 75 },
      { name: "PostgreSQL", progress: 72 },
    ],
  },
];

function SkillCard({ skill, color }: { skill: Skill; color: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const colorClasses: Record<string, string> = {
    sky: "bg-sky",
    candy: "bg-candy",
    sun: "bg-sun",
    ink: "bg-ink",
  };

  return (
    <div
      ref={ref}
      className="p-4 bg-white rounded-lg border border-ink/10 shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-200 group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-body font-medium text-ink">{skill.name}</span>
      </div>
      <div className="h-2 bg-ink/10 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${colorClasses[color]}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.progress}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="font-mono text-sky text-sm mb-2">&lt; skills /&gt;</p>
            <h2 className="font-display text-5xl md:text-6xl text-ink">What I Work With</h2>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={category.title} delay={categoryIndex * 0.1}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-${category.color}/10`}>{category.icon}</div>
                  <h3 className="font-display text-2xl text-ink">{category.title}</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} color={category.color} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
