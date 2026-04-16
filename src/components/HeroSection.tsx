import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const issues = [
  {
    title: "April 2026",
    tagline: "Water: The Source of Life & Rejuvenation",
    url: "https://heyzine.com/flip-book/f03b5c07d2.html",
  },
  {
    title: "March 2026",
    tagline: "Women of Substance",
    url: "https://heyzine.com/flip-book/cedec35c24.html",
  },
  {
    title: "February 2026",
    tagline: "Mindfulness: Body, Mind, Soul",
    url: "https://heyzine.com/flip-book/02634fdaa6.html",
  },
  {
    title: "January 2026",
    tagline: "Restore, Refresh, Rise in 2026",
    url: "https://heyzine.com/flip-book/9d74cc1623.html",
  },
  {
    title: "December 2025",
    tagline: "Sound Healing for the Body, Mind, and Soul",
    url: "https://heyzine.com/flip-book/07980f1a7d.html",
  },
  {
    title: "November 2025",
    tagline: "Journeys of the Body, Mind, and Soul in Harmony",
    url: "https://heyzine.com/flip-book/bd959516ec.html",
  },
];

export function HeroSection() {
  return (
    <section id="home" className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-white/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src={logo} alt="Anandda logo" className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover shadow-2xl border-2 border-gold/20" />
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl uppercase tracking-[0.4em] text-foreground/90 font-bold font-display">
                Anan<span className="italic text-gold">d</span>da
              </p>
              <p className="text-sm md:text-base text-foreground/70 uppercase tracking-[0.25em] mt-1 font-serif">
                A Confluence of Pathways to Bliss
              </p>
            </div>
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold gold-gradient-text font-display tracking-wide"
        >
          Anan<span className="italic">d</span>da
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-3 text-lg md:text-2xl text-primary font-serif italic"
        >
          A Confluence of Pathways to Bliss
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4 text-sm md:text-base text-foreground/80 font-serif max-w-2xl mx-auto leading-relaxed"
        >
          In a world that moves faster than ever, Anandda is your pause — a sacred
          confluence where wisdom, art, and awareness meet. Born from the heart of
          a seeker, it brings stories that nurture the body, illuminate the mind,
          and awaken the soul.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
            <a href="https://heyzine.com/flip-book/f03b5c07d2.html" target="_blank" rel="noopener noreferrer" className="btn-gold px-8 py-3">
                READ THE LATEST ISSUE
            </a>
            <a href="https://substack.com/@ananddaofficial" target="_blank" rel="noopener noreferrer" className="btn-outline-gold px-8 py-3">
                SUBSCRIBE TO ANANDDA
            </a>
        </motion.div>

        {/* Archives Section Inlined */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary tracking-wider uppercase">OUR ARCHIVES</h2>
          <div className="w-16 h-1 bg-gold/40 mx-auto mt-4" />
          <p className="mt-4 text-lg font-serif text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore every issue with direct flipbook links. The latest six issues are listed here.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {issues.map((issue, index) => (
              <motion.a
                key={issue.title}
                href={issue.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="bg-white/40 backdrop-blur-sm p-5 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-xl text-left"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">Issue</div>
                <div className="mt-2 text-xl font-bold text-primary">
                  {issue.title}
                </div>
                <div className="mt-2 text-sm text-foreground/80 font-serif leading-snug line-clamp-2 min-h-[2.5rem]">
                  {issue.tagline}
                </div>
                <div className="mt-4 text-xs font-bold text-gold uppercase tracking-widest flex items-center gap-1">
                  OPEN FLIPBOOK <span className="text-lg">→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

