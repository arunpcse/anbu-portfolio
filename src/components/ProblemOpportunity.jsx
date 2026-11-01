import React, { useState } from "react";
import {
  AlertTriangle,
  Compass,
  Coins,
  Clock,
  CheckCircle,
  Boxes,
  MapPin,
  ArrowRight,
  TrendingDown,
  Check,
  X
} from "lucide-react";
import { PROBLEM_HYPOTHESES, DESIGN_GOALS } from "../data/portfolioData";

export default function ProblemOpportunity() {
  const [activeProblem, setActiveProblem] = useState(PROBLEM_HYPOTHESES[0].id);

  const goalIcons = {
    Compass: Compass,
    Coins: Coins,
    Clock: Clock,
    CheckCircle: CheckCircle,
    Boxes: Boxes,
    MapPin: MapPin,
  };

  const comparisonData = [
    {
      metric: "Farmer Remuneration Cut",
      traditional: "25% - 35% of retail price (65% swallowed by middlemen)",
      freshharvest: "72% - 75% direct payment escrowed to farmer",
      verdict: "+44% farmer income boost",
    },
    {
      metric: "Produce Age from Soil",
      traditional: "4 to 8 days through auctions, cold storage, retail bins",
      freshharvest: "Harvested Today (6 to 14 hours from ground to table)",
      verdict: "True peak crispness & nutrients",
    },
    {
      metric: "Traceability & Origin",
      traditional: "Opaque wholesale batches; unverified organic claims",
      freshharvest: "Verifiable harvest timestamp + direct farmer GPS profile",
      verdict: "100% verifiable authenticity",
    },
    {
      metric: "Perishable Surplus Spoilage",
      traditional: "30% - 40% bumper harvest dumped when spot prices crash",
      freshharvest: "Dynamic 'Surplus Flash' discount channel for fast liquidation",
      verdict: "Prevents good food waste",
    },
    {
      metric: "Delivery Pricing Model",
      traditional: "Flat-rate fees that overcharge neighbors & reject rural farms",
      freshharvest: "Transparent distance formula: Base $2.50 + $0.40/km",
      verdict: "Equitable courier compensation",
    },
    {
      metric: "Commercial Procurement",
      traditional: "Tedious manual phone calls, fluctuating daily quality",
      freshharvest: "Unified 2-tier pricing (retail kg vs 50kg+ wholesale contracts)",
      verdict: "Streamlined B2B supply pipeline",
    },
  ];

  return (
    <section id="section-03" className="case-study-section">
      <div id="section-problem"></div>
      <div className="container-1440">
        
        {/* Section Header */}
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
            <span className="badge badge-terracotta">PAGE 03 / 14</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-muted-text)" }}>
              PROBLEM SPACE & VALUE OPPORTUNITY
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", marginBottom: "var(--space-sm)" }}>
            Deconstructing the Agricultural Market Failure
          </h2>
          <p style={{ maxWidth: "860px", fontSize: "17px", color: "var(--color-muted-text)" }}>
            Traditional food logistics separates growers from eaters behind layers of commission brokers, cold storage depots, and arbitrary markups. We identified 5 fundamental problem hypotheses to solve.
          </p>
        </div>

        {/* 5 Problem Hypotheses Tabs & Cards */}
        <div className="surface-card" style={{ marginBottom: "var(--space-3xl)" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "12px" }}>
            The 5 Validated Problem Hypotheses:
          </div>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "var(--space-lg)" }}>
            {PROBLEM_HYPOTHESES.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveProblem(item.id)}
                className="btn"
                style={{
                  background: activeProblem === item.id ? "var(--color-forest-green)" : "var(--color-white)",
                  color: activeProblem === item.id ? "var(--color-white)" : "var(--color-main-text)",
                  border: "1px solid",
                  borderColor: activeProblem === item.id ? "var(--color-forest-green)" : "var(--color-border-subtle)",
                  padding: "8px 14px",
                  fontSize: "12px",
                  borderRadius: "var(--radius-md)",
                  fontWeight: activeProblem === item.id ? 700 : 500,
                }}
              >
                <span>H{index + 1}: {item.title.split(" ")[0]} {item.title.split(" ")[1]}</span>
              </button>
            ))}
          </div>

          {/* Active Problem Display Box */}
          {(() => {
            const current = PROBLEM_HYPOTHESES.find((p) => p.id === activeProblem) || PROBLEM_HYPOTHESES[0];
            return (
              <div
                className="surface-white"
                style={{
                  padding: "var(--space-xl)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-border-subtle)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-sm)" }}>
                  <AlertTriangle size={18} color="var(--color-terracotta)" />
                  <h3 style={{ fontSize: "20px", color: "var(--color-forest-green)" }}>
                    {current.title}
                  </h3>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-lg)" }}>
                  <div style={{ background: "var(--color-danger-bg)", padding: "16px", borderRadius: "var(--radius-md)", border: "1px solid rgba(197, 48, 48, 0.2)" }}>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-danger)", textTransform: "uppercase", marginBottom: "6px" }}>
                      Current Broken Context & Market Friction
                    </div>
                    <p style={{ fontSize: "14px", color: "var(--color-main-text)", margin: 0, lineHeight: 1.6 }}>
                      {current.context}
                    </p>
                  </div>

                  <div style={{ background: "var(--color-soft-sage)", padding: "16px", borderRadius: "var(--radius-md)", border: "1px solid rgba(36, 76, 58, 0.2)" }}>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-forest-green)", textTransform: "uppercase", marginBottom: "6px" }}>
                      FreshHarvest UX Design Hypothesis
                    </div>
                    <p style={{ fontSize: "14px", color: "var(--color-main-text)", margin: 0, lineHeight: 1.6 }}>
                      {current.hypothesis}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Traditional Mandi vs FreshHarvest Comparison Matrix */}
        <div style={{ marginBottom: "var(--space-3xl)" }}>
          <div style={{ marginBottom: "var(--space-lg)" }}>
            <span className="badge badge-forest" style={{ marginBottom: "6px" }}>
              SYSTEMIC COMPARISON
            </span>
            <h3 style={{ fontSize: "24px", color: "var(--color-forest-green)" }}>
              Traditional Intermediary System vs FreshHarvest Direct Model
            </h3>
            <p style={{ color: "var(--color-muted-text)", fontSize: "14px" }}>
              How our design decisions eliminate friction points across the supply chain.
            </p>
          </div>

          <div
            style={{
              overflowX: "auto",
              background: "var(--color-white)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border-subtle)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "13px" }}>
              <thead>
                <tr style={{ background: "var(--color-warm-ivory)", borderBottom: "1px solid var(--color-border-subtle)" }}>
                  <th style={{ padding: "14px 18px", color: "var(--color-forest-green)", fontWeight: 700 }}>Evaluation Metric</th>
                  <th style={{ padding: "14px 18px", color: "var(--color-danger)", fontWeight: 700 }}>Traditional Middleman Mandi</th>
                  <th style={{ padding: "14px 18px", color: "var(--color-forest-green)", fontWeight: 700 }}>FreshHarvest Platform</th>
                  <th style={{ padding: "14px 18px", color: "var(--color-leaf-green)", fontWeight: 700 }}>Outcome Impact</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: "1px solid var(--color-border-subtle)",
                      background: idx % 2 === 0 ? "var(--color-white)" : "var(--color-warm-cream)",
                    }}
                  >
                    <td style={{ padding: "14px 18px", fontWeight: 600, color: "var(--color-forest-green)" }}>
                      {row.metric}
                    </td>
                    <td style={{ padding: "14px 18px", color: "#666" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <X size={14} color="var(--color-danger)" style={{ flexShrink: 0 }} />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td style={{ padding: "14px 18px", color: "var(--color-forest-green)", fontWeight: 500 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <Check size={14} color="var(--color-leaf-green)" style={{ flexShrink: 0 }} />
                        <span>{row.freshharvest}</span>
                      </div>
                    </td>
                    <td style={{ padding: "14px 18px" }}>
                      <span className="badge badge-sage" style={{ fontSize: "11px" }}>
                        {row.verdict}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 6 Quantifiable Design Goals */}
        <div>
          <div style={{ marginBottom: "var(--space-lg)" }}>
            <span className="badge badge-leaf" style={{ marginBottom: "6px" }}>
              MEASURABLE OBJECTIVES
            </span>
            <h3 style={{ fontSize: "24px", color: "var(--color-forest-green)" }}>
              The 6 Core Design Goals & Success Metrics
            </h3>
            <p style={{ color: "var(--color-muted-text)", fontSize: "14px" }}>
              Each feature designed for FreshHarvest directly anchors back to these 6 product goals.
            </p>
          </div>

          <div className="grid-3">
            {DESIGN_GOALS.map((goal) => {
              const Icon = goalIcons[goal.icon] || Compass;
              return (
                <div
                  key={goal.number}
                  className="surface-card"
                  style={{
                    padding: "var(--space-lg)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          background: "var(--color-soft-sage)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={18} color="var(--color-forest-green)" />
                      </div>
                      <span style={{ fontSize: "14px", fontWeight: 800, color: "var(--color-terracotta)", fontFamily: "monospace" }}>
                        GOAL {goal.number}
                      </span>
                    </div>

                    <h4 style={{ fontSize: "16px", color: "var(--color-forest-green)", marginBottom: "6px" }}>
                      {goal.title}
                    </h4>

                    <p style={{ fontSize: "13px", color: "var(--color-muted-text)", lineHeight: 1.5, marginBottom: "var(--space-md)" }}>
                      {goal.desc}
                    </p>
                  </div>

                  <div style={{ background: "var(--color-white)", padding: "8px 12px", borderRadius: "6px", border: "1px solid var(--color-border-subtle)", fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", display: "flex", alignItems: "center", gap: "6px" }}>
                    <CheckCircle size={14} color="var(--color-leaf-green)" />
                    <span>{goal.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
