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
  image?: string;
  labelColor: 'yellow' | 'teal';
};

const teamMembers: TeamMember[] = [
  { name: "S. Sharma", role: "Chief Legal Officer", labelColor: 'yellow' },
  { name: "Sheena Mendiratta", role: "Curator of", subtitle: "Inspired Expression", labelColor: 'teal' },
  { name: "R. R. Gupta", role: "Chief Legal Officer", labelColor: 'yellow' },
  { name: "Manu Puri", role: "AI & L&D Strategist", labelColor: 'teal' },
  { name: "Chandna Dixit", role: "Executive Editor", subtitle: "Inner Horizons", labelColor: 'yellow' },
  { name: "Pratishtha Bhardwaj", role: "Advisor — Pathways", subtitle: "& Presence", labelColor: 'teal' },
  { name: "Karuna Mishra", role: "Spiritual Features", subtitle: "Editor", labelColor: 'yellow' },
  { name: "Harit Gulia", role: "Visual & Art Alchemist", labelColor: 'teal' },
  { name: "Nitya Upadhyay", role: "Editor-in-Soul", labelColor: 'yellow' },
  { name: "Ashutosh", role: "Custodian of", subtitle: "Digital Pathways", labelColor: 'teal' },
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
            <div className="rounded-2xl image-glow overflow-hidden border border-white/10 bg-[#1b0f2a] p-6 md:p-10">
              <div className="text-center mb-10">
                <h3 className="flex flex-col items-center justify-center">
                  <span className="font-serif italic text-white/90 text-3xl md:text-5xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Meet</span>
                  <span className="font-[var(--font-family-display)] tracking-widest text-white text-4xl md:text-6xl font-bold uppercase">
                    OUR TEAM
                  </span>
                </h3>
              </div>

              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-x-6 md:gap-y-10">
                {teamMembers.map((member) => (
                  <motion.li
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col group cursor-pointer"
                  >
                    <div className="relative bg-[#fcf9f2] rounded-t-3xl pt-6 px-4 pb-2 flex-grow shadow-lg border border-white/20 transition-shadow duration-300 group-hover:shadow-2xl">
                      {/* Photo Area */}
                      <div className="aspect-[4/5] w-full rounded-2xl bg-gray-200 overflow-hidden relative shadow-inner">
                        {member.image ? (
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        ) : (
                          <div className="w-full h-full bg-[radial-gradient(circle_at_center,#e5e7eb_0%,#d1d5db_100%)] flex items-center justify-center text-gray-400">
                             {/* Initials as fallback */}
                             <span className="text-4xl font-bold opacity-30 group-hover:scale-110 transition-transform duration-500">{getInitials(member.name)}</span>
                          </div>
                        )}
                        
                        {/* Role Label Overlay */}
                        <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-[90%] py-1.5 px-2 rounded-xl text-center shadow-md z-10 transition-transform duration-300 group-hover:scale-105 ${
                          member.labelColor === 'yellow' 
                            ? 'bg-[#eebc1d] text-[#1b0f2a]' 
                            : 'bg-[#0d5c6b] text-white'
                        }`}>
                          <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-tight leading-tight">
                            {member.role}
                          </p>
                          {member.subtitle && (
                            <p className={`text-[8px] md:text-[9px] leading-tight ${member.labelColor === 'yellow' ? 'text-[#1b0f2a]/80' : 'text-white/80'}`}>
                              {member.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Name below photo */}
                      <div className="mt-7 mb-2 text-center">
                        <p className="font-[var(--font-family-display)] text-xs md:text-sm font-bold tracking-widest text-[#1b0f2a] uppercase transition-colors duration-300 group-hover:text-gold">
                          {member.name}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <p className="mt-12 text-center text-white/50 text-xs font-serif italic">
                Replace placeholders with actual team member portraits for the full premium experience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
