import { Reveal, SectionTitle } from "./Reveal";
import { motion } from "framer-motion";

const timeline = [
  ["1985", "Vasai Vikasini's College of Visual Art is founded with a mission to bring fine-art education to every aspiring student."],
  ["1995", "Government of Maharashtra recognition strengthens diploma programmes and subsidised access."],
  ["2005", "Students begin sweeping state-level competitions; merit-list rankings become an annual tradition."],
  ["2015", "Launch of Chitrakantha — the college's annual art special issue celebrating student work."],
  ["Today", "A living studio of 10+ specialised courses, exhibitions, study tours, seminars, and demonstrations."],
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Our Legacy"
          title="A studio that has shaped artists for 35+ years"
          lead="Since 1985, Vasai Vikasini's College of Visual Art has been a government-recognised home for drawing, painting, design and visual culture — blending traditional craft with business-oriented, professional art education."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <Reveal>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                Our subsidised, government-approved courses make high-quality art
                education accessible to everyone. From foundation to advanced
                diploma, every programme is structured to nurture imagination
                while building real, employable craft.
              </p>
              <p>
                The college runs annual art exhibitions, children's art
                competitions, state-level landscape painting, sand sculpture and
                portrait painting competitions, the Rangdhara annual
                get-together, study tours, seminars, lectures and demonstrations.
              </p>
              <p className="font-hand text-2xl text-primary">
                "Nineteen of our students have ranked first in the state."
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ol className="relative border-l-2 border-dashed border-primary/40 pl-8 space-y-8">
              {timeline.map(([year, body], i) => (
                <motion.li
                  key={year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative"
                >
                  <span className="absolute -left-[42px] top-1 w-5 h-5 rounded-full bg-accent border-4 border-paper shadow-paper" />
                  <div className="frame-card relative rounded-lg p-5">
                    <span className="tape -top-3 left-6" />
                    <div className="font-display text-2xl text-primary">{year}</div>
                    <p className="mt-2 text-sm text-foreground/75">{body}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
