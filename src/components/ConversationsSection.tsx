import { motion } from "framer-motion";
import conversationsImg from "@/assets/conversations.png";
import { ClickableImage } from "./ClickableImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function ConversationsSection() {
  return (
    <section id="conversations" className="py-6 md:py-10 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-heading text-3xl md:text-5xl">Conversations That Strengthen Teams</h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="mt-4 text-lg font-serif text-foreground/80 font-semibold max-w-3xl mx-auto">
            Anandda creates thoughtful conversations that supports individuals in navigating
            professional life with clarity, balance, and purpose.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ClickableImage
              src={conversationsImg}
              alt="Conversations That Strengthen Teams"
              className="rounded-2xl image-glow w-full"
              width={800}
              height={500}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <p className="text-foreground font-serif font-semibold text-lg italic">
              Possible collaborations may include:
            </p>
            <ul className="space-y-3">
              {[
                "Leadership Conversations On Clarity, Resilience, And Wellbeing",
                "Editorial Perspectives On Healthy Organisational Cultures",
                "Thought Leadership Essays By Senior Leaders",
                "Dialogues On Mindful Leadership And Professional Balance",
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
              Such conversations empower individuals across teams to lead, contribute,
              and collaborate with greater awareness.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}





