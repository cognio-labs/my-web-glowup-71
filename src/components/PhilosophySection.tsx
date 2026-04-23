import { motion } from "framer-motion";
import philosophyImg from "@/assets/philosophy.png";
import { ClickableImage } from "./ClickableImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-6 md:py-10 px-6 purple-gradient-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-heading text-4xl md:text-5xl">The Anandda Philosophy</h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="mt-4 text-lg font-serif text-foreground/80 font-semibold">
            At the heart of Anandda lies a simple yet powerful insight:
          </p>
          <p className="mt-2 text-2xl font-serif text-gold italic font-medium">
            Resilient organisations are built by balanced individuals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ClickableImage
              src={philosophyImg}
              alt="The Anandda Philosophy"
              className="rounded-2xl image-glow w-full"
              width={800}
              height={500}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <p className="text-lg font-serif text-foreground/90 leading-relaxed">
              When professionals cultivate harmony of body, mind, and soul, they bring
              greater clarity, creativity, and responsibility to their roles.
            </p>
            <p className="text-foreground/80 font-serif italic leading-relaxed">
              Through thoughtful themes, reflective conversations, and inspiring journeys,
              Anandda encourages professionals to nurture:
            </p>
            <ul className="space-y-3">
              {["Clarity Of Thought", "Strength Of Mind", "Balance In Living"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-lg font-serif"
                >
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-foreground font-semibold">{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-gold font-serif italic font-medium leading-relaxed">
              These qualities help individuals contribute with greater presence and
              purpose within their organisations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}





