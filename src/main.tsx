import { createRoot } from "react-dom/client";
import "./styles.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { WhyCreatedSection } from "./components/WhyCreatedSection";
import { GlobalReachSection } from "./components/GlobalReachSection";
import { EcosystemSection } from "./components/EcosystemSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { ReadershipSection } from "./components/ReadershipSection";
import { JourneySection } from "./components/JourneySection";
import { ThemesSection } from "./components/ThemesSection";
import { GlobalMovementSection } from "./components/GlobalMovementSection";
import { FarmsCampaignSection } from "./components/FarmsCampaignSection";
import { ConversationsSection } from "./components/ConversationsSection";
import { WritersSection } from "./components/WritersSection";
import { StrongOrganisationsSection } from "./components/StrongOrganisationsSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { PartneringSection } from "./components/PartneringSection";
import { StrengtheningSection } from "./components/StrengtheningSection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";

import { NeonGridSection } from "./components/NeonGridSection";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <NeonGridSection />
        <WhyCreatedSection />
        <EcosystemSection />
        <GlobalReachSection />
        <PhilosophySection />
        <ReadershipSection />
        <JourneySection />
        <ThemesSection />
        <GlobalMovementSection />
        <FarmsCampaignSection />
        <ConversationsSection />
        <WritersSection />
        <StrongOrganisationsSection />
        <LeadershipSection />
        <PartneringSection />
        <StrengtheningSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
