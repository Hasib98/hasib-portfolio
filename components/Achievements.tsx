import { Trophy, Rocket, Star, BookOpen } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  year: string;
  description: string;
  color: string;
}

const achievements: Achievement[] = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Blockchain Olympiad Bangladesh 2023 — Finalist",
    year: "2023",
    description:
      "Built a decentralized music streaming platform addressing artist compensation through smart contracts. Presented to industry judges and mentors.",
    color: "sky",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "NASA Space Apps Challenge 2024 — Finalist",
    year: "2024",
    description:
      "Developed SpaceInfoScope — an interactive exoplanet exploration web app with 3D visualizations and NASA API integration.",
    color: "candy",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "B.Sc. CSE — AIUB (2018–2021)",
    year: "2021",
    description:
      "Graduated with distinction. Thesis on sustainable blockchain consensus mechanisms.",
    color: "sun",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Udemy — The Ultimate React Course 2025",
    year: "2025",
    description:
      "Completed comprehensive React, Next.js, and Redux training (Jan 2024 – Feb 2025).",
    color: "ink",
  },
];

function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const colorClasses: Record<string, { border: string; glow: string; bg: string }> = {
    sky: { border: "border-sky", glow: "hover:shadow-sky/30", bg: "bg-sky/10" },
    candy: { border: "border-candy", glow: "hover:shadow-candy/30", bg: "bg-candy/10" },
    sun: { border: "border-sun", glow: "hover:shadow-sun/30", bg: "bg-sun/10" },
    ink: { border: "border-ink", glow: "hover:shadow-ink/30", bg: "bg-ink/10" },
  };

  const colors = colorClasses[achievement.color];

  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        className={`group p-6 bg-white rounded-xl border-2 ${colors.border} shadow-lg hover:shadow-2xl ${colors.glow} transition-all duration-300 hover:scale-[1.02]`}
      >
        <div className={`inline-flex p-3 rounded-lg ${colors.bg} mb-4 text-${achievement.color}`}>
          {achievement.icon}
        </div>
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display text-xl text-ink flex-1">{achievement.title}</h3>
          <span className="px-3 py-1 bg-ink/5 rounded-full font-mono text-xs text-ink/70">
            {achievement.year}
          </span>
        </div>
        <p className="font-body text-ink/70 leading-relaxed">{achievement.description}</p>
      </div>
    </ScrollReveal>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="font-display text-6xl md:text-7xl">
              <span className="text-ink">ACHIEVE</span>
              <br />
              <span className="text-candy">MENTS</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
