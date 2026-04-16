import { motion } from "framer-motion";
import writersImg from "@/assets/writers.png";
import { ClickableImage } from "./ClickableImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function WritersSection() {
  return (
    <section id="writers" className="py-6 md:py-10 px-6 purple-gradient-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8"
        >
          <h2 className="section-heading text-4xl md:text-5xl">Our Galaxy of Writers</h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="mt-4 text-lg font-serif text-foreground/80 italic max-w-3xl mx-auto">
            Stories from writers across the world, sharing insight, experience, and creative reflection.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <ClickableImage
            src={writersImg}
            alt="Galaxy of writers from around the globe"
            className="w-full rounded-2xl image-glow"
            width={1200}
            height={500}
          />
        </motion.div>
      </div>
    </section>
  );
}
