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
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden bg-slate-900 py-12 md:py-20"
    >
      <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-100" />

      {/* Premium Deep Purple Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d003d]/60 via-[#1a0f2e]/40 to-[#350066]/60" />
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />

      {/* Shimmering Golden Lines background effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "100%", opacity: [0, 0.4, 0] }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent"
            style={{ top: `${20 + i * 15}%` }}
          />
        ))}
      </div>

      {/* Enhanced Golden Light Flares */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-1/3 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-gold/15 blur-[100px]"
      />

      {/* Floating Sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], y: [-10, -100] }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,1)]"
          style={{ left: `${Math.random() * 100}%`, top: `${50 + Math.random() * 40}%` }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        {/* Main Centered Logo and Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6 flex flex-col items-center md:mb-12"
        >
          <img
            src={logo}
            alt="Anandda logo"
            className="mb-4 h-24 w-24 rounded-full border-2 border-gold/30 object-cover shadow-2xl md:mb-8 md:h-48 md:w-48"
          />
          <h1 className="font-display mb-2 text-4xl font-bold tracking-widest text-transparent drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] filter brightness-110 bg-gradient-to-b from-white via-gold-light to-gold bg-clip-text md:mb-4 md:text-8xl">
            ANAND<span className="italic">D</span>A
          </h1>
          <p className="font-serif text-[10px] font-medium uppercase tracking-[0.3em] text-gold-light drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] md:text-xl md:tracking-[0.4em]">
            A Confluence of Pathways to Bliss
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto mt-4 max-w-2xl font-serif text-sm italic leading-relaxed text-white/80 drop-shadow-md md:mt-6 md:text-lg"
        >
          In a world that moves faster than ever, Anandda is your pause — a sacred confluence where
          wisdom, art, and awareness meet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:mt-10 md:gap-4"
        >
          <a
            href="https://heyzine.com/flip-book/f03b5c07d2.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-3.5 text-xs shadow-2xl hover:shadow-gold/30 md:px-10 md:py-4 md:text-sm"
          >
            READ THE LATEST ISSUE
          </a>
          <a
            href="https://www.magzter.com/IN/Anandda-Magazine/Anandda/Lifestyle/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold border-white/20 px-8 py-3.5 text-xs text-white backdrop-blur-md hover:border-gold hover:text-gold md:px-10 md:py-4 md:text-sm"
          >
            FOLLOW ON MAGZTER
          </a>
          <a
            href="https://substack.com/@ananddaofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold border-white/20 px-8 py-3.5 text-xs text-white backdrop-blur-md hover:border-gold hover:text-gold md:px-10 md:py-4 md:text-sm"
          >
            SUBSCRIBE ON SUBSTACK
          </a>
        </motion.div>

        {/* 6 archive boxes inside hero */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: "easeOut" }}
          className="mx-auto mt-10 max-w-5xl"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {issues.map((issue) => (
              <a
                key={issue.title}
                href={issue.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
              >
                <div className="absolute -inset-[1px] rounded-[22px] bg-[radial-gradient(circle_at_20%_0%,rgba(210,170,65,0.55),rgba(210,170,65,0)_55%)] opacity-25 blur-xl transition duration-300 ease-out group-hover:opacity-75" />

                <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,rgba(50,18,90,0.55),rgba(12,8,24,0.70))] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.55)] backdrop-blur-xl transition duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03] group-hover:border-[rgba(210,170,65,0.35)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_55%)] opacity-70" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(210,170,65,0.10),transparent)] opacity-0 transition duration-300 ease-out group-hover:opacity-100" />

                  <div className="relative z-10 flex items-start justify-between gap-5">
                    <div className="min-w-0 text-left">
                      <div className="text-[10px] font-display font-semibold tracking-[0.42em] text-white/45">
                        ISSUE
                      </div>
                      <div className="mt-3 truncate font-display text-lg font-extrabold tracking-wide text-white md:text-xl">
                        {issue.title}
                      </div>
                      <div className="mt-2 truncate font-serif text-sm italic text-white/65">
                        {issue.tagline}
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-display font-semibold tracking-widest text-[rgba(235,205,120,0.95)] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition duration-300 ease-out group-hover:border-[rgba(210,170,65,0.35)] group-hover:bg-[rgba(210,170,65,0.95)] group-hover:text-black">
                      Explore ?
                    </span>
                  </div>

                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[rgba(210,170,65,0.10)] blur-2xl opacity-0 transition duration-300 ease-out group-hover:opacity-100" />
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}