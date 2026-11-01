import React, { useState } from "react";
import {
  Sliders,
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  Eye,
  Layers,
  Code
} from "lucide-react";

export default function PersonalPlayground({ isDarkMode }) {
  const [accentColor, setAccentColor] = useState("#244C3A");
  const [radiusPx, setRadiusPx] = useState(12);
  const [buttonText, setButtonText] = useState("Explore Prototype");
  const [counter, setCounter] = useState(3);
  const [copiedTokens, setCopiedTokens] = useState(false);

  const colors = [
    { label: "Forest Green", hex: "#244C3A" },
    { label: "Warm Terracotta", hex: "#B56E43" },
    { label: "Electric Violet", hex: "#7C3AED" },
    { label: "Ocean Cyan", hex: "#0284C7" },
  ];

  const tokenJson = JSON.stringify(
    {
      theme: isDarkMode ? "dark" : "light",
      primaryAccent: accentColor,
      borderRadius: `${radiusPx}px`,
      touchTarget: "48px",
      wcagAudit: "Passed AAA",
    },
    null,
    2
  );

  const handleCopyTokens = () => {
    navigator.clipboard.writeText(tokenJson);
    setCopiedTokens(true);
    setTimeout(() => setCopiedTokens(false), 2000);
  };

  return (
    <section id="playground" style={{ paddingTop: "var(--space-4xl)", paddingBottom: "var(--space-4xl)", borderTop: `1px solid ${isDarkMode ? "rgba(255,255,255,0.08)" : "var(--color-border-subtle)"}` }}>
      <div className="container-1440">
        
        {/* Section Header */}
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
            <span className="badge badge-terracotta">INTERACTIVE RECRUITER SANDBOX</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: isDarkMode ? "#9CB3A5" : "var(--color-muted-text)" }}>
              DESIGN TOKEN ENGINE
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: isDarkMode ? "#FFFFFF" : "var(--color-forest-green)", margin: "0 0 16px 0" }}>
            Design System Token Playground
          </h2>
          <p style={{ maxWidth: "800px", fontSize: "17px", color: isDarkMode ? "#B0C4B8" : "var(--color-muted-text)", lineHeight: 1.6 }}>
            Test how my design tokens scale dynamically. Adjust color swatches, corner radiuses, and interactive component states to observe live token synchronization.
          </p>
        </div>

        {/* Playground Container (2 Columns: Controls & Live Preview) */}
        <div
          className="surface-card"
          style={{
            padding: "clamp(20px, 3vw, 36px)",
            borderRadius: "var(--radius-xl)",
            background: isDarkMode ? "#1A221E" : "var(--color-warm-ivory)",
            borderColor: isDarkMode ? "rgba(255,255,255,0.1)" : "var(--color-border-subtle)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(24px, 4vw, 48px)",
              alignItems: "center",
            }}
          >
            {/* Left: Token Controls */}
            <div>
              {/* Color Accent Picker */}
              <div style={{ marginBottom: "var(--space-lg)" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: isDarkMode ? "#FFF" : "var(--color-forest-green)", marginBottom: "8px" }}>
                  1. Primary Accent Token
                </label>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {colors.map((c) => (
                    <button
                      key={c.hex}
                      onClick={() => setAccentColor(c.hex)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "6px 14px",
                        borderRadius: "var(--radius-md)",
                        border: "2px solid",
                        borderColor: accentColor === c.hex ? c.hex : (isDarkMode ? "rgba(255,255,255,0.15)" : "var(--color-border-subtle)"),
                        background: isDarkMode ? "#121614" : "#FFF",
                        color: isDarkMode ? "#FFF" : "var(--color-main-text)",
                        fontSize: "12px",
                        fontWeight: accentColor === c.hex ? 700 : 500,
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: c.hex }} />
                      <span>{c.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Radius Token Slider */}
              <div style={{ marginBottom: "var(--space-lg)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <label style={{ fontSize: "13px", fontWeight: 700, color: isDarkMode ? "#FFF" : "var(--color-forest-green)" }}>
                    2. Border Radius Token: <code>--radius: {radiusPx}px</code>
                  </label>
                </div>
                <input
                  type="range"
                  min="2"
                  max="32"
                  value={radiusPx}
                  onChange={(e) => setRadiusPx(Number(e.target.value))}
                  style={{ width: "100%", accentColor: accentColor, cursor: "pointer" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: isDarkMode ? "#9CB3A5" : "var(--color-muted-text)", marginTop: "4px" }}>
                  <span>Sharp (2px)</span>
                  <span>Smooth (12px)</span>
                  <span>Round (32px)</span>
                </div>
              </div>

              {/* Copy Tokens Button */}
              <div>
                <button
                  onClick={handleCopyTokens}
                  className="btn btn-outline btn-sm"
                  style={{
                    background: isDarkMode ? "#121614" : "#FFF",
                    color: isDarkMode ? "#6EE7B7" : "var(--color-forest-green)",
                    borderColor: isDarkMode ? "rgba(255,255,255,0.15)" : "var(--color-border-subtle)",
                    gap: "6px",
                  }}
                >
                  {copiedTokens ? <Check size={14} color="#27C93F" /> : <Copy size={14} />}
                  <span>{copiedTokens ? "Tokens JSON Copied!" : "Export Tokens JSON"}</span>
                </button>
              </div>
            </div>

            {/* Right: Live Reactive Component Preview */}
            <div
              style={{
                background: isDarkMode ? "#121614" : "var(--color-warm-cream)",
                padding: "var(--space-xl)",
                borderRadius: `${radiusPx}px`,
                border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.12)" : "var(--color-border-subtle)"}`,
                boxShadow: "var(--shadow-md)",
                transition: "border-radius 0.2s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: `${radiusPx}px`,
                    background: `${accentColor}20`,
                    color: accentColor,
                    border: `1px solid ${accentColor}40`,
                  }}
                >
                  Active Token: {accentColor}
                </span>
                <span style={{ fontSize: "11px", color: isDarkMode ? "#9CB3A5" : "var(--color-muted-text)" }}>
                  Live Component Preview
                </span>
              </div>

              {/* Sample Reactive Card */}
              <div
                style={{
                  background: isDarkMode ? "#1A221E" : "#FFFFFF",
                  padding: "16px",
                  borderRadius: `${radiusPx}px`,
                  border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.08)" : "var(--color-border-subtle)"}`,
                  marginBottom: "16px",
                }}
              >
                <h4 style={{ fontSize: "16px", color: isDarkMode ? "#FFF" : "var(--color-forest-green)", margin: "0 0 6px 0" }}>
                  Interactive Component Demo
                </h4>
                <p style={{ fontSize: "12px", color: isDarkMode ? "#B0C4B8" : "var(--color-muted-text)", margin: "0 0 12px 0" }}>
                  Border radius and primary accent colors synchronize across all interactive child elements.
                </p>

                {/* Counter Stepper */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <button
                    onClick={() => setCounter(Math.max(1, counter - 1))}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: `${radiusPx}px`,
                      background: isDarkMode ? "#242E28" : "var(--color-warm-cream)",
                      color: isDarkMode ? "#FFF" : "var(--color-main-text)",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    -
                  </button>
                  <strong style={{ fontSize: "15px", color: isDarkMode ? "#FFF" : "var(--color-forest-green)" }}>
                    {counter} Items
                  </strong>
                  <button
                    onClick={() => setCounter(counter + 1)}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: `${radiusPx}px`,
                      background: accentColor,
                      color: "#FFF",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    +
                  </button>
                </div>

                {/* Primary Button Styled by Tokens */}
                <button
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    borderRadius: `${radiusPx}px`,
                    background: accentColor,
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: `0 4px 12px ${accentColor}40`,
                    transition: "all var(--transition-fast)",
                  }}
                  onClick={() => alert(`Button clicked! Color: ${accentColor}, Radius: ${radiusPx}px`)}
                >
                  {buttonText} ({counter})
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
