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
    <section id="home" className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden bg-slate-900">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />
      
      {/* Lighter Blue/Purple Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001d3d]/60 via-[#1a0f2e]/40 to-[#003566]/60" />
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
      
      {/* Shimmering Golden Lines background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "100%", opacity: [0, 0.4, 0] }}
            transition={{ 
                duration: 4 + i, 
                repeat: Infinity, 
                delay: i * 1.5,
                ease: "easeInOut" 
            }}
            className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent absolute"
            style={{ top: `${20 + i * 15}%` }}
          />
        ))}
      </div>

      {/* Enhanced Golden Light Flares */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gold/15 rounded-full blur-[100px] pointer-events-none" 
      />

      {/* Floating Sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [-10, -100],
          }}
          transition={{ 
            duration: 3 + Math.random() * 4, 
            repeat: Infinity, 
            delay: Math.random() * 5,
            ease: "easeOut"
          }}
          className="absolute w-1 h-1 bg-gold rounded-full shadow-[0_0_8px_rgba(212,175,55,1)] pointer-events-none"
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${50 + Math.random() * 40}%` 
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-10 flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src={logo} alt="Anandda logo" className="h-20 w-20 md:h-28 md:w-28 rounded-full object-cover shadow-2xl border-2 border-gold/40 ring-4 ring-gold/10" />
            <div className="text-center md:text-left">
              <div className="flex items-center justify-between gap-4 mb-2">
                <p className="text-xl md:text-2xl uppercase tracking-[0.4em] text-white/95 font-bold font-display drop-shadow-xl">
                  Anan<span className="italic text-gold">d</span>da
                </p>
                <div className="flex items-center gap-3">
                  <a href="https://www.instagram.com/ananddaofficial" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/ananddabliss" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
              <p className="text-xs md:text-sm text-gold/90 uppercase tracking-[0.25em] font-serif font-medium drop-shadow-md">
                A Confluence of Pathways to Bliss!
              </p>
            </div>
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent font-display tracking-wide drop-shadow-2xl"
        >
          Anan<span className="italic">d</span>da
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg md:text-2xl text-gold-light font-serif italic drop-shadow-md"
        >
          A Confluence of Pathways to Bliss
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4 text-xs md:text-base text-white/90 font-serif max-w-2xl mx-auto leading-relaxed drop-shadow-md"
        >
          In a world that moves faster than ever, Anandda is your pause — a sacred
          confluence where wisdom, art, and awareness meet.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
            <a href="https://heyzine.com/flip-book/f03b5c07d2.html" target="_blank" rel="noopener noreferrer" className="btn-gold px-8 py-3 text-sm shadow-xl hover:shadow-gold/20">
                READ THE LATEST ISSUE
            </a>
            <a href="https://www.magzter.com/IN/Anandda-Magazine/Anandda/Lifestyle/" target="_blank" rel="noopener noreferrer" className="btn-outline-gold px-8 py-3 text-sm border-white/40 text-white hover:border-gold hover:text-gold backdrop-blur-sm">
                FOLLOW ON MAGZTER
            </a>
            <a href="https://substack.com/@ananddaofficial" target="_blank" rel="noopener noreferrer" className="btn-outline-gold px-8 py-3 text-sm border-white/40 text-white hover:border-gold hover:text-gold backdrop-blur-sm">
                SUBSCRIBE ON SUBSTACK
            </a>
        </motion.div>

        {/* Archives Section Inlined */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gold tracking-wider uppercase drop-shadow-xl">OUR ARCHIVES</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-3" />
          <p className="mt-3 text-sm font-serif text-white/80 max-w-2xl mx-auto mb-10 drop-shadow-md">
            Explore every issue with direct flipbook links.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-6xl mx-auto">
            {issues.map((issue, index) => (
              <motion.a
                key={issue.title}
                href={issue.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-gold/50 transition-all hover:-translate-y-1 hover:bg-white/15 group text-left shadow-lg"
              >
                <div className="text-[9px] uppercase tracking-[0.2em] text-gold/80 font-bold group-hover:text-gold transition-colors">Issue</div>
                <div className="mt-2 text-lg font-bold text-white group-hover:text-gold transition-colors leading-tight">
                  {issue.title}
                </div>
                <div className="mt-1 text-xs text-white/70 font-serif leading-snug line-clamp-1 min-h-[1rem]">
                  {issue.tagline}
                </div>
                <div className="mt-4 text-[10px] font-bold text-gold uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                  OPEN FLIPBOOK <span className="text-sm">→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}



