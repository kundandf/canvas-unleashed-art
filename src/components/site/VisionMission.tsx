import { Reveal, SectionTitle } from "./Reveal";
import { Eye, Compass, Target } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Vision",
    body: "To be a leading Art Education Institute that empowers individuals to explore their artistic potential, cultivates cultural awareness, and contributes to society through the transformative power of art.",
    color: "var(--ultramarine)",
  },
  {
    icon: Compass,
    title: "Mission",
    body: "To inspire creativity, foster artistic expression, and provide comprehensive art education to individuals of all ages, promoting a lifelong appreciation for the arts.",
    color: "var(--terracotta)",
  },
  {
    icon: Target,
    title: "Goal",
    body: "To provide high-quality art education programs that equip students with technical skills, artistic knowledge, and critical thinking abilities.",
    color: "var(--emerald-art)",
  },
];

export function VisionMission() {
  return (
    <section className="relative py-24 px-5 md:px-8 bg-paper-deep/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="What guides us" title="Vision, Mission & Goal" />
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="group relative frame-card rounded-xl p-7 h-full overflow-hidden transition-transform hover:-translate-y-1">
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                  style={{ background: c.color }}
                />
                <c.icon className="w-8 h-8 mb-5" style={{ color: c.color }} />
                <h3 className="font-display text-3xl text-foreground mb-3">{c.title}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{c.body}</p>
                <div className="mt-6 h-[2px] w-12 transition-all group-hover:w-full" style={{ background: c.color }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
