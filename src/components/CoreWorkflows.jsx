import React, { useState } from "react";
import {
  Clock,
  Coins,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle,
  TrendingDown,
  Layers
} from "lucide-react";

export default function CoreWorkflows() {
  const [selectedKg, setSelectedKg] = useState(15);
  const wholesaleThreshold = 25;
  const isWholesaleUnlocked = selectedKg >= wholesaleThreshold;
  const unitPrice = isWholesaleUnlocked ? 2.20 : 3.40;
  const savings = isWholesaleUnlocked ? ((3.40 - 2.20) * selectedKg).toFixed(2) : 0;

  return (
    <section id="section-09" className="case-study-section">
      <div id="section-workflows"></div>
      <div className="container-1440">
        
        {/* Section Header */}
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
            <span className="badge badge-forest">PAGE 09 / 14</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-muted-text)" }}>
              MICRO-INTERACTIONS & SIGNATURE UX FLOWS
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", marginBottom: "var(--space-sm)" }}>
            The Three Signature UX Innovations
          </h2>
          <p style={{ maxWidth: "860px", fontSize: "17px", color: "var(--color-muted-text)" }}>
            How we reimagined agricultural e-commerce by turning vague marketing claims into verifiable data, bridging consumer retail with bulk commercial procurement, and actively eliminating perishable food waste.
          </p>
        </div>

        {/* 3 Innovations Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3xl)" }}>
          
          {/* Innovation 1: Verifiable Harvest Timestamps */}
          <div className="surface-card" style={{ padding: "var(--space-xl)", borderRadius: "var(--radius-xl)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-xl)", alignItems: "center" }}>
              <div>
                <span className="badge badge-leaf" style={{ marginBottom: "8px" }}>
                  INNOVATION 01 • PROVABLE ORIGIN
                </span>
                <h3 style={{ fontSize: "24px", color: "var(--color-forest-green)", marginBottom: "var(--space-md)" }}>
                  Verifiable Dawn Harvest Timestamps
                </h3>
                <p style={{ fontSize: "15px", color: "var(--color-main-text)", lineHeight: 1.6, marginBottom: "var(--space-md)" }}>
                  Commercial supermarkets rely on buzzwords like "Garden Fresh" while produce sits in cold-storage hubs for 4 to 8 days. FreshHarvest replaces marketing jargon with immutable harvest logging recorded directly at the farm gate.
                </p>
                <div style={{ background: "var(--color-warm-cream)", padding: "14px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-subtle)" }}>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "4px" }}>
                    Psychological UX Benefit:
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--color-muted-text)" }}>
                    Turns freshness from an ambiguous subjective impression into an objective, factual metric. Users reported a 42% higher willingness-to-pay when seeing the 06:15 AM harvest verification.
                  </div>
                </div>
              </div>

              {/* Visual Component Preview */}
              <div className="surface-white" style={{ padding: "var(--space-lg)", borderRadius: "var(--radius-lg)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#2E7D32", boxShadow: "0 0 0 4px rgba(46, 125, 50, 0.2)" }} />
                  <strong style={{ fontSize: "15px", color: "var(--color-forest-green)" }}>Peak Crisp State Active</strong>
                </div>

                <div style={{ background: "var(--color-warm-cream)", padding: "12px", borderRadius: "8px", marginBottom: "12px" }}>
                  <div style={{ fontSize: "11px", color: "var(--color-muted-text)", textTransform: "uppercase", fontWeight: 700 }}>
                    Official Field Telemetry
                  </div>
                  <div style={{ fontSize: "18px", fontWeight: 800, color: "var(--color-forest-green)", margin: "4px 0" }}>
                    Harvested Today at 06:15 AM
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--color-leaf-green)", fontWeight: 600 }}>
                    Elapsed: 3 hrs 26 mins since ground separation
                  </div>
                </div>

                <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
                  Verified by: <strong>Ramesh Patel (GPS: 19.9975° N, 73.7898° E)</strong> • Certified Organically Grown
                </div>
              </div>
            </div>
          </div>

          {/* Innovation 2: Unified Dual 2-Tier Pricing Engine */}
          <div className="surface-card" style={{ padding: "var(--space-xl)", borderRadius: "var(--radius-xl)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-xl)", alignItems: "center" }}>
              <div>
                <span className="badge badge-terracotta" style={{ marginBottom: "8px" }}>
                  INNOVATION 02 • MULTI-SCALE COMMERCE
                </span>
                <h3 style={{ fontSize: "24px", color: "var(--color-forest-green)", marginBottom: "var(--space-md)" }}>
                  Seamless 2-Tier Retail & Bulk Wholesale Engine
                </h3>
                <p style={{ fontSize: "15px", color: "var(--color-main-text)", lineHeight: 1.6, marginBottom: "var(--space-md)" }}>
                  Farmers cannot maintain two separate platforms for retail families and commercial restaurants. Our dual-tier pricing engine enables a single listing to automatically calculate tiered wholesale volume discounts.
                </p>
                
                {/* Interactive Slider to Demonstrate Threshold */}
                <div style={{ background: "var(--color-warm-cream)", padding: "16px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-subtle)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)" }}>
                      Interactive Quantity Simulator:
                    </span>
                    <strong style={{ fontSize: "14px", color: "var(--color-forest-green)" }}>
                      {selectedKg} kg
                    </strong>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="60"
                    value={selectedKg}
                    onChange={(e) => setSelectedKg(Number(e.target.value))}
                    style={{ width: "100%", accentColor: "var(--color-forest-green)", cursor: "pointer", marginBottom: "8px" }}
                  />

                  {/* Wholesale Threshold Indicator */}
                  {!isWholesaleUnlocked ? (
                    <div style={{ fontSize: "12px", color: "var(--color-terracotta)", fontWeight: 600 }}>
                      ⚡ Add {wholesaleThreshold - selectedKg} more kg to unlock Tier 1 Wholesale Rates ($2.20/kg)!
                    </div>
                  ) : (
                    <div style={{ fontSize: "12px", color: "var(--color-leaf-green)", fontWeight: 700 }}>
                      🎉 Wholesale Tier 1 Unlocked! You save ${savings} on this order.
                    </div>
                  )}
                </div>
              </div>

              {/* Price Calculation Card */}
              <div className="surface-white" style={{ padding: "var(--space-lg)", borderRadius: "var(--radius-lg)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-forest-green)" }}>
                    Dynamic Requisition Calculator
                  </span>
                  <span className={`badge ${isWholesaleUnlocked ? "badge-leaf" : "badge-forest"}`}>
                    {isWholesaleUnlocked ? "Wholesale Contract Tier" : "Retail Household Tier"}
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", marginBottom: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-muted-text)" }}>
                    <span>Selected Produce Quantity:</span>
                    <strong style={{ color: "var(--color-main-text)" }}>{selectedKg} kg</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-muted-text)" }}>
                    <span>Effective Price Rate:</span>
                    <strong style={{ color: isWholesaleUnlocked ? "var(--color-leaf-green)" : "var(--color-forest-green)" }}>
                      ${unitPrice.toFixed(2)} / kg
                    </strong>
                  </div>
                  <div style={{ height: "1px", background: "var(--color-border-subtle)" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "18px", fontWeight: 800, color: "var(--color-forest-green)" }}>
                    <span>Total Produce Cost:</span>
                    <span>${(selectedKg * unitPrice).toFixed(2)}</span>
                  </div>
                </div>

                <button className="btn btn-primary" style={{ width: "100%", fontSize: "13px" }}>
                  {isWholesaleUnlocked ? "Schedule B2B Weekly Delivery" : "Add to Grocery Basket"}
                </button>
              </div>
            </div>
          </div>

          {/* Innovation 3: Surplus Produce Flash Sale */}
          <div className="surface-card" style={{ padding: "var(--space-xl)", borderRadius: "var(--radius-xl)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-xl)", alignItems: "center" }}>
              <div>
                <span className="badge badge-sage" style={{ marginBottom: "8px" }}>
                  INNOVATION 03 • FOOD RESCUE
                </span>
                <h3 style={{ fontSize: "24px", color: "var(--color-forest-green)", marginBottom: "var(--space-md)" }}>
                  Surplus Produce Flash Deals
                </h3>
                <p style={{ fontSize: "15px", color: "var(--color-main-text)", lineHeight: 1.6, marginBottom: "var(--space-md)" }}>
                  When bumper crops ripen simultaneously, farmers face a choice between letting produce rot or selling at a loss. Our 1-click surplus trigger launches time-limited flash discounts connecting growers with value-conscious consumers.
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ background: "var(--color-white)", padding: "10px", borderRadius: "8px", flex: 1, border: "1px solid var(--color-border-subtle)" }}>
                    <div style={{ fontSize: "11px", color: "var(--color-muted-text)" }}>Waste Reduction</div>
                    <strong style={{ fontSize: "16px", color: "var(--color-forest-green)" }}>-40% Spoilage</strong>
                  </div>
                  <div style={{ background: "var(--color-white)", padding: "10px", borderRadius: "8px", flex: 1, border: "1px solid var(--color-border-subtle)" }}>
                    <div style={{ fontSize: "11px", color: "var(--color-muted-text)" }}>Discount Range</div>
                    <strong style={{ fontSize: "16px", color: "var(--color-terracotta)" }}>20% to 40% Off</strong>
                  </div>
                </div>
              </div>

              {/* Flash Sale Banner Card */}
              <div style={{ background: "linear-gradient(135deg, #1A372A, #244C3A)", borderRadius: "var(--radius-lg)", padding: "var(--space-lg)", color: "#FFF" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span className="badge badge-terracotta" style={{ background: "#B56E43", color: "#FFF" }}>
                    FLASH RESCUE SALE
                  </span>
                  <div style={{ fontSize: "12px", color: "#D1E0D6", display: "flex", alignItems: "center", gap: "4px" }}>
                    <Clock size={13} />
                    <span>Expires in 02h : 18m</span>
                  </div>
                </div>

                <h4 style={{ color: "#FFF", fontSize: "18px", marginBottom: "6px" }}>
                  Bumper Harvest Baby Kale (65kg Batch)
                </h4>
                <p style={{ fontSize: "12px", color: "#D1E0D6", marginBottom: "16px" }}>
                  100% prime organic condition. Plucked at dawn from Green Valley Farm, discounted to prevent post-harvest waste.
                </p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: "11px", color: "#D1E0D6" }}>Flash Sale Price</div>
                    <div style={{ fontSize: "20px", fontWeight: 800 }}>$2.80 <span style={{ fontSize: "12px", textDecoration: "line-through", opacity: 0.7 }}>$4.00</span></div>
                  </div>
                  <button className="btn btn-secondary btn-sm" style={{ background: "#B56E43" }}>
                    Claim Flash Deal
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
