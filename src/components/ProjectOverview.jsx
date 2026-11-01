import React, { useState } from "react";
import {
  ShoppingBag,
  Tractor,
  Building2,
  Truck,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Target,
  Sparkles,
  Layers,
  ChevronRight
} from "lucide-react";
import { FIVE_ROLES } from "../data/portfolioData";

export default function ProjectOverview() {
  const [selectedRole, setSelectedRole] = useState(FIVE_ROLES[0].id);

  const roleIcons = {
    customer: ShoppingBag,
    farmer: Tractor,
    "bulk-buyer": Building2,
    "delivery-partner": Truck,
    admin: ShieldCheck,
  };

  const currentRole = FIVE_ROLES.find((r) => r.id === selectedRole) || FIVE_ROLES[0];
  const CurrentIcon = roleIcons[currentRole.id] || ShoppingBag;

  const designPhases = [
    {
      phase: "Phase 01",
      title: "Discover & Empathize",
      duration: "Weeks 1 - 2",
      activities: [
        "Farmer field interviews in Nashik & peri-urban belts",
        "Household grocery survey (n=45 urban consumers)",
        "Traditional mandi middleman margin analysis",
      ],
      output: "Field insights, ecosystem empathy map",
    },
    {
      phase: "Phase 02",
      title: "Define & Hypothesize",
      duration: "Week 3",
      activities: [
        "Formulate 5 core problem hypotheses",
        "Establish 6 quantifiable design goals",
        "Synthesize 3 primary archetypes (Farmer, Consumer, Chef)",
      ],
      output: "Persona sheets & 7-stage user journeys",
    },
    {
      phase: "Phase 03",
      title: "Design System & Tokens",
      duration: "Week 4",
      activities: [
        "Craft organic palette (Forest Green, Cream, Terracotta)",
        "Accessibility audit for outdoor field sunlight (> 7:1 ratio)",
        "Build 8px grid system & typography hierarchy",
      ],
      output: "Figma master UI kit & tokens export",
    },
    {
      phase: "Phase 04",
      title: "Information Architecture & Wireframes",
      duration: "Weeks 5 - 6",
      activities: [
        "Multi-stakeholder sitemap architecture",
        "Low-fidelity grayscale task flow wireframing",
        "Distance pricing formula algorithm modeling",
      ],
      output: "Interactive wireframe blueprints",
    },
    {
      phase: "Phase 05",
      title: "High-Fidelity Prototyping & Usability",
      duration: "Weeks 7 - 8",
      activities: [
        "Complete 14-page master Figma canvas creation",
        "Build live interactive prototype sandbox & tracking sim",
        "Moderated usability walkthroughs with 5 representative users",
      ],
      output: "Usability findings & design iteration changelog",
    },
  ];

  return (
    <section id="section-02" className="case-study-section">
      <div id="section-overview"></div>
      <div className="container-1440">
        
        {/* Section Header */}
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
            <span className="badge badge-forest">PAGE 02 / 14</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-muted-text)" }}>
              PROJECT FOUNDATION & ECOSYSTEM ARCHITECTURE
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", marginBottom: "var(--space-sm)" }}>
            Project Overview: Orchestrating a 5-Role Agricultural Network
          </h2>
          <p style={{ maxWidth: "840px", fontSize: "17px", color: "var(--color-muted-text)" }}>
            Agriculture is inherently a multi-sided market. Unlike typical retail e-commerce, FreshHarvest addresses five interconnected user groups whose incentives must harmonize for the system to thrive.
          </p>
        </div>

        {/* 5 Core User Roles Interactive Explorer */}
        <div className="surface-card" style={{ marginBottom: "var(--space-3xl)" }}>
          <div style={{ marginBottom: "var(--space-lg)" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "10px" }}>
              Click to Explore Each Stakeholder Perspective:
            </div>
            
            {/* Role Tab Buttons */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {FIVE_ROLES.map((role) => {
                const Icon = roleIcons[role.id] || ShoppingBag;
                const isActive = selectedRole === role.id;
                return (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className="btn"
                    style={{
                      background: isActive ? "var(--color-forest-green)" : "var(--color-white)",
                      color: isActive ? "var(--color-white)" : "var(--color-main-text)",
                      border: "1px solid",
                      borderColor: isActive ? "var(--color-forest-green)" : "var(--color-border-subtle)",
                      boxShadow: isActive ? "var(--shadow-sm)" : "none",
                      padding: "10px 16px",
                      borderRadius: "var(--radius-md)",
                      fontSize: "13px",
                      fontWeight: isActive ? 700 : 500,
                    }}
                  >
                    <Icon size={16} color={isActive ? "#FFFFFF" : role.color} />
                    <span>{role.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Role Detail Panel */}
          <div
            className="surface-white"
            style={{
              padding: "var(--space-xl)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border-subtle)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "var(--space-xl)",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "var(--space-sm)" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "var(--color-soft-sage)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CurrentIcon size={24} color={currentRole.color} />
                </div>
                <div>
                  <span className="badge badge-terracotta" style={{ fontSize: "11px" }}>
                    {currentRole.badge}
                  </span>
                  <h3 style={{ fontSize: "22px", color: "var(--color-forest-green)", marginTop: "2px" }}>
                    {currentRole.title}
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: "15px", color: "var(--color-main-text)", lineHeight: 1.6, marginBottom: "var(--space-md)" }}>
                {currentRole.desc}
              </p>

              <div style={{ background: "var(--color-warm-cream)", padding: "14px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-subtle)" }}>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", textTransform: "uppercase", marginBottom: "6px" }}>
                  Primary Platform Touchpoint & Mission:
                </div>
                <div style={{ fontSize: "13px", color: "var(--color-main-text)", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <ArrowRight size={16} color="var(--color-forest-green)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span>{currentRole.primaryTask}</span>
                </div>
              </div>
            </div>

            {/* Role Specific UX Highlights */}
            <div style={{ background: "var(--color-warm-ivory)", padding: "var(--space-lg)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-subtle)" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "12px" }}>
                Key UX Challenges for this Stakeholder:
              </div>

              {currentRole.id === "customer" && (
                <ul style={{ paddingLeft: "18px", fontSize: "13px", color: "var(--color-main-text)", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>Skepticism regarding genuine organic vs fake marketing claims.</li>
                  <li>Need for verifiable harvest times to guarantee superior crispness.</li>
                  <li>Distance-based delivery transparency to eliminate hidden checkout fees.</li>
                </ul>
              )}

              {currentRole.id === "farmer" && (
                <ul style={{ paddingLeft: "18px", fontSize: "13px", color: "var(--color-main-text)", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>High outdoor glare requires ultra-high contrast text & 48px tap targets.</li>
                  <li>Ultra-fast 3-step crop listing without complex paperwork or typing.</li>
                  <li>One-click surplus flash discount to clear perishable surplus yields quickly.</li>
                </ul>
              )}

              {currentRole.id === "bulk-buyer" && (
                <ul style={{ paddingLeft: "18px", fontSize: "13px", color: "var(--color-main-text)", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>Automated standing weekly deliveries (Tuesdays/Fridays for kitchens).</li>
                  <li>Instant volume wholesale discount tier calculation (25kg+, 50kg+, 100kg+).</li>
                  <li>Consolidated monthly GST tax invoices & organic soil audit reports.</li>
                </ul>
              )}

              {currentRole.id === "delivery-partner" && (
                <ul style={{ paddingLeft: "18px", fontSize: "13px", color: "var(--color-main-text)", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>Accurate GPS routing from rural unmapped farm gates to city high-rises.</li>
                  <li>Equitable mileage pay ($0.40/km) compensating long-haul agricultural routes.</li>
                  <li>Contactless digital proof of pickup and drop-off crate barcode scanning.</li>
                </ul>
              )}

              {currentRole.id === "admin" && (
                <ul style={{ paddingLeft: "18px", fontSize: "13px", color: "var(--color-main-text)", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>Verification queue for auditing farmer land titles and organic certifications.</li>
                  <li>Automated escrow payout releases once delivery receipt is confirmed.</li>
                  <li>Fair price monitoring to prevent artificial gouging or predatory discounting.</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* 5-Phase Design Process Timeline */}
        <div>
          <div style={{ marginBottom: "var(--space-lg)" }}>
            <span className="badge badge-sage" style={{ marginBottom: "6px" }}>
              METHODOLOGY & WORKFLOW
            </span>
            <h3 style={{ fontSize: "24px", color: "var(--color-forest-green)" }}>
              The 8-Week Double-Diamond Design Process
            </h3>
            <p style={{ color: "var(--color-muted-text)", fontSize: "14px" }}>
              Rigorous, user-centered product design cycle from field immersion to high-fidelity validation.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "var(--space-md)",
            }}
          >
            {designPhases.map((item, index) => (
              <div
                key={item.phase}
                className="surface-card"
                style={{
                  padding: "var(--space-lg)",
                  position: "relative",
                  borderTop: `4px solid ${index === 0 ? "var(--color-forest-green)" : index === 1 ? "var(--color-medium-forest)" : index === 2 ? "var(--color-leaf-green)" : index === 3 ? "var(--color-terracotta)" : "var(--color-dark-forest)"}`,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-forest-green)", textTransform: "uppercase" }}>
                    {item.phase}
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted-text)", background: "var(--color-white)", padding: "2px 6px", borderRadius: "4px" }}>
                    {item.duration}
                  </span>
                </div>

                <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "10px" }}>
                  {item.title}
                </div>

                <ul style={{ paddingLeft: "16px", fontSize: "12px", color: "var(--color-muted-text)", margin: 0, marginBottom: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {item.activities.map((act, i) => (
                    <li key={i}>{act}</li>
                  ))}
                </ul>

                <div style={{ background: "var(--color-white)", padding: "6px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: 600, color: "var(--color-forest-green)", border: "1px solid var(--color-border-subtle)" }}>
                  🎯 {item.output}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
