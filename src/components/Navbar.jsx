import React, { useState, useEffect } from "react";
import {
  Sprout,
  Compass,
  Layers,
  Sparkles,
  ChevronDown,
  ExternalLink,
  BookOpen,
  Award,
  Check
} from "lucide-react";
import { FIGMA_PAGES } from "../data/portfolioData";

export default function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 40);
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navCategories = [
    { label: "Overview", target: "section-overview" },
    { label: "Problem & Goals", target: "section-problem" },
    { label: "Personas & Journey", target: "section-personas" },
    { label: "Architecture", target: "section-ia" },
    { label: "Wireframes", target: "section-wireframes" },
    { label: "Design System", target: "section-design-system" },
    { label: "UI Showcase", target: "section-ui-showcase" },
    { label: "Delivery Tracking", target: "section-delivery" },
    { label: "Live Prototype", target: "section-prototype" },
    { label: "Evaluation", target: "section-usability" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: isScrolled
          ? "rgba(248, 247, 241, 0.94)"
          : "rgba(248, 247, 241, 0.98)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--color-border-subtle)",
        transition: "all var(--transition-fast)",
        boxShadow: isScrolled ? "var(--shadow-sm)" : "none",
      }}
    >
      {/* Top Reading Progress Bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "3px",
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, var(--color-forest-green), var(--color-terracotta))",
          zIndex: 101,
          transition: "width 0.1s ease-out",
        }}
      />

      <div
        className="container-1440"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
          gap: "var(--space-md)",
        }}
      >
        {/* Brand & Academic Tag */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href="#section-cover"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: 800,
              fontSize: "19px",
              color: "var(--color-forest-green)",
              letterSpacing: "-0.02em",
            }}
          >
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "var(--radius-sm)",
                background: "var(--color-forest-green)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-white)",
              }}
            >
              <Sprout size={20} />
            </div>
            <span>FreshHarvest</span>
          </a>
          <span
            className="badge badge-sage"
            style={{ fontSize: "10px", padding: "2px 8px", display: "none" }}
          >
            Academic Capstone
          </span>
        </div>

        {/* Quick Nav Links (Desktop) */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
          className="desktop-nav"
        >
          {navCategories.slice(0, 7).map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              className="btn btn-ghost btn-sm"
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "var(--color-main-text)",
                padding: "6px 10px",
                borderRadius: "var(--radius-full)",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Figma Pages Dropdown & Action CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* 14-Page Figma Navigator */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="btn btn-outline btn-sm"
              style={{
                fontSize: "12px",
                padding: "6px 12px",
                background: "var(--color-white)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              title="Browse all 14 Figma Pages"
            >
              <Layers size={14} color="var(--color-forest-green)" />
              <span>14 Figma Pages</span>
              <ChevronDown size={13} />
            </button>

            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  marginTop: "8px",
                  background: "var(--color-white)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-border-subtle)",
                  boxShadow: "var(--shadow-xl)",
                  width: "320px",
                  maxHeight: "440px",
                  overflowY: "auto",
                  padding: "8px",
                  zIndex: 200,
                }}
              >
                <div
                  style={{
                    padding: "6px 10px",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "var(--color-muted-text)",
                    borderBottom: "1px solid var(--color-border-subtle)",
                    marginBottom: "4px",
                  }}
                >
                  Figma Master Canvas Navigation
                </div>
                {FIGMA_PAGES.map((page) => (
                  <a
                    key={page.id}
                    href={`#section-${page.id}`}
                    onClick={() => setDropdownOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      padding: "8px 10px",
                      borderRadius: "6px",
                      color: "var(--color-main-text)",
                      transition: "background var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-soft-sage)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "var(--color-forest-green)",
                        fontFamily: "monospace",
                        marginTop: "1px",
                      }}
                    >
                      #{page.id}
                    </span>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-forest-green)" }}>
                        {page.title}
                      </div>
                      <div style={{ fontSize: "11px", color: "var(--color-muted-text)", lineHeight: 1.3 }}>
                        {page.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Direct CTA to Interactive Prototype */}
          <a
            href="#section-prototype"
            className="btn btn-primary btn-sm"
            style={{
              gap: "6px",
              padding: "7px 14px",
              fontSize: "12px",
              boxShadow: "0 2px 6px rgba(36, 76, 58, 0.2)",
            }}
          >
            <Sparkles size={14} color="#F8F7F1" />
            <span>Interactive Demo</span>
          </a>
        </div>
      </div>
    </header>
  );
}
