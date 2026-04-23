import { motion } from "framer-motion";
import zenStones from "@/assets/zen-stones.jpg";
import { ClickableImage } from "./ClickableImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const themes = [
  "Mindfulness and Clarity",
  "Leadership and Ethics",
  "Creativity and Culture",
  "Art & Culture",
  "Real Passions, Real Stories, Lived Experiences!",
  "Water & FARMS: Forests, Air, Rivers, Mountains",
];

export function ThemesSection() {
  return (
    <section id="themes" className="py-6 md:py-10 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-heading text-4xl md:text-5xl">Themes in Anandda</h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="mt-4 text-xl font-serif text-foreground/80 italic">
            Each Issue - A Theme. Each Theme: A Pathway To Balance & Ultimately Bliss!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <p className="text-gold font-serif italic text-sm tracking-wider uppercase">
              Ideas That Inspire. Stories That Illuminate.
            </p>
            <p className="text-foreground/80 font-serif italic leading-relaxed">
              Every issue of Anandda is thoughtfully curated around a central theme,
              designed to bring meaningful value to its readers' lives. A galaxy of
              authors with deep expertise contributes perspectives that, together,
              create a true confluence of pathways leading to bliss.
            </p>
            <p className="text-foreground font-serif font-semibold text-lg">
              Themes explored include:
            </p>
            <ul className="space-y-3">
              {themes.map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-lg font-serif"
                >
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                  <span className="text-foreground/90">{t}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ClickableImage
              src={zenStones}
              alt="Balance and harmony - zen stones"
              className="rounded-2xl image-glow w-full"
              width={640}
              height={640}
            />
            <p className="text-center mt-4 text-gold font-serif italic text-lg">
              Bliss lies in balance
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}





