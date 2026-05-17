import { Reveal, SectionTitle } from "./Reveal";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export function Chitrakantha() {
  return (
    <section className="relative py-24 px-5 md:px-8 bg-paper-deep/50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle
            eyebrow="Annual Art Issue"
            title="Chitrakantha"
            lead="Our annual art special issue — a printed gallery of student work, faculty essays, exhibition highlights and the year in colour."
          />
          <Reveal>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <BookOpen className="w-4 h-4" /> Explore the Annual Art Issue
            </a>
            <p className="mt-4 text-xs text-muted-foreground">Editions will be added here by the college admin.</p>
          </Reveal>
        </div>
        <Reveal>
          <div className="relative h-[420px] flex items-center justify-center [perspective:1400px]">
            <motion.div
              animate={{ rotateY: [-12, 12, -12] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 md:w-72 h-[380px] rounded-lg shadow-frame [transform-style:preserve-3d]"
              style={{
                background: "linear-gradient(160deg, var(--maroon), var(--terracotta) 60%, var(--saffron))",
              }}
            >
              <div className="absolute inset-0 p-6 flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] text-paper/80">Annual · Vol XXXVII</span>
                <h3 className="mt-auto font-display text-5xl text-paper leading-none">Chitra<br/>kantha</h3>
                <span className="mt-3 text-xs text-paper/80">Vasai Vikasini's College of Visual Art</span>
              </div>
              <div className="absolute -left-2 inset-y-2 w-2 bg-foreground/30 rounded-l" />
            </motion.div>
            {/* Pages */}
            <div className="absolute right-6 md:right-10 top-12 w-48 h-72 rotate-6 frame-card rounded-md p-4 hidden md:block">
              <div className="h-3 w-1/2 bg-muted rounded mb-2" />
              <div className="h-2 w-full bg-muted rounded mb-1" />
              <div className="h-2 w-5/6 bg-muted rounded mb-1" />
              <div className="h-2 w-4/6 bg-muted rounded mb-4" />
              <div className="h-32 w-full rounded" style={{ background: "linear-gradient(135deg, var(--ultramarine), var(--emerald-art))" }} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
