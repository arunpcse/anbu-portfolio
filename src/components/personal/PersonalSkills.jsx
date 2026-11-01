import React from "react";
import {
  Code,
  Layers,
  Database,
  Wrench,
  CheckCircle,
  Sparkles,
  Terminal,
  Cpu
} from "lucide-react";
import { TECHNICAL_SKILLS } from "../../data/personalData";

export default function PersonalSkills({ isDarkMode }) {
  const iconMap = {
    Code: Code,
    Layers: Layers,
    Database: Database,
    Wrench: Wrench,
  };

  return (
    <section
      id="skills"
      style={{
        paddingTop: "var(--space-4xl)",
        paddingBottom: "var(--space-4xl)",
        borderTop: `1px solid ${isDarkMode ? "rgba(167, 139, 250, 0.12)" : "var(--color-border-subtle)"}`,
      }}
    >
      <div className="container-1440">
        {/* Section Header */}
        <div style={{ marginBottom: "var(--space-3xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
            <span className="badge badge-forest">TECHNICAL ARSENAL</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: isDarkMode ? "#C4B5FD" : "var(--color-muted-text)" }}>
              STACK & COMPETENCIES
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              color: isDarkMode ? "#FFFFFF" : "#1E1B2E",
              margin: "0 0 16px 0",
            }}
          >
            Technical Skills & Engineering Toolkit
          </h2>
          <p
            style={{
              maxWidth: "800px",
              fontSize: "17px",
              color: isDarkMode ? "#C4B5FD" : "var(--color-muted-text)",
              lineHeight: 1.6,
            }}
          >
            Categorized skill cards spanning core programming languages, modern full-stack web technologies, database management, and development frameworks.
          </p>
        </div>

        {/* 4 Categorized Skill Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-2xl)",
          }}
        >
          {TECHNICAL_SKILLS.map((skillGroup, idx) => {
            const IconComponent = iconMap[skillGroup.iconName] || Code;
            return (
              <div
                key={skillGroup.category}
                className="surface-card"
                style={{
                  padding: "var(--space-xl)",
                  borderRadius: "var(--radius-lg)",
                  background: isDarkMode ? "#181528" : "var(--color-warm-ivory)",
                  borderColor: isDarkMode ? "rgba(167, 139, 250, 0.14)" : "var(--color-border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, border-color 0.3s ease",
                }}
              >
                {/* Card Title & Icon */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: isDarkMode ? "rgba(124, 58, 237, 0.25)" : "var(--color-purple-soft)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-purple-primary)",
                    }}
                  >
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-purple-primary)", letterSpacing: "0.04em" }}>
                      CATEGORY 0{idx + 1}
                    </span>
                    <h3 style={{ fontSize: "18px", color: isDarkMode ? "#FFF" : "#1E1B2E", margin: 0 }}>
                      {skillGroup.category}
                    </h3>
                  </div>
                </div>

                {/* Short description */}
                <p style={{ fontSize: "13px", color: isDarkMode ? "#C4B5FD" : "var(--color-muted-text)", lineHeight: 1.5, margin: "0 0 16px 0" }}>
                  {skillGroup.description}
                </p>

                {/* Categorized Skills Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto" }}>
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      style={{
                        background: isDarkMode ? "rgba(255,255,255,0.05)" : "var(--color-white)",
                        color: isDarkMode ? "#EDE9FE" : "var(--color-main-text)",
                        border: `1px solid ${isDarkMode ? "rgba(167, 139, 250, 0.15)" : "var(--color-border-subtle)"}`,
                        padding: "8px 14px",
                        borderRadius: "var(--radius-md)",
                        fontSize: "13px",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "all var(--transition-fast)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-purple-primary)";
                        e.currentTarget.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = isDarkMode ? "rgba(167, 139, 250, 0.15)" : "var(--color-border-subtle)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <CheckCircle size={13} color="var(--color-purple-primary)" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
