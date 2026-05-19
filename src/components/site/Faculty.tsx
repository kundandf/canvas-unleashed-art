import { Reveal, SectionTitle } from "./Reveal";

// Real campus / studio photographs from the official college website are used
// as portrait backgrounds until individual faculty headshots are supplied.
const portraitPool = [
  "/site/gallery-1.jpg",
  "/site/gallery-2.jpg",
  "/site/gallery-3.jpeg",
  "/site/gallery-4.jpeg",
  "/site/gallery-5.jpeg",
  "/site/gallery-6.jpeg",
  "/site/gallery-7.jpeg",
  "/site/gallery-8.jpeg",
  "/site/gallery-9.jpeg",
  "/site/gallery-10.jpeg",
  "/site/gallery-11.jpeg",
  "/site/gallery-12.jpeg",
];

const faculty: { name: string; role: string; img: string }[] = [
  { name: "Dattatraya T. Thombare", role: "Principal", img: portraitPool[0] },
  { name: "Dhanraj B. Khyade", role: "Faculty", img: portraitPool[1] },
  { name: "Vaibhav S. Thakur", role: "Faculty", img: portraitPool[2] },
  { name: "Pravin S. Shinde", role: "Faculty", img: portraitPool[3] },
  { name: "Charlee A. Correia", role: "Faculty", img: portraitPool[4] },
  { name: "Rahul A. Kamble", role: "Faculty", img: portraitPool[5] },
  { name: "Sagar G. Pawar", role: "Faculty", img: portraitPool[6] },
  { name: "Priyadarshani D. Marde", role: "Faculty", img: portraitPool[7] },
  { name: "Varsha S. Gawade", role: "Faculty", img: portraitPool[8] },
  { name: "Siddhi V. Sawant", role: "Faculty", img: portraitPool[9] },
  { name: "Chetan H. Panchal", role: "Faculty", img: portraitPool[10] },
  { name: "Dhruvin P. Soni", role: "Faculty", img: portraitPool[11] },
];

export function Faculty() {
  return (
    <section id="faculty" className="relative py-24 md:py-32 px-5 md:px-8 bg-paper-deep/40">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="The Atelier"
          title="Faculty in the gallery"
          lead="Practising artists, designers and educators who have built their craft over decades — and who teach in our studios every week."
        />

        <Reveal>
          <blockquote className="frame-card rounded-xl p-7 md:p-10 mb-12 relative">
            <span className="tape -top-3 left-10" />
            <p className="font-display italic text-xl md:text-2xl leading-snug text-foreground/85">
              "Vasai Vikasini College of Visual Arts stands out as an ideal
              destination for aspiring fine art students — dedicated teachers,
              a vibrant atmosphere, creative exploration, conceptual artistry,
              collaboration and professional growth."
            </p>
            <footer className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              — Principal's Note
            </footer>
          </blockquote>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {faculty.map((f, i) => (
            <Reveal key={f.name} delay={(i % 4) * 0.06}>
              <div className="group relative frame-card rounded-lg p-3 transition-transform hover:-translate-y-1 hover:shadow-glow">
                <div
                  className="relative aspect-[4/5] w-full rounded-md overflow-hidden"
                  style={{
                    border: "8px solid var(--gold)",
                    boxShadow: "inset 0 0 0 2px var(--paper)",
                  }}
                >
                  <img
                    src={f.img}
                    alt={`${f.name} — ${f.role}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-paper/80 via-transparent to-transparent" />
                </div>
                <div className="mt-3 px-1">
                  <div className="font-display text-base leading-tight">{f.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{f.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground text-center">
          Individual faculty portraits will be swapped in as the college shares them.
        </p>
      </div>
    </section>
  );
}
