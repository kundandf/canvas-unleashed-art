import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#faculty", label: "Faculty" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Events" },
  { href: "#admission", label: "Admission" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn(); window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-paper/70 border-b border-border shadow-paper"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-lg shadow-paper">V</span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-base md:text-lg text-foreground">Vasai Vikasini</span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-muted-foreground">College of Visual Art</span>
            </span>
          </a>
          <ul className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-foreground/80 hover:text-primary transition-colors relative group">
                  {l.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-accent transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="#admission"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition shadow-paper"
            >
              Apply Now
            </a>
            <button
              aria-label="Open menu"
              className="lg:hidden p-2 rounded-md hover:bg-secondary"
              onClick={() => setOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] paper-tex flex flex-col"
            initial={{ clipPath: "circle(0% at 95% 5%)" }}
            animate={{ clipPath: "circle(150% at 95% 5%)" }}
            exit={{ clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex justify-between items-center px-5 h-16 border-b border-border">
              <span className="font-display text-xl">Menu</span>
              <button aria-label="Close" onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-secondary">
                <X className="w-5 h-5" />
              </button>
            </div>
            <ul className="flex-1 flex flex-col items-center justify-center gap-5">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.05 } }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-foreground hover:text-primary"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <a
                href="#admission"
                onClick={() => setOpen(false)}
                className="mt-6 px-6 py-3 rounded-full bg-primary text-primary-foreground"
              >
                Apply Now
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
