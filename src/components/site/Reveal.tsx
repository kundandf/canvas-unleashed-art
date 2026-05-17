import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 24, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <div className="max-w-3xl mb-12 md:mb-16">
      {eyebrow && (
        <Reveal>
          <p className="font-hand text-xl text-primary mb-3">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display text-4xl md:text-6xl text-foreground leading-tight">
          <span className="brush-underline">{title}</span>
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.15}>
          <p className="mt-6 text-base md:text-lg text-foreground/75">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
