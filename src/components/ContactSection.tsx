import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Send } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

type Status = "idle" | "success" | "error";

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [statusText, setStatusText] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-clear only error state (success stays until user resets)
  useEffect(() => {
    if (status !== "error") return;
    const t = window.setTimeout(() => {
      setStatus("idle");
      setStatusText("");
    }, 3000);
    return () => window.clearTimeout(t);
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus("success");
        setStatusText("");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setStatusText(data?.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setStatusText("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetForm = () => {
    setStatus("idle");
    setStatusText("");
    setIsSubmitting(false);
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white px-6 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-8 text-center"
        >
          <h2 className="section-heading text-4xl uppercase tracking-wider md:text-5xl">Get In Touch</h2>
          <div className="gold-divider mx-auto mt-4 w-24" />
          <p className="mx-auto mt-6 max-w-2xl font-serif text-xl italic text-slate-600 md:text-2xl">
            We'd love to hear from you. For collaborations, contributions, or inquiries:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="group relative mx-auto max-w-2xl overflow-hidden rounded-3xl bg-gradient-to-r from-gold/30 via-gold/50 to-gold/30 p-[1px] shadow-xl"
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gold/40 opacity-0 blur-xl transition duration-500 group-hover:opacity-20" />

          <div className="relative z-10 rounded-3xl border border-gold/10 bg-slate-50 p-6 md:p-8">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="mx-auto flex max-w-md flex-col items-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.75),rgba(255,255,255,0.35))] shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
                  <span className="text-2xl">✓</span>
                </div>

                <div className="mt-5 text-2xl font-semibold text-deep-purple">
                  Message Sent!
                </div>
                <div className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  Thank you for reaching out! We’ll get back to you within 24 hours.
                </div>

                <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-gold via-gold-light to-gold px-6 py-3 text-sm font-bold text-white shadow-lg shadow-gold/20 transition duration-300 hover:scale-[1.01]"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-deep-purple">Send us a message</h3>

                  {status === "error" && (
                    <div className="rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-700">
                      {statusText}
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input
                      required
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm placeholder:text-slate-400 transition-all focus:border-gold focus:outline-none"
                    />
                    <input
                      required
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm placeholder:text-slate-400 transition-all focus:border-gold focus:outline-none"
                    />
                  </div>

                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm placeholder:text-slate-400 transition-all focus:border-gold focus:outline-none"
                  />

                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm placeholder:text-slate-400 transition-all focus:border-gold focus:outline-none"
                  />

                  <textarea
                    required
                    name="message"
                    rows={3}
                    placeholder="How can we help you on your journey to bliss?"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm placeholder:text-slate-400 transition-all focus:border-gold focus:outline-none"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={
                      "mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold via-gold-light to-gold py-4 font-bold text-white shadow-lg shadow-gold/20 transition duration-300 hover:scale-[1.01] " +
                      (isSubmitting ? "opacity-70" : "")
                    }
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                    {!isSubmitting && <Send size={16} />}
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
