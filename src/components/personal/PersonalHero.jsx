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
  Code,
  ExternalLink,
  GraduationCap
} from "lucide-react";
import { PERSONAL_INFO } from "../../data/personalData";

export default function PersonalHero({ onOpenCaseStudy, isDarkMode }) {
  const handleDownloadCV = () => {
    // Direct resume download prompt / trigger
    const link = document.createElement("a");
    link.href = "/assets/images/arun-real-photo.jpg"; // Or resume pdf
    link.download = "Arun_P_Resume.jpg";
    document.body.appendChild(link);
    alert("Resume download initiated for " + PERSONAL_INFO.name + " (" + PERSONAL_INFO.title + "). Contact: " + PERSONAL_INFO.email);
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
            {/* Immediate Availability Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "var(--radius-full)",
                background: isDarkMode ? "rgba(46, 125, 50, 0.2)" : "var(--color-soft-sage)",
                border: `1px solid ${isDarkMode ? "rgba(71, 122, 73, 0.4)" : "rgba(36, 76, 58, 0.2)"}`,
                marginBottom: "var(--space-md)",
              }}
            >
              <span
                style={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: "#2E7D32",
                  boxShadow: "0 0 0 4px rgba(46, 125, 50, 0.25)",
                }}
                className="pulse-green"
              />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: isDarkMode ? "#6EE7B7" : "var(--color-forest-green)",
                  letterSpacing: "0.02em",
                }}
              >
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(36px, 4.8vw, 58px)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: isDarkMode ? "#FFFFFF" : "var(--color-forest-green)",
                letterSpacing: "-0.03em",
                marginBottom: "var(--space-md)",
              }}
            >
              Building <span className="font-editorial" style={{ fontWeight: 400, color: "var(--color-terracotta)" }}>intelligent applications</span> & high-craft user interfaces.
            </h1>

            {/* Intro Subtitle */}
            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 19px)",
                color: isDarkMode ? "#B0C4B8" : "var(--color-muted-text)",
                lineHeight: 1.6,
                maxWidth: "620px",
                marginBottom: "var(--space-xl)",
              }}
            >
              Hi, I'm <strong>{PERSONAL_INFO.name}</strong> — a <strong>{PERSONAL_INFO.title}</strong> passionate about bridging technical engineering logic with intuitive, human-centered UI design. National Top 10 Finalist at IDEAS 0.5.
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
                  boxShadow: "0 4px 14px rgba(36, 76, 58, 0.25)",
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
                  background: isDarkMode ? "#1A221E" : "#FFF",
                  borderColor: isDarkMode ? "rgba(255, 255, 255, 0.15)" : "var(--color-border-subtle)",
                  color: isDarkMode ? "#6EE7B7" : "var(--color-forest-green)",
                }}
              >
                <Sparkles size={16} color="var(--color-terracotta)" />
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
                borderTop: `1px solid ${isDarkMode ? "rgba(255,255,255,0.08)" : "var(--color-border-subtle)"}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  color: isDarkMode ? "#9CB3A5" : "var(--color-muted-text)",
                }}
              >
                <MapPin size={15} color="var(--color-forest-green)" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              {/* GitHub & LinkedIn Direct Link Buttons */}
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-sm"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 12px",
                    borderRadius: "var(--radius-full)",
                    background: isDarkMode ? "rgba(255,255,255,0.06)" : "var(--color-soft-sage)",
                    color: isDarkMode ? "#FFF" : "var(--color-forest-green)",
                    fontWeight: 600,
                    fontSize: "12px",
                    textDecoration: "none",
                  }}
                  title="View Arun's GitHub"
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
                    padding: "6px 12px",
                    borderRadius: "var(--radius-full)",
                    background: isDarkMode ? "rgba(255,255,255,0.06)" : "var(--color-soft-sage)",
                    color: isDarkMode ? "#FFF" : "var(--color-forest-green)",
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

          {/* Right Column: Arun P.'s Real Profile Photograph */}
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            {/* Ambient decorative lighting */}
            <div
              style={{
                position: "absolute",
                width: "380px",
                height: "380px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(36, 76, 58, 0.28) 0%, rgba(2, 132, 199, 0.18) 50%, transparent 70%)",
                filter: "blur(40px)",
                zIndex: 0,
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 1,
                maxWidth: "380px",
                width: "100%",
              }}
            >
              {/* Image Frame with Studio Border */}
              <div
                style={{
                  borderRadius: "28px",
                  overflow: "hidden",
                  border: `4px solid ${isDarkMode ? "rgba(255, 255, 255, 0.12)" : "#FFFFFF"}`,
                  boxShadow: isDarkMode
                    ? "0 30px 60px rgba(0, 0, 0, 0.6)"
                    : "0 25px 50px rgba(36, 76, 58, 0.18)",
                  position: "relative",
                  background: isDarkMode ? "#1A221E" : "#FFF",
                }}
              >
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name + " - " + PERSONAL_INFO.title}
                  style={{
                    width: "100%",
                    height: "440px",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                  }}
                />

                {/* Floating Bottom Card: Real Credential Badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    right: "16px",
                    background: isDarkMode
                      ? "rgba(18, 22, 20, 0.92)"
                      : "rgba(255, 255, 255, 0.94)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "16px",
                    padding: "12px 16px",
                    border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(36, 76, 58, 0.15)"}`,
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "var(--color-forest-green)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFF",
                    }}
                  >
                    <Award size={18} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: isDarkMode ? "#FFF" : "var(--color-forest-green)",
                      }}
                    >
                      {PERSONAL_INFO.name}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: isDarkMode ? "#9CB3A5" : "var(--color-muted-text)",
                      }}
                    >
                      Computer Science Engineer • Immediate Joiner
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Genuine Fresher Stats Cards */}
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
                background: isDarkMode ? "#1A221E" : "var(--color-warm-ivory)",
                borderColor: isDarkMode ? "rgba(255,255,255,0.08)" : "var(--color-border-subtle)",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: 800,
                  color: isDarkMode ? "#6EE7B7" : "var(--color-forest-green)",
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
                  color: isDarkMode ? "#E0EADF" : "var(--color-main-text)",
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
