import React, { useState } from "react";
import {
  Brain,
  ShieldCheck,
  Smartphone,
  Tablet,
  Laptop,
  CheckCircle,
  ArrowUpRight,
  Sparkles,
  Milestone,
  ArrowUp,
  Award,
  Layers,
  Heart
} from "lucide-react";
import { DESIGN_DECISIONS_LEARNINGS } from "../data/portfolioData";

export default function LearningsRoadmap() {
  const [activeBreakpoint, setActiveBreakpoint] = useState("mobile");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const breakpoints = {
    mobile: {
      name: "Mobile Viewport (375px - 480px)",
      icon: Smartphone,
      focus: "Farmer field crop listing, delivery courier navigation, consumer one-thumb quick ordering.",
      rules: [
        "48px minimum touch target size for outdoor field usability.",
        "Single-column stacked produce cards with prominent harvest time badges.",
        "Bottom sticky action bar for 1-tap cart checkout.",
      ],
    },
    tablet: {
      name: "Tablet Viewport (768px - 1024px)",
      icon: Tablet,
      focus: "Executive Chef B2B requisition iPad station in bustling commercial kitchens.",
      rules: [
        "2-column split view: Left category tree, Right quantity slider & price matrix.",
        "Swipeable crate batch management and wholesale tier unlocks.",
        "Landscape map polyline view for delivery fleet dispatch.",
      ],
    },
    desktop: {
      name: "Desktop Viewport (1440px+)",
      icon: Laptop,
      focus: "Marketplace Administrator command center, organic certificate audits, dispute escrow.",
      rules: [
        "Full 12-column layout with persistent filter rail and live farm telemetry map.",
        "Comprehensive GST tax invoice reconciliation tables and CSV export.",
        "Multi-farm delivery route bundling analysis.",
      ],
    },
  };

  const currentBp = breakpoints[activeBreakpoint];
  const CurrentBpIcon = currentBp.icon;

  const roadmapItems = [
    {
      quarter: "Q1 Milestone",
      title: "Field Deployment & Nashik Pilot",
      desc: "Roll out initial mobile portal to 25 certified organic farms in Nashik and 500 urban beta households in South Delhi.",
      status: "In Progress",
    },
    {
      quarter: "Q2 Milestone",
      title: "IoT Soil Telemetry & Microclimate Data",
      desc: "Integrate low-cost IoT soil moisture & nitrate sensors so consumers can inspect real-time field health profiles.",
      status: "Research Phase",
    },
    {
      quarter: "Q3 Milestone",
      title: "Automated CSA Subscriptions",
      desc: "Community Supported Agriculture weekly recurring vegetable crates with farm visit passes and seasonal grower tips.",
      status: "Planned",
    },
    {
      quarter: "Q4 Milestone",
      title: "Decentralized Escrow & Carbon Credits",
      desc: "Automated smart contract escrow for instantaneous zero-fee payments + carbon negative electric vehicle delivery credits.",
      status: "Future Vision",
    },
  ];

  return (
    <section id="section-13" className="case-study-section">
      <div id="section-learnings"></div>
      <div className="container-1440">
        
        {/* Section Header: Page 13 */}
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
            <span className="badge badge-forest">PAGE 13 / 14</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-muted-text)" }}>
              DESIGN DECISIONS & COGNITIVE PSYCHOLOGY
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", marginBottom: "var(--space-sm)" }}>
            Critical Design Rationale & Strategic Decisions
          </h2>
          <p style={{ maxWidth: "860px", fontSize: "17px", color: "var(--color-muted-text)" }}>
            Every visual and architectural choice in FreshHarvest was made with intention. Here are four foundational decisions that redefined the user experience.
          </p>
        </div>

        {/* 4 Deep Design Decisions Grid */}
        <div className="grid-2" style={{ marginBottom: "var(--space-4xl)" }}>
          {DESIGN_DECISIONS_LEARNINGS.map((item, index) => (
            <div
              key={item.title}
              className="surface-card"
              style={{
                padding: "var(--space-xl)",
                borderRadius: "var(--radius-lg)",
                borderTop: "4px solid var(--color-forest-green)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span className="badge badge-sage" style={{ fontSize: "10px" }}>
                  {item.category}
                </span>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-terracotta)", fontFamily: "monospace" }}>
                  DECISION #{index + 1}
                </span>
              </div>

              <h3 style={{ fontSize: "20px", color: "var(--color-forest-green)", marginBottom: "10px" }}>
                {item.title}
              </h3>

              <div style={{ background: "var(--color-white)", padding: "12px", borderRadius: "8px", marginBottom: "12px", border: "1px solid var(--color-border-subtle)" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-forest-green)", textTransform: "uppercase", marginBottom: "4px" }}>
                  Design Execution:
                </div>
                <div style={{ fontSize: "13px", color: "var(--color-main-text)" }}>
                  {item.decision}
                </div>
              </div>

              <div style={{ marginBottom: "12px" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-muted-text)", textTransform: "uppercase", marginBottom: "4px" }}>
                  Cognitive Rationale:
                </div>
                <p style={{ fontSize: "13px", color: "var(--color-muted-text)", margin: 0, lineHeight: 1.5 }}>
                  {item.rationale}
                </p>
              </div>

              <div style={{ background: "var(--color-soft-sage)", padding: "8px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: 600, color: "var(--color-forest-green)" }}>
                ✨ Impact: {item.impact}
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* PAGE 14: RESPONSIVE SPECS, ACCESSIBILITY & FUTURE ROADMAP      */}
        {/* ============================================================== */}
        <div id="section-14" style={{ paddingTop: "var(--space-xl)", borderTop: "1px solid var(--color-border-subtle)" }}>
          <div style={{ marginBottom: "var(--space-2xl)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
              <span className="badge badge-terracotta">PAGE 14 / 14</span>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-muted-text)" }}>
                RESPONSIVE BREAKPOINTS & PRODUCT ROADMAP
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", marginBottom: "var(--space-sm)" }}>
              Responsive Design Tokens & Future Evolution
            </h2>
            <p style={{ maxWidth: "860px", fontSize: "17px", color: "var(--color-muted-text)" }}>
              A robust multi-platform design system must flex across devices — from dusty mobile farm screens to culinary iPad prep stations and desktop management portals.
            </p>
          </div>

          {/* Breakpoint Switcher */}
          <div className="surface-card" style={{ marginBottom: "var(--space-3xl)", padding: "var(--space-xl)" }}>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "var(--space-lg)" }}>
              {Object.entries(breakpoints).map(([key, data]) => {
                const Icon = data.icon;
                const isActive = activeBreakpoint === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveBreakpoint(key)}
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
                    <span>{data.name.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>

            <div className="surface-white" style={{ padding: "var(--space-xl)", borderRadius: "var(--radius-lg)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "var(--space-md)" }}>
                <CurrentBpIcon size={24} color="var(--color-forest-green)" />
                <div>
                  <h4 style={{ fontSize: "18px", color: "var(--color-forest-green)", margin: 0 }}>
                    {currentBp.name}
                  </h4>
                  <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
                    Primary User Focus: {currentBp.focus}
                  </div>
                </div>
              </div>

              <div style={{ background: "var(--color-warm-cream)", padding: "16px", borderRadius: "8px", border: "1px solid var(--color-border-subtle)" }}>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", textTransform: "uppercase", marginBottom: "8px" }}>
                  Layout & Accessibility Constraints:
                </div>
                <ul style={{ paddingLeft: "20px", fontSize: "13px", color: "var(--color-main-text)", margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                  {currentBp.rules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Evolution Roadmap */}
          <div style={{ marginBottom: "var(--space-3xl)" }}>
            <div style={{ marginBottom: "var(--space-lg)" }}>
              <span className="badge badge-leaf" style={{ marginBottom: "4px" }}>
                STRATEGIC ROADMAP
              </span>
              <h3 style={{ fontSize: "24px", color: "var(--color-forest-green)" }}>
                Four-Quarter Product Roadmap
              </h3>
            </div>

            <div className="grid-4">
              {roadmapItems.map((item, idx) => (
                <div key={item.quarter} className="surface-card" style={{ padding: "var(--space-lg)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <span className="badge badge-forest" style={{ fontSize: "10px" }}>
                        {item.quarter}
                      </span>
                      <span style={{ fontSize: "11px", color: "var(--color-muted-text)" }}>
                        {item.status}
                      </span>
                    </div>

                    <h4 style={{ fontSize: "15px", color: "var(--color-forest-green)", marginBottom: "6px" }}>
                      {item.title}
                    </h4>

                    <p style={{ fontSize: "12px", color: "var(--color-muted-text)", margin: 0, lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Portfolio Presentation Footer */}
          <div
            style={{
              background: "linear-gradient(135deg, #1A372A, #244C3A)",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(28px, 4vw, 48px)",
              color: "#FFF",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "var(--space-xl)",
              boxShadow: "var(--shadow-xl)",
            }}
          >
            <div>
              <div className="badge badge-terracotta" style={{ background: "#B56E43", color: "#FFF", marginBottom: "var(--space-xs)" }}>
                CAPSTONE PRESENTATION READY
              </div>
              <h3 style={{ color: "#FFF", fontSize: "26px", margin: "4px 0 8px 0" }}>
                FreshHarvest: Transparent Agricultural Commerce
              </h3>
              <p style={{ color: "#D1E0D6", fontSize: "14px", maxWidth: "600px", margin: 0 }}>
                A complete 14-page Figma UI/UX case study and functional interactive React prototype built for academic evaluation, internship recruiting, and design mentoring review.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button
                onClick={scrollToTop}
                className="btn btn-outline"
                style={{ background: "#FFF", color: "var(--color-forest-green)", gap: "6px" }}
              >
                <ArrowUp size={16} />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
