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

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
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
              className="bg-white/40 backdrop-blur-md p-4 rounded-xl border border-gold/10 hover:border-gold/60 transition-all hover:-translate-y-2 hover:bg-white/60 group text-left flex flex-col justify-between h-full shadow-sm"
            >
              <div>
                <div className="text-[8px] uppercase tracking-[0.2em] text-gold/80 font-bold group-hover:text-gold transition-colors">Issue</div>
                <div className="mt-1 text-sm font-bold text-deep-purple group-hover:text-royal-purple transition-colors leading-tight">
                  {issue.title}
                </div>
              </div>
              <div className="mt-4 text-[9px] font-bold text-gold uppercase tracking-widest flex items-center justify-between group-hover:text-gold-light transition-all">
                <span>FLIPBOOK</span>
                <span className="text-xs">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
