import { Reveal, SectionTitle } from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight, X } from "lucide-react";

type Course = {
  title: string;
  tag: string;
  duration: string;
  blurb: string;
  subjects: string[];
  careers?: string[];
  accent: string;
};

const courses: Course[] = [
  {
    title: "Foundation Course",
    tag: "Foundation",
    duration: "1 Year",
    blurb: "The starting canvas — object drawing, perspective, design, sculpture experiments and the history of Indian Art.",
    subjects: ["Object drawing", "Memory drawing", "Design", "Perspective", "Sculpture experiments — paper clay, cardboard, wood block, plaster of Paris, wire, metal sheet, wax, found objects", "Colour — practical & theory", "History of Indian Art — Stone Age, Indus, Mauryan, Kanishka, Gupta, Medieval, Temple, Miniature, Bengal School, Modern artists"],
    accent: "var(--terracotta)",
  },
  {
    title: "Art Teacher Diploma",
    tag: "ATD",
    duration: "2 Years",
    blurb: "Prepares aspiring art educators with methodology, child psychology, curriculum design and full artistic mediums.",
    subjects: ["Memory / imagination drawing", "Object & perspective drawing", "Outdoor study", "Blackboard drawing & calligraphy", "Fundamentals of art", "2D & 3D design", "Colour theory", "Clay, paper & cardboard work", "Indian history, art & culture", "Education, psychology & child art", "Language teaching method", "Micro lesson & project", "Head study, time sketch, still life", "Print making", "Poster design"],
    careers: ["School Art Teacher", "Studio Instructor", "Curriculum Designer"],
    accent: "var(--ultramarine)",
  },
  {
    title: "Diploma in Drawing & Painting",
    tag: "G.D. Art",
    duration: "4 Years",
    blurb: "An intensive fine-art programme covering life drawing, anatomy, painting, print making and art history.",
    subjects: ["Drawing from life", "Memory drawing", "Perspective", "Head study, still life", "2D & 3D design", "Print making", "Outdoor study", "Human anatomy", "Cast drawing", "Painting from life", "Pictorial design", "Landscape", "Western & Indian art history", "Aesthetics", "Portrait painting", "Composition", "Dissertation"],
    careers: ["Professional Artist", "Art Instructor", "Illustrator", "Gallery Curator", "Art Conservator", "Muralist", "Art Director", "Freelance Artist"],
    accent: "var(--maroon)",
  },
  {
    title: "Diploma in Applied Art",
    tag: "Applied",
    duration: "4 Years",
    blurb: "Commercial art, advertising, illustration and visual communication for industry.",
    subjects: ["Lettering & typography", "Advertising design", "Illustration", "Photography basics", "Layout & composition", "Brand identity"],
    careers: ["Graphic Designer", "Art Director", "Visualiser", "Brand Designer"],
    accent: "var(--emerald-art)",
  },
  {
    title: "Diploma in Art Education",
    tag: "DAE",
    duration: "Diploma",
    blurb: "Art pedagogy, foundational practice and classroom craft for school art education.",
    subjects: ["Fundamentals of art", "Teaching methodology", "Curriculum & assessment", "Child art", "Practical mediums"],
    accent: "var(--saffron)",
  },
  {
    title: "Art Master Certificate (A.M.C.)",
    tag: "A.M.C.",
    duration: "Certificate",
    blurb: "For practising art teachers seeking mastery — eligibility: ATD with 3 yrs school teaching OR G.D. Art with 5 yrs.",
    subjects: ["Time sketch", "Head study", "Still life", "Memory drawing", "Functional design", "Pictorial composition", "Theory of education", "History of art"],
    accent: "var(--gold)",
  },
  {
    title: "Diploma in Interior Designing & Decoration",
    tag: "Interior",
    duration: "3 Years",
    blurb: "Advanced diploma covering principles of design, drafting, CAD, lighting, materials and capstone project.",
    subjects: ["Principles of design", "Drawing & drafting", "Materials & finishes", "Colour theory", "History of interior design", "Advanced drafting & rendering", "Space planning & furniture layouts", "Interior lighting", "Textiles & fabrics", "CAD & digital tools", "Residential & commercial design", "Sustainable practices", "Building codes", "Kitchen & bathroom design", "Furniture design", "Advanced 3D modelling", "Acoustics & ergonomics", "Capstone project", "Portfolio review"],
    careers: ["Interior Designer", "Interior Decorator", "Space Planner", "Furniture Designer", "Design Consultant", "Project Manager", "Retail & Commercial Designer"],
    accent: "var(--terracotta)",
  },
  {
    title: "Diploma in Advanced 2D, 3D Animation & VFX",
    tag: "Animation",
    duration: "Diploma",
    blurb: "Industry-oriented animation pipeline — 2D, 3D, motion and visual effects.",
    subjects: ["Drawing for animation", "2D animation", "3D modelling & rigging", "Texturing & lighting", "Motion graphics", "Compositing & VFX"],
    careers: ["2D/3D Animator", "VFX Artist", "Motion Designer", "Game Artist"],
    accent: "var(--ultramarine)",
  },
  {
    title: "Professional Photography Certificate",
    tag: "Photography",
    duration: "Certificate",
    blurb: "Camera craft, lighting, composition, post-production and the photographer's eye.",
    subjects: ["Camera fundamentals", "Lighting", "Composition", "Portrait & product", "Post-production"],
    accent: "var(--ink)",
  },
  {
    title: "Hobby & Job-Oriented Courses",
    tag: "Hobby",
    duration: "Flexible",
    blurb: "Short courses for enthusiasts of every age — sketching, watercolour, calligraphy and more.",
    subjects: ["Sketching", "Watercolour", "Acrylic painting", "Calligraphy", "Pottery", "Mural art"],
    accent: "var(--saffron)",
  },
];

