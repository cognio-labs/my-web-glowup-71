import { motion } from "framer-motion";
import strengtheningImg from "@/assets/strengthening.png";
import { ClickableImage } from "./ClickableImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function StrengtheningSection() {
  return (
    <section id="strengthening" className="py-6 md:py-10 px-6 purple-gradient-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-heading text-3xl md:text-5xl">
            Strengthening Your People. Strengthening Your Organisation.
          </h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="mt-4 text-lg font-serif text-foreground/80 font-semibold max-w-3xl mx-auto">
            In today's demanding professional environments, organisations flourish when their
            people are mentally centred, emotionally resilient, and inspired by meaningful ideas.
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
              src={strengtheningImg}
              alt="Strengthening Your People"
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
            <p className="text-foreground font-serif font-semibold text-lg">
              Anandda offers a platform that can support your organisation in nurturing:
            </p>
            <ul className="space-y-3">
              {[
                "Leadership Clarity And Ethical Awareness",
                "Mental Resilience In High-Performance Environments",
                "Balanced Workâ€“Life Perspectives Across Teams",
                "Thoughtful Conversations On Wellbeing And Leadership",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-base font-serif"
                >
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                  <span className="text-foreground/90">{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-gold font-serif italic font-medium leading-relaxed">
              When individuals within an organisation feel strong, balanced, and inspired,
              they contribute to stronger teams and more thoughtful decision-making.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}





