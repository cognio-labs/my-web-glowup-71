import { motion } from "framer-motion";
import leadershipImg from "@/assets/leadership-team.png";
import { ClickableImage } from "./ClickableImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

type TeamMember = {
  name: string;
  role: string;
  subtitle?: string;
};

const teamMembers: TeamMember[] = [
  { name: "S. Sharma", role: "Chief Legal Officer" },
  { name: "Sheena Mendiratta", role: "Curator of", subtitle: "Inspired Expression" },
  { name: "R. R. Gupta", role: "Chief Legal Officer" },
  { name: "Manu Puri", role: "AI & L&D Strategist" },
  { name: "Chandna Dixit", role: "Executive Editor", subtitle: "Inner Horizons" },
  { name: "Pratishtha Bhardwaj", role: "Advisor — Pathways", subtitle: "& Presence" },
  { name: "Shalini Gaur", role: "Head — Global", subtitle: "Collaborations & Impact" },
  { name: "Harit Gulia", role: "Visual & Art Alchemist" },
  { name: "Nitya Upadhyay", role: "Editor-in-Soul" },
  { name: "Ashutosh", role: "Custodian of", subtitle: "Digital Pathways" },
];

function getInitials(name: string) {
  const cleaned = name.replace(/[^a-zA-Z.\s-]/g, " ").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);

  if (parts.length === 0) return "A";

  const first = parts[0];
  const last = parts.length > 1 ? parts[parts.length - 1] : "";
  const firstLetter = first.replace(/\./g, "").slice(0, 1).toUpperCase();
  const lastLetter = last ? last.replace(/\./g, "").slice(0, 1).toUpperCase() : "";

  return (firstLetter + lastLetter).slice(0, 2) || firstLetter || "A";
}

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-6 md:py-10 px-6 purple-gradient-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="section-heading text-4xl md:text-5xl">Leadership & Team</h2>
          <div className="gold-divider w-24 mx-auto mt-4" />
          <p className="mt-4 text-lg font-serif text-foreground/80 italic max-w-3xl mx-auto">
            Anandda is guided by a leadership team whose combined experience spans journalism,
            communication, professional development, and reflective leadership.
          </p>
        </motion.div>

        <div className="space-y-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ClickableImage
              src={leadershipImg}
              alt="Anandda Leadership Team"
              className="rounded-2xl image-glow w-full"
              width={1200}
              height={500}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="rounded-2xl image-glow overflow-hidden border border-white/10 bg-[linear-gradient(180deg,#2b0b46_0%,#3b1261_55%,#2b0b46_100%)] p-6 md:p-10">
              <div className="text-center">
                <p className="font-serif italic text-white/80 text-lg md:text-xl">Meet</p>
                <h3 className="mt-1 font-[var(--font-family-display)] tracking-[0.2em] text-white text-3xl md:text-5xl font-bold">
                  OUR TEAM
                </h3>
                <div className="gold-divider w-24 mx-auto mt-4 opacity-80" />
              </div>

              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                {teamMembers.map((member) => (
                  <motion.li
                    key={member.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="rounded-2xl bg-white/95 text-[#1b0f2a] border border-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.18)] overflow-hidden"
                  >
                    <div className="p-5">
                      <div className="mx-auto h-20 w-20 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f7e695_0%,#b58d3c_55%,#7a5a14_100%)] flex items-center justify-center text-white font-[var(--font-family-display)] tracking-widest text-xl shadow-[0_10px_26px_rgba(0,0,0,0.25)]">
                        {getInitials(member.name)}
                      </div>

                      <div className="mt-4 text-center">
                        <p className="font-[var(--font-family-display)] text-sm md:text-base font-semibold tracking-wide">
                          {member.name}
                        </p>

                        <div className="mt-3 inline-flex flex-col items-center gap-1 rounded-full bg-[#0d5c6b] px-4 py-2 text-white">
                          <span className="text-sm font-semibold leading-tight">{member.role}</span>
                          {member.subtitle ? (
                            <span className="text-xs text-white/85 leading-tight">{member.subtitle}</span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <p className="mt-6 text-center text-white/70 text-sm font-serif italic">
                Want individual photos on each card? Add them and I’ll wire them in.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}





