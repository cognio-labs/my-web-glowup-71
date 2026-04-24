import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

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
            <span className="block text-[10px] mt-2 text-[#FF6719]/60 group-hover:text-[#FF6719] transition-colors font-display tracking-[0.2em] font-bold uppercase text-center">SUBSTACK</span>
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
            href="mailto:ananddaofficial@gmail.com"
            className="group flex flex-col items-center"
          >
            <div className="text-xl md:text-2xl text-gold hover:scale-110 hover:drop-shadow-[0_0_8px_#d4af37] transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <span className="block text-[10px] mt-2 text-gold/60 group-hover:text-gold transition-colors font-display tracking-[0.2em] font-bold uppercase text-center">EMAIL</span>
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
