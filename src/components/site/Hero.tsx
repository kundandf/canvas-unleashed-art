import { motion } from "framer-motion";
import { ArrowRight, Palette, Image as ImageIcon } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster=""
        >
          <source src="/hero-studio.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-paper/40 via-paper/20 to-paper" />
        <div className="absolute inset-0 bg-gradient-to-r from-paper/70 via-transparent to-transparent" />
      </div>

      {/* Floating decorative papers */}
      {[
        { t: "Drawing", x: "8%", y: "20%", r: -8 },
        { t: "Painting", x: "85%", y: "28%", r: 6 },
        { t: "Sculpture", x: "12%", y: "70%", r: 4 },
        { t: "Interior", x: "82%", y: "72%", r: -6 },
        { t: "Animation", x: "70%", y: "12%", r: 10 },
      ].map((p, i) => (
        <motion.div
          key={p.t}
          className="absolute hidden md:flex frame-card px-3 py-2 rounded-md font-hand text-base text-foreground/80"
          style={{ left: p.x, top: p.y, rotate: `${p.r}deg` }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ delay: 1 + i * 0.15, duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="tape -top-2 left-4" />
          {p.t}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-24 pb-20 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-hand text-xl md:text-2xl text-primary mb-4"
        >
          Established 1985 · Recognised by Govt. of Maharashtra
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-foreground max-w-4xl"
        >
          Sketch your dreams. <br />
          <span className="italic text-primary">Paint</span> your future.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 max-w-xl text-base md:text-lg text-foreground/75"
        >
          Vasai Vikasini's College of Visual Art empowers students with technical
          skill, imagination, cultural depth, and professional creative
          education — for more than 35 years.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#admission" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-paper transition">
            Apply Now <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#courses" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border text-foreground hover:bg-secondary transition">
            <Palette className="w-4 h-4" /> Explore Courses
          </a>
          <a href="#gallery" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border text-foreground hover:bg-secondary transition">
            <ImageIcon className="w-4 h-4" /> View Gallery
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
        >
          {[
            ["1985", "Established"],
            ["35+", "Years of Art Education"],
            ["19", "State First Rankers"],
            ["10+", "Specialised Courses"],
          ].map(([n, l]) => (
            <div key={l} className="frame-card rounded-lg px-4 py-3">
              <div className="font-display text-3xl text-primary">{n}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-foreground/60"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll the story
      </motion.div>
    </section>
  );
}
