import { motion } from "framer-motion";
import readershipImg from "@/assets/readership.png";
import { ClickableImage } from "./ClickableImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const readers = [
  "Corporate Professionals",
  "Entrepreneurs and Leaders",
  "Governance and Advisory Experts",
  "Thinkers, Educators, and Seekers",
];

export function ReadershipSection() {
  return (
    <section id="readership" className="py-6 md:py-10 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-heading text-4xl md:text-5xl">Our Readership</h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
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
              Anandda connects with a thoughtful and influential audience, and the
              feedback from both professional and spiritual communities has been
              exceptionally encouraging.
            </p>
            <p className="text-foreground font-serif text-lg font-semibold">Our readers include:</p>
            <ul className="space-y-4">
              {readers.map((r, i) => (
                <motion.li
                  key={r}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-lg font-serif"
                >
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-foreground">{r}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-gold font-serif italic font-medium leading-relaxed">
              Readers who recognise that professional excellence is strengthened by
              inner wellbeing and conscious living.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ClickableImage
              src={readershipImg}
              alt="Anandda readership"
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





