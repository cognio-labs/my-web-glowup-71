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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-12 md:py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-8"
        >
          <h2 className="section-heading text-4xl md:text-5xl uppercase tracking-wider">Get In Touch</h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="mt-6 text-xl md:text-2xl font-serif text-slate-600 italic max-w-2xl mx-auto">
            We'd love to hear from you. For collaborations, contributions, or inquiries:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto rounded-3xl p-[1px] bg-gradient-to-r from-gold/30 via-gold/50 to-gold/30 shadow-xl relative group overflow-hidden"
        >
          {/* Subtle Outer Glow */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl bg-gold/40 transition duration-500 pointer-events-none"></div>

          <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-gold/10 relative z-10">
            <h3 className="text-xl font-display font-bold text-deep-purple mb-6">Send us a message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-gold transition-all placeholder:text-slate-400 shadow-sm"
                />
                <input
                  required
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-gold transition-all placeholder:text-slate-400 shadow-sm"
                />
              </div>

              <input
                required
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-gold transition-all placeholder:text-slate-400 shadow-sm"
              />

              <input
                required
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-gold transition-all placeholder:text-slate-400 shadow-sm"
              />

              <textarea
                required
                name="message"
                rows={3}
                placeholder="How can we help you on your journey to bliss?"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-gold transition-all resize-none placeholder:text-slate-400 shadow-sm"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl bg-gradient-to-r from-gold via-gold-light to-gold text-white font-bold hover:scale-[1.01] transition duration-300 shadow-lg shadow-gold/20 flex items-center justify-center gap-2 mt-2 ${isSubmitting ? 'opacity-70' : ''}`}
              >
                {submitted ? "MESSAGE SENT" : (isSubmitting ? "SENDING..." : "SEND MESSAGE")}
                {!submitted && !isSubmitting && <Send size={16} />}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
