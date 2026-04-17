import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, ExternalLink } from "lucide-react";

const footerLinks = [
  {
    label: "Substack",
    href: "https://substack.com/@ananddaofficial",
    Icon: ExternalLink,
  },
];

export function FooterSection() {
  return (
    <footer className="py-12 px-6 bg-[#0a0510] text-white border-t border-gold/10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-display text-gold font-bold tracking-widest uppercase">
            ANAN<span className="italic">D</span>DA
          </h3>
          <p className="mt-3 text-gold/70 font-serif italic text-lg">
            A Confluence of Pathways to Bliss
          </p>
        </motion.div>

        <div className="flex justify-center gap-8">
          <a href="https://substack.com/@ananddaofficial" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-all transform hover:scale-110">
            <ExternalLink size={24} />
            <span className="block text-[10px] mt-1 font-display">SUBSTACK</span>
          </a>
          <a href="https://www.instagram.com/ananddaofficial" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-all transform hover:scale-110">
            <Instagram size={24} />
            <span className="block text-[10px] mt-1 font-display">INSTAGRAM</span>
          </a>
          <a href="https://www.linkedin.com/company/ananddabliss" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-all transform hover:scale-110">
            <Linkedin size={24} />
            <span className="block text-[10px] mt-1 font-display">LINKEDIN</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-all transform hover:scale-110">
            <Facebook size={24} />
            <span className="block text-[10px] mt-1 font-display">FACEBOOK</span>
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






