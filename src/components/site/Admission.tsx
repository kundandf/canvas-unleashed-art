import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SectionTitle } from "./Reveal";
import { Send, CheckCircle2 } from "lucide-react";

const COURSES = [
  "Foundation Course",
  "Art Teacher Diploma",
  "Diploma in Drawing & Painting",
  "Diploma in Art Education",
  "Diploma in Applied Art",
  "Art Master Certificate Course (A.M.C.)",
  "Diploma in Interior Designing and Decoration",
  "Diploma in Advanced 2D, 3D Animation & VFX",
];
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const TIMES = ["Morning", "Mid-morning", "Afternoon", "Mid-afternoon", "Evening"];

const inputClass = "w-full bg-transparent border-0 border-b-2 border-border focus:border-primary focus:outline-none py-2 text-foreground placeholder:text-muted-foreground/60";

export function Admission() {
  const [sent, setSent] = useState(false);
  const [days, setDays] = useState<string[]>([]);
  const [times, setTimes] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggle = (arr: string[], v: string, set: (v: string[]) => void) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    const get = (k: string) => (fd.get(k) as string || "").trim();
    if (!get("first") || get("first").length > 80) errs.first = "Please enter your first name";
    if (!get("last") || get("last").length > 80) errs.last = "Please enter your last name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email"))) errs.email = "Valid email required";
    if (!/^[+\d\s\-()]{7,20}$/.test(get("phone"))) errs.phone = "Valid phone number required";
    if (!get("course")) errs.course = "Choose a course";
    if (get("comment").length > 1000) errs.comment = "Message too long";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  return (
    <section id="admission" className="relative py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Admission Open"
          title="Begin your creative journey"
          lead="Tell us a little about yourself and the course you're drawn to. Our admission desk will get in touch on the days and times you prefer."
        />

        <Reveal>
          <div className="relative frame-card rounded-2xl p-6 md:p-10 paper-tex">
            <span className="tape -top-3 left-12" />
            <span className="tape -top-3 right-12" />

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <CheckCircle2 className="w-14 h-14 mx-auto text-emerald-art" style={{ color: "var(--emerald-art)" }} />
                  <h3 className="font-display text-3xl mt-4">Your enquiry is on its way ✈️</h3>
                  <p className="mt-2 text-foreground/70">We will be in touch shortly. Meanwhile, you can call or WhatsApp us anytime.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid md:grid-cols-2 gap-x-10 gap-y-6"
                >
                  <div>
                    <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">First Name</label>
                    <input name="first" className={inputClass} placeholder="e.g. Aarav" />
                    {errors.first && <p className="text-xs text-destructive mt-1">{errors.first}</p>}
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Last Name</label>
                    <input name="last" className={inputClass} placeholder="e.g. Patil" />
                    {errors.last && <p className="text-xs text-destructive mt-1">{errors.last}</p>}
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</label>
                    <input name="email" type="email" className={inputClass} placeholder="you@example.com" />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Phone Number</label>
                    <input name="phone" className={inputClass} placeholder="+91" />
                    {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Select Course</label>
                    <select name="course" className={inputClass} defaultValue="">
                      <option value="" disabled>— Choose a programme —</option>
                      {COURSES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    {errors.course && <p className="text-xs text-destructive mt-1">{errors.course}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Best Days to Meet</div>
                    <div className="flex flex-wrap gap-2">
                      {DAYS.map((d) => (
                        <button
                          type="button"
                          key={d}
                          onClick={() => toggle(days, d, setDays)}
                          className={`px-3 py-1.5 rounded-full text-sm border transition ${
                            days.includes(d)
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-card border-border text-foreground/75 hover:bg-secondary"
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Best Times to Meet</div>
                    <div className="flex flex-wrap gap-2">
                      {TIMES.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => toggle(times, t, setTimes)}
                          className={`px-3 py-1.5 rounded-full text-sm border transition ${
                            times.includes(t)
                              ? "bg-accent text-accent-foreground border-accent"
                              : "bg-card border-border text-foreground/75 hover:bg-secondary"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Comment or Message</label>
                    <textarea name="comment" rows={4} maxLength={1000} className={`${inputClass} resize-none`} placeholder="Tell us about your interest in art…" />
                    {errors.comment && <p className="text-xs text-destructive mt-1">{errors.comment}</p>}
                  </div>

                  <div className="md:col-span-2 flex items-center justify-between gap-3 flex-wrap">
                    <p className="text-xs text-muted-foreground max-w-md">By submitting, you agree to be contacted by the admission desk. Information is used only for admission enquiries.</p>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition shadow-paper"
                    >
                      <Send className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      Submit Application
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
