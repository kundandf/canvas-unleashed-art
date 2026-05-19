import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * "Second pre-slide" — a cinematic paint-eruption splash that plays once
 * after the initial Preloader, then slides up to reveal the site.
 */
export function IntroSplash() {
  const [visible, setVisible] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // Start after the preloader has cleared.
    const enter = setTimeout(() => setVisible(true), 3300);
    const exit = setTimeout(() => setVisible(false), 7800);
    const cleanup = setTimeout(() => setGone(true), 8800);
    return () => { clearTimeout(enter); clearTimeout(exit); clearTimeout(cleanup); };
  }, []);

  if (gone) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[95] overflow-hidden bg-paper"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 1.0, ease: [0.83,0,0.17,1] } }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay muted playsInline
          >
            <source src="/site/paint-erupt.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-paper/70 via-transparent to-paper/30" />

          <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-hand text-2xl md:text-3xl text-primary mb-3"
            >
              Since 1985 · Vasai
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.9, ease: [0.22,1,0.36,1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-foreground max-w-4xl"
            >
              Where colour <span className="italic text-primary">erupts</span> <br />
              into a way of life.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="mt-6 text-sm md:text-base uppercase tracking-[0.3em] text-foreground/70"
            >
              Vasai Vikasini's College of Visual Art
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
