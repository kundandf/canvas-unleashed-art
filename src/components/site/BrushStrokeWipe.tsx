import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * BrushStrokeWipe
 * A full-width, multi-colour paint-brush wipe that slides from left to right.
 * Mount it inside any relative/overflow-hidden container to create a dramatic
 * page or section transition. The component auto-triggers once on mount and
 * calls onDone when the wipe has fully exited.
 */
export function BrushStrokeWipe({
  onDone,
  duration = 1.4,
  delay = 3.2,
}: {
  onDone?: () => void;
  duration?: number;
  delay?: number;
}) {
  const [wipe, setWipe] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => setWipe(true), delay * 1000);
    const finish = setTimeout(() => {
      setGone(true);
      onDone?.();
    }, (delay + duration + 0.6) * 1000);
    return () => {
      clearTimeout(start);
      clearTimeout(finish);
    };
  }, [delay, duration, onDone]);

  if (gone) return null;

  return (
    <motion.div
      className="pointer-events-none absolute inset-1 z-[110] overflow-hidden"
      initial={{ x: "-110%" }}
      animate={{ x: wipe ? "110%" : "-110%" }}
      transition={{ duration, ease: [0.77, 0, 0.175, 1] }}
    >
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="brushMix" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--terracotta)" />
            <stop offset="25%" stopColor="var(--saffron)" />
            <stop offset="50%" stopColor="var(--emerald-art)" />
            <stop offset="75%" stopColor="var(--ultramarine)" />
            <stop offset="100%" stopColor="var(--maroon)" />
          </linearGradient>
          <filter id="brushRough">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02 0.9"
              numOctaves="2"
              seed="3"
            />
            <feDisplacementMap in="SourceGraphic" scale="35" />
          </filter>
        </defs>

        <g filter="url(#brushRough)">
          <path
            d="M-200,500 Q200,300 600,500 T1400,500 T2000,500 L2000,1200 L-200,1200 Z"
            fill="url(#brushMix)"
            opacity="0.95"
          />
          <path
            d="M-200,520 Q300,360 700,520 T1500,520 T2100,520 L2100,1200 L-200,1200 Z"
            fill="url(#brushMix)"
            opacity="0.6"
          />
        </g>

        <g filter="url(#brushRough)" opacity="0.85">
          <ellipse cx="200" cy="500" rx="260" ry="80" fill="var(--saffron)" />
          <ellipse cx="700" cy="480" rx="300" ry="90" fill="var(--terracotta)" />
          <ellipse cx="1200" cy="520" rx="280" ry="85" fill="var(--ultramarine)" />
        </g>
      </svg>
    </motion.div>
  );
}
