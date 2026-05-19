import { Reveal, SectionTitle } from "./Reveal";
import { motion } from "framer-motion";

const events: { name: string; img: string }[] = [
  { name: "Annual Exhibition",      img: "/site/event-2.jpeg" },
  { name: "Annual Day",             img: "/site/event-1.jpeg" },
  { name: "Bal Chitrakala Spradha", img: "/site/gallery-4.jpeg" },
  { name: "State Art Competition",  img: "/site/gallery-5.jpeg" },
  { name: "Study Tour",             img: "/site/campus-1.jpg" },
  { name: "Monsoon Tour",           img: "/site/gallery-9.jpeg" },
  { name: "College Outdoor",        img: "/site/gallery-6.jpeg" },
  { name: "Workshops",              img: "/site/gallery-3.jpeg" },
  { name: "Demonstrations",         img: "/site/gallery-10.jpeg" },
  { name: "Teacher's Day",          img: "/site/event-3.jpeg" },
  { name: "Women's Self-Defence",   img: "/site/gallery-7.jpeg" },
  { name: "Dahi Handi Celebration", img: "/site/gallery-8.jpeg" },
  { name: "Independence Day",       img: "/site/event-4.jpeg" },
  { name: "Republic Day",           img: "/site/gallery-11.jpeg" },
  { name: "Sports Day",             img: "/site/gallery-12.jpeg" },
  { name: "Achievements",           img: "/site/student-life.jpeg" },
];

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
            <Reveal key={e.name} delay={(i % 4) * 0.05}>
              <motion.article
                whileHover={{ y: -6 }}
                className="relative rounded-xl overflow-hidden h-56 group shadow-paper"
              >
                <img
                  src={e.img}
                  alt={`${e.name} at Vasai Vikasini College of Visual Art`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-5 text-paper">
                  <div className="text-[10px] uppercase tracking-[0.22em] opacity-80">Annual</div>
                  <h3 className="font-display text-2xl leading-tight mt-1 text-paper">{e.name}</h3>
                  <a href="#gallery" className="mt-2 text-sm font-medium text-paper/90 underline-offset-4 hover:underline self-start">
                    View moments →
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