export function Courses() {
  const [open, setOpen] = useState<Course | null>(null);

  return (
    <section id="courses" className="relative py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="The Course Universe"
          title="Ten ways to pick up the brush"
          lead="From the very first sketch to a professional portfolio — every programme is built around real craft, working studios, and faculty who practise what they teach."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.08}>
              <motion.button
                onClick={() => setOpen(c)}
                whileHover={{ y: -6 }}
                className="group relative w-full text-left frame-card rounded-xl p-6 h-full overflow-hidden"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: c.accent }}
                />
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-full"
                    style={{ background: `color-mix(in oklab, ${c.accent} 18%, transparent)`, color: c.accent }}
                  >
                    {c.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{c.duration}</span>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2 leading-tight">{c.title}</h3>
                <p className="text-sm text-foreground/70 line-clamp-3">{c.blurb}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium" style={{ color: c.accent }}>
                  Open portfolio <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-ink/60 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ y: 60, opacity: 0, rotateX: -8 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full md:max-w-2xl max-h-[88vh] overflow-y-auto bg-card rounded-t-2xl md:rounded-2xl shadow-frame"
              style={{ borderTop: `6px solid ${open.accent}` }}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-muted"
                onClick={() => setOpen(null)}
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="p-6 md:p-10">
                <span
                  className="text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-full"
                  style={{ background: `color-mix(in oklab, ${open.accent} 18%, transparent)`, color: open.accent }}
                >
                  {open.tag} · {open.duration}
                </span>
                <h3 className="mt-3 font-display text-3xl md:text-4xl">{open.title}</h3>
                <p className="mt-3 text-foreground/75">{open.blurb}</p>

                <h4 className="mt-7 font-display text-xl">Subjects covered</h4>
                <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-foreground/80">
                  {open.subjects.map((s) => (
                    <li key={s} className="relative pl-4">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full" style={{ background: open.accent }} />
                      {s}
                    </li>
                  ))}
                </ul>

                {open.careers && (
                  <>
                    <h4 className="mt-7 font-display text-xl">Career opportunities</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {open.careers.map((c) => (
                        <span key={c} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                          {c}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                <a
                  href="#admission"
                  onClick={() => setOpen(null)}
                  className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Get Admission <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
