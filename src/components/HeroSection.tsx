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
    <section id="home" className="relative py-12 md:py-20 flex items-center justify-center overflow-hidden bg-slate-900">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />
      
      {/* Premium Deep Purple Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d003d]/60 via-[#1a0f2e]/40 to-[#350066]/60" />
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

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Centered Logo and Heading */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6 md:mb-12 flex flex-col items-center"
        >
          <img 
            src={logo} 
            alt="Anandda logo" 
            className="h-24 w-24 md:h-48 md:w-48 rounded-full object-cover shadow-2xl border-2 border-gold/30 mb-4 md:mb-8" 
          />
          <h1 className="text-4xl md:text-8xl font-bold bg-gradient-to-b from-white via-gold-light to-gold bg-clip-text text-transparent font-display tracking-widest mb-2 md:mb-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] filter brightness-110">
            ANAND<span className="italic">D</span>A
          </h1>
          <p className="text-[10px] md:text-xl text-gold-light uppercase tracking-[0.3em] md:tracking-[0.4em] font-serif font-medium drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]">
            A Confluence of Pathways to Bliss
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 md:mt-6 text-sm md:text-lg text-white/80 font-serif max-w-2xl mx-auto leading-relaxed drop-shadow-md italic"
        >
          In a world that moves faster than ever, Anandda is your pause — a sacred
          confluence where wisdom, art, and awareness meet.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
        >
            <a href="https://heyzine.com/flip-book/f03b5c07d2.html" target="_blank" rel="noopener noreferrer" className="btn-gold px-8 md:px-10 py-3.5 md:py-4 text-xs md:text-sm shadow-2xl hover:shadow-gold/30">
                READ THE LATEST ISSUE
            </a>
            <a href="https://www.magzter.com/IN/Anandda-Magazine/Anandda/Lifestyle/" target="_blank" rel="noopener noreferrer" className="btn-outline-gold px-8 md:px-10 py-3.5 md:py-4 text-xs md:text-sm border-white/20 text-white hover:border-gold hover:text-gold backdrop-blur-md">
                FOLLOW ON MAGZTER
            </a>
            <a href="https://substack.com/@ananddaofficial" target="_blank" rel="noopener noreferrer" className="btn-outline-gold px-8 md:px-10 py-3.5 md:py-4 text-xs md:text-sm border-white/20 text-white hover:border-gold hover:text-gold backdrop-blur-md">
                SUBSCRIBE ON SUBSTACK
            </a>
        </motion.div>
      </div>
    </section>
  );
}
