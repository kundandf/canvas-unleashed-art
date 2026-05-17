import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center paper-tex"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <div className="text-center px-6">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-6 w-3 h-3 rounded-full bg-primary"
            />
            <motion.svg
              width="220" height="20" viewBox="0 0 220 20"
              className="mx-auto mb-4"
            >
              <motion.path
                d="M2 12 Q60 2 110 12 T218 12"
                fill="none" stroke="var(--maroon)" strokeWidth="3" strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              />
            </motion.svg>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="font-display text-3xl md:text-4xl text-foreground"
            >
              Vasai Vikasini
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="mt-2 font-hand text-lg text-muted-foreground"
            >
              Entering the world of Visual Art…
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
