import { Reveal, SectionTitle } from "./Reveal";

const faculty = [
  ["Dattatraya T. Thombare", "Principal"],
  ["Dhanraj B. Khyade", "Faculty"],
  ["Vaibhav S. Thakur", "Faculty"],
  ["Pravin S. Shinde", "Faculty"],
  ["Charlee A. Correia", "Faculty"],
  ["Rahul A. Kamble", "Faculty"],
  ["Sagar G. Pawar", "Faculty"],
  ["Priyadarshani D. Marde", "Faculty"],
  ["Varsha S. Gawade", "Faculty"],
  ["Siddhi V. Sawant", "Faculty"],
  ["Chetan H. Panchal", "Faculty"],
  ["Dhruvin P. Soni", "Faculty"],
];

function Initials({ name }: { name: string }) {
  const parts = name.split(" ");
  const i = (parts[0]?.[0] || "") + (parts[parts.length - 1]?.[0] || "");
  return <span>{i.toUpperCase()}</span>;
}

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
          {faculty.map(([name, role], i) => (
            <Reveal key={name} delay={(i % 4) * 0.06}>
              <div className="group relative frame-card rounded-lg p-3 transition-transform hover:-translate-y-1 hover:shadow-glow">
                <div
                  className="aspect-[4/5] w-full rounded-md grid place-items-center font-display text-5xl text-primary/70"
                  style={{
                    background:
                      "repeating-linear-gradient(45deg, oklch(0.92 0.04 70), oklch(0.92 0.04 70) 6px, oklch(0.95 0.03 75) 6px, oklch(0.95 0.03 75) 12px)",
                    border: "8px solid var(--gold)",
                    boxShadow: "inset 0 0 0 2px var(--paper)",
                  }}
                >
                  <Initials name={name} />
                </div>
                <div className="mt-3 px-1">
                  <div className="font-display text-base leading-tight">{name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground text-center">
          Faculty portraits will be updated by the college admin.
        </p>
      </div>
    </section>
  );
}
