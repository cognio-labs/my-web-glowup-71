import { motion } from "framer-motion";

const issues = [
  { title: "April 2026", url: "https://heyzine.com/flip-book/f03b5c07d2.html" },
  { title: "March 2026", url: "https://heyzine.com/flip-book/cedec35c24.html" },
  { title: "February 2026", url: "https://heyzine.com/flip-book/02634fdaa6.html" },
  { title: "January 2026", url: "https://heyzine.com/flip-book/9d74cc1623.html" },
  { title: "December 2025", url: "https://heyzine.com/flip-book/07980f1a7d.html" },
  { title: "November 2025", url: "https://heyzine.com/flip-book/bd959516ec.html" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function ArchiveSection() {
  return (
    <section
      id="archives"
      className="relative isolate overflow-hidden bg-[#070014] px-6 py-14 md:py-20"
    >
      {/* Mystical background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(210,170,65,0.20),rgba(210,170,65,0)_62%)] blur-2xl" />
        <div className="absolute -left-24 top-1/3 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,60,220,0.28),rgba(120,60,220,0)_60%)] blur-3xl" />
        <div className="absolute -right-40 bottom-[-120px] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle_at_center,rgba(210,170,65,0.10),rgba(210,170,65,0)_66%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_50%)]" />
      </div>

      {/* Subtle glowing particles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {Array.from({ length: 18 }).map((_, i) => {
          const left = `${Math.random() * 100}%`;
          const top = `${Math.random() * 100}%`;
          const duration = 7 + Math.random() * 6;
          const delay = Math.random() * 4;
          const size = 1 + Math.random() * 2;

          return (
            <motion.div
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className="absolute rounded-full bg-[rgba(210,170,65,0.55)] blur-[1px]"
              style={{ left, top, width: size, height: size }}
              animate={{ y: [0, -120], opacity: [0, 0.55, 0], scale: [0.8, 1.1, 0.9] }}
              transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
            />
          );
        })}
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-3xl font-bold tracking-[0.28em] text-[rgba(235,205,120,0.95)] drop-shadow-[0_10px_30px_rgba(210,170,65,0.15)] md:text-5xl">
            OUR ARCHIVES
          </h2>
          <div className="mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-[rgba(210,170,65,0.80)] to-transparent" />
          <p className="mt-6 font-serif text-base italic text-white/70 md:text-lg">
            A curated library of past issues—crafted with calm luxury, spiritual depth, and timeless design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {issues.map((issue, index) => (
            <motion.a
              key={issue.title}
              href={issue.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
              className="group relative block"
            >
              {/* Golden glow ring (stronger on hover) */}
              <div className="absolute -inset-[1px] rounded-[22px] bg-[radial-gradient(circle_at_20%_0%,rgba(210,170,65,0.55),rgba(210,170,65,0)_55%)] opacity-30 blur-xl transition duration-300 ease-out group-hover:opacity-80" />

              <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,rgba(50,18,90,0.55),rgba(12,8,24,0.70))] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.55)] backdrop-blur-xl transition duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03] group-hover:border-[rgba(210,170,65,0.35)]">
                {/* Inner sheen */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_55%)] opacity-70" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(210,170,65,0.10),transparent)] opacity-0 transition duration-300 ease-out group-hover:opacity-100" />

                <div className="relative z-10 flex items-center justify-between gap-6">
                  <div className="min-w-0">
                    <div className="text-[10px] font-display font-semibold tracking-[0.42em] text-white/45">
                      ISSUE
                    </div>
                    <div className="mt-3 truncate font-display text-xl font-extrabold tracking-wide text-white md:text-2xl">
                      {issue.title}
                    </div>
                    <div className="mt-4 h-px w-10 bg-[rgba(210,170,65,0.30)] transition-all duration-300 ease-out group-hover:w-16 group-hover:bg-[rgba(210,170,65,0.55)]" />
                  </div>

                  <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-display font-semibold tracking-widest text-[rgba(235,205,120,0.95)] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition duration-300 ease-out group-hover:border-[rgba(210,170,65,0.35)] group-hover:bg-[rgba(210,170,65,0.95)] group-hover:text-black">
                    Explore ?
                  </span>
                </div>

                {/* Quiet corner bloom */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[rgba(210,170,65,0.10)] blur-2xl opacity-0 transition duration-300 ease-out group-hover:opacity-100" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}