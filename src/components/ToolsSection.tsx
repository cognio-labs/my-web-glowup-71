import { motion } from "framer-motion";
import { Cpu, Database, Layers, Lock, Radar, Wand2 } from "lucide-react";

const tools = [
  {
    title: "Automation",
    description: "Build repeatable workflows that feel instant and reliable.",
    icon: Wand2,
  },
  {
    title: "Compute",
    description: "Performance-first layout patterns with polished interactions.",
    icon: Cpu,
  },
  {
    title: "Data",
    description: "Clear information design and consistent section contrast.",
    icon: Database,
  },
  {
    title: "Security",
    description: "High-contrast UI and confident, predictable states.",
    icon: Lock,
  },
  {
    title: "Observability",
    description: "Subtle highlights that guide attention without noise.",
    icon: Radar,
  },
  {
    title: "Modularity",
    description: "Composable surfaces and cards that scale with new content.",
    icon: Layers,
  },
];

export function ToolsSection() {
  return (
    <section
      id="tools"
      className="relative overflow-hidden px-6 py-16 md:py-24"
    >
      {/* alternate surface to separate sections */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02),transparent_55%,rgba(255,255,255,0.02))]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-[0.22em] text-white/60">SERVICES</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Tools that power modern teams
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
              Minimal surfaces, glass cards, and calm motion—built to feel like a premium AI product.
            </p>
          </div>

          <div className="w-full max-w-md rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="text-sm font-semibold text-white">Starter stack</div>
            <div className="mt-2 text-sm text-white/65">
              Responsive grid • Glass cards • Subtle glows • Smooth hover
            </div>
            <div className="mt-4 h-px w-full bg-white/10" />
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Design system",
                "Components",
                "Motion",
                "Accessibility",
                "Performance",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((t, idx) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.04, ease: "easeOut" }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] rounded-[18px] bg-[radial-gradient(circle_at_10%_10%,rgba(168,85,247,0.30),transparent_60%)] opacity-35 blur-xl transition duration-300 group-hover:opacity-75" />

                <div className="relative h-full rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.05)] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-300 ease-out group-hover:-translate-y-1.5 group-hover:border-white/15">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-white/80" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-base font-semibold text-white">{t.title}</div>
                      <div className="mt-2 text-sm leading-relaxed text-white/65">{t.description}</div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)] opacity-70" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}