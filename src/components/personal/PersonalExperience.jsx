import React from "react";
import {
  GraduationCap,
  Award,
  CheckCircle,
  Calendar,
  BookOpen,
  Briefcase,
  Layers,
  Sparkles
} from "lucide-react";
import {
  EDUCATION_DATA,
  TRAININGS_AND_INTERNSHIPS,
  CERTIFICATIONS_DATA
} from "../../data/personalData";

export default function PersonalExperience({ isDarkMode }) {
  return (
    <section
      id="education"
      style={{
        paddingTop: "var(--space-4xl)",
        paddingBottom: "var(--space-4xl)",
        borderTop: `1px solid ${isDarkMode ? "rgba(255,255,255,0.08)" : "var(--color-border-subtle)"}`,
      }}
    >
      <div className="container-1440">
        {/* Section Header */}
        <div style={{ marginBottom: "var(--space-3xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
            <span className="badge badge-forest">ACADEMIC & PROFESSIONAL BACKGROUND</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: isDarkMode ? "#9CB3A5" : "var(--color-muted-text)" }}>
              CREDENTIALS & INDUSTRY TRAINING
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              color: isDarkMode ? "#FFFFFF" : "var(--color-forest-green)",
              margin: "0 0 16px 0",
            }}
          >
            Education & Professional Training
          </h2>
          <p
            style={{
              maxWidth: "800px",
              fontSize: "17px",
              color: isDarkMode ? "#B0C4B8" : "var(--color-muted-text)",
              lineHeight: 1.6,
            }}
          >
            Rigorous computer science collegiate foundation, enterprise industry developer trainings, and government/IIT accredited certifications.
          </p>
        </div>

        {/* 3 Distinct Grid Columns: Education, Trainings & Internships, Certifications */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--space-2xl)",
          }}
        >
          {/* 1. College & Degree */}
          <div
            className="surface-card"
            style={{
              padding: "var(--space-xl)",
              borderRadius: "var(--radius-lg)",
              background: isDarkMode ? "#1A221E" : "var(--color-warm-ivory)",
              borderColor: isDarkMode ? "rgba(255,255,255,0.08)" : "var(--color-border-subtle)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: isDarkMode ? "rgba(71, 122, 73, 0.25)" : "var(--color-soft-sage)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isDarkMode ? "#6EE7B7" : "var(--color-forest-green)",
                }}
              >
                <GraduationCap size={22} />
              </div>
              <div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-terracotta)", letterSpacing: "0.04em" }}>
                  COLLEGE & DEGREE
                </span>
                <h3 style={{ fontSize: "18px", color: isDarkMode ? "#FFF" : "var(--color-forest-green)", margin: 0 }}>
                  Undergraduate Degree
                </h3>
              </div>
            </div>

            <div style={{ marginBottom: "14px" }}>
              <h4 style={{ fontSize: "16px", color: isDarkMode ? "#FFF" : "var(--color-forest-green)", margin: "0 0 4px 0" }}>
                {EDUCATION_DATA.degree}
              </h4>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-terracotta)", marginBottom: "8px" }}>
                {EDUCATION_DATA.college}
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
                <span className="badge badge-sage" style={{ fontSize: "12px" }}>
                  {EDUCATION_DATA.period}
                </span>
                <span className="badge badge-forest" style={{ fontSize: "12px", background: "#2E7D32", color: "#FFF" }}>
                  CGPA: {EDUCATION_DATA.cgpa}
                </span>
              </div>
            </div>

            <div style={{ marginTop: "12px" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: isDarkMode ? "#9CB3A5" : "var(--color-muted-text)", textTransform: "uppercase", marginBottom: "8px" }}>
                Core Academic Coursework:
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {EDUCATION_DATA.coursework.map((course, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: isDarkMode ? "#D3DECE" : "var(--color-main-text)" }}>
                    <CheckCircle size={14} color={isDarkMode ? "#6EE7B7" : "var(--color-leaf-green)"} />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Training and Internships */}
          <div
            className="surface-card"
            style={{
              padding: "var(--space-xl)",
              borderRadius: "var(--radius-lg)",
              background: isDarkMode ? "#1A221E" : "var(--color-warm-ivory)",
              borderColor: isDarkMode ? "rgba(255,255,255,0.08)" : "var(--color-border-subtle)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: isDarkMode ? "rgba(2, 132, 199, 0.2)" : "rgba(2, 132, 199, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0284C7",
                }}
              >
                <Briefcase size={22} />
              </div>
              <div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-terracotta)", letterSpacing: "0.04em" }}>
                  HANDS-ON EXPERIENCE
                </span>
                <h3 style={{ fontSize: "18px", color: isDarkMode ? "#FFF" : "var(--color-forest-green)", margin: 0 }}>
                  Training & Internships
                </h3>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {TRAININGS_AND_INTERNSHIPS.map((train, idx) => (
                <div
                  key={idx}
                  style={{
                    background: isDarkMode ? "rgba(255,255,255,0.04)" : "#FFF",
                    padding: "14px",
                    borderRadius: "var(--radius-md)",
                    border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.06)" : "var(--color-border-subtle)"}`,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                    <h4 style={{ fontSize: "15px", color: isDarkMode ? "#FFF" : "var(--color-forest-green)", margin: 0 }}>
                      {train.title}
                    </h4>
                    <span className="badge badge-sage" style={{ fontSize: "10px" }}>
                      {train.period}
                    </span>
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--color-terracotta)", fontWeight: 600, marginBottom: "6px" }}>
                    {train.organization}
                  </div>
                  <p style={{ fontSize: "13px", color: isDarkMode ? "#B0C4B8" : "var(--color-main-text)", lineHeight: 1.5, margin: "0 0 8px 0" }}>
                    {train.description}
                  </p>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {train.skills.map((s, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "11px",
                          background: isDarkMode ? "rgba(2, 132, 199, 0.15)" : "rgba(2, 132, 199, 0.1)",
                          color: isDarkMode ? "#7DD3FC" : "#0284C7",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          fontWeight: 500,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Certifications */}
          <div
            className="surface-card"
            style={{
              padding: "var(--space-xl)",
              borderRadius: "var(--radius-lg)",
              background: isDarkMode ? "#1A221E" : "var(--color-warm-ivory)",
              borderColor: isDarkMode ? "rgba(255,255,255,0.08)" : "var(--color-border-subtle)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: isDarkMode ? "rgba(255, 209, 102, 0.2)" : "rgba(255, 209, 102, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#D97706",
                }}
              >
                <Award size={22} />
              </div>
              <div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-terracotta)", letterSpacing: "0.04em" }}>
                  VERIFIED CREDENTIALS
                </span>
                <h3 style={{ fontSize: "18px", color: isDarkMode ? "#FFF" : "var(--color-forest-green)", margin: 0 }}>
                  Certifications
                </h3>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <div
                  key={idx}
                  style={{
                    background: isDarkMode ? "rgba(255,255,255,0.04)" : "#FFF",
                    padding: "14px",
                    borderRadius: "var(--radius-md)",
                    border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.06)" : "var(--color-border-subtle)"}`,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                    <h4 style={{ fontSize: "15px", color: isDarkMode ? "#FFF" : "var(--color-forest-green)", margin: 0 }}>
                      {cert.title}
                    </h4>
                    <span className="badge badge-forest" style={{ fontSize: "10px" }}>
                      {cert.badge}
                    </span>
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--color-terracotta)", fontWeight: 600, marginBottom: "4px" }}>
                    {cert.issuer}
                  </div>
                  <p style={{ fontSize: "13px", color: isDarkMode ? "#B0C4B8" : "var(--color-main-text)", lineHeight: 1.5, margin: 0 }}>
                    {cert.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
