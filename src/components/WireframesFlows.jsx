import React, { useState } from "react";
import {
  GitCommit,
  ArrowRight,
  Sliders,
  CheckCircle,
  Eye,
  Layers,
  Smartphone,
  Sparkles,
  MapPin,
  Clock,
  DollarSign
} from "lucide-react";

export default function WireframesFlows() {
  const [activeFlow, setActiveFlow] = useState("consumer");
  const [wireframeMode, setWireframeMode] = useState("hifi"); // 'lofi' or 'hifi'

  const flows = {
    consumer: {
      title: "Flow 01: Consumer Harvest-to-Doorstep Checkout",
      badge: "Consumer Journey",
      steps: [
        { num: "01", step: "Home Radius Feed", detail: "Customer sets 25km proximity radius; sees farms harvesting within 60 mins." },
        { num: "02", step: "Harvest Timestamp Audit", detail: "Inspects verified 'Harvested Today at 06:15 AM' badge & organic certification." },
        { num: "03", step: "Deconstructed Price Inspection", detail: "Clicks price breakdown: 74% Farmer, 16% Delivery Courier, 10% Platform Care." },
        { num: "04", step: "Basket & Quantity Selection", detail: "Chooses metric kilograms or selects crate units with instant stock validation." },
        { num: "05", step: "Distance-Based Calculation", detail: "Enters delivery destination; algorithm computes road km: Base $2.50 + $0.40/km." },
        { num: "06", step: "Real-Time Tracking & Tip", detail: "Live GPS driver telemetry from farm gate to kitchen doorstep + optional farmer tip." },
      ],
    },
    farmer: {
      title: "Flow 02: Farmer Dawn Listing & Surplus Flash Sale",
      badge: "Producer Workflow",
      steps: [
        { num: "01", step: "Field Quick-Access", detail: "Farmer taps big 48px 'New Harvest' button on outdoor mobile portal under sunlight." },
        { num: "02", step: "Camera Photo Snap", detail: "1-tap photo capture of freshly picked crate; auto-detects lighting and batch size." },
        { num: "03", step: "Harvest Time Stamp", detail: "System defaults to current morning timestamp (e.g. 06:15 AM); confirms picking window." },
        { num: "04", step: "Dual Pricing Setup", detail: "Enters retail price ($3.40/kg) and sets wholesale tier ($2.20/kg for 25kg+ orders)." },
        { num: "05", step: "Surplus Flash Toggle", detail: "Toggles 'Excess Harvest Alert' with -30% discount to avoid perishable spoil." },
        { num: "06", step: "Route Consolidation", detail: "Listing is broadcasted to nearby buyers; courier scheduled for 09:00 AM farm pickup." },
      ],
    },
    bulk: {
      title: "Flow 03: Executive Chef B2B Standing Contract",
      badge: "Enterprise Procurement",
      steps: [
        { num: "01", step: "Tonnage Capacity Filter", detail: "Chef filters certified growers with capacity > 200kg/week and pesticide-free audits." },
        { num: "02", step: "Soil Report Inspection", detail: "Inspects soil mineral test PDFs and water testing certificates before contract lock." },
        { num: "03", step: "Wholesale Tier Requisition", detail: "Builds weekly order sheet (150kg Roma Tomatoes + 40kg Baby Kale) at tier 2 rates." },
        { num: "04", step: "Automated Recurring Schedule", detail: "Selects recurring delivery slots: Every Tuesday & Friday at 07:00 AM kitchen drop." },
        { num: "05", step: "Escrow Bank Lock", detail: "Platform escrows funds; payment released only upon chef's digital barcode acceptance." },
      ],
    },
  };

  const currentFlow = flows[activeFlow];

  return (
    <section id="section-06" className="case-study-section">
      <div id="section-wireframes"></div>
      <div className="container-1440">
        
        {/* Section Header */}
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
            <span className="badge badge-forest">PAGE 06 / 14</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-muted-text)" }}>
              TASK FLOWS & WIREFRAME BLUEPRINTS
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", marginBottom: "var(--space-sm)" }}>
            User Flows & Wireframe Evolution
          </h2>
          <p style={{ maxWidth: "860px", fontSize: "17px", color: "var(--color-muted-text)" }}>
            Before crafting high-fidelity design tokens, we mapped end-to-end task flows and tested low-fidelity grayscale wireframes to eliminate cognitive friction and navigation bottlenecks.
          </p>
        </div>

        {/* Flow Selector */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "var(--space-xl)" }}>
          {Object.entries(flows).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveFlow(key)}
              className="btn"
              style={{
                background: activeFlow === key ? "var(--color-forest-green)" : "var(--color-white)",
                color: activeFlow === key ? "var(--color-white)" : "var(--color-main-text)",
                border: "1px solid",
                borderColor: activeFlow === key ? "var(--color-forest-green)" : "var(--color-border-subtle)",
                padding: "10px 18px",
                borderRadius: "var(--radius-md)",
                fontSize: "13px",
                fontWeight: activeFlow === key ? 700 : 500,
              }}
            >
              <span>{data.title.split(":")[0]}</span>
            </button>
          ))}
        </div>

        {/* Selected Flow Visualization */}
        <div className="surface-card" style={{ marginBottom: "var(--space-3xl)", padding: "var(--space-xl)" }}>
          <div style={{ marginBottom: "var(--space-lg)" }}>
            <span className="badge badge-terracotta" style={{ marginBottom: "6px" }}>
              {currentFlow.badge}
            </span>
            <h3 style={{ fontSize: "22px", color: "var(--color-forest-green)" }}>
              {currentFlow.title}
            </h3>
          </div>

          {/* Sequential Step Nodes */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "var(--space-md)",
              position: "relative",
            }}
          >
            {currentFlow.steps.map((st, i) => (
              <div
                key={st.num}
                className="surface-white"
                style={{
                  padding: "16px",
                  borderRadius: "var(--radius-md)",
                  borderTop: "3px solid var(--color-forest-green)",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 800,
                      color: "var(--color-forest-green)",
                      background: "var(--color-soft-sage)",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {st.num}
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted-text)", fontWeight: 600 }}>
                    Step {i + 1}
                  </span>
                </div>

                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "6px" }}>
                  {st.step}
                </div>

                <p style={{ fontSize: "12px", color: "var(--color-muted-text)", margin: 0, lineHeight: 1.5 }}>
                  {st.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Wireframe vs High-Fidelity Comparison Section */}
        <div className="surface-white" style={{ padding: "var(--space-xl)", borderRadius: "var(--radius-xl)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "var(--space-md)", marginBottom: "var(--space-xl)" }}>
            <div>
              <span className="badge badge-sage" style={{ marginBottom: "4px" }}>
                DESIGN ARTIFACT COMPARISON
              </span>
              <h3 style={{ fontSize: "22px", color: "var(--color-forest-green)" }}>
                Low-Fidelity Grayscale Wireframe vs High-Fidelity Design Component
              </h3>
              <p style={{ color: "var(--color-muted-text)", fontSize: "14px", margin: 0 }}>
                Toggle below to observe how structural hierarchy was established before applying color tokens and typography.
              </p>
            </div>

            {/* View Mode Toggle Button */}
            <div style={{ display: "flex", background: "var(--color-warm-ivory)", padding: "4px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-subtle)" }}>
              <button
                onClick={() => setWireframeMode("lofi")}
                style={{
                  padding: "8px 16px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "12px",
                  fontWeight: wireframeMode === "lofi" ? 700 : 500,
                  background: wireframeMode === "lofi" ? "var(--color-forest-green)" : "transparent",
                  color: wireframeMode === "lofi" ? "var(--color-white)" : "var(--color-main-text)",
                }}
              >
                Low-Fi Wireframe (Blueprint)
              </button>
              <button
                onClick={() => setWireframeMode("hifi")}
                style={{
                  padding: "8px 16px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "12px",
                  fontWeight: wireframeMode === "hifi" ? 700 : 500,
                  background: wireframeMode === "hifi" ? "var(--color-forest-green)" : "transparent",
                  color: wireframeMode === "hifi" ? "var(--color-white)" : "var(--color-main-text)",
                }}
              >
                High-Fidelity Component
              </button>
            </div>
          </div>

          {/* Interactive Screen Preview Container */}
          <div
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              background: wireframeMode === "lofi" ? "#F0F0EE" : "var(--color-warm-cream)",
              border: wireframeMode === "lofi" ? "2px dashed #999" : "1px solid var(--color-border-subtle)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-xl)",
              transition: "all var(--transition-normal)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            {wireframeMode === "lofi" ? (
              /* Low-Fi Wireframe Schematic */
              <div style={{ fontFamily: "monospace", color: "#444" }}>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid #888", paddingBottom: "8px", marginBottom: "16px" }}>
                  <span>[WIRE_FRAME // COMPONENT_ID: PRODUCT_CARD_R01]</span>
                  <span>VIEWPORT: MOBILE 375px</span>
                </div>

                <div style={{ width: "100%", height: "160px", background: "#DDD", border: "1px solid #AAA", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", borderRadius: "8px" }}>
                  <span>[IMAGE PLACEHOLDER // ASPECT 16:9]</span>
                </div>

                <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                  <div style={{ background: "#CCC", padding: "4px 8px", borderRadius: "4px", fontSize: "11px" }}>[TAG: HARVEST_TIMESTAMP]</div>
                  <div style={{ background: "#CCC", padding: "4px 8px", borderRadius: "4px", fontSize: "11px" }}>[TAG: ORGANIC_CERT]</div>
                </div>

                <div style={{ height: "24px", background: "#BBB", width: "70%", borderRadius: "4px", marginBottom: "8px" }} />
                <div style={{ height: "16px", background: "#CCC", width: "90%", borderRadius: "4px", marginBottom: "16px" }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #CCC", paddingTop: "12px" }}>
                  <div>
                    <div style={{ fontSize: "11px" }}>[PRICE_TIER_RETAIL]</div>
                    <div style={{ fontSize: "18px", fontWeight: "bold" }}>$X.XX / KG</div>
                  </div>
                  <div style={{ background: "#444", color: "#FFF", padding: "8px 18px", borderRadius: "4px", fontSize: "12px" }}>
                    [BTN: ADD_TO_BASKET]
                  </div>
                </div>
              </div>
            ) : (
              /* High-Fidelity Polished Component */
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span className="badge badge-forest" style={{ fontSize: "11px" }}>
                    🌿 Certified Organic #OG-9214
                  </span>
                  <span className="badge badge-leaf" style={{ fontSize: "11px" }}>
                    Harvested Today at 06:15 AM
                  </span>
                </div>

                {/* Produce Card Preview */}
                <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "16px", border: "1px solid var(--color-border-subtle)", background: "var(--color-white)", padding: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <div>
                      <h4 style={{ fontSize: "20px", color: "var(--color-forest-green)", margin: 0 }}>
                        Heritage Roma Tomatoes
                      </h4>
                      <div style={{ fontSize: "13px", color: "var(--color-muted-text)", display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                        <MapPin size={13} color="var(--color-forest-green)" />
                        <span>Green Valley Organic Farm • 14.8 km away</span>
                      </div>
                    </div>
                    <span className="badge badge-sage">Prime Batch</span>
                  </div>

                  <p style={{ fontSize: "13px", color: "var(--color-main-text)", lineHeight: 1.5, margin: "8px 0 16px 0" }}>
                    Sun-ripened, hand-picked heirloom tomatoes grown with composted organic manure. High in umami and natural lycopene.
                  </p>

                  {/* Dual Pricing Engine Preview */}
                  <div style={{ background: "var(--color-warm-cream)", padding: "12px", borderRadius: "var(--radius-sm)", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid var(--color-border-subtle)", marginBottom: "16px" }}>
                    <div>
                      <div style={{ fontSize: "11px", color: "var(--color-muted-text)" }}>Retail Household</div>
                      <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-forest-green)" }}>
                        $3.40 <span style={{ fontSize: "12px", fontWeight: 400 }}>/ kg</span>
                      </div>
                    </div>
                    <div style={{ height: "24px", width: "1px", background: "var(--color-border-subtle)" }} />
                    <div>
                      <div style={{ fontSize: "11px", color: "var(--color-terracotta)", fontWeight: 600 }}>Restaurant Bulk (25kg+)</div>
                      <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-terracotta)" }}>
                        $2.20 <span style={{ fontSize: "12px", fontWeight: 400 }}>/ kg</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "10px" }}>
                    <button className="btn btn-outline" style={{ flex: 1, fontSize: "13px" }}>
                      Deconstruct Price ($)
                    </button>
                    <button className="btn btn-primary" style={{ flex: 1, fontSize: "13px" }}>
                      Add Fresh Batch
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
