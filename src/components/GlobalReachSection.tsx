import { motion } from "framer-motion";
import globalImg from "@/assets/global-reach.png";
import { ClickableImage } from "./ClickableImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stats = [
  { number: "150+", label: "Countries" },
  { number: "88M+", label: "Readers" },
  { number: "7", label: "Issues Published" },
];

export function GlobalReachSection() {
  return (
    <section id="reach" className="py-6 md:py-10 px-6 purple-gradient-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-heading text-4xl md:text-5xl">Global Reach</h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } },
              }}
              className="glass-card p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gold-gradient-text font-display">
                {stat.number}
              </div>
              <div className="mt-2 text-muted-foreground font-serif text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid md:grid-cols-2 gap-6 items-center"
        >
          <div className="space-y-4">
            <p className="text-lg font-serif text-foreground/90 leading-relaxed">
              Since its inaugural issue in November 2025, Anandda has been distributed
              through Magzter's global digital ecosystem, serving over 88 million readers
              in more than 150 countries.
            </p>
            <ul className="space-y-3 text-lg font-serif">
              {[
                "Accessible via Apple iOS, Android, and Amazon Appstore",
                "Smart Reading Zone® (SRZ) distribution",
                "LinkedIn & professional communities",
                "Digital and social media platforms",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <ClickableImage
            src={globalImg}
            alt="Anandda global distribution"
            className="rounded-2xl image-glow w-full"
            width={800}
            height={500}
          />
        </motion.div>
      </div>
    </section>
  );
}




