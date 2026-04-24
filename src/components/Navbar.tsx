import { useEffect, useState, useRef } from "react";
import {
  Menu,
  X,
  Home,
  BookOpen,
  Globe,
  Leaf,
  Users,
  MessageSquare,
  ChevronDown,
  PenTool,
  Sparkles,
  Building2,
  Mail,
} from "lucide-react";
import logo from "@/assets/logo.png";

type NavItem = {
  label: string;
  sectionId: string;
  icon: typeof Home;
};

const mainLinks: NavItem[] = [
  { label: "Home", sectionId: "home", icon: Home },
  { label: "About", sectionId: "about", icon: BookOpen },
  { label: "Ecosystem", sectionId: "ecosystem", icon: Globe },
  { label: "Philosophy", sectionId: "philosophy", icon: Sparkles },
  { label: "Journey", sectionId: "journey", icon: Leaf },
];

const moreLinks: NavItem[] = [
  { label: "Writers", sectionId: "writers", icon: PenTool },
  { label: "Why Created", sectionId: "why-created", icon: Sparkles },
  { label: "Archives", sectionId: "archives", icon: BookOpen },
  { label: "Global Reach", sectionId: "global-reach", icon: Globe },
  { label: "Readership", sectionId: "readership", icon: Users },
  { label: "Themes", sectionId: "themes", icon: Leaf },
  { label: "Movement", sectionId: "global-movement", icon: Globe },
  { label: "Farms", sectionId: "farms-campaign", icon: Leaf },
  { label: "Conversations", sectionId: "conversations", icon: MessageSquare },
  { label: "Organisations", sectionId: "strong-organisations", icon: Building2 },
  { label: "Leadership", sectionId: "leadership", icon: Users },
  { label: "Partnering", sectionId: "partnering", icon: Building2 },
  { label: "Strengthening", sectionId: "strengthening", icon: Sparkles },
  { label: "Contact", sectionId: "contact", icon: Mail },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const allIds = [...mainLinks, ...moreLinks].map((l) => l.sectionId);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close more dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen);
  }, [mobileOpen]);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
    setMoreOpen(false);
  };

  const allLinks = [...mainLinks, ...moreLinks];

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <button
            className="logo"
            onClick={() => handleNav("home")}
            type="button"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <img
              src={logo}
              alt="Anandda logo"
              className="h-12 w-12 rounded-full object-cover mr-3 inline-block shadow-md"
            />
            <span className="logo-text">ANAND<span className="italic">D</span>A</span>
          </button>

          {/* Desktop nav */}
          <nav className="nav-links" aria-label="Primary">
            {mainLinks.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.sectionId}
                  type="button"
                  className={`nav-link ${activeSection === item.sectionId ? "active" : ""}`}
                  onClick={() => handleNav(item.sectionId)}
                >
                  <Icon size={14} />
                  {item.label}
                </button>
              );
            })}

            {/* More dropdown */}
            <div className="dropdown" ref={moreRef}>
              <button
                type="button"
                className={`nav-link ${moreLinks.some((l) => l.sectionId === activeSection) ? "active" : ""}`}
                onClick={() => setMoreOpen((p) => !p)}
                onMouseEnter={() => setMoreOpen(true)}
              >
                More
                <ChevronDown className={`chevron ${moreOpen ? "rotated" : ""}`} size={14} />
              </button>
              <div
                className={`more-dropdown ${moreOpen ? "open" : ""}`}
                onMouseLeave={() => setMoreOpen(false)}
              >
                {moreLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.sectionId}
                      type="button"
                      className={`more-link ${activeSection === item.sectionId ? "active" : ""}`}
                      onClick={() => handleNav(item.sectionId)}
                    >
                      <span className="more-icon">
                        <Icon size={14} />
                      </span>
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* Hamburger */}
          <button
            className={`hamburger ${mobileOpen ? "open" : ""}`}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((p) => !p)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`mobile-overlay ${mobileOpen ? "show" : ""}`}>
        <div className="mobile-drawer">
          <div className="mobile-header">
            <span className="logo-text" style={{ fontSize: "0.9rem", letterSpacing: "0.35em" }}>
              ANAND<span className="italic">D</span>A
            </span>
            <button
              className="mobile-close"
              onClick={() => setMobileOpen(false)}
              type="button"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <div className="mobile-links">
            {allLinks.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.sectionId}
                  type="button"
                  className={`mobile-link ${activeSection === item.sectionId ? "active" : ""}`}
                  onClick={() => handleNav(item.sectionId)}
                >
                  <span className="mobile-link-inner">
                    <Icon size={16} />
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
