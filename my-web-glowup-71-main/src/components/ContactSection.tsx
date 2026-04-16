import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function ContactSection() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Message from Anandda website");
    const body = encodeURIComponent(message);
    window.open(`mailto:ananddaofficial@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-6 md:py-10 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-heading text-4xl md:text-5xl">Get In Touch</h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="mt-4 text-lg font-serif text-foreground/80 italic max-w-2xl mx-auto">
            We'd love to hear from you. Whether you're a reader, a contributor, or an
            organisation looking to collaborate — reach out to us.
          </p>
          <p className="mt-3 text-sm text-foreground/70 font-serif">
            Email: <a href="mailto:ananddaofficial@gmail.com" className="underline text-primary">ananddaofficial@gmail.com</a>
          </p>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="glass-card p-8 md:p-12 space-y-4"
        >
          <div className="space-y-2">
            <label className="text-sm font-display text-gold tracking-wider uppercase">
              YOUR MESSAGE
            </label>
            <textarea
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground font-serif placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
              placeholder="Write your message here..."
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn-gold min-w-[200px]">
              {submitted ? "✓ Opening Mail Client..." : "SEND MESSAGE"}
            </button>
          </div>
        </motion.form>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground font-serif text-sm mb-4">Or subscribe to stay connected</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <a
              href="https://substack.com/@ananddaofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold text-center"
            >
              SUBSCRIBE ON SUBSTACK
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
