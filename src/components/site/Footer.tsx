export function Footer() {
  return (
    <footer className="relative bg-ink text-paper">
      {/* Paint eruption animation band */}
      <div className="relative w-full overflow-hidden bg-paper" aria-hidden="true">
        <video
          className="block w-full h-[220px] md:h-[340px] lg:h-[420px] object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/site/paint-erupt-bottom.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-paper to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
        <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-14">
          <div className="text-center px-6">
            <p className="font-hand text-2xl md:text-3xl text-primary">A burst of colour, every single day.</p>
            <h3 className="font-display text-3xl md:text-5xl text-foreground mt-1">Step into the studio.</h3>
          </div>
        </div>
      </div>
      <div className="scribble-divider" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-accent text-accent-foreground grid place-items-center font-display text-lg">V</span>
            <div>
              <div className="font-display text-xl">Vasai Vikasini's College of Visual Art</div>
              <div className="text-xs uppercase tracking-[0.2em] text-paper/60 mt-1">Est. 1985 · Recognised by Govt. of Maharashtra</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-paper/70 max-w-md leading-relaxed">
            High-quality art education for everyone — drawing, painting, applied
            art, interior design, animation, VFX, art teaching and foundation
            courses, in the heart of Vasai.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-paper/50 mb-3">Explore</div>
          <ul className="space-y-2 text-sm">
            {["About", "Courses", "Faculty", "Gallery", "Events", "Admission", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="text-paper/80 hover:text-accent">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-paper/50 mb-3">Admission Desk</div>
          <p className="text-sm text-paper/80">+91 89567 40317<br/>+91 85305 82317 (WhatsApp)<br/>vasaivikasinicollege11@gmail.com</p>
          <a href="#admission" className="mt-4 inline-flex px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm">Apply Now</a>
        </div>
      </div>
      <div className="border-t border-paper/10 py-5 text-center text-xs text-paper/60">
        © {new Date().getFullYear()} Vasai Vikasini's College of Visual Art. All rights reserved.
      </div>
    </footer>
  );
}
