import { Reveal, SectionTitle } from "./Reveal";
import { Mail, Phone, MessageCircle, MapPin, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-5 md:px-8 bg-paper-deep/40">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Visit the Studio"
          title="Find us, write to us, drop in"
          lead="Recognised by the Government of Maharashtra. Visit us in Vasai or reach out by phone, WhatsApp or email — we love a good art conversation."
        />

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8">
          <Reveal>
            <div className="frame-card rounded-2xl p-7 md:p-9 paper-tex space-y-6">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center"><MapPin className="w-5 h-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Address</div>
                  <p className="font-display text-lg leading-snug mt-1">
                    Vasai Vikasini Bhavan, Near Vasai Road Railway Station,<br />
                    Vasai Road – East, Dist. Palghar – 401210
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-accent text-accent-foreground grid place-items-center"><Phone className="w-5 h-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Phone</div>
                  <a href="tel:+918956740317" className="font-display text-lg hover:text-primary">+91 89567 40317</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full grid place-items-center text-white" style={{ background: "var(--emerald-art)" }}><MessageCircle className="w-5 h-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">WhatsApp</div>
                  <a href="https://wa.me/918530582317" target="_blank" rel="noreferrer" className="font-display text-lg hover:text-primary">+91 85305 82317</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full grid place-items-center text-white" style={{ background: "var(--ultramarine)" }}><Mail className="w-5 h-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</div>
                  <a href="mailto:vasaivikasinicollege11@gmail.com" className="font-display text-lg hover:text-primary break-all">vasaivikasinicollege11@gmail.com</a>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social" className="w-10 h-10 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground transition">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="frame-card rounded-2xl overflow-hidden h-full min-h-[380px]">
              <iframe
                title="Vasai Vikasini Map"
                src="https://www.google.com/maps?q=Vasai+Road+Railway+Station,+Vasai,+Maharashtra&output=embed"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
