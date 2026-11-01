import React from "react";
import {
  Sparkles,
  Sun,
  Moon,
  Mail,
  Menu,
  X
} from "lucide-react";
import { PERSONAL_INFO } from "../../data/personalData";

export default function PersonalNavbar({ onOpenCaseStudy, isDarkMode, setIsDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Me", href: "#about" },
    { label: "Technical Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education & Experience", href: "#education" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: isDarkMode
          ? "rgba(18, 22, 20, 0.94)"
          : "rgba(248, 247, 241, 0.94)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.08)" : "var(--color-border-subtle)"}`,
        transition: "all var(--transition-fast)",
      }}
    >
      <div
        className="container-1440"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
          gap: "var(--space-md)",
        }}
      >
        {/* Brand & Designer Identity */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #244C3A, #477A49)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFF",
              fontWeight: 800,
              fontSize: "17px",
              boxShadow: "0 4px 12px rgba(36, 76, 58, 0.25)",
            }}
          >
            AP
          </div>
          <div>
            <div
              style={{
                fontSize: "17px",
                fontWeight: 800,
                color: isDarkMode ? "#F8F7F1" : "var(--color-forest-green)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              {PERSONAL_INFO.name}
            </div>
            <div
              style={{
                fontSize: "11px",
                color: isDarkMode ? "#9CB3A5" : "var(--color-muted-text)",
                fontWeight: 600,
              }}
            >
              {PERSONAL_INFO.title}
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links (7 Required Sections) */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="btn btn-ghost btn-sm"
              style={{
                fontSize: "12.5px",
                fontWeight: 600,
                color: isDarkMode ? "#D3DECE" : "var(--color-main-text)",
                padding: "6px 10px",
                borderRadius: "var(--radius-full)",
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Quick Trigger to Flagship FreshHarvest Case Study */}
          <button
            onClick={onOpenCaseStudy}
            className="btn btn-sm"
            style={{
              background: isDarkMode ? "rgba(71, 122, 73, 0.2)" : "var(--color-soft-sage)",
              color: isDarkMode ? "#6EE7B7" : "var(--color-forest-green)",
              border: `1px solid ${isDarkMode ? "rgba(110, 231, 183, 0.3)" : "rgba(36, 76, 58, 0.2)"}`,
              fontSize: "12px",
              fontWeight: 700,
              gap: "6px",
              padding: "6px 12px",
              borderRadius: "var(--radius-full)",
              marginLeft: "4px",
            }}
            title="Read 14-page master case study"
          >
            <Sparkles size={13} color="var(--color-terracotta)" />
            <span>FreshHarvest (14 Pages)</span>
          </button>
        </nav>

        {/* Actions: Theme Toggle, Resume & Contact CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="btn btn-outline btn-sm"
            style={{
              width: "36px",
              height: "36px",
              padding: 0,
              borderRadius: "50%",
              background: isDarkMode ? "#1E2622" : "var(--color-white)",
              borderColor: isDarkMode ? "rgba(255, 255, 255, 0.15)" : "var(--color-border-subtle)",
              color: isDarkMode ? "#FFD166" : "var(--color-forest-green)",
            }}
            title={isDarkMode ? "Switch to Warm Cream Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Contact Me CTA */}
          <a
            href="#contact"
            className="btn btn-primary btn-sm"
            style={{
              padding: "8px 16px",
              fontSize: "13px",
              gap: "6px",
              borderRadius: "var(--radius-md)",
            }}
          >
            <Mail size={14} />
            <span>Contact Me</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-ghost btn-sm mobile-only"
            style={{
              display: "none",
              padding: "6px",
              color: isDarkMode ? "#FFF" : "var(--color-forest-green)",
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: isDarkMode ? "#1A221E" : "#FFF",
            padding: "16px 24px",
            borderBottom: `1px solid ${isDarkMode ? "rgba(255,255,255,0.1)" : "var(--color-border-subtle)"}`,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: isDarkMode ? "#FFF" : "var(--color-forest-green)",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCaseStudy();
            }}
            className="btn btn-primary btn-sm"
            style={{ marginTop: "8px", gap: "6px" }}
          >
            <Sparkles size={14} />
            <span>View FreshHarvest 14-Page Case Study</span>
          </button>
        </div>
      )}
    </header>
  );
}
