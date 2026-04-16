import { motion } from "framer-motion";
import globalMovementImg from "@/assets/global-movement.png";
import { ClickableImage } from "./ClickableImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function GlobalMovementSection() {
  return (
    <section id="movement" className="py-6 md:py-10 px-6 purple-gradient-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-heading text-3xl md:text-5xl">
            A Global Movement Towards Wellbeing And Mindfulness
          </h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="mt-4 text-lg font-serif text-foreground/80 font-semibold max-w-3xl mx-auto">
            Across industries worldwide, organisations are increasingly embracing cultures that
            prioritise wellbeing, mindfulness, and balanced living.
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
              This shift recognises that sustainable performance emerges when people are supported through:
            </p>
            <ul className="space-y-3">
              {[
                "Mindfulness And Stress-Aware Work Cultures",
                "Leadership Development Rooted In Emotional Intelligence",
                "Wellbeing And Mental Resilience Initiatives",
                "Balanced Professional And Personal Lives",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-base font-serif"
                >
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-foreground/90">{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-gold font-serif italic font-medium leading-relaxed">
              When each member of a team feels mentally strong and emotionally balanced,
              the entire organisation becomes stronger.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ClickableImage
              src={globalMovementImg}
              alt="Global Movement Towards Wellbeing"
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





