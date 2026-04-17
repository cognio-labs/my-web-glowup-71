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
    <section id="archives" className="py-6 md:py-10 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <h2 className="section-heading text-4xl md:text-5xl uppercase tracking-widest">OUR ARCHIVES</h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {issues.map((issue, index) => (
            <motion.a
              key={issue.title}
              href={issue.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-gold/50 via-gold to-gold/50 hover:scale-105 transition-all duration-300"
            >
              <div className="rounded-2xl bg-[#0f172a]/90 backdrop-blur-xl p-4 h-full border border-white/10 shadow-xl flex flex-col justify-between relative z-10 transition-colors group-hover:bg-[#0f172a]/80">
                <div>
                  <div className="text-[10px] tracking-widest text-gold mb-2 font-display font-bold uppercase">
                    ISSUE
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-gold-light transition-colors leading-tight">
                    {issue.title}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-gold font-medium group-hover:gap-3 transition-all text-[10px] tracking-widest uppercase">
                  <span>FLIPBOOK</span>
                  <span className="transform group-hover:translate-x-1 transition text-sm">→</span>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-gold/40 via-gold/60 to-gold/40 transition duration-500 pointer-events-none"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
