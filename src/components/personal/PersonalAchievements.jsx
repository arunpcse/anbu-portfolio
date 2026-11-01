import React from "react";
import {
  Trophy,
  Award,
  Sparkles,
  Code,
  CheckCircle,
  ExternalLink,
  Flame,
  Star
} from "lucide-react";
import { ACHIEVEMENTS_DATA } from "../../data/personalData";

export default function PersonalAchievements({ isDarkMode }) {
  const achievementIcons = {
    "ideas-top10": Trophy,
    "nptel-elite": Award,
    "salesforce-dev": Sparkles,
    "coding-dsa": Code,
  };

  return (
    <section
      id="achievements"
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
            <span className="badge badge-forest">HONORS & ACCOLADES</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: isDarkMode ? "#C4B5FD" : "var(--color-muted-text)" }}>
              RECOGNITIONS & MILESTONES
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              color: isDarkMode ? "#FFFFFF" : "#1E1B2E",
              margin: "0 0 16px 0",
            }}
          >
            Honors & National Achievements
          </h2>
          <p
            style={{
              maxWidth: "800px",
              fontSize: "17px",
              color: isDarkMode ? "#C4B5FD" : "var(--color-muted-text)",
              lineHeight: 1.6,
            }}
          >
            Recognized at national collegiate stages, certified by top engineering institutes (IIT/NPTEL), and dedicated to algorithmic problem-solving.
          </p>
        </div>

        {/* 4 Achievements Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-xl)",
          }}
        >
          {ACHIEVEMENTS_DATA.map((ach) => {
            const Icon = achievementIcons[ach.id] || Trophy;
            const isNationalTop10 = ach.id === "ideas-top10";

            return (
              <div
                key={ach.id}
                className="surface-card"
                style={{
                  padding: "var(--space-xl)",
                  borderRadius: "var(--radius-lg)",
                  background: isDarkMode ? "#181528" : "var(--color-warm-ivory)",
                  borderColor: isNationalTop10
                    ? "var(--color-purple-primary)"
                    : (isDarkMode ? "rgba(167, 139, 250, 0.14)" : "var(--color-border-subtle)"),
                  borderWidth: isNationalTop10 ? "2px" : "1px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: isNationalTop10
                    ? "0 10px 25px rgba(124, 58, 237, 0.2)"
                    : "none",
                }}
              >
                {/* Ribbon for Flagship National Achievement */}
                {isNationalTop10 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      right: "16px",
                      background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
                      color: "#FFF",
                      padding: "4px 12px",
                      borderRadius: "var(--radius-full)",
                      fontSize: "11px",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      boxShadow: "0 2px 10px rgba(124, 58, 237, 0.4)",
                    }}
                  >
                    <Star size={12} fill="#FFF" />
                    <span>NATIONAL FINALIST</span>
                  </div>
                )}

                {/* Card Icon & Category */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: isNationalTop10
                        ? "rgba(124, 58, 237, 0.25)"
                        : (isDarkMode ? "rgba(124, 58, 237, 0.18)" : "var(--color-purple-soft)"),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-purple-primary)",
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <span
                    style={{
                      fontSize: "17px",
                      fontWeight: 800,
                      letterSpacing: "-0.01em",
                      color: "var(--color-purple-primary)",
                    }}
                  >
                    {ach.metric}
                  </span>
                </div>

                <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-purple-primary)", letterSpacing: "0.04em", marginBottom: "4px" }}>
                  {ach.category.toUpperCase()}
                </div>

                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: isDarkMode ? "#FFF" : "#1E1B2E",
                    margin: "0 0 10px 0",
                    lineHeight: 1.35,
                  }}
                >
                  {ach.title}
                </h3>

                <p
                  style={{
                    fontSize: "13px",
                    color: isDarkMode ? "#C4B5FD" : "var(--color-main-text)",
                    lineHeight: 1.6,
                    margin: "0 0 16px 0",
                  }}
                >
                  {ach.description}
                </p>

                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "12px",
                    borderTop: `1px solid ${isDarkMode ? "rgba(167, 139, 250, 0.1)" : "var(--color-border-subtle)"}`,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    color: "var(--color-purple-primary)",
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle size={14} />
                  <span>{ach.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
