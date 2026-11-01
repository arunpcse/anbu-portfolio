import React from "react";
import {
  GraduationCap,
  Heart,
  Target,
  Compass,
  CheckCircle,
  BookOpen,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { ABOUT_DETAILS, PERSONAL_INFO } from "../../data/personalData";

export default function PersonalAbout({ isDarkMode }) {
  return (
    <section
      id="about"
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
            <span className="badge badge-forest">ABOUT ME</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: isDarkMode ? "#9CB3A5" : "var(--color-muted-text)" }}>
              BACKGROUND, INTERESTS & VISION
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              color: isDarkMode ? "#FFFFFF" : "var(--color-forest-green)",
              margin: "0 0 16px 0",
            }}
          >
            Engineering Logic Meets Intuitive Design
          </h2>
          <p
            style={{
              maxWidth: "800px",
              fontSize: "17px",
              color: isDarkMode ? "#B0C4B8" : "var(--color-muted-text)",
              lineHeight: 1.6,
            }}
          >
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* 4 Core About Sections Grid: Education, Interests, Career Goals, Developer Journey */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--space-2xl)",
          }}
        >
          {/* 1. Education & College */}
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
                  ACADEMIC FOUNDATION
                </span>
                <h3 style={{ fontSize: "19px", color: isDarkMode ? "#FFF" : "var(--color-forest-green)", margin: 0 }}>
                  Education & College
                </h3>
              </div>
            </div>

            <div style={{ marginBottom: "12px" }}>
              <h4 style={{ fontSize: "16px", color: isDarkMode ? "#FFF" : "var(--color-forest-green)", margin: "0 0 4px 0" }}>
                {ABOUT_DETAILS.education.degree}
              </h4>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-terracotta)", marginBottom: "4px" }}>
                {ABOUT_DETAILS.education.college}
              </div>
              <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap", marginTop: "8px" }}>
                <span className="badge badge-sage" style={{ fontSize: "12px" }}>
                  Batch: {ABOUT_DETAILS.education.period}
                </span>
                <span className="badge badge-forest" style={{ fontSize: "12px", background: "#2E7D32", color: "#FFF" }}>
                  CGPA: {ABOUT_DETAILS.education.cgpa}
                </span>
              </div>
            </div>

            <p style={{ fontSize: "14px", color: isDarkMode ? "#B0C4B8" : "var(--color-main-text)", lineHeight: 1.6, marginTop: "auto" }}>
              {ABOUT_DETAILS.education.description}
            </p>
          </div>

          {/* 2. Interests & Focus Areas */}
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
                  background: isDarkMode ? "rgba(181, 110, 67, 0.2)" : "rgba(181, 110, 67, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-terracotta)",
                }}
              >
                <Heart size={22} />
              </div>
              <div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-terracotta)", letterSpacing: "0.04em" }}>
                  WHAT DRIVES ME
                </span>
                <h3 style={{ fontSize: "19px", color: isDarkMode ? "#FFF" : "var(--color-forest-green)", margin: 0 }}>
                  Technical Interests
                </h3>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
              {ABOUT_DETAILS.interests.map((interest, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    background: isDarkMode ? "rgba(255,255,255,0.04)" : "#FFF",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-md)",
                    border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.06)" : "var(--color-border-subtle)"}`,
                  }}
                >
                  <CheckCircle size={16} color={isDarkMode ? "#6EE7B7" : "var(--color-leaf-green)"} style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ fontSize: "13px", color: isDarkMode ? "#E0EADF" : "var(--color-main-text)", fontWeight: 500 }}>
                    {interest}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Career Goals */}
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
                  background: isDarkMode ? "rgba(99, 102, 241, 0.2)" : "rgba(99, 102, 241, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6366F1",
                }}
              >
                <Target size={22} />
              </div>
              <div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-terracotta)", letterSpacing: "0.04em" }}>
                  LONG-TERM ASPIRATIONS
                </span>
                <h3 style={{ fontSize: "19px", color: isDarkMode ? "#FFF" : "var(--color-forest-green)", margin: 0 }}>
                  Career Goals
                </h3>
              </div>
            </div>

            <p style={{ fontSize: "14px", color: isDarkMode ? "#B0C4B8" : "var(--color-main-text)", lineHeight: 1.7, marginBottom: "16px" }}>
              {ABOUT_DETAILS.careerGoals}
            </p>

            <div
              style={{
                marginTop: "auto",
                background: isDarkMode ? "rgba(99, 102, 241, 0.1)" : "rgba(99, 102, 241, 0.08)",
                padding: "12px 16px",
                borderRadius: "var(--radius-md)",
                border: "1px solid rgba(99, 102, 241, 0.2)",
                fontSize: "13px",
                color: isDarkMode ? "#A5B4FC" : "#4338CA",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Sparkles size={16} />
              <span>Dedicated to continuous self-improvement and shipping production-grade code.</span>
            </div>
          </div>

          {/* 4. Developer Journey */}
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
                <Compass size={22} />
              </div>
              <div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-terracotta)", letterSpacing: "0.04em" }}>
                  HOW IT ALL STARTED
                </span>
                <h3 style={{ fontSize: "19px", color: isDarkMode ? "#FFF" : "var(--color-forest-green)", margin: 0 }}>
                  Developer Journey
                </h3>
              </div>
            </div>

            <p style={{ fontSize: "14px", color: isDarkMode ? "#B0C4B8" : "var(--color-main-text)", lineHeight: 1.7, marginBottom: "16px" }}>
              {ABOUT_DETAILS.developerJourney}
            </p>

            <div
              style={{
                marginTop: "auto",
                background: isDarkMode ? "rgba(71, 122, 73, 0.15)" : "var(--color-soft-sage)",
                padding: "12px 16px",
                borderRadius: "var(--radius-md)",
                border: `1px solid ${isDarkMode ? "rgba(110, 231, 183, 0.2)" : "rgba(36, 76, 58, 0.15)"}`,
                fontSize: "13px",
                color: isDarkMode ? "#6EE7B7" : "var(--color-forest-green)",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <CheckCircle size={16} />
              <span>IDEAS 0.5 National Project Presentation — Top 10 Finalist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
