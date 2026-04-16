import { motion } from "framer-motion";
import ecosystemImg from "@/assets/ecosystem.png";
import { ClickableImage } from "./ClickableImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ecosystemItems = [
  "The Anandda Digital Magazine â€“ thoughtfully curated themed issues",
  "Leadership Conversations â€“ Dialogues on mindful leadership and wellbeing",
  "A Galaxy Of Authors â€“ Experts sharing insight and reflection",
  "Global Digital Reach â€“ Connecting professional audiences worldwide",
  "Collaborative Partnerships â€“ Organisations contributing to the dialogue on conscious living",
];

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-6 md:py-10 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-heading text-4xl md:text-5xl">The Anandda Ecosystem</h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="mt-4 text-xl font-serif text-foreground/80 font-semibold">
            A Platform For Thoughtful Conversations And Conscious Living
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
            <p className="text-lg font-serif text-foreground/90 italic leading-relaxed">
              Anandda is more than a digital publication. It is an evolving platform that
              brings together ideas, voices, and communities committed to conscious
              leadership and holistic wellbeing.
            </p>
            <p className="text-foreground font-serif font-semibold text-lg">The ecosystem includes:</p>
            <ul className="space-y-3">
              {ecosystemItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-base font-serif"
                >
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                  <span className="text-foreground/90 italic">{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-gold font-serif italic font-medium leading-relaxed">
              Together, these elements create a Confluence of Pathways Leading to Bliss.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ClickableImage
              src={ecosystemImg}
              alt="The Anandda Ecosystem"
              className="rounded-2xl image-glow w-full"
              width={800}
              height={500}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}





