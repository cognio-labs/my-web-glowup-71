import { motion } from "framer-motion";
import whyImg from "@/assets/why-created.png";
import { ClickableImage } from "./ClickableImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function WhyCreatedSection() {
  return (
    <section id="why" className="py-6 md:py-10 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-heading text-4xl md:text-5xl">Why Anandda Was Created</h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4 order-2 md:order-1"
          >
            <p className="text-lg font-serif text-foreground/90 leading-relaxed">
              The modern professional world is marked by:
            </p>
            <ul className="space-y-3 text-lg font-serif">
              {[
                "Intense cognitive pressure",
                "Complex ethical decisions",
                "Constant digital overload",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground/80 font-serif italic leading-relaxed">
              Organisations increasingly recognise that sustainable leadership requires
              clarity of mind, strength of character, and emotional resilience.
            </p>
            <p className="text-gold font-serif italic font-medium leading-relaxed">
              Anandda was created to support this balance through the harmonious
              integration of Body, Mind, and Soul.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-1 md:order-2"
          >
            <ClickableImage
              src={whyImg}
              alt="Why Anandda was created"
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





