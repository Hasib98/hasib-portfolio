import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

export default function About() {
  const stats = [
    "B.Sc. CSE — AIUB",
    "React Native Dev",
    "Blockchain Finalist",
    "NASA Space Apps",
  ];

  return (
    <section id="about" className="py-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="font-display text-6xl md:text-7xl">
              <span className="text-ink">ABOUT</span>
              <br />
              <span className="text-sky">ME</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="w-full aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-illustration.png"
                  alt="Developer workspace illustration"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side - Text */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <p className="font-body text-lg md:text-xl text-ink/80 leading-relaxed">
                I&apos;m a software engineer from Chittagong, Bangladesh, currently working as a React
                Native developer in Dhaka. My background spans mobile development, frontend web,
                blockchain research, and a brief detour into mapping exoplanets. I&apos;m currently
                preparing to pursue graduate studies in AI and Data Science.
              </p>

              {/* Stat Chips */}
              <div className="flex flex-wrap gap-3 pt-4">
                {stats.map((stat, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white border border-sky/30 rounded-full font-body text-sm font-medium text-ink shadow-sm"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
