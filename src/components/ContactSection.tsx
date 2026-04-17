import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

import { Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(`Inquiry - ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Message:\n${formData.message}`
    );
    window.open(`mailto:ananddaofficial@gmail.com?subject=${mailSubject}&body=${body}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-12 md:py-16 px-6 bg-[#0a0510]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-8"
        >
          <h2 className="section-heading text-4xl md:text-5xl uppercase tracking-wider text-white">Get In Touch</h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="mt-6 text-xl md:text-2xl font-serif text-foreground/80 italic max-w-2xl mx-auto">
            We'd love to hear from you. For collaborations, contributions, or inquiries:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto rounded-2xl p-[1px] bg-gradient-to-r from-gold/50 via-gold to-gold/50 shadow-2xl relative group overflow-hidden"
        >
          {/* Outer Glow Effect */}
          <div className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl bg-gradient-to-r from-gold/40 via-gold/60 to-gold/40 transition duration-500 pointer-events-none"></div>

          <div className="bg-[#0f172a]/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 relative z-10 transition-colors">
            <h3 className="text-xl font-display font-bold text-white mb-6">Send us a message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-[#0a0510]/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-slate-400"
                />
                <input
                  required
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-[#0a0510]/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-slate-400"
                />
              </div>

              <input
                required
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#0a0510]/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-slate-400"
              />

              <input
                required
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#0a0510]/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-slate-400"
              />

              <textarea
                required
                name="message"
                rows={3}
                placeholder="How can we help you on your journey to bliss?"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#0a0510]/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-all resize-none placeholder:text-slate-400"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-gold/80 via-gold to-gold/80 text-deep-purple font-bold hover:scale-[1.01] transition duration-300 shadow-lg shadow-gold/20 flex items-center justify-center gap-2 mt-2"
              >
                {submitted ? "MESSAGE SENT" : "SEND MESSAGE"}
                <Send size={16} className={submitted ? 'opacity-0' : ''} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
