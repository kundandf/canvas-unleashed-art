import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);
  const [wipe, setWipe] = useState(false);
  useEffect(() => {
    const w = setTimeout(() => setWipe(true), 2400);
    const t = setTimeout(() => setDone(true), 3600);
    return () => { clearTimeout(t); clearTimeout(w); };
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* Watercolor background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay muted loop playsInline
          >
            <source src="/site/loader-watercolor.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-paper/55 backdrop-blur-[2px]" />

          {/* Floating ink blobs */}
          {[0,1,2,3,4].map((i) => (
            <motion.span
              key={i}
              className="absolute rounded-full mix-blend-multiply"
              style={{
                width: 80 + i * 40,
                height: 80 + i * 40,
                background: ["var(--terracotta)","var(--ultramarine)","var(--saffron)","var(--emerald-art)","var(--maroon)"][i],
                top: `${10 + i * 15}%`,
                left: `${(i * 23) % 80}%`,
                filter: "blur(40px)",
                opacity: 0.35,
              }}
              animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          <div className="relative text-center px-6">
            <motion.img
              src="/site/logo.png"
              alt="Vasai Vikasini College of Visual Art logo"
              initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.9, ease: [0.22,1,0.36,1] }}
              className="mx-auto mb-6 h-24 md:h-28 w-auto drop-shadow-xl"
            />
            <motion.svg width="240" height="20" viewBox="0 0 240 20" className="mx-auto mb-4">
              <motion.path
                d="M2 12 Q60 2 120 12 T238 12"
                fill="none" stroke="var(--maroon)" strokeWidth="3" strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, delay: 0.4, ease: "easeInOut" }}
              />
            </motion.svg>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="font-display text-3xl md:text-4xl text-foreground"
            >
              Vasai Vikasini
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="mt-2 font-hand text-lg text-foreground/80"
            >
              Entering the world of Visual Art…
            </motion.p>
          </div>

          {/* Multi-color brush stroke wipe — slides left to right */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-[110]"
            initial={{ x: "-110%" }}
            animate={{ x: wipe ? "110%" : "-110%" }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          >
            <svg viewBox="0 0 1600 1000" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="brushMix" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--terracotta)" />
                  <stop offset="25%" stopColor="var(--saffron)" />
                  <stop offset="50%" stopColor="var(--emerald-art)" />
                  <stop offset="75%" stopColor="var(--ultramarine)" />
                  <stop offset="100%" stopColor="var(--maroon)" />
                </linearGradient>
                <filter id="brushRough">
                  <feTurbulence type="fractalNoise" baseFrequency="0.02 0.9" numOctaves="2" seed="3" />
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
