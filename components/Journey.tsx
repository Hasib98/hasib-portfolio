import { Briefcase, GraduationCap, Award, Hourglass } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface TimelineEntry {
  date: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
  isUpcoming?: boolean;
}

const timeline: TimelineEntry[] = [
  {
    date: "2025 — Present",
    title: "React Native Developer",
    organization: "Vista SysTech, Dhaka",
    description: "Building cross-platform iOS and Android applications using React Native and TypeScript.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    date: "Jan 2025 — Apr 2025",
    title: "Intern Web Developer",
    organization: "Webermelon, Chattogram",
    description: "WordPress development, responsive layouts, PHP customization, and plugin integration.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    date: "Oct 2024",
    title: "NASA Space Apps Challenge 2024",
    organization: "SpaceInfoScope Team — Finalist",
    description: "3D exoplanet visualization app using NASA API data and React.js.",
    icon: <Award className="w-5 h-5" />,
  },
  {
    date: "Jul 2023",
    title: "Blockchain Olympiad Bangladesh 2023",
    organization: "Finalist",
    description: "Decentralized music streaming platform — blockchain-based artist compensation system.",
    icon: <Award className="w-5 h-5" />,
  },
  {
    date: "Aug 2022 — Nov 2022",
    title: "Software Engineer Trainee",
    organization: "Deepchain Labs, Dhaka",
    description: "Blockchain research, technical analysis, and software engineering fundamentals.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    date: "Jan 2018 — Dec 2021",
    title: "B.Sc. Computer Science & Engineering",
    organization: "AIUB, Dhaka",
    description: "Thesis: Developing a Sustainable Consensus Mechanism for Blockchain Technology.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    date: "2026",
    title: "M.Sc. AI and Data Science",
    organization: "Germany — In Progress",
    description: "",
    icon: <Hourglass className="w-5 h-5" />,
    isUpcoming: true,
  },
];

function TimelineNode({ entry, index }: { entry: TimelineEntry; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <ScrollReveal direction={isLeft ? "left" : "right"} delay={index * 0.05}>
      <div className={`flex ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}>
        {/* Content */}
        <div className={`flex-1 ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
          <div
            className={`inline-block px-4 py-1 rounded-full text-xs font-mono mb-2 ${
              entry.isUpcoming
                ? "bg-ink/10 text-ink/50 border border-dashed border-ink/30"
                : "bg-sky/20 text-sky border border-sky/30"
            }`}
          >
            {entry.date}
            {entry.isUpcoming && " • Upcoming"}
          </div>
          <h3
            className={`font-display text-xl mb-1 ${
              entry.isUpcoming ? "text-ink/60" : "text-ink"
            }`}
          >
            {entry.title}
          </h3>
          <p
            className={`font-body font-medium mb-2 ${
              entry.isUpcoming ? "text-ink/50" : "text-sky"
            }`}
          >
            {entry.organization}
          </p>
          {entry.description && (
            <p
              className={`font-body text-sm ${
                entry.isUpcoming ? "text-ink/40" : "text-ink/70"
              }`}
            >
              {entry.description}
            </p>
          )}
        </div>

        {/* Icon */}
        <div className="relative flex-shrink-0">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              entry.isUpcoming
                ? "bg-white border-2 border-dashed border-ink/30 opacity-60"
                : "bg-sky text-white shadow-lg"
            }`}
          >
            {entry.icon}
          </div>
        </div>

        {/* Spacer for alternating layout */}
        <div className="flex-1 hidden lg:block" />
      </div>
    </ScrollReveal>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="font-display text-6xl md:text-7xl">
              <span className="text-ink">MY</span>
              <br />
              <span className="text-sky">JOURNEY</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-ink/10 hidden lg:block" />

          {/* Timeline Entries */}
          <div className="space-y-12">
            {timeline.map((entry, index) => (
              <TimelineNode key={index} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
