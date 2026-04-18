import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

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

export function ArchiveSection() {
  return (
    <section id="archives" className="relative py-12 md:py-16 px-6 overflow-hidden bg-[#0a001a]">
      {/* Mystical Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-deep-purple/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Floating Particles Effect */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          animate={{
            y: [0, -100],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          className="absolute w-1 h-1 bg-gold/40 rounded-full blur-[1px] pointer-events-none z-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${80 + Math.random() * 20}%`
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gold-light tracking-[0.3em] uppercase mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] filter brightness-110">OUR ARCHIVES</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
          <p className="mt-6 text-slate-400 font-serif italic text-lg max-w-2xl mx-auto">
            Explore our collection of past issues, each a unique journey through wisdom and art.
          </p>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {issues.map((issue, index) => (
            <motion.a
              key={issue.title}
              href={issue.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Outer Glow on Hover */}
              <div className="absolute -inset-1 rounded-[22px] bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              
              <div className="relative h-44 md:h-48 rounded-[20px] bg-gradient-to-br from-[#2a0f4a]/60 via-[#1a0f2e]/80 to-[#3d0f5e]/60 backdrop-blur-xl border border-white/10 p-7 flex flex-row items-center justify-between transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.03] group-hover:border-gold/30 shadow-2xl overflow-hidden">
                {/* Subtle Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10 flex flex-col justify-center text-left">
                  <span className="text-[10px] md:text-[11px] font-display font-bold tracking-[0.4em] text-white/40 uppercase mb-3">
                    ISSUE
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-extrabold text-white group-hover:text-gold-light transition-all duration-300 leading-tight">
                    {issue.title}
                  </h3>
                  <div className="mt-2 w-8 h-[1px] bg-gold/30 group-hover:w-16 transition-all duration-500" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gold-light font-display font-bold text-[10px] tracking-widest uppercase transition-all duration-300 group-hover:bg-gold group-hover:text-black group-hover:border-gold group-hover:scale-105 shadow-lg">
                    <span>FLIPBOOK</span>
                    <span className="text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>

                {/* Card Sparkle Effect */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
