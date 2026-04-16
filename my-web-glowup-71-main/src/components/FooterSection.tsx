import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, ExternalLink } from "lucide-react";

const footerLinks = [
  {
    label: "Substack",
    href: "https://substack.com/@ananddaofficial",
    Icon: ExternalLink,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ananddaofficial",
    Icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ananddabliss",
    Icon: Linkedin,
  },
];

export function FooterSection() {
  return (
    <footer className="py-6 md:py-10 px-6 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto text-center space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-display gold-gradient-text font-bold">Anan<span className="italic">d</span>da</h3>
          <p className="mt-2 text-muted-foreground font-serif italic">
            A Confluence of Pathways to Bliss
          </p>
        </motion.div>

        <div className="gold-divider w-16 mx-auto" />

        <div className="flex flex-wrap justify-center gap-4 text-sm font-serif">
          {footerLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-foreground/80 hover:text-primary transition-colors"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground font-serif">
          © {new Date().getFullYear()} Anandda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}






