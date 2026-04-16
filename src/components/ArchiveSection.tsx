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
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-8"
        >
          <h2 className="section-heading text-4xl md:text-5xl">OUR ARCHIVES</h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="mt-4 text-xl font-serif text-foreground/80 leading-relaxed">
            Explore every issue with direct flipbook links. The latest six issues are listed here, and new editions will be added as they release.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {issues.map((issue, index) => (
            <motion.a
              key={issue.title}
              href={issue.url}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.05 } },
              }}
              className="glass-card p-6 rounded-3xl border border-primary/10 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Issue</div>
              <div className="mt-3 text-2xl font-bold" style={{ color: "var(--deep-purple)" }}>
                {issue.title}
              </div>
              <div className="mt-2 text-lg text-foreground/85 font-serif leading-relaxed">
                {issue.tagline}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase text-primary">
                Open Flipbook <span aria-hidden="true">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
