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
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
            <a href="https://heyzine.com/flip-book/f03b5c07d2.html" target="_blank" rel="noopener noreferrer" className="btn-gold px-10 py-4 text-sm shadow-2xl hover:shadow-gold/30">
                READ THE LATEST ISSUE
            </a>
            <a href="https://www.magzter.com/IN/Anandda-Magazine/Anandda/Lifestyle/" target="_blank" rel="noopener noreferrer" className="btn-outline-gold px-10 py-4 text-sm border-white/20 text-white hover:border-gold hover:text-gold backdrop-blur-md">
                FOLLOW ON MAGZTER
            </a>
            <a href="https://substack.com/@ananddaofficial" target="_blank" rel="noopener noreferrer" className="btn-outline-gold px-10 py-4 text-sm border-white/20 text-white hover:border-gold hover:text-gold backdrop-blur-md">
                SUBSCRIBE ON SUBSTACK
            </a>
        </motion.div>

        {/* Archives Section - Redesigned to Premium Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-32 relative py-20 px-4 rounded-[40px] overflow-hidden bg-gradient-to-br from-[#1d003d] to-[#001d3d] border border-white/5 shadow-2xl"
        >
          {/* Section Sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                animate={{ 
                  opacity: [0, 0.4, 0],
                  scale: [0.5, 1, 0.5],
                  y: [0, -40] 
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2, 
                  repeat: Infinity, 
                  delay: Math.random() * 3 
                }}
                className="absolute w-1 h-1 bg-gold/60 rounded-full"
                style={{ 
                  left: `${Math.random() * 100}%`, 
                  top: `${Math.random() * 100}%` 
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl font-display font-bold text-gold/90 tracking-[0.3em] uppercase mb-1 drop-shadow-lg">OUR ARCHIVES</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-16 opacity-60" />

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {issues.map((issue, index) => (
                <motion.a
                  key={issue.title}
                  href={issue.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative block aspect-square rounded-[20px] bg-white/5 backdrop-blur-md border border-white/10 p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-gold/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] overflow-hidden"
                >
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Label */}
                  <div className="text-[11px] tracking-[0.4em] text-gold/70 mb-4 font-display font-bold uppercase transition-colors group-hover:text-gold">
                    ISSUE
                  </div>
                  
                  {/* Title */}
                  <div className="text-2xl md:text-3xl font-bold text-white mb-8 font-serif transition-transform duration-300 group-hover:scale-110">
                    {issue.title}
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center gap-2 text-gold font-medium text-xs tracking-widest uppercase transition-all">
                    <span className="border-b border-gold/30 pb-1 group-hover:border-gold">FLIPBOOK</span>
                    <motion.span 
                      animate={ { x: [0, 5, 0] } }
                      transition={ { duration: 1.5, repeat: Infinity, ease: "easeInOut" } }
                      className="text-lg"
                    >
                      →
                    </motion.span>
                  </div>

                  {/* Active Card Highlight (Border glow) */}
                  <div className="absolute inset-0 rounded-[20px] ring-1 ring-gold/0 group-hover:ring-gold/30 transition-all duration-500" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
