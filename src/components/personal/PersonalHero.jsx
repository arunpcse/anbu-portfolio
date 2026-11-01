import React from "react";
import {
  ArrowRight,
  Sparkles,
  Download,
  Mail,
  MapPin,
  CheckCircle,
  Award,
  Layers,
  Code2,
  Terminal,
  ExternalLink,
  GraduationCap
} from "lucide-react";
import { PERSONAL_INFO } from "../../data/personalData";

export default function PersonalHero({ onOpenCaseStudy, isDarkMode }) {
  const handleDownloadCV = () => {
    alert("Downloading " + PERSONAL_INFO.name + " — Full-Stack Developer & UI/UX Designer Resume (PDF). Contact: " + PERSONAL_INFO.email);
  };

  return (
    <section
      id="hero"
      style={{
        paddingTop: "clamp(36px, 6vw, 68px)",
        paddingBottom: "clamp(48px, 8vw, 84px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-1440">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(32px, 5vw, 64px)",
            alignItems: "center",
          }}
        >
          {/* Left Column: Headline, Bio & CTAs */}
          <div>
            {/* Immediate Availability Pill with Purple Pulse */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "var(--radius-full)",
                background: isDarkMode ? "rgba(124, 58, 237, 0.2)" : "var(--color-purple-soft)",
                border: `1px solid ${isDarkMode ? "rgba(167, 139, 250, 0.4)" : "rgba(124, 58, 237, 0.25)"}`,
                marginBottom: "var(--space-md)",
              }}
            >
              <span
                style={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: "var(--color-purple-primary)",
                  boxShadow: "0 0 0 4px rgba(124, 58, 237, 0.25)",
                }}
                className="pulse-purple"
              />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: isDarkMode ? "#C4B5FD" : "var(--color-purple-primary)",
                  letterSpacing: "0.02em",
                }}
              >
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Main Headline: "Crafting Clean Code, Creating Impact" */}
            <h1
              style={{
                fontSize: "clamp(38px, 5vw, 62px)",
                fontWeight: 800,
                lineHeight: 1.12,
                color: isDarkMode ? "#FFFFFF" : "#1E1B2E",
                letterSpacing: "-0.03em",
                marginBottom: "var(--space-md)",
              }}
            >
              Crafting Clean Code, Creating{" "}
              <span style={{ color: "var(--color-purple-primary)" }}>
                Impact
              </span>
            </h1>

            {/* Intro Subtitle */}
            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 19px)",
                color: isDarkMode ? "#C4B5FD" : "var(--color-muted-text)",
                lineHeight: 1.6,
                maxWidth: "600px",
                marginBottom: "var(--space-xl)",
              }}
            >
              Hi, I'm <strong>{PERSONAL_INFO.name}</strong> — a <strong>{PERSONAL_INFO.title}</strong> passionate about building scalable, high-performance web applications and intuitive interfaces. National Top 10 Finalist at IDEAS 0.5.
            </p>

            {/* Action Buttons: View Projects & Download Resume */}
            <div
              style={{
                display: "flex",
                gap: "var(--space-md)",
                flexWrap: "wrap",
                alignItems: "center",
                marginBottom: "var(--space-xl)",
              }}
            >
              <a
                href="#projects"
                className="btn btn-primary btn-lg"
                style={{
                  gap: "8px",
                  padding: "14px 28px",
                  background: "var(--color-purple-primary)",
                  borderColor: "var(--color-purple-deep)",
                  boxShadow: "0 4px 16px rgba(124, 58, 237, 0.35)",
                }}
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <button
                onClick={handleDownloadCV}
                className="btn btn-secondary btn-lg"
                style={{
                  gap: "8px",
                  padding: "14px 24px",
                  background: isDarkMode ? "rgba(124, 58, 237, 0.15)" : "var(--color-purple-soft)",
                  color: isDarkMode ? "#DDD6FE" : "var(--color-purple-primary)",
                  borderColor: isDarkMode ? "rgba(167, 139, 250, 0.25)" : "var(--color-hover-border)",
                }}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenCaseStudy}
                className="btn btn-outline btn-lg"
                style={{
                  gap: "8px",
                  padding: "14px 20px",
                  background: isDarkMode ? "#181528" : "#FFF",
                  borderColor: isDarkMode ? "rgba(167, 139, 250, 0.25)" : "var(--color-border-subtle)",
                  color: isDarkMode ? "#C4B5FD" : "var(--color-purple-primary)",
                }}
              >
                <Sparkles size={16} color="var(--color-purple-primary)" />
                <span>FreshHarvest Case Study</span>
              </button>
            </div>

            {/* Location & Direct Social Links (GitHub, LinkedIn) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-lg)",
                flexWrap: "wrap",
                paddingTop: "var(--space-md)",
                borderTop: `1px solid ${isDarkMode ? "rgba(167, 139, 250, 0.12)" : "var(--color-border-subtle)"}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  color: isDarkMode ? "#C4B5FD" : "var(--color-muted-text)",
                }}
              >
                <MapPin size={15} color="var(--color-purple-primary)" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              {/* GitHub & LinkedIn Direct Link Buttons */}
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-sm"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 14px",
                    borderRadius: "var(--radius-full)",
                    background: isDarkMode ? "rgba(255,255,255,0.06)" : "var(--color-purple-soft)",
                    color: isDarkMode ? "#FFF" : "var(--color-purple-primary)",
                    fontWeight: 600,
                    fontSize: "12px",
                    textDecoration: "none",
                  }}
                  title="View GitHub"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                  <span>GitHub</span>
                  <ExternalLink size={12} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-sm"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 14px",
                    borderRadius: "var(--radius-full)",
                    background: isDarkMode ? "rgba(255,255,255,0.06)" : "var(--color-purple-soft)",
                    color: isDarkMode ? "#FFF" : "var(--color-purple-primary)",
                    fontWeight: 600,
                    fontSize: "12px",
                    textDecoration: "none",
                  }}
                  title="Connect on LinkedIn"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>
                  <span>LinkedIn</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Developer Craft Terminal (Profile Image Removed as Requested) */}
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            {/* Ambient Purple Aura Lighting */}
            <div
              style={{
                position: "absolute",
                width: "420px",
                height: "420px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(124, 58, 237, 0.28) 0%, rgba(167, 139, 250, 0.15) 50%, transparent 70%)",
                filter: "blur(48px)",
                zIndex: 0,
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 1,
                maxWidth: "460px",
                width: "100%",
              }}
            >
              {/* Modern Mac Terminal / Code Canvas Card */}
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: `1px solid ${isDarkMode ? "rgba(167, 139, 250, 0.25)" : "rgba(124, 58, 237, 0.2)"}`,
                  boxShadow: isDarkMode
                    ? "0 25px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(124, 58, 237, 0.25)"
                    : "0 20px 45px rgba(124, 58, 237, 0.14)",
                  background: isDarkMode ? "#141122" : "#1A172E",
                  color: "#EDE9FE",
                }}
              >
                {/* Terminal Window Header Bar */}
                <div
                  style={{
                    background: isDarkMode ? "#0F0D1A" : "#121020",
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid rgba(167, 139, 250, 0.12)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#EF4444" }} />
                    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#F59E0B" }} />
                    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#10B981" }} />
                    <span style={{ fontSize: "12px", color: "#A78BFA", marginLeft: "8px", fontFamily: "monospace" }}>
                      anbarasan.developer.ts
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#8B5CF6" }}>
                    <Terminal size={13} />
                    <span>Active</span>
                  </div>
                </div>

                {/* Code Window Body */}
                <div
                  style={{
                    padding: "20px",
                    fontFamily: "'Fira Code', monospace, Consolas",
                    fontSize: "13px",
                    lineHeight: 1.65,
                  }}
                >
                  <div>
                    <span style={{ color: "#F472B6" }}>const</span>{" "}
                    <span style={{ color: "#60A5FA" }}>engineer</span>:{" "}
                    <span style={{ color: "#FBBF24" }}>FullStackArchitect</span> = &#123;
                  </div>
                  <div style={{ paddingLeft: "16px" }}>
                    <span style={{ color: "#A78BFA" }}>name</span>:{" "}
                    <span style={{ color: "#34D399" }}>"{PERSONAL_INFO.name}"</span>,
                  </div>
                  <div style={{ paddingLeft: "16px" }}>
                    <span style={{ color: "#A78BFA" }}>title</span>:{" "}
                    <span style={{ color: "#34D399" }}>"Full-Stack Developer & UI/UX"</span>,
                  </div>
                  <div style={{ paddingLeft: "16px" }}>
                    <span style={{ color: "#A78BFA" }}>degree</span>:{" "}
                    <span style={{ color: "#34D399" }}>"B.E. Computer Science (8.6 CGPA)"</span>,
                  </div>
                  <div style={{ paddingLeft: "16px" }}>
                    <span style={{ color: "#A78BFA" }}>nationalHonor</span>:{" "}
                    <span style={{ color: "#FBBF24" }}>"IDEAS 0.5 National Top 10"</span>,
                  </div>
                  <div style={{ paddingLeft: "16px" }}>
                    <span style={{ color: "#A78BFA" }}>coreStack</span>: [
                    <span style={{ color: "#60A5FA" }}>"React"</span>,{" "}
                    <span style={{ color: "#34D399" }}>"Node"</span>,{" "}
                    <span style={{ color: "#F472B6" }}>"Python"</span>,{" "}
                    <span style={{ color: "#FBBF24" }}>"Flutter"</span>,{" "}
                    <span style={{ color: "#C084FC" }}>"Figma"</span>
                    ],
                  </div>
                  <div style={{ paddingLeft: "16px" }}>
                    <span style={{ color: "#A78BFA" }}>status</span>:{" "}
                    <span style={{ color: "#34D399" }}>"Immediate Joiner"</span>,
                  </div>
                  <div style={{ paddingLeft: "16px" }}>
                    <span style={{ color: "#A78BFA" }}>openToInnovate</span>:{" "}
                    <span style={{ color: "#60A5FA" }}>true</span>
                  </div>
                  <div>&#125;;</div>

                  {/* Terminal Command Output Status */}
                  <div
                    style={{
                      marginTop: "16px",
                      paddingTop: "12px",
                      borderTop: "1px dashed rgba(167, 139, 250, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "12px",
                    }}
                  >
                    <span style={{ color: "#34D399", display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#34D399" }} />
                      Ready to Build & Ship
                    </span>
                    <span style={{ color: "#A78BFA", opacity: 0.8 }}>TypeScript 5.0 • React 19</span>
                  </div>
                </div>

                {/* Floating Tech Stack Badges Strip */}
                <div
                  style={{
                    background: isDarkMode ? "#0F0D1A" : "#121020",
                    padding: "10px 16px",
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    borderTop: "1px solid rgba(167, 139, 250, 0.12)",
                  }}
                >
                  {["React.js", "Python", "Flutter", "Figma", "Node.js", "Three.js"].map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: "11px",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        background: "rgba(124, 58, 237, 0.2)",
                        color: "#C4B5FD",
                        border: "1px solid rgba(124, 58, 237, 0.3)",
                        fontWeight: 600,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Quantitative Impact Highlights in Light Grey + Purple Styling */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "var(--space-lg)",
            marginTop: "clamp(36px, 5vw, 64px)",
          }}
        >
          {PERSONAL_INFO.stats.map((stat) => (
            <div
              key={stat.label}
              className="surface-card"
              style={{
                padding: "var(--space-lg)",
                borderRadius: "var(--radius-lg)",
                background: isDarkMode ? "#181528" : "var(--color-warm-ivory)",
                borderColor: isDarkMode ? "rgba(167, 139, 250, 0.14)" : "var(--color-border-subtle)",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: 800,
                  color: "var(--color-purple-primary)",
                  letterSpacing: "-0.02em",
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: isDarkMode ? "#EDE9FE" : "var(--color-main-text)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
