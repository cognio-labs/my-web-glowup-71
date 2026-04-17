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
    <footer className="py-8 px-6 bg-[#0a0510] text-white border-t border-gold/10">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-display text-gold font-bold tracking-[0.4em] uppercase">
            ANAN<span className="italic">D</span>DA
          </h3>
          <p className="mt-2 text-gold/60 font-serif italic text-lg tracking-wide">
            A Confluence of Pathways to Bliss
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-6 md:gap-10 pb-4">
          <a
            href="https://substack.com/@ananddaofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <SiSubstack className="text-xl md:text-2xl text-[#FF6719] hover:scale-110 hover:drop-shadow-[0_0_8px_#FF6719] transition-all duration-300" />
            <span className="block text-[7px] mt-2 text-[#FF6719]/50 group-hover:text-[#FF6719] transition-colors font-display tracking-widest uppercase">SUBSTACK</span>
          </a>

          <a
            href="https://www.instagram.com/ananddaofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <FaInstagram className="text-xl md:text-2xl text-[#E4405F] hover:scale-110 hover:drop-shadow-[0_0_8px_#E4405F] transition-all duration-300" />
            <span className="block text-[7px] mt-2 text-[#E4405F]/50 group-hover:text-[#E4405F] transition-colors font-display tracking-widest uppercase text-center">INSTAGRAM</span>
          </a>

          <a
            href="https://www.linkedin.com/company/ananddabliss"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <FaLinkedin className="text-xl md:text-2xl text-[#0A66C2] hover:scale-110 hover:drop-shadow-[0_0_8px_#0A66C2] transition-all duration-300" />
            <span className="block text-[7px] mt-2 text-[#0A66C2]/50 group-hover:text-[#0A66C2] transition-colors font-display tracking-widest text-center uppercase">LINKEDIN</span>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <FaFacebookF className="text-xl md:text-2xl text-[#1877F2] hover:scale-110 hover:drop-shadow-[0_0_8px_#1877F2] transition-all duration-300" />
            <span className="block text-[7px] mt-2 text-[#1877F2]/50 group-hover:text-[#1877F2] transition-colors font-display tracking-widest text-center uppercase">FACEBOOK</span>
          </a>
        </div>

        <div className="w-12 h-px bg-gold/20 mx-auto" />

        <p className="text-[9px] text-white/30 font-display tracking-[0.4em] uppercase">
          © 2026 Anandda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}






