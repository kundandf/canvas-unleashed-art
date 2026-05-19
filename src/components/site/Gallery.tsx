import { Reveal, SectionTitle } from "./Reveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const filters = ["All", "Painting", "Print Making", "Outdoor", "Interior", "Events", "Workshops", "Annual Exhibition", "Student Life"];

type Item = { cat: string; label: string; img: string; anim: "rise" | "tilt" | "zoom" | "flip" | "drift" };

const items: Item[] = [
  { cat: "Painting", label: "Still Life Study", img: "/site/painting.jpg", anim: "rise" },
  { cat: "Outdoor", label: "Vasai Fort Landscape", img: "/site/campus-1.jpg", anim: "drift" },
  { cat: "Print Making", label: "Linocut Print", img: "/site/gallery-5.jpeg", anim: "flip" },
  { cat: "Workshops", label: "Watercolour Workshop", img: "/site/gallery-3.jpeg", anim: "zoom" },
  { cat: "Events", label: "Annual Day", img: "/site/event-1.jpeg", anim: "rise" },
  { cat: "Student Life", label: "Studio Morning", img: "/site/student-life.jpeg", anim: "tilt" },
  { cat: "Interior", label: "Space Planning Project", img: "/site/interior.jpg", anim: "rise" },
  { cat: "Annual Exhibition", label: "Exhibition Hall", img: "/site/event-2.jpeg", anim: "zoom" },
  { cat: "Painting", label: "Portrait Composition", img: "/site/gallery-7.jpeg", anim: "tilt" },
  { cat: "Outdoor", label: "Monsoon Sketching Tour", img: "/site/gallery-9.jpeg", anim: "drift" },
  { cat: "Workshops", label: "Clay Sculpture Demo", img: "/site/gallery-10.jpeg", anim: "flip" },
  { cat: "Student Life", label: "Critique Session", img: "/site/gallery-11.jpeg", anim: "tilt" },
  { cat: "Print Making", label: "Studio Print Press", img: "/site/applied-art.jpg", anim: "rise" },
  { cat: "Annual Exhibition", label: "Visitors Walkthrough", img: "/site/event-3.jpeg", anim: "zoom" },
  { cat: "Events", label: "Annual Celebration", img: "/site/event-4.jpeg", anim: "rise" },
  { cat: "Interior", label: "Design Studio Day", img: "/site/gallery-6.jpeg", anim: "tilt" },
];

const animVariants = {
  rise:  { initial: { opacity: 0, y: 40 },                animate: { opacity: 1, y: 0 } },
  tilt:  { initial: { opacity: 0, rotate: -6, y: 20 },    animate: { opacity: 1, rotate: 0, y: 0 } },
  zoom:  { initial: { opacity: 0, scale: 0.85 },          animate: { opacity: 1, scale: 1 } },
  flip:  { initial: { opacity: 0, rotateY: 90 },          animate: { opacity: 1, rotateY: 0 } },
  drift: { initial: { opacity: 0, x: -30 },               animate: { opacity: 1, x: 0 } },
} as const;

export function Gallery() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="gallery" className="relative py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Happy Moments"
          title="A walk through our gallery"
          lead="Snapshots from studios, exhibitions, outdoor study tours and the everyday life of art at Vasai Vikasini."
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-sm border transition ${
                active === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border text-foreground/75 hover:bg-secondary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
          >
            {visible.map((it, i) => {
              const v = animVariants[it.anim];
              return (
                <motion.figure
                  key={`${active}-${it.label}-${i}`}
                  layout
                  initial={v.initial}
                  whileInView={v.animate}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: (i % 8) * 0.06, duration: 0.7, ease: [0.22,1,0.36,1] }}
                  whileHover={{ y: -6, rotate: i % 2 ? 1.5 : -1.5, scale: 1.02 }}
                  className="relative frame-card rounded-lg p-2 group"
                >
                  <span className="tape -top-2 left-1/2 -translate-x-1/2" />
                  <div className={`relative overflow-hidden rounded-md ${i % 5 === 0 ? "aspect-[4/5] md:aspect-[4/6]" : "aspect-[4/5]"}`}>
                    <img
                      src={it.img}
                      alt={`${it.label} — ${it.cat} at Vasai Vikasini`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <figcaption className="px-1 pt-2 pb-1">
                    <div className="font-hand text-base text-foreground">{it.label}</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{it.cat}</div>
                  </figcaption>
                </motion.figure>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
