import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal, SectionTitle } from "./Reveal";
import { Trophy, BookOpen, Award, Calendar, Star } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());
  useEffect(() => {
    if (inView) {
      const c = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      return c.stop;
    }
  }, [inView, mv, to]);
  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl text-primary">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

const stats = [
  { icon: Calendar, n: 1985, s: "", label: "Established" },
  { icon: Award, n: 35, s: "+", label: "Years of Art Education" },
  { icon: Star, n: 19, s: "", label: "State First Rankers" },
  { icon: Trophy, n: 50, s: "+", label: "State & National Awards" },
  { icon: BookOpen, n: 10, s: "+", label: "Specialised Courses" },
];

export function Achievements() {
  return (
    <section className="relative py-24 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="Achievements" title="Numbers painted in time" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="frame-card rounded-xl p-6 text-center h-full">
                <s.icon className="w-7 h-7 mx-auto text-accent" />
                <div className="mt-4">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
