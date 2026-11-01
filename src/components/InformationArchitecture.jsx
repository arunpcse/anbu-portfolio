import React, { useState } from "react";
import {
  Layers,
  ShoppingBag,
  Tractor,
  Building2,
  Truck,
  ShieldCheck,
  ChevronRight,
  FolderTree,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { INFORMATION_ARCHITECTURE } from "../data/portfolioData";

export default function InformationArchitecture() {
  const [selectedRole, setSelectedRole] = useState("customer");

  const roles = [
    { id: "customer", label: "Consumer Marketplace", icon: ShoppingBag, color: "var(--color-forest-green)" },
    { id: "farmer", label: "Producer Portal", icon: Tractor, color: "var(--color-leaf-green)" },
    { id: "bulkBuyer", label: "B2B Procurement", icon: Building2, color: "var(--color-terracotta)" },
    { id: "deliveryPartner", label: "Courier Logistics", icon: Truck, color: "var(--color-medium-forest)" },
    { id: "admin", label: "Marketplace Command", icon: ShieldCheck, color: "var(--color-dark-forest)" },
  ];

  const currentIA = INFORMATION_ARCHITECTURE[selectedRole] || INFORMATION_ARCHITECTURE.customer;

  return (
    <section id="section-05" className="case-study-section">
      <div id="section-ia"></div>
      <div className="container-1440">
        
        {/* Section Header */}
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
            <span className="badge badge-sage">PAGE 05 / 14</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-muted-text)" }}>
              SITEMAP & STRUCTURAL TAXONOMY
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", marginBottom: "var(--space-sm)" }}>
            Information Architecture: 5 Unified Role Sitemaps
          </h2>
          <p style={{ maxWidth: "860px", fontSize: "17px", color: "var(--color-muted-text)" }}>
            A cohesive digital ecosystem requiring clear structural boundaries. We organized dedicated navigation hierarchies tailored to each stakeholder while sharing a single unified real-time harvest and inventory data engine.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "var(--space-xl)" }}>
          {roles.map((r) => {
            const Icon = r.icon;
            const isActive = selectedRole === r.id;
            return (
              <button
                key={r.id}
                onClick={() => setSelectedRole(r.id)}
                className="btn"
                style={{
                  background: isActive ? "var(--color-forest-green)" : "var(--color-white)",
                  color: isActive ? "var(--color-white)" : "var(--color-main-text)",
                  border: "1px solid",
                  borderColor: isActive ? "var(--color-forest-green)" : "var(--color-border-subtle)",
                  padding: "10px 18px",
                  borderRadius: "var(--radius-md)",
                  fontSize: "13px",
                  fontWeight: isActive ? 700 : 500,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Icon size={16} />
                <span>{r.label}</span>
              </button>
            );
          })}
        </div>

        {/* Visual Sitemap Hierarchy Tree */}
        <div
          className="surface-card"
          style={{
            padding: "var(--space-xl)",
            borderRadius: "var(--radius-xl)",
            marginBottom: "var(--space-2xl)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-lg)", borderBottom: "1px solid var(--color-border-subtle)", paddingBottom: "12px" }}>
            <div>
              <span className="badge badge-forest" style={{ marginBottom: "4px" }}>
                ACTIVE SITEMAP TREE
              </span>
              <h3 style={{ fontSize: "20px", color: "var(--color-forest-green)", marginTop: "2px" }}>
                {roles.find((r) => r.id === selectedRole)?.label} Structure
              </h3>
            </div>
            <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
              {currentIA.length} Primary Navigation Modules
            </div>
          </div>

          {/* Grid of IA Nodes */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "var(--space-md)",
            }}
          >
            {currentIA.map((module, idx) => (
              <div
                key={module.title}
                className="surface-white"
                style={{
                  padding: "16px",
                  borderRadius: "var(--radius-md)",
                  borderTop: "3px solid var(--color-forest-green)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "4px",
                      background: "var(--color-soft-sage)",
                      color: "var(--color-forest-green)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                      fontWeight: 700,
                    }}
                  >
                    {idx + 1}
                  </span>
                  <strong style={{ fontSize: "15px", color: "var(--color-forest-green)" }}>
                    {module.title}
                  </strong>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {module.children.map((child, cIdx) => (
                    <div
                      key={cIdx}
                      style={{
                        fontSize: "12px",
                        color: "var(--color-main-text)",
                        background: "var(--color-warm-cream)",
                        padding: "5px 10px",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        border: "1px solid var(--color-border-subtle)",
                      }}
                    >
                      <ChevronRight size={12} color="var(--color-forest-green)" />
                      <span>{child}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Core IA Architectural Principles */}
        <div className="grid-3">
          <div className="surface-white" style={{ padding: "var(--space-lg)" }}>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "6px" }}>
              1. Multi-Tier Progressive Disclosure
            </div>
            <p style={{ fontSize: "13px", color: "var(--color-muted-text)", margin: 0, lineHeight: 1.5 }}>
              Complex wholesale ordering logic, bulk tax certificates, and freight insurance are concealed until the customer explicitly toggles past 25kg bulk thresholds, preventing UI clutter for regular households.
            </p>
          </div>

          <div className="surface-white" style={{ padding: "var(--space-lg)" }}>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "6px" }}>
              2. Shared Real-Time Harvest Telemetry
            </div>
            <p style={{ fontSize: "13px", color: "var(--color-muted-text)", margin: 0, lineHeight: 1.5 }}>
              When Farmer Ramesh logs a harvest at 06:15 AM via his mobile portal, the Consumer marketplace, B2B procurement catalog, and route courier schedules update simultaneously via real-time WebSocket state.
            </p>
          </div>

          <div className="surface-white" style={{ padding: "var(--space-lg)" }}>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "6px" }}>
              3. Spatial Context & GPS Geo-Fencing
            </div>
            <p style={{ fontSize: "13px", color: "var(--color-muted-text)", margin: 0, lineHeight: 1.5 }}>
              The entire information architecture filters around physical road distance rather than arbitrary administrative municipal zones, ensuring nearby rural growers are never cut off by artificial city limits.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
