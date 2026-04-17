import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact from Anandda: " + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:ananddaofficial@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <h2 className="section-heading text-4xl md:text-5xl uppercase tracking-wider">Get In Touch</h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
          <p className="mt-6 text-xl font-serif text-foreground/80 italic max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for collaborations or inquiries.
          </p>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="glass-card p-6 md:p-10 space-y-6 bg-white/10"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-display text-gold tracking-widest uppercase">Full Name</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-white/5 border border-gold/10 rounded-lg px-4 py-3 text-foreground font-serif focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-display text-gold tracking-widest uppercase">Phone Number</label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className="w-full bg-white/5 border border-gold/10 rounded-lg px-4 py-3 text-foreground font-serif focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-display text-gold tracking-widest uppercase">Email Address</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-white/5 border border-gold/10 rounded-lg px-4 py-3 text-foreground font-serif focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-display text-gold tracking-widest uppercase">Message</label>
            <textarea
              required
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white/5 border border-gold/10 rounded-lg px-4 py-3 text-foreground font-serif placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
              placeholder="How can we help you?"
            />
          </div>
          <div className="text-center pt-4">
            <button type="submit" className="btn-gold min-w-[240px] py-4">
              {submitted ? "✓ SENDING..." : "SEND MESSAGE"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
