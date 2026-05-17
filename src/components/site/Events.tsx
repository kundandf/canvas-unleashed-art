import { Reveal, SectionTitle } from "./Reveal";

const events = [
  "Annual Exhibition", "Annual Day", "Bal Chitrakala Spradha",
  "State Art Competition", "Study Tour", "Monsoon Tour",
  "College Outdoor", "Workshops", "Demonstrations",
  "Teacher's Day", "Women's Self-Defence", "Dahi Handi Celebration",
  "Independence Day", "Republic Day", "Sports Day", "Achievements",
];

const colors = ["var(--saffron)", "var(--ultramarine)", "var(--terracotta)", "var(--emerald-art)", "var(--maroon)", "var(--gold)"];

export function Events() {
  return (
    <section id="events" className="relative py-24 md:py-32 px-5 md:px-8 bg-paper-deep/40">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Events & Culture"
          title="The college year, in moments"
          lead="A continuous calendar of exhibitions, festivals, study tours and competitions — built around community, craft and celebration."
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {events.map((e, i) => (
            <Reveal key={e} delay={(i % 4) * 0.05}>
              <article
                className="relative frame-card rounded-xl p-5 h-44 flex flex-col justify-between overflow-hidden group transition-transform hover:-translate-y-1"
              >
                <div
                  className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full blur-2xl opacity-25 group-hover:opacity-50 transition-opacity"
                  style={{ background: colors[i % colors.length] }}
                />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Annual</div>
                  <h3 className="font-display text-xl mt-1 leading-tight">{e}</h3>
                </div>
                <a href="#gallery" className="text-sm font-medium text-primary self-start">View moments →</a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
