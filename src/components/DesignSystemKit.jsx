import React, { useState } from "react";
import {
  Palette,
  Type,
  Grid,
  Copy,
  Check,
  Sparkles,
  Sliders,
  ShieldCheck,
  Layers,
  ArrowRight
} from "lucide-react";
import { COLOR_PALETTE, TYPOGRAPHY_SPEC } from "../data/portfolioData";

export default function DesignSystemKit() {
  const [copiedHex, setCopiedHex] = useState(null);
  const [testCount, setTestCount] = useState(2);
  const [testTab, setTestTab] = useState("retail");

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <section id="section-07" className="case-study-section">
      <div id="section-design-system"></div>
      <div className="container-1440">
        
        {/* Section Header */}
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
            <span className="badge badge-forest">PAGE 07 / 14</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-muted-text)" }}>
              DESIGN TOKENS & ATOMIC UI KIT
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", marginBottom: "var(--space-sm)" }}>
            The FreshHarvest Design System
          </h2>
          <p style={{ maxWidth: "860px", fontSize: "17px", color: "var(--color-muted-text)" }}>
            Engineered for high outdoor glare readability, accessible contrast, and tactile feedback. Our tokens balance grounded botanical elegance with strict WCAG AA 7:1 contrast standards.
          </p>
        </div>

        {/* 1. Color Palette Tokens */}
        <div className="surface-card" style={{ marginBottom: "var(--space-3xl)", padding: "var(--space-xl)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-lg)", flexWrap: "wrap", gap: "10px" }}>
            <div>
              <span className="badge badge-forest" style={{ marginBottom: "4px" }}>
                COLOR ARCHITECTURE
              </span>
              <h3 style={{ fontSize: "22px", color: "var(--color-forest-green)" }}>
                Curated Natural Palette (15 Tokens)
              </h3>
            </div>
            <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
              Click any swatch to copy HEX token
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "var(--space-md)",
            }}
          >
            {COLOR_PALETTE.map((color) => {
              const isCopied = copiedHex === color.hex;
              return (
                <div
                  key={color.name}
                  onClick={() => handleCopy(color.hex)}
                  style={{
                    background: "var(--color-white)",
                    borderRadius: "var(--radius-md)",
                    overflow: "hidden",
                    border: "1px solid var(--color-border-subtle)",
                    cursor: "pointer",
                    transition: "transform var(--transition-fast), box-shadow var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      height: "72px",
                      background: color.hex,
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                      padding: "8px",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        background: color.light ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.85)",
                        color: color.light ? "#FFF" : "#000",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        fontSize: "10px",
                        fontWeight: 700,
                        fontFamily: "monospace",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      {isCopied ? <Check size={10} color="#27C93F" /> : <Copy size={10} />}
                      {isCopied ? "COPIED" : color.hex}
                    </span>
                  </div>

                  <div style={{ padding: "10px 12px" }}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "2px" }}>
                      {color.name}
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--color-muted-text)", lineHeight: 1.3 }}>
                      {color.role}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Typography Scale Hierarchy */}
        <div className="surface-white" style={{ marginBottom: "var(--space-3xl)", padding: "var(--space-xl)", borderRadius: "var(--radius-xl)" }}>
          <div style={{ marginBottom: "var(--space-lg)" }}>
            <span className="badge badge-sage" style={{ marginBottom: "4px" }}>
              TYPE SPECIFICATION
            </span>
            <h3 style={{ fontSize: "22px", color: "var(--color-forest-green)" }}>
              Typography Hierarchy: Inter (Google Fonts)
            </h3>
            <p style={{ color: "var(--color-muted-text)", fontSize: "14px", margin: 0 }}>
              Optimized for high readability on small handheld displays under blazing sunlight.
            </p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ background: "var(--color-warm-ivory)", borderBottom: "1px solid var(--color-border-subtle)" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "var(--color-forest-green)" }}>Hierarchy Level</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "var(--color-forest-green)" }}>Size / Line Height</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "var(--color-forest-green)" }}>Weight & Tracking</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "var(--color-forest-green)" }}>Render Preview</th>
                </tr>
              </thead>
              <tbody>
                {TYPOGRAPHY_SPEC.scale.map((lvl, i) => (
                  <tr key={lvl.level} style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                    <td style={{ padding: "14px 16px", fontWeight: 700, color: "var(--color-forest-green)" }}>
                      {lvl.level}
                    </td>
                    <td style={{ padding: "14px 16px", fontFamily: "monospace", color: "var(--color-muted-text)" }}>
                      {lvl.size}
                    </td>
                    <td style={{ padding: "14px 16px", fontSize: "12px", color: "var(--color-main-text)" }}>
                      {lvl.weight} • {lvl.tracking}
                    </td>
                    <td style={{ padding: "14px 16px" }}>
                      <span
                        style={{
                          fontSize: lvl.level === "Display Hero" ? "24px" : lvl.level === "Heading 1" ? "20px" : lvl.level === "Heading 2" ? "17px" : "14px",
                          fontWeight: lvl.weight.includes("Bold") ? 700 : lvl.weight.includes("Semibold") ? 600 : 400,
                          color: "var(--color-forest-green)",
                        }}
                      >
                        Transparent Farm-to-Table
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Interactive UI Component Kit */}
        <div className="surface-card" style={{ padding: "var(--space-xl)", borderRadius: "var(--radius-xl)" }}>
          <div style={{ marginBottom: "var(--space-lg)" }}>
            <span className="badge badge-terracotta" style={{ marginBottom: "4px" }}>
              INTERACTIVE SANDBOX
            </span>
            <h3 style={{ fontSize: "22px", color: "var(--color-forest-green)" }}>
              Atomic UI Component Kit
            </h3>
            <p style={{ color: "var(--color-muted-text)", fontSize: "14px", margin: 0 }}>
              Live interactive elements showing hover states, click feedback, and accessibility tokens.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "var(--space-xl)",
            }}
          >
            {/* Button Component States */}
            <div className="surface-white" style={{ padding: "18px" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", textTransform: "uppercase", marginBottom: "12px" }}>
                1. Button Component Variants
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <button className="btn btn-primary" style={{ width: "100%" }}>
                  Primary Brand Action
                </button>
                <button className="btn btn-secondary" style={{ width: "100%" }}>
                  Secondary Terracotta Highlight
                </button>
                <button className="btn btn-outline" style={{ width: "100%" }}>
                  Outline Ghost Action
                </button>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button className="btn btn-primary btn-sm" style={{ flex: 1 }}>Small 32px</button>
                  <button className="btn btn-outline btn-sm" style={{ flex: 1 }}>Compact Pill</button>
                </div>
              </div>
            </div>

            {/* Badges & Chip System */}
            <div className="surface-white" style={{ padding: "18px" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", textTransform: "uppercase", marginBottom: "12px" }}>
                2. Semantic Status & Metadata Badges
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span className="badge badge-forest">Harvested Today</span>
                <span className="badge badge-leaf">Certified Organic</span>
                <span className="badge badge-terracotta">Surplus -30%</span>
                <span className="badge badge-sage">Nearby Farm</span>
                <span className="badge badge-warning">Expiring Today</span>
                <span className="badge badge-danger">Out of Stock</span>
              </div>

              <div style={{ marginTop: "16px", paddingTop: "14px", borderTop: "1px solid var(--color-border-subtle)" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-muted-text)", marginBottom: "6px" }}>
                  Interactive Quantity Stepper:
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button
                    onClick={() => setTestCount(Math.max(1, testCount - 1))}
                    className="btn btn-outline btn-sm"
                    style={{ width: "34px", height: "34px", borderRadius: "50%", padding: 0 }}
                  >
                    -
                  </button>
                  <strong style={{ fontSize: "16px", color: "var(--color-forest-green)", minWidth: "40px", textAlign: "center" }}>
                    {testCount} kg
                  </strong>
                  <button
                    onClick={() => setTestCount(testCount + 1)}
                    className="btn btn-primary btn-sm"
                    style={{ width: "34px", height: "34px", borderRadius: "50%", padding: 0 }}
                  >
                    +
                  </button>
                  <span style={{ fontSize: "13px", color: "var(--color-muted-text)" }}>
                    Total: ${(testCount * 3.4).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Grid & Elevation Tokens */}
            <div className="surface-white" style={{ padding: "18px" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", textTransform: "uppercase", marginBottom: "12px" }}>
                3. Spatial 8px Baseline & Shadows
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", background: "var(--color-warm-cream)", padding: "8px", borderRadius: "4px" }}>
                  <span>--space-xs (8px)</span>
                  <code>Padding, Icon spacing</code>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", background: "var(--color-warm-cream)", padding: "8px", borderRadius: "4px" }}>
                  <span>--space-md (16px)</span>
                  <code>Container gutters, Card gaps</code>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", background: "var(--color-warm-cream)", padding: "8px", borderRadius: "4px" }}>
                  <span>--space-xl (32px)</span>
                  <code>Section dividers, Layout breaks</code>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", background: "var(--color-warm-cream)", padding: "8px", borderRadius: "4px" }}>
                  <span>--shadow-md</span>
                  <code>Cards on hover, floating modals</code>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
