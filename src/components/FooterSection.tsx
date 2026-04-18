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
    <footer className="py-8 px-6 bg-white text-slate-800 border-t border-slate-100">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-display text-gold font-bold tracking-[0.4em] uppercase">
            ANAND<span className="italic">D</span>A
          </h3>
          <p className="mt-2 text-slate-500 font-serif italic text-lg tracking-wide">
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
            <span className="block text-[10px] mt-2 text-[#FF6719]/60 group-hover:text-[#FF6719] transition-colors font-display tracking-[0.2em] font-bold uppercase">SUBSTACK</span>
          </a>

          <a
            href="https://www.instagram.com/ananddaofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <FaInstagram className="text-xl md:text-2xl text-[#E4405F] hover:scale-110 hover:drop-shadow-[0_0_8px_#E4405F] transition-all duration-300" />
            <span className="block text-[10px] mt-2 text-[#E4405F]/60 group-hover:text-[#E4405F] transition-colors font-display tracking-[0.2em] font-bold uppercase text-center">INSTAGRAM</span>
          </a>

          <a
            href="https://www.linkedin.com/company/ananddabliss"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <FaLinkedin className="text-xl md:text-2xl text-[#0A66C2] hover:scale-110 hover:drop-shadow-[0_0_8px_#0A66C2] transition-all duration-300" />
            <span className="block text-[10px] mt-2 text-[#0A66C2]/60 group-hover:text-[#0A66C2] transition-colors font-display tracking-[0.2em] font-bold uppercase text-center">LINKEDIN</span>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <FaFacebookF className="text-xl md:text-2xl text-[#1877F2] hover:scale-110 hover:drop-shadow-[0_0_8px_#1877F2] transition-all duration-300" />
            <span className="block text-[10px] mt-2 text-[#1877F2]/60 group-hover:text-[#1877F2] transition-colors font-display tracking-[0.2em] font-bold uppercase text-center">FACEBOOK</span>
          </a>
        </div>

        <div className="w-12 h-px bg-slate-200 mx-auto" />

        <p className="text-[9px] text-slate-400 font-display tracking-[0.4em] uppercase">
          © 2026 Anandda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}






