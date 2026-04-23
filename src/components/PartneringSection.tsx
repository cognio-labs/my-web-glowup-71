import { motion } from "framer-motion";
import partneringImg from "@/assets/partnering.png";
import { ClickableImage } from "./ClickableImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function PartneringSection() {
  return (
    <section id="partnering" className="py-6 md:py-10 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-heading text-3xl md:text-5xl">
            Partnering To Strengthen Your People And Your Culture
          </h2>
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
            <p className="text-lg font-serif text-foreground/90 leading-relaxed">
              Anandda offers the opportunity to collaborate with your organisation in
              nurturing clarity, resilience, and balance across your teams.
            </p>
            <p className="text-foreground/80 font-serif italic leading-relaxed">
              Together, we can design customised experiences aligned with your organisation's
              values and leadership philosophy, helping individuals navigate demanding
              professional environments with awareness and strength.
            </p>
            <p className="text-foreground font-serif font-semibold text-lg">
              Possible initiatives may include:
            </p>
            <ul className="space-y-3">
              {[
                "Thought Leadership Conversations On Wellbeing And Mindful Leadership",
                "Editorial Features Reflecting Your Organisation's Leadership Values",
                "Curated Content Supporting Work-Life Balance And Mental Resilience",
                "Collaborative Dialogues That Empower Individuals Across Teams",
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
              When each member of a team feels mentally strong, balanced, and inspired,
              the entire organisation moves forward with greater clarity and purpose.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ClickableImage
              src={partneringImg}
              alt="Partnering with Anandda"
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





