import { motion } from "framer-motion";
import strongOrgImg from "@/assets/strong-organisations.png";
import { ClickableImage } from "./ClickableImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function StrongOrganisationsSection() {
  return (
    <section id="organisations" className="py-6 md:py-10 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-heading text-3xl md:text-5xl">
            Strong Organisations Are Built By Strong Individuals
          </h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="mt-4 text-lg font-serif text-foreground/80 font-semibold max-w-3xl mx-auto">
            Across the global professional landscape, organisations increasingly recognise
            that their greatest strength lies in the wellbeing and resilience of their people.
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
              Today's leadership environments demand individuals who can think clearly,
              act responsibly, and remain balanced under pressure.
            </p>
            <p className="text-foreground font-serif font-semibold text-lg">This requires nurturing:</p>
            <ul className="space-y-3">
              {[
                "Ethical Decision-Making",
                "Mental Clarity In Leadership",
                "Resilience In High-Pressure Environments",
                "Healthy Work-Life Balance",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-lg font-serif"
                >
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-foreground/90">{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-gold font-serif italic font-medium leading-relaxed">
              When individuals are centred in body, mind, and soul, they contribute more
              thoughtfully to the teams and institutions they serve.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ClickableImage
              src={strongOrgImg}
              alt="Strong Organisations"
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





