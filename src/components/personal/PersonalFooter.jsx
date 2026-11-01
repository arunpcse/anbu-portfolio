import React from "react";
import { ArrowUp, Sparkles, Heart } from "lucide-react";
import { PERSONAL_INFO } from "../../data/personalData";

export default function PersonalFooter({ onOpenCaseStudy, isDarkMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: isDarkMode ? "#0A0912" : "#1A172E",
        color: "#EDE9FE",
        padding: "var(--space-4xl) 0 var(--space-2xl) 0",
        borderTop: `1px solid ${isDarkMode ? "rgba(167, 139, 250, 0.1)" : "rgba(124, 58, 237, 0.2)"}`,
      }}
    >
      <div className="container-1440">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "var(--space-2xl)",
            marginBottom: "var(--space-3xl)",
          }}
        >
          {/* Brand & Developer Summary */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "var(--color-purple-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFF",
                  fontWeight: 800,
                  fontSize: "15px",
                }}
              >
                AA
              </div>
              <div>
                <strong style={{ fontSize: "18px", color: "#FFF" }}>{PERSONAL_INFO.name}</strong>
                <div style={{ fontSize: "11px", color: "#C4B5FD" }}>{PERSONAL_INFO.title}</div>
              </div>
            </div>
            <p style={{ fontSize: "13px", color: "#C4B5FD", lineHeight: 1.6, maxWidth: "340px", margin: 0, marginBottom: "16px" }}>
              Engineering scalable software applications, accessible full-stack systems, and intuitive user interfaces.
            </p>
            <div style={{ fontSize: "12px", color: "#A78BFA" }}>
              📍 {PERSONAL_INFO.location}
            </div>
          </div>

          {/* Quick Nav Links (7 Required Sections) */}
          <div>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#FFF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
              Portfolio Sections
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
              <a href="#hero" style={{ color: "#C4B5FD", textDecoration: "none" }}>01. Home / Hero</a>
              <a href="#about" style={{ color: "#C4B5FD", textDecoration: "none" }}>02. About Me</a>
              <a href="#skills" style={{ color: "#C4B5FD", textDecoration: "none" }}>03. Technical Skills</a>
              <a href="#projects" style={{ color: "#C4B5FD", textDecoration: "none" }}>04. Projects</a>
              <a href="#education" style={{ color: "#C4B5FD", textDecoration: "none" }}>05. Education & Experience</a>
              <a href="#achievements" style={{ color: "#C4B5FD", textDecoration: "none" }}>06. Achievements</a>
              <a href="#contact" style={{ color: "#C4B5FD", textDecoration: "none" }}>07. Contact Me</a>
            </div>
          </div>

          {/* Flagship Case Study Jump */}
          <div>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#FFF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
              Flagship Project
            </div>
            <p style={{ fontSize: "12px", color: "#C4B5FD", lineHeight: 1.5, margin: "0 0 10px 0" }}>
              Explore the full 14-page master case study for FreshHarvest, complete with live road-distance delivery simulations.
            </p>
            <button
              onClick={onOpenCaseStudy}
              className="btn btn-outline btn-sm"
              style={{
                background: "rgba(124, 58, 237, 0.2)",
                color: "#DDD6FE",
                borderColor: "rgba(167, 139, 250, 0.3)",
                gap: "6px",
              }}
            >
              <Sparkles size={13} color="var(--color-purple-primary)" />
              <span>Open FreshHarvest (14 Pages)</span>
            </button>
          </div>

          {/* Socials & Connect */}
          <div>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#FFF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
              Connect & Code
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#EDE9FE",
                  textDecoration: "none",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                <span>GitHub Repositories</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#EDE9FE",
                  textDecoration: "none",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#EDE9FE",
                  textDecoration: "none",
                }}
              >
                <span>✉️ {PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div
          style={{
            borderTop: "1px solid rgba(167, 139, 250, 0.12)",
            paddingTop: "var(--space-lg)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "12px",
            color: "#A78BFA",
          }}
        >
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, Three.js, and clean code principles.
          </div>

          <button
            onClick={scrollToTop}
            className="btn btn-ghost btn-sm"
            style={{
              color: "#C4B5FD",
              fontSize: "12px",
              gap: "4px",
              padding: "4px 8px",
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
