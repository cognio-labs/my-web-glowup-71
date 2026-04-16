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
          className="relative"
        >
          <ClickableImage
            src={writersImg}
            alt="Galaxy of writers from around the globe"
            className="w-full rounded-2xl image-glow"
            width={1200}
            height={500}
          />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-md px-6 sm:px-10">
              <div className="rounded-2xl bg-white/75 backdrop-blur-sm border border-primary/15 p-5 sm:p-7">
                <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl leading-tight">
                  Our Galaxy of Writers
                </h2>
                <div className="gold-divider w-20 mt-4" />
                <p className="mt-4 text-base sm:text-lg font-serif text-foreground/90 italic">
                  From around the globe
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
