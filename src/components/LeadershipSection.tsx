import { motion } from "framer-motion";
import leadershipImg from "@/assets/leadership-team.png";
import ourTeamImg from "@/assets/our-team-new.jpg";
import { ClickableImage } from "./ClickableImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};


export function LeadershipSection() {
  return (
    <section id="leadership" className="py-6 md:py-10 px-6 purple-gradient-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-heading text-4xl md:text-5xl">Leadership & Team</h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="mt-4 text-lg font-serif text-foreground/80 italic max-w-3xl mx-auto">
            Anandda is guided by a leadership team whose combined experience spans journalism,
            communication, professional development, and reflective leadership.
          </p>
        </motion.div>

        <div className="space-y-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ClickableImage
              src={leadershipImg}
              alt="Anandda Leadership Team"
              className="rounded-2xl image-glow w-full"
              width={1200}
              height={500}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="rounded-2xl image-glow overflow-hidden">
              <ClickableImage
                src={ourTeamImg}
                alt="Meet Our Team"
                className="w-full h-auto rounded-2xl"
                width={1200}
                height={800}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
