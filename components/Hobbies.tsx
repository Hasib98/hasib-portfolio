"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import guitarAnimation from "@/public/lottie/guitar.json";
import rocketAnimation from "@/public/lottie/rocket.json";
import codeAnimation from "@/public/lottie/code.json";
import travelAnimation from "@/public/lottie/travel.json";

const LottiePlayer = dynamic(() => import("./LottiePlayer"), { ssr: false });

interface Hobby {
  label: string;
  description: string;
  animation: object;
}

const hobbies: Hobby[] = [
  {
    label: "Playing Guitar",
    description: "Acoustic sessions after long debug sessions.",
    animation: guitarAnimation,
  },
  {
    label: "Space Exploration",
    description: "Reading about exoplanets. Sometimes I build tools to explore them.",
    animation: rocketAnimation,
  },
  {
    label: "Side Projects",
    description: "There is always something being built in a side branch.",
    animation: codeAnimation,
  },
  {
    label: "Exploring New Places",
    description: "Planning the next chapter — somewhere in Europe.",
    animation: travelAnimation,
  },
];

function HobbyCard({ hobby, index }: { hobby: Hobby; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        className="group p-6 bg-white rounded-xl border border-ink/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-32 h-32 mx-auto mb-4">
          <LottiePlayer animationData={hobby.animation} loop className="w-full h-full" />
        </div>
        <h3 className="font-display text-xl text-ink mb-2 text-center">{hobby.label}</h3>
        <p className="font-body text-ink/70 text-center text-sm">{hobby.description}</p>
      </div>
    </ScrollReveal>
  );
}

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="font-body text-lg text-ink/70 mb-2">WHEN I&apos;M NOT</p>
            <h2 className="font-display text-5xl md:text-6xl text-sky">CODING</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <HobbyCard key={index} hobby={hobby} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
