import { motion } from "framer-motion";
import { BrainCircuit, Zap, Shield, Workflow, Globe, Sparkles } from "lucide-react";

const features = [
  {
    title: "AI-ready foundation",
    description: "A clean, scalable UI system designed for modern product experiences.",
    icon: BrainCircuit,
  },
  {
    title: "Fast, responsive layouts",
    description: "Mobile-first grids with premium spacing and strong visual hierarchy.",
    icon: Zap,
  },
  {
    title: "Secure by design",
    description: "Clear contrasts, accessible typography, and predictable interactions.",
    icon: Shield,
  },
  {
    title: "Workflow friendly",
    description: "Components that feel calm, minimal, and crafted like Linear/Vercel.",
    icon: Workflow,
  },
  {
    title: "Global scale",
    description: "Patterns that work across pages while keeping the UI lightweight.",
    icon: Globe,
  },
  {
    title: "Premium polish",
    description: "Soft shadows, glass surfaces, and subtle glow accents—never flashy.",
    icon: Sparkles,
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden px-6 py-16 md:py-24"
    >
      {/* subtle section surface */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_55%,rgba(255,255,255,0.02))]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-medium tracking-[0.22em] text-white/60">
            FEATURES
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Premium SaaS-grade design system
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
            Dark gradients, subtle radial glows, and glassmorphism cards—built for an AI / tech startup feel.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.04, ease: "easeOut" }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] rounded-[18px] bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.35),transparent_60%)] opacity-40 blur-xl transition duration-300 group-hover:opacity-80" />

                <div className="relative h-full rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.05)] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-300 ease-out group-hover:-translate-y-1.5 group-hover:border-white/15">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-white/80" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-base font-semibold text-white">
                        {f.title}
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-white/65">
                        {f.description}
                      </div>
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