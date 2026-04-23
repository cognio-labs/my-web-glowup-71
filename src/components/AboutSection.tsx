import { motion } from "framer-motion";
import whatIsImg from "@/assets/what-is-anandda.png";
import { ClickableImage } from "./ClickableImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function AboutSection() {
  return (
    <section id="about" className="py-6 md:py-10 px-6 purple-gradient-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-heading text-4xl md:text-5xl">What is Anandda?</h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ClickableImage
              src={whatIsImg}
              alt="Anandda Magazine Cover"
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
              Anandda is a global digital publication exploring the intersection of:
            </p>
            <ul className="space-y-3 text-lg font-serif">
              {["Leadership", "Wellbeing", "Reflection", "Human Potential"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-foreground font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground/80 font-serif italic leading-relaxed">
              Organisations increasingly recognise that sustainable leadership requires
              clarity of mind, strength of character, and emotional resilience.
            </p>
            <p className="text-gold font-serif italic leading-relaxed font-medium">
              Anandda was created to support this balance through the harmonious
              integration of Body, Mind, and Soul.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}





