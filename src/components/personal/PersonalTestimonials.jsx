import React from "react";
import { MessageSquareQuote, Star, CheckCircle } from "lucide-react";
import { TESTIMONIALS } from "../../data/personalData";

export default function PersonalTestimonials({ isDarkMode }) {
  return (
    <section style={{ paddingTop: "var(--space-4xl)", paddingBottom: "var(--space-4xl)", borderTop: `1px solid ${isDarkMode ? "rgba(255,255,255,0.08)" : "var(--color-border-subtle)"}` }}>
      <div className="container-1440">
        
        {/* Section Header */}
        <div style={{ marginBottom: "var(--space-3xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
            <span className="badge badge-forest">ENDORSEMENTS</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: isDarkMode ? "#9CB3A5" : "var(--color-muted-text)" }}>
              PEER & LEADERSHIP PRAISE
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: isDarkMode ? "#FFFFFF" : "var(--color-forest-green)", margin: "0 0 16px 0" }}>
            What Collaborators Say
          </h2>
          <p style={{ maxWidth: "800px", fontSize: "17px", color: isDarkMode ? "#B0C4B8" : "var(--color-muted-text)", lineHeight: 1.6 }}>
            Feedback from Product Managers, Engineering Leads, and Design Mentors who have paired with me on complex digital products.
          </p>
        </div>

        {/* Testimonials 3 Columns Grid */}
        <div className="grid-3">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="surface-card"
              style={{
                padding: "var(--space-xl)",
                borderRadius: "var(--radius-lg)",
                background: isDarkMode ? "#1A221E" : "var(--color-warm-ivory)",
                borderColor: isDarkMode ? "rgba(255,255,255,0.08)" : "var(--color-border-subtle)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", gap: "4px", marginBottom: "14px", color: "#F59E0B" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#F59E0B" />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: "14px",
                    color: isDarkMode ? "#E0EADF" : "var(--color-main-text)",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    marginBottom: "var(--space-lg)",
                  }}
                >
                  “{t.quote}”
                </p>
              </div>

              <div style={{ borderTop: `1px solid ${isDarkMode ? "rgba(255,255,255,0.08)" : "var(--color-border-subtle)"}`, paddingTop: "12px" }}>
                <strong style={{ fontSize: "15px", color: isDarkMode ? "#FFF" : "var(--color-forest-green)", display: "block" }}>
                  {t.author}
                </strong>
                <div style={{ fontSize: "12px", color: isDarkMode ? "#9CB3A5" : "var(--color-muted-text)" }}>
                  {t.title} • {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
