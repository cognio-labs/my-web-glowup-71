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
    <section id="home" className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden bg-[#1f1f2e]">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
      />
      
      {/* Premium Deep Purple Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d003d]/40 via-[#1a0f2e]/30 to-[#350066]/40" />
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />

      {/* ... (Golden Lines and Sparkles code remains same) ... */}

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main Centered Logo and Heading */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-12 flex flex-col items-center"
        >
          <img 
            src={logo} 
            alt="Anandda logo" 
            className="h-32 w-32 md:h-48 md:w-48 rounded-full object-cover shadow-[0_0_50px_rgba(164,136,70,0.3)] border-2 border-gold/50 ring-8 ring-gold/5 mb-8" 
          />
          <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-b from-white via-gold-light to-gold bg-clip-text text-transparent font-display tracking-widest drop-shadow-2xl mb-4">
            ANAN<span className="italic">D</span>DA
          </h1>
          <p className="text-sm md:text-xl text-gold/90 uppercase tracking-[0.4em] font-serif font-medium drop-shadow-md">
            A Confluence of Pathways to Bliss
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-base md:text-lg text-white/80 font-serif max-w-2xl mx-auto leading-relaxed drop-shadow-md italic"
        >
          In a world that moves faster than ever, Anandda is your pause — a sacred
          confluence where wisdom, art, and awareness meet.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-6 justify-center"
        >
            <a href="https://heyzine.com/flip-book/f03b5c07d2.html" target="_blank" rel="noopener noreferrer" className="neumorphic-btn flex items-center justify-center">
                READ THE LATEST ISSUE
            </a>
            <a href="https://www.magzter.com/IN/Anandda-Magazine/Anandda/Lifestyle/" target="_blank" rel="noopener noreferrer" className="neumorphic-btn flex items-center justify-center opacity-90">
                FOLLOW ON MAGZTER
            </a>
            <a href="https://substack.com/@ananddaofficial" target="_blank" rel="noopener noreferrer" className="neumorphic-btn flex items-center justify-center opacity-90">
                SUBSCRIBE ON SUBSTACK
            </a>
        </motion.div>

        {/* Archives Section Inlined - Now Neumorphic */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-24"
        >
          <h2 className="text-xl md:text-2xl font-display font-bold text-gold/80 tracking-widest uppercase mb-2">OUR ARCHIVES</h2>
          <div className="w-12 h-0.5 bg-gold/40 mx-auto mb-10" />

          <div className="archive-container max-w-7xl mx-auto px-4">
            {issues.map((issue, index) => (
              <motion.a
                key={issue.title}
                href={issue.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.1 + index * 0.08 }}
                className="neumorphic-card group block relative"
              >
                <div className="flex flex-col h-full justify-between items-center text-center">
                  <div>
                    <div className="text-[10px] tracking-widest text-gold mb-3 font-display font-bold uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                      ISSUE
                    </div>
                    <div className="text-base font-bold text-white group-hover:text-gold-light transition-colors leading-tight">
                      {issue.title}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 w-full flex items-center justify-center text-gold font-medium group-hover:gap-3 transition-all text-[10px] tracking-widest uppercase">
                    <span>FLIPBOOK</span>
                    <span className="transform group-hover:translate-x-1 transition text-sm">→</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
