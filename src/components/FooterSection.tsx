import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

const socials = [
  {
    name: "SUBSTACK",
    icon: <SiSubstack className="text-xl md:text-2xl" />,
    color: "#FF6719",
    href: "https://substack.com/@ananddaofficial",
  },
  {
    name: "INSTAGRAM",
    icon: <FaInstagram className="text-xl md:text-2xl" />,
    gradient: "from-pink-500 via-purple-500 to-orange-400",
    color: "#E4405F",
    href: "https://www.instagram.com/ananddaofficial",
  },
  {
    name: "LINKEDIN",
    icon: <FaLinkedin className="text-xl md:text-2xl" />,
    color: "#0A66C2",
    href: "https://www.linkedin.com/company/ananddabliss",
  },
  {
    name: "FACEBOOK",
    icon: <FaFacebookF className="text-xl md:text-2xl" />,
    color: "#1877F2",
    href: "#",
  },
];

export function FooterSection() {
  return (
    <footer className="py-16 px-6 bg-[#0a0510] text-white border-t border-gold/10">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-display text-gold font-bold tracking-widest uppercase">
            ANAN<span className="italic">D</span>DA
          </h3>
          <p className="mt-4 text-gold/70 font-serif italic text-xl max-w-lg mx-auto leading-relaxed">
            A Confluence of Pathways to Bliss
          </p>
        </motion.div>

        <div className="flex gap-4 md:gap-8 flex-wrap justify-center items-center">
          {socials.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group relative w-20 h-20 md:w-24 md:h-24 rounded-2xl p-[1px] hover:scale-105 transition duration-300"
              style={{
                background: item.gradient
                  ? undefined
                  : `linear-gradient(135deg, ${item.color}, transparent)`,
              }}
            >
              {/* Glow wrapper */}
              <div
                className={`absolute inset-0 rounded-2xl ${
                  item.gradient ? `bg-gradient-to-br ${item.gradient}` : ""
                } opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500`}
                style={{
                  background: item.gradient ? undefined : item.color,
                }}
              ></div>

              {/* Card Container */}
              <div className="relative h-full rounded-2xl bg-[#0b0f1a]/95 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center transition-colors group-hover:bg-[#0b0f1a]/80">
                {/* Icon */}
                <div
                  className="mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <p
                  className="text-[10px] tracking-[2px] font-bold"
                  style={{ color: item.color }}
                >
                  {item.name}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="w-16 h-px bg-gold/30 mx-auto" />

        <p className="text-[10px] text-white/40 font-display tracking-[0.3em] uppercase">
          © 2026 Anandda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}






