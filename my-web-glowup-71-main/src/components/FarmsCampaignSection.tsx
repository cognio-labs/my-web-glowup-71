import { motion } from "framer-motion";
import farmsImg from "@/assets/farms-campaign.png";
import { ClickableImage } from "./ClickableImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function FarmsCampaignSection() {
  return (
    <section id="farms" className="py-6 md:py-10 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-heading text-3xl md:text-5xl">
            FARMS: Forests Air Rivers Mountains
          </h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="mt-4 text-xl font-serif text-gold italic">
            The Countdown to 2050 has begun! Him-Jal-Vayu-Van
          </p>
          <p className="mt-2 text-lg font-serif text-foreground/80">
            Join the Anandda Global Campaign to Save Our FARMS
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex justify-center"
        >
          <ClickableImage
            src={farmsImg}
            alt="FARMS Campaign - Forests, Air, Rivers, Mountains"
            className="rounded-2xl image-glow w-full max-w-4xl"
            width={1200}
            height={600}
          />
        </motion.div>
      </div>
    </section>
  );
}





