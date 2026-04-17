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

        <div className="flex items-center justify-center gap-10">
          <a
            href="https://substack.com/@ananddaofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <SiSubstack className="text-2xl text-[#FF6719] hover:scale-110 hover:drop-shadow-[0_0_10px_#FF6719] transition-all duration-300 cursor-pointer" />
            <span className="block text-[8px] mt-1 text-white/40 group-hover:text-[#FF6719] transition-colors font-display tracking-widest">SUBSTACK</span>
          </a>

          <a
            href="https://www.instagram.com/ananddaofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="hover:scale-110 transition-all duration-300 cursor-pointer">
              <FaInstagram
                className="text-2xl hover:drop-shadow-[0_0_10px_#dd2a7b]"
                style={{
                  background: "linear-gradient(45deg,#f58529,#dd2a7b,#8134af,#515bd4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              />
            </div>
            <span className="block text-[8px] mt-1 text-white/40 group-hover:text-[#dd2a7b] transition-colors font-display tracking-widest text-center">INSTAGRAM</span>
          </a>

          <a
            href="https://www.linkedin.com/company/ananddabliss"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FaLinkedin className="text-2xl text-[#0A66C2] hover:scale-110 hover:drop-shadow-[0_0_10px_#0A66C2] transition-all duration-300 cursor-pointer" />
            <span className="block text-[8px] mt-1 text-white/40 group-hover:text-[#0A66C2] transition-colors font-display tracking-widest text-center">LINKEDIN</span>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FaFacebookF className="text-2xl text-[#1877F2] hover:scale-110 hover:drop-shadow-[0_0_10px_#1877F2] transition-all duration-300 cursor-pointer" />
            <span className="block text-[8px] mt-1 text-white/40 group-hover:text-[#1877F2] transition-colors font-display tracking-widest text-center">FACEBOOK</span>
          </a>
        </div>

        <div className="w-16 h-px bg-gold/30 mx-auto" />

        <p className="text-[10px] text-white/40 font-display tracking-[0.3em] uppercase">
          © 2026 Anandda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}






