import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Layers,
  Smartphone,
  CheckCircle,
  Eye,
  Sliders,
  DollarSign,
  Heart,
  X,
  Code
} from "lucide-react";
import { FEATURED_PROJECTS } from "../../data/personalData";

export default function PersonalProjects({ onOpenCaseStudy, isDarkMode }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalProject, setModalProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects (4)" },
    { id: "web", label: "Full-Stack Web" },
    { id: "ai", label: "AI & Smart Systems" },
    { id: "mobile", label: "Mobile Apps (Flutter)" },
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (activeFilter === "web") return p.id === "freshharvest" || p.id === "civicai";
    if (activeFilter === "ai") return p.id === "civicai" || p.id === "lifesync";
    if (activeFilter === "mobile") return p.id === "flutterbanking";
    return true;
  });

  return (
    <section
      id="projects"
      style={{
        paddingTop: "var(--space-4xl)",
        paddingBottom: "var(--space-4xl)",
        borderTop: `1px solid ${isDarkMode ? "rgba(255,255,255,0.08)" : "var(--color-border-subtle)"}`,
      }}
    >
      <div className="container-1440">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "var(--space-md)",
            marginBottom: "var(--space-2xl)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
              <span className="badge badge-forest">CORE PROJECTS</span>
              <span style={{ fontSize: "13px", fontWeight: 600, color: isDarkMode ? "#9CB3A5" : "var(--color-muted-text)" }}>
                FEATURED APPLICATIONS & CASE STUDIES
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: isDarkMode ? "#FFFFFF" : "var(--color-forest-green)",
                margin: 0,
              }}
            >
              Real-World Engineering Projects
            </h2>
          </div>

          {/* Filter Buttons */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "13px",
                  fontWeight: activeFilter === f.id ? 700 : 500,
                  background: activeFilter === f.id
                    ? (isDarkMode ? "#6EE7B7" : "var(--color-forest-green)")
                    : (isDarkMode ? "#1A221E" : "var(--color-white)"),
                  color: activeFilter === f.id
                    ? (isDarkMode ? "#121614" : "var(--color-white)")
                    : (isDarkMode ? "#D3DECE" : "var(--color-main-text)"),
                  border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.12)" : "var(--color-border-subtle)"}`,
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Projects List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3xl)" }}>
          {filteredProjects.map((project) => {
            const isFlagship = project.isFlagship;
            return (
              <div
                key={project.id}
                className="surface-card"
                style={{
                  padding: "clamp(20px, 3vw, 36px)",
                  borderRadius: "var(--radius-xl)",
                  background: isDarkMode ? "#1A221E" : "var(--color-warm-ivory)",
                  borderColor: isDarkMode ? "rgba(255,255,255,0.1)" : "var(--color-border-subtle)",
                  boxShadow: isDarkMode ? "0 10px 30px rgba(0,0,0,0.4)" : "var(--shadow-md)",
                  borderLeft: isFlagship ? "6px solid var(--color-forest-green)" : "none",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "clamp(24px, 4vw, 48px)",
                    alignItems: "center",
                  }}
                >
                  {/* Left Column: Visual Mockup / Thumbnail */}
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        borderRadius: "var(--radius-lg)",
                        overflow: "hidden",
                        border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.12)" : "var(--color-border-subtle)"}`,
                        boxShadow: "var(--shadow-md)",
                        background: "#000",
                        position: "relative",
                      }}
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "320px",
                          objectFit: "cover",
                          display: "block",
                          transition: "transform 0.4s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      />

                      {/* Flagship Badge Overlay */}
                      {isFlagship && (
                        <div
                          style={{
                            position: "absolute",
                            top: "14px",
                            left: "14px",
                            background: "rgba(36, 76, 58, 0.92)",
                            backdropFilter: "blur(8px)",
                            color: "#FFF",
                            padding: "6px 12px",
                            borderRadius: "var(--radius-full)",
                            fontSize: "11px",
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            boxShadow: "var(--shadow-sm)",
                          }}
                        >
                          <Sparkles size={13} color="#FFD166" />
                          <span>FLAGSHIP MASTER CASE STUDY • 14 FIGMA PAGES</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Project Info, Tech Stack & Action Links */}
                  <div>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "var(--space-xs)" }}>
                      <span className="badge badge-sage" style={{ fontSize: "11px" }}>
                        {project.category}
                      </span>
                      <span className="badge badge-terracotta" style={{ fontSize: "11px" }}>
                        {project.timeline}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "clamp(24px, 2.5vw, 34px)",
                        color: isDarkMode ? "#FFFFFF" : "var(--color-forest-green)",
                        margin: "4px 0 8px 0",
                      }}
                    >
                      {project.title}:{" "}
                      <span className="font-editorial" style={{ fontWeight: 400, color: "var(--color-terracotta)" }}>
                        {project.tagline}
                      </span>
                    </h3>

                    <p
                      style={{
                        fontSize: "14px",
                        color: isDarkMode ? "#B0C4B8" : "var(--color-main-text)",
                        lineHeight: 1.6,
                        marginBottom: "var(--space-lg)",
                      }}
                    >
                      {project.summary}
                    </p>

                    {/* Impact Metrics Row */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "10px",
                        marginBottom: "var(--space-lg)",
                        background: isDarkMode ? "rgba(255,255,255,0.04)" : "var(--color-warm-cream)",
                        padding: "12px",
                        borderRadius: "var(--radius-md)",
                        border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.08)" : "var(--color-border-subtle)"}`,
                      }}
                    >
                      {project.impactMetrics.map((m) => (
                        <div key={m.label}>
                          <div
                            style={{
                              fontSize: "18px",
                              fontWeight: 800,
                              color: isDarkMode ? "#6EE7B7" : "var(--color-forest-green)",
                              fontFamily: "monospace",
                            }}
                          >
                            {m.value}
                          </div>
                          <div style={{ fontSize: "11px", color: isDarkMode ? "#9CB3A5" : "var(--color-muted-text)" }}>
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Key Highlights Bullet list */}
                    <ul
                      style={{
                        paddingLeft: "18px",
                        margin: "0 0 var(--space-lg) 0",
                        fontSize: "13px",
                        color: isDarkMode ? "#D3DECE" : "var(--color-main-text)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>

                    {/* Tech Stack Chips */}
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "var(--space-lg)" }}>
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: "11px",
                            fontWeight: 600,
                            background: isDarkMode ? "rgba(255,255,255,0.06)" : "var(--color-white)",
                            color: isDarkMode ? "#6EE7B7" : "var(--color-forest-green)",
                            padding: "4px 10px",
                            borderRadius: "var(--radius-full)",
                            border: `1px solid ${isDarkMode ? "rgba(110,231,183,0.2)" : "rgba(36,76,58,0.15)"}`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons: GitHub Link, Live Demo Link, and Master Case Study */}
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
                      {isFlagship ? (
                        <button
                          onClick={onOpenCaseStudy}
                          className="btn btn-primary"
                          style={{
                            padding: "10px 20px",
                            fontSize: "13px",
                            gap: "8px",
                            boxShadow: "0 4px 12px rgba(36, 76, 58, 0.25)",
                          }}
                        >
                          <Sparkles size={15} color="#FFD166" />
                          <span>14-Page Master Case Study</span>
                          <ArrowRight size={15} />
                        </button>
                      ) : (
                        <button
                          onClick={() => setModalProject(project)}
                          className="btn btn-primary"
                          style={{
                            padding: "10px 18px",
                            fontSize: "13px",
                            gap: "6px",
                          }}
                        >
                          <Eye size={15} />
                          <span>View Architecture</span>
                        </button>
                      )}

                      {/* GitHub Link Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline"
                        style={{
                          padding: "10px 16px",
                          fontSize: "13px",
                          gap: "6px",
                          background: isDarkMode ? "rgba(255,255,255,0.05)" : "#FFF",
                          borderColor: isDarkMode ? "rgba(255,255,255,0.15)" : "var(--color-border-subtle)",
                          color: isDarkMode ? "#FFF" : "var(--color-main-text)",
                        }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                        <span>GitHub Code</span>
                        <ExternalLink size={12} />
                      </a>

                      {/* Live Demo Button */}
                      <a
                        href={project.demoUrl}
                        target={project.demoUrl.startsWith("http") ? "_blank" : "_self"}
                        rel="noreferrer"
                        onClick={project.demoUrl.startsWith("#") ? (e) => { e.preventDefault(); onOpenCaseStudy(); } : undefined}
                        className="btn btn-ghost"
                        style={{
                          padding: "10px 14px",
                          fontSize: "13px",
                          gap: "6px",
                          color: isDarkMode ? "#6EE7B7" : "var(--color-forest-green)",
                          fontWeight: 600,
                        }}
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Deep Technical Architecture Walkthrough */}
        {modalProject && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.75)",
              backdropFilter: "blur(8px)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
            onClick={() => setModalProject(null)}
          >
            <div
              className="surface-card"
              style={{
                maxWidth: "760px",
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                background: isDarkMode ? "#1A221E" : "#FFF",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-2xl)",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalProject(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: isDarkMode ? "rgba(255,255,255,0.1)" : "var(--color-warm-ivory)",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: isDarkMode ? "#FFF" : "var(--color-main-text)",
                }}
              >
                <X size={20} />
              </button>

              <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                <span className="badge badge-forest">{modalProject.category}</span>
                <span className="badge badge-terracotta">{modalProject.timeline}</span>
              </div>

              <h2 style={{ fontSize: "28px", color: isDarkMode ? "#FFF" : "var(--color-forest-green)", margin: "0 0 12px 0" }}>
                {modalProject.title} Architecture Walkthrough
              </h2>

              <img
                src={modalProject.thumbnail}
                alt={modalProject.title}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  borderRadius: "var(--radius-lg)",
                  marginBottom: "20px",
                }}
              />

              <h3 style={{ fontSize: "18px", color: isDarkMode ? "#FFF" : "var(--color-forest-green)", marginBottom: "8px" }}>
                System Architecture & Tech Stack
              </h3>
              <p style={{ fontSize: "14px", color: isDarkMode ? "#B0C4B8" : "var(--color-main-text)", lineHeight: 1.6, marginBottom: "16px" }}>
                {modalProject.summary}
              </p>

              <h4 style={{ fontSize: "15px", color: isDarkMode ? "#FFF" : "var(--color-forest-green)", marginBottom: "10px" }}>
                Key Technical Highlights:
              </h4>
              <ul style={{ paddingLeft: "20px", fontSize: "13px", color: isDarkMode ? "#D3DECE" : "var(--color-main-text)", lineHeight: 1.8, marginBottom: "24px" }}>
                {modalProject.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href={modalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ gap: "6px" }}
                >
                  <Code size={16} />
                  <span>Explore GitHub Repository</span>
                </a>
                <button
                  onClick={() => setModalProject(null)}
                  className="btn btn-outline"
                >
                  Close Walkthrough
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
