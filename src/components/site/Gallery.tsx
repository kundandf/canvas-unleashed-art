import { Reveal, SectionTitle } from "./Reveal";
import { useState } from "react";
import { motion } from "framer-motion";

const filters = ["All", "Painting", "Print Making", "Outdoor", "Interior", "Events", "Workshops", "Annual Exhibition", "Student Life"];

// Curated swatches that stand in for the photo gallery until real images are uploaded.
const palette = [
  "linear-gradient(135deg, var(--saffron), var(--terracotta))",
  "linear-gradient(135deg, var(--ultramarine), var(--emerald-art))",
  "linear-gradient(135deg, var(--maroon), var(--gold))",
  "linear-gradient(135deg, var(--emerald-art), var(--saffron))",
  "linear-gradient(135deg, var(--terracotta), var(--maroon))",
  "linear-gradient(135deg, var(--gold), var(--terracotta))",
  "linear-gradient(135deg, var(--ultramarine), var(--maroon))",
  "linear-gradient(135deg, var(--saffron), var(--emerald-art))",
];

const items = [
  { cat: "Painting", label: "Still Life Study" },
  { cat: "Outdoor", label: "Vasai Fort Landscape" },
  { cat: "Print Making", label: "Linocut Print" },
  { cat: "Workshops", label: "Watercolour Workshop" },
  { cat: "Events", label: "Annual Day" },
  { cat: "Student Life", label: "Studio Morning" },
  { cat: "Interior", label: "Space Planning Project" },
  { cat: "Annual Exhibition", label: "Exhibition Hall" },
  { cat: "Painting", label: "Portrait Composition" },
  { cat: "Outdoor", label: "Monsoon Sketching Tour" },
  { cat: "Workshops", label: "Clay Sculpture Demo" },
  { cat: "Student Life", label: "Critique Session" },
];

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {visible.map((it, i) => (
            <motion.figure
              key={`${it.label}-${i}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.04, duration: 0.5 }}
              whileHover={{ y: -6, rotate: i % 2 ? 1.5 : -1.5 }}
              className="relative frame-card rounded-lg p-2"
            >
              <span className="tape -top-2 left-1/2 -translate-x-1/2" />
              <div
                className={`aspect-[4/5] rounded-md ${i % 5 === 0 ? "md:aspect-[4/6]" : ""}`}
                style={{ background: palette[i % palette.length] }}
              />
              <figcaption className="px-1 pt-2 pb-1">
                <div className="font-hand text-base text-foreground">{it.label}</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{it.cat}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground text-center">
          Real photographs from Happy Moments, exhibitions and workshops will appear here once uploaded by the college admin.
        </p>
      </div>
    </section>
  );
}
