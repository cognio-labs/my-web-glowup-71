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
    <section id="home" className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden bg-slate-950">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-1000"
        width={1920}
        height={1080}
      />
      
      {/* Deep Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,180,216,0.1),transparent)]" />

      {/* Golden Light Sparkles */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" 
      />
      
      {/* Floating Golden Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0],
            y: [-20, -100],
            x: i % 2 === 0 ? [0, 20] : [0, -20]
          }}
          transition={{ 
            duration: 5 + Math.random() * 5, 
            repeat: Infinity, 
            delay: Math.random() * 5,
            ease: "linear"
          }}
          className="absolute w-1 h-1 bg-gold rounded-full blur-[1px] pointer-events-none"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${70 + Math.random() * 20}%` 
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src={logo} alt="Anandda logo" className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover shadow-2xl border-2 border-gold/30 ring-4 ring-gold/10" />
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl uppercase tracking-[0.4em] text-white/95 font-bold font-display drop-shadow-lg">
                Anan<span className="italic text-gold">d</span>da
              </p>
              <p className="text-sm md:text-base text-gold/80 uppercase tracking-[0.25em] mt-1 font-serif font-medium">
                A Confluence of Pathways to Bliss
              </p>
            </div>
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent font-display tracking-wide drop-shadow-2xl"
        >
          Anan<span className="italic">d</span>da
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-xl md:text-3xl text-gold-light font-serif italic drop-shadow-md"
        >
          A Confluence of Pathways to Bliss
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-sm md:text-lg text-white/80 font-serif max-w-3xl mx-auto leading-relaxed"
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
            className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
        >
            <a href="https://heyzine.com/flip-book/f03b5c07d2.html" target="_blank" rel="noopener noreferrer" className="btn-gold px-10 py-4 text-base">
                READ THE LATEST ISSUE
            </a>
            <a href="https://substack.com/@ananddaofficial" target="_blank" rel="noopener noreferrer" className="btn-outline-gold px-10 py-4 text-base border-white/30 text-white hover:border-gold hover:text-gold">
                SUBSCRIBE TO ANANDDA
            </a>
        </motion.div>

        {/* Archives Section Inlined */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-28"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold tracking-wider uppercase drop-shadow-md">OUR ARCHIVES</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
          <p className="mt-4 text-lg font-serif text-white/60 max-w-2xl mx-auto mb-12">
            Explore every issue with direct flipbook links. The latest six issues are listed here.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {issues.map((issue, index) => (
              <motion.a
                key={issue.title}
                href={issue.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-gold/40 transition-all hover:-translate-y-2 hover:bg-white/10 group text-left"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold/70 font-bold group-hover:text-gold transition-colors">Issue</div>
                <div className="mt-2 text-xl font-bold text-white group-hover:text-gold transition-colors">
                  {issue.title}
                </div>
                <div className="mt-2 text-sm text-white/70 font-serif leading-snug line-clamp-2 min-h-[2.5rem]">
                  {issue.tagline}
                </div>
                <div className="mt-5 text-xs font-bold text-gold/80 uppercase tracking-widest flex items-center gap-2 group-hover:text-gold transition-colors">
                  OPEN FLIPBOOK <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


