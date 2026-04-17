import { motion } from "framer-motion";
import journey1 from "@/assets/journey-1.png";
import journey2 from "@/assets/journey-2.png";
import journey3 from "@/assets/journey-3.png";
import { ClickableImage } from "./ClickableImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const journeyImages = [
  { src: journey1, alt: "Anandda journey - events and launches" },
  { src: journey2, alt: "Anandda journey - conferences and summits" },
  { src: journey3, alt: "Anandda journey - global community" },
];

const milestones = [
  "Professional Insight",
  "Leadership Reflection",
  "Wellbeing Conversations",
  "Meaningful Storytelling",
  "Mindfulness Themes",
];

export function JourneySection() {
  return (
    <section id="journey" className="py-6 md:py-10 px-6 purple-gradient-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-heading text-4xl md:text-5xl">Our Journey So Far!</h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-6 space-y-4"
        >
          <p className="text-lg font-serif text-foreground/90 italic leading-relaxed">
            Launched in November 2025, Anandda began as a digital platform exploring
            conscious living in the professional world. It has grown into a thoughtful
            space bringing together:
          </p>
          <ul className="flex flex-wrap justify-center gap-4">
            {milestones.map((m) => (
              <li key={m} className="bg-white/5 border border-gold/20 px-6 py-4 rounded-xl text-base font-serif font-semibold text-gold shadow-lg hover:border-gold/50 transition-all cursor-default">
                {m}
              </li>
            ))}
          </ul>
          <p className="text-gold font-serif italic font-medium">
            Receiving warm appreciation from both professional and spiritual communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {journeyImages.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="overflow-hidden rounded-2xl"
            >
              <ClickableImage
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                width={400}
                height={256}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}





