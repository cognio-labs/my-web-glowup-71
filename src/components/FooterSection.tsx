import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

const socialLinks = [
  {
    name: "Substack",
    href: "https://substack.com/@ananddaofficial",
    icon: SiSubstack,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ananddaofficial",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/ananddabliss",
    icon: FaLinkedin,
  },
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
];

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#020617,#0f172a)] px-6 py-14">
      {/* subtle background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[-120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.22),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-28 right-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 gap-10 md:grid-cols-12"
        >
          <div className="md:col-span-5">
            <div className="text-xs font-medium tracking-[0.22em] text-white/60">ANANDDA</div>
            <div className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Premium calm. Modern clarity.
            </div>
            <div className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
              A clean, high-contrast, glass-first UI that feels like a modern AI / tech startup.
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Dark gradient", "Glass cards", "Subtle glow", "Responsive"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <div className="text-xs font-semibold tracking-[0.18em] text-white/70">Product</div>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  {["Features", "Services", "Changelog"].map((item) => (
                    <li key={item}>
                      <a className="transition hover:text-white" href="#">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-xs font-semibold tracking-[0.18em] text-white/70">Company</div>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  {["About", "Careers", "Contact"].map((item) => (
                    <li key={item}>
                      <a className="transition hover:text-white" href="#">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-xs font-semibold tracking-[0.18em] text-white/70">Social</div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                      >
                        <Icon className="text-base opacity-80 transition group-hover:opacity-100" />
                        <span className="text-[12px] font-medium">{s.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.05)] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="text-sm font-semibold text-white">Get updates</div>
              <div className="mt-2 text-sm text-white/65">
                Follow along for new issues and product updates.
              </div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://substack.com/@ananddaofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0b1220] transition hover:opacity-95"
                >
                  Subscribe
                </a>
                <a
                  href="https://www.magzter.com/IN/Anandda-Magazine/Anandda/Lifestyle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                >
                  Magzter
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center text-xs text-white/50 md:flex-row md:text-left">
          <div>© 2026 Anandda. All rights reserved.</div>
          <div className="flex gap-5">
            <a className="transition hover:text-white" href="#">Privacy</a>
            <a className="transition hover:text-white" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}