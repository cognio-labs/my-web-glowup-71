import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-white/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Anandda logo" className="h-16 w-16 rounded-full object-cover shadow-lg" />
            <div className="text-left">
              <p className="text-sm uppercase tracking-[0.35em] text-foreground/90 font-semibold">Anan<span className="italic">d</span>da</p>
              <p className="text-xs text-foreground/70 uppercase tracking-[0.18em]">A Confluence of Pathways to Bliss</p>
            </div>
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold gold-gradient-text font-display tracking-wide"
        >
          Anan<span className="italic">d</span>da
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-3 text-lg md:text-2xl text-primary font-serif italic"
        >
          A Confluence of Pathways to Bliss
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-3 text-sm md:text-base text-foreground/80 font-serif max-w-2xl mx-auto leading-relaxed"
        >
          In a world that moves faster than ever, Anandda is your pause — a sacred
          confluence where wisdom, art, and awareness meet. Born from the heart of
          a seeker, it brings stories that nurture the body, illuminate the mind,
          and awaken the soul.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-6 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="https://heyzine.com/flip-book/f03b5c07d2.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            READ THE LATEST ISSUE
          </a>
          <a
            href="https://substack.com/@ananddaofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
          >
            SUBSCRIBE TO ANANDDA
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-9 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
