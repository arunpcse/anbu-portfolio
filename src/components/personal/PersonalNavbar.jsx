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
          ? "rgba(14, 12, 23, 0.94)"
          : "rgba(248, 249, 253, 0.94)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${isDarkMode ? "rgba(167, 139, 250, 0.12)" : "var(--color-border-subtle)"}`,
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
        {/* Brand & Developer Identity */}
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
              background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFF",
              fontWeight: 800,
              fontSize: "16px",
              boxShadow: "0 4px 14px rgba(124, 58, 237, 0.35)",
            }}
          >
            AA
          </div>
          <div>
            <div
              style={{
                fontSize: "17px",
                fontWeight: 800,
                color: isDarkMode ? "#F8F7F1" : "#1E1B2E",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              {PERSONAL_INFO.name}
            </div>
            <div
              style={{
                fontSize: "11px",
                color: isDarkMode ? "#C4B5FD" : "var(--color-muted-text)",
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
                color: isDarkMode ? "#EDE9FE" : "var(--color-main-text)",
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
              background: isDarkMode ? "rgba(124, 58, 237, 0.2)" : "var(--color-purple-soft)",
              color: isDarkMode ? "#C4B5FD" : "var(--color-purple-primary)",
              border: `1px solid ${isDarkMode ? "rgba(167, 139, 250, 0.3)" : "var(--color-hover-border)"}`,
              fontSize: "12px",
              fontWeight: 700,
              gap: "6px",
              padding: "6px 12px",
              borderRadius: "var(--radius-full)",
              marginLeft: "4px",
            }}
            title="Read 14-page master case study"
          >
            <Sparkles size={13} color="var(--color-purple-primary)" />
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
              background: isDarkMode ? "#181528" : "var(--color-white)",
              borderColor: isDarkMode ? "rgba(167, 139, 250, 0.25)" : "var(--color-border-subtle)",
              color: isDarkMode ? "#FBBF24" : "var(--color-purple-primary)",
            }}
            title={isDarkMode ? "Switch to Light Grey Mode" : "Switch to Dark Purple Mode"}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Contact Me CTA (Purple) */}
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
              color: isDarkMode ? "#FFF" : "var(--color-purple-primary)",
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
            background: isDarkMode ? "#181528" : "#FFF",
            padding: "16px 24px",
            borderBottom: `1px solid ${isDarkMode ? "rgba(167, 139, 250, 0.15)" : "var(--color-border-subtle)"}`,
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
                color: isDarkMode ? "#FFF" : "#1E1B2E",
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
