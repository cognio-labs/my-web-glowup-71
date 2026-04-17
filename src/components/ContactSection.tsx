import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="section-heading text-4xl md:text-5xl uppercase tracking-wider">Get In Touch</h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
          <p className="mt-8 text-2xl font-serif text-foreground/80 italic max-w-2xl mx-auto">
            We'd love to hear from you. For collaborations, contributions, or inquiries:
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <a 
              href="mailto:ananddaofficial@gmail.com" 
              className="btn-gold px-12 py-5 text-lg shadow-[0_0_30px_rgba(164,136,70,0.2)]"
            >
              SEND US AN EMAIL
            </a>
            <p className="mt-6 text-gold/60 font-serif tracking-widest text-sm uppercase">ananddaofficial@gmail.com</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
