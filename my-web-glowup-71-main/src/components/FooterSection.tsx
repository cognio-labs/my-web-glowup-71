import { motion } from "framer-motion";

export function FooterSection() {
  return (
    <footer className="py-6 md:py-10 px-6 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto text-center space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-display gold-gradient-text font-bold">Anandda</h3>
          <p className="mt-2 text-muted-foreground font-serif italic">
            A Confluence of Pathways to Bliss
          </p>
        </motion.div>

        <div className="gold-divider w-16 mx-auto" />

        <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm font-serif">
          <a
            href="https://substack.com/@ananddaofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-gold transition-colors"
          >
            Substack
          </a>
          <a
            href="https://www.instagram.com/ananddaofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-gold transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/ananddabliss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-gold transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-muted-foreground font-serif">
          Â© {new Date().getFullYear()} Anandda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}






