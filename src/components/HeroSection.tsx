import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg-fixed.png";
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
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      
      {/* Deep Blue/Purple Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000814]/70 via-[#1a0f2e]/60 to-[#001d3d]/70" />
      
      {/* Enhanced Golden Light Flares centered on the water ripple */}
      <motion.div 
        animate={{ 
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" 
      />

      {/* Floating Golden Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{ 
            opacity: [0, 0.7, 0],
            y: [-20, -150],
            x: i % 2 === 0 ? [0, 30] : [0, -30]
          }}
          transition={{ 
            duration: 6 + Math.random() * 6, 
            repeat: Infinity, 
            delay: Math.random() * 6,
            ease: "easeOut"
          }}
          className="absolute w-1.5 h-1.5 bg-gold rounded-full blur-[1px] pointer-events-none"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${60 + Math.random() * 30}%` 
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-14 flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src={logo} alt="Anandda logo" className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover shadow-2xl border-2 border-gold/40 ring-4 ring-gold/10" />
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl uppercase tracking-[0.4em] text-white/95 font-bold font-display drop-shadow-xl">
                Anan<span className="italic text-gold">d</span>da
              </p>
              <p className="text-sm md:text-base text-gold/90 uppercase tracking-[0.25em] mt-1 font-serif font-medium drop-shadow-md">
                A Confluence of Pathways to Bliss
              </p>
            </div>
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent font-display tracking-wide drop-shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
        >
          Anan<span className="italic">d</span>da
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-xl md:text-3xl text-gold-light font-serif italic drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
        >
          A Confluence of Pathways to Bliss
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-sm md:text-lg text-white/90 font-serif max-w-3xl mx-auto leading-relaxed drop-shadow-md"
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
            className="mt-12 flex flex-col sm:flex-row gap-5 justify-center"
        >
            <a href="https://heyzine.com/flip-book/f03b5c07d2.html" target="_blank" rel="noopener noreferrer" className="btn-gold px-10 py-4 text-base shadow-xl hover:shadow-gold/20">
                READ THE LATEST ISSUE
            </a>
            <a href="https://substack.com/@ananddaofficial" target="_blank" rel="noopener noreferrer" className="btn-outline-gold px-10 py-4 text-base border-white/40 text-white hover:border-gold hover:text-gold backdrop-blur-sm">
                SUBSCRIBE TO ANANDDA
            </a>
        </motion.div>

        {/* Archives Section Inlined */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-32"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold tracking-wider uppercase drop-shadow-xl">OUR ARCHIVES</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-5" />
          <p className="mt-5 text-lg font-serif text-white/80 max-w-2xl mx-auto mb-14 drop-shadow-md">
            Explore every issue with direct flipbook links. The latest six issues are listed here.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {issues.map((issue, index) => (
              <motion.a
                key={issue.title}
                href={issue.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="bg-black/20 backdrop-blur-xl p-7 rounded-3xl border border-white/10 hover:border-gold/50 transition-all hover:-translate-y-2 hover:bg-black/30 group text-left shadow-lg"
              >
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold/80 font-bold group-hover:text-gold transition-colors">Issue</div>
                <div className="mt-3 text-2xl font-bold text-white group-hover:text-gold transition-colors">
                  {issue.title}
                </div>
                <div className="mt-2 text-sm text-white/80 font-serif leading-relaxed line-clamp-2 min-h-[3rem]">
                  {issue.tagline}
                </div>
                <div className="mt-6 text-xs font-bold text-gold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
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



