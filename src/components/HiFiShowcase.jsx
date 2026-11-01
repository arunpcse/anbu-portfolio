import React, { useState } from "react";
import {
  Smartphone,
  Laptop,
  ShoppingBag,
  Tractor,
  Building2,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle,
  ShieldCheck,
  Search,
  Filter,
  DollarSign,
  Truck,
  Heart,
  Layers
} from "lucide-react";

export default function HiFiShowcase() {
  const [activeTab, setActiveTab] = useState("consumer");
  const [showPriceModal, setShowPriceModal] = useState(false);

  return (
    <section id="section-08" className="case-study-section">
      <div id="section-ui-showcase"></div>
      <div className="container-1440">
        
        {/* Section Header */}
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
            <span className="badge badge-terracotta">PAGE 08 / 14</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-muted-text)" }}>
              HIGH-FIDELITY INTERFACE SHOWCASE
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", marginBottom: "var(--space-sm)" }}>
            High-Fidelity UI Screens & Viewport Architecture
          </h2>
          <p style={{ maxWidth: "860px", fontSize: "17px", color: "var(--color-muted-text)" }}>
            Detailed component mockups framed inside realistic device viewports. Experience the interface across the Consumer Mobile App, Farmer Field Portal, and Commercial B2B Dashboard.
          </p>
        </div>

        {/* Viewport Switcher Tabs */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "var(--space-xl)" }}>
          <button
            onClick={() => setActiveTab("consumer")}
            className="btn"
            style={{
              background: activeTab === "consumer" ? "var(--color-forest-green)" : "var(--color-white)",
              color: activeTab === "consumer" ? "var(--color-white)" : "var(--color-main-text)",
              border: "1px solid",
              borderColor: activeTab === "consumer" ? "var(--color-forest-green)" : "var(--color-border-subtle)",
              padding: "10px 18px",
              borderRadius: "var(--radius-md)",
              fontSize: "13px",
              fontWeight: activeTab === "consumer" ? 700 : 500,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Smartphone size={16} />
            <span>Consumer Mobile Marketplace</span>
          </button>

          <button
            onClick={() => setActiveTab("farmer")}
            className="btn"
            style={{
              background: activeTab === "farmer" ? "var(--color-forest-green)" : "var(--color-white)",
              color: activeTab === "farmer" ? "var(--color-white)" : "var(--color-main-text)",
              border: "1px solid",
              borderColor: activeTab === "farmer" ? "var(--color-forest-green)" : "var(--color-border-subtle)",
              padding: "10px 18px",
              borderRadius: "var(--radius-md)",
              fontSize: "13px",
              fontWeight: activeTab === "farmer" ? 700 : 500,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Tractor size={16} />
            <span>Farmer High-Sunlight Portal</span>
          </button>

          <button
            onClick={() => setActiveTab("b2b")}
            className="btn"
            style={{
              background: activeTab === "b2b" ? "var(--color-forest-green)" : "var(--color-white)",
              color: activeTab === "b2b" ? "var(--color-white)" : "var(--color-main-text)",
              border: "1px solid",
              borderColor: activeTab === "b2b" ? "var(--color-forest-green)" : "var(--color-border-subtle)",
              padding: "10px 18px",
              borderRadius: "var(--radius-md)",
              fontSize: "13px",
              fontWeight: activeTab === "b2b" ? 700 : 500,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Laptop size={16} />
            <span>B2B Institutional Kitchen Command</span>
          </button>
        </div>

        {/* Viewport Display Area */}
        <div className="surface-card" style={{ padding: "var(--space-2xl)", borderRadius: "var(--radius-xl)" }}>
          
          {/* 1. Consumer Mobile Showcase */}
          {activeTab === "consumer" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-2xl)", alignItems: "center" }}>
              {/* Phone Mockup Frame */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  className="mobile-frame"
                  style={{
                    background: "var(--color-warm-cream)",
                    boxShadow: "0 25px 50px -12px rgba(36, 76, 58, 0.25)",
                    position: "relative",
                  }}
                >
                  {/* Phone Notch & Status */}
                  <div className="mobile-notch" />
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 20px", fontSize: "11px", fontWeight: 600, color: "var(--color-forest-green)" }}>
                    <span>09:41</span>
                    <span>5G • 100%</span>
                  </div>

                  {/* App Header Inside Phone */}
                  <div style={{ padding: "10px 16px", background: "var(--color-white)", borderBottom: "1px solid var(--color-border-subtle)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <div>
                        <div style={{ fontSize: "10px", color: "var(--color-muted-text)", textTransform: "uppercase", fontWeight: 700 }}>
                          DELIVERY TO RESIDENCE
                        </div>
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-forest-green)", display: "flex", alignItems: "center", gap: "4px" }}>
                          <MapPin size={12} />
                          <span>Sector 48, South Urban</span>
                        </div>
                      </div>
                      <span className="badge badge-sage" style={{ fontSize: "10px", padding: "2px 6px" }}>
                        &lt; 25km radius
                      </span>
                    </div>

                    {/* Search Bar Input */}
                    <div style={{ background: "var(--color-warm-cream)", padding: "6px 10px", borderRadius: "8px", display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--color-muted-text)" }}>
                      <Search size={14} />
                      <span>Search tomatoes, baby kale, carrots...</span>
                    </div>
                  </div>

                  {/* Scrollable Phone Body */}
                  <div style={{ flex: 1, overflowY: "auto", padding: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    
                    {/* Morning Harvest Feed Banner */}
                    <div style={{ background: "var(--color-soft-sage)", padding: "10px", borderRadius: "8px", border: "1px solid rgba(36, 76, 58, 0.2)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "18px" }}>🌱</span>
                      <div>
                        <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-forest-green)" }}>
                          Dawn Harvest Feed (4 Farms Active)
                        </div>
                        <div style={{ fontSize: "10px", color: "var(--color-muted-text)" }}>
                          Produce picked &lt; 3 hours ago ready for dispatch
                        </div>
                      </div>
                    </div>

                    {/* Produce Card */}
                    <div style={{ background: "var(--color-white)", borderRadius: "10px", border: "1px solid var(--color-border-subtle)", padding: "12px", boxShadow: "var(--shadow-sm)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                        <span className="badge badge-leaf" style={{ fontSize: "9px", padding: "2px 6px" }}>
                          Harvested 06:15 AM Today
                        </span>
                        <span className="badge badge-forest" style={{ fontSize: "9px", padding: "2px 6px" }}>
                          14.8 km
                        </span>
                      </div>

                      <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-forest-green)" }}>
                        Heritage Roma Tomatoes
                      </div>
                      <div style={{ fontSize: "11px", color: "var(--color-muted-text)", marginBottom: "8px" }}>
                        Farmer Ramesh Patel • Green Valley Farms
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--color-warm-cream)", padding: "8px", borderRadius: "6px", marginBottom: "8px" }}>
                        <div>
                          <div style={{ fontSize: "10px", color: "var(--color-muted-text)" }}>Retail Price</div>
                          <strong style={{ fontSize: "15px", color: "var(--color-forest-green)" }}>$3.40 / kg</strong>
                        </div>
                        <button
                          onClick={() => setShowPriceModal(true)}
                          style={{ fontSize: "11px", color: "var(--color-terracotta)", fontWeight: 600, textDecoration: "underline" }}
                        >
                          Price Breakdown?
                        </button>
                      </div>

                      <button className="btn btn-primary btn-sm" style={{ width: "100%", fontSize: "12px" }}>
                        Add 1kg Basket ($3.40)
                      </button>
                    </div>

                    {/* Surplus Banner */}
                    <div style={{ background: "rgba(181, 110, 67, 0.12)", border: "1px solid rgba(181, 110, 67, 0.25)", borderRadius: "10px", padding: "10px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                        <span className="badge badge-terracotta" style={{ fontSize: "9px" }}>
                          Surplus Flash -30%
                        </span>
                        <span style={{ fontSize: "10px", color: "var(--color-terracotta)", fontWeight: 700 }}>
                          Expires 12:00 PM
                        </span>
                      </div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-forest-green)" }}>
                        Tender Baby Kale & Chard (65kg available)
                      </div>
                      <div style={{ fontSize: "11px", color: "var(--color-muted-text)" }}>
                        $2.80 <span style={{ textDecoration: "line-through" }}>$4.00</span> / bunch
                      </div>
                    </div>

                  </div>

                  {/* Phone Bottom Tab Bar */}
                  <div style={{ background: "var(--color-white)", borderTop: "1px solid var(--color-border-subtle)", padding: "8px 16px", display: "flex", justifyContent: "space-between", fontSize: "10px", color: "var(--color-forest-green)", fontWeight: 600 }}>
                    <div style={{ textAlign: "center" }}>🛒 Explore</div>
                    <div style={{ textAlign: "center", color: "var(--color-muted-text)" }}>🚜 Farms</div>
                    <div style={{ textAlign: "center", color: "var(--color-muted-text)" }}>📦 Orders</div>
                    <div style={{ textAlign: "center", color: "var(--color-muted-text)" }}>👤 Profile</div>
                  </div>
                </div>
              </div>

              {/* Explanatory Annotations */}
              <div>
                <span className="badge badge-forest" style={{ marginBottom: "8px" }}>
                  MOBILE UX HIGHLIGHTS
                </span>
                <h3 style={{ fontSize: "24px", color: "var(--color-forest-green)", marginBottom: "var(--space-md)" }}>
                  Consumer Mobile App: Transparency by Default
                </h3>
                <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", color: "var(--color-main-text)" }}>
                  <li>
                    <strong>Verifiable Harvest Timestamps:</strong> Freshness is displayed as an exact time (e.g. 06:15 AM) logged by the farmer, removing ambiguity.
                  </li>
                  <li>
                    <strong>Dynamic Proximity Radius:</strong> Buyers only see farms within a reasonable driving distance (&lt; 25km), ensuring same-day delivery viability.
                  </li>
                  <li>
                    <strong>Price Deconstruction Modal:</strong> Consumers can inspect exactly how much of their payment goes to the grower vs courier.
                  </li>
                  <li>
                    <strong>Food Waste Mitigation:</strong> Surplus flash banner alerts consumers to surplus yields before they perish in crates.
                  </li>
                </ul>

                {/* Interactive Price Deconstruct Trigger */}
                <div style={{ marginTop: "var(--space-lg)", background: "var(--color-warm-ivory)", padding: "16px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-subtle)" }}>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "6px" }}>
                    Try the Transparent Price Breakdown:
                  </div>
                  <button
                    onClick={() => setShowPriceModal(true)}
                    className="btn btn-outline btn-sm"
                    style={{ background: "var(--color-white)" }}
                  >
                    <DollarSign size={14} color="var(--color-forest-green)" />
                    <span>View $3.40 Roma Tomato Cost Share</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 2. Farmer High-Sunlight Portal */}
          {activeTab === "farmer" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-2xl)", alignItems: "center" }}>
              <div className="surface-white" style={{ padding: "var(--space-xl)", borderRadius: "var(--radius-lg)", border: "2px solid var(--color-forest-green)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--color-border-subtle)", paddingBottom: "10px", marginBottom: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "20px" }}>🚜</span>
                    <div>
                      <strong style={{ fontSize: "15px", color: "var(--color-forest-green)" }}>Green Valley Organic</strong>
                      <div style={{ fontSize: "11px", color: "var(--color-muted-text)" }}>Farmer Ramesh Patel • Nashik Belts</div>
                    </div>
                  </div>
                  <span className="badge badge-leaf">Field Mode Active</span>
                </div>

                {/* Today's Daily Stats */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
                  <div style={{ background: "var(--color-warm-cream)", padding: "12px", borderRadius: "8px" }}>
                    <div style={{ fontSize: "11px", color: "var(--color-muted-text)" }}>Today's Cleared Revenue</div>
                    <div style={{ fontSize: "20px", fontWeight: 800, color: "var(--color-forest-green)" }}>$428.50</div>
                    <div style={{ fontSize: "10px", color: "var(--color-leaf-green)" }}>Instant UPI Escrow</div>
                  </div>
                  <div style={{ background: "var(--color-warm-cream)", padding: "12px", borderRadius: "8px" }}>
                    <div style={{ fontSize: "11px", color: "var(--color-muted-text)" }}>Courier Pickups</div>
                    <div style={{ fontSize: "20px", fontWeight: 800, color: "var(--color-terracotta)" }}>3 Dispatched</div>
                    <div style={{ fontSize: "10px", color: "var(--color-muted-text)" }}>Next: 10:15 AM (Tata EV)</div>
                  </div>
                </div>

                {/* Big Field Action Buttons */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <button className="btn btn-primary" style={{ padding: "14px", fontSize: "15px", justifyContent: "flex-start", gap: "12px" }}>
                    <span style={{ fontSize: "18px" }}>📸</span>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontWeight: 700 }}>Log Morning Harvest (3-Tap)</div>
                      <div style={{ fontSize: "11px", opacity: 0.85 }}>Auto-defaults to current 06:15 AM timestamp</div>
                    </div>
                  </button>

                  <button className="btn btn-secondary" style={{ padding: "14px", fontSize: "15px", justifyContent: "flex-start", gap: "12px" }}>
                    <span style={{ fontSize: "18px" }}>⚡</span>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontWeight: 700 }}>Trigger Surplus Flash Discount</div>
                      <div style={{ fontSize: "11px", opacity: 0.85 }}>Clear excess tomatoes (-30%) before 12 PM</div>
                    </div>
                  </button>
                </div>
              </div>

              <div>
                <span className="badge badge-leaf" style={{ marginBottom: "8px" }}>
                  OUTDOOR FIELD ACCESSIBILITY
                </span>
                <h3 style={{ fontSize: "24px", color: "var(--color-forest-green)", marginBottom: "var(--space-md)" }}>
                  Farmer Portal: Sunlight-Optimized Usability
                </h3>
                <p style={{ fontSize: "14px", color: "var(--color-main-text)", lineHeight: 1.6 }}>
                  Smallholder farmers do not sit at desks. They interact with smartphones in the open fields under 35°C heat and intense glare, often with soiled hands.
                </p>
                <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", color: "var(--color-muted-text)" }}>
                  <li><strong>Oversized 48px Touch Targets:</strong> Prevents missed taps when walking across uneven furrow lines.</li>
                  <li><strong>Strict 7:1 Contrast:</strong> WCAG AAA compliant text elements ensuring visibility under direct sunlight.</li>
                  <li><strong>Automated Defaults:</strong> Camera photo metadata auto-fills the harvest date and timestamp with 0 manual typing.</li>
                </ul>
              </div>
            </div>
          )}

          {/* 3. B2B Institutional Kitchen Command */}
          {activeTab === "b2b" && (
            <div>
              <div className="browser-frame" style={{ marginBottom: "var(--space-lg)" }}>
                <div className="browser-header">
                  <div className="browser-dots">
                    <span className="browser-dot red" />
                    <span className="browser-dot yellow" />
                    <span className="browser-dot green" />
                  </div>
                  <div className="browser-address-bar">
                    https://freshharvest.app/b2b/procurement/verdant-bistro
                  </div>
                </div>

                <div style={{ padding: "var(--space-xl)", background: "var(--color-warm-cream)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <div>
                      <h4 style={{ fontSize: "18px", color: "var(--color-forest-green)", margin: 0 }}>
                        The Verdant Bistro & Kitchen (Central Culinary Hub)
                      </h4>
                      <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
                        Weekly Standing Requisition #REQ-4091 • Recurring Delivery (Tuesdays & Fridays)
                      </div>
                    </div>
                    <span className="badge badge-forest">Wholesale Contract Locked</span>
                  </div>

                  {/* Requisition Table */}
                  <div style={{ background: "var(--color-white)", borderRadius: "8px", border: "1px solid var(--color-border-subtle)", overflow: "hidden", marginBottom: "14px" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
                      <thead>
                        <tr style={{ background: "var(--color-warm-ivory)", borderBottom: "1px solid var(--color-border-subtle)" }}>
                          <th style={{ padding: "10px 14px", textAlign: "left" }}>Produce Item</th>
                          <th style={{ padding: "10px 14px", textAlign: "left" }}>Certified Grower</th>
                          <th style={{ padding: "10px 14px", textAlign: "left" }}>Volume Requisition</th>
                          <th style={{ padding: "10px 14px", textAlign: "left" }}>Tier Price</th>
                          <th style={{ padding: "10px 14px", textAlign: "left" }}>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                          <td style={{ padding: "10px 14px", fontWeight: 600 }}>Heritage Roma Tomatoes</td>
                          <td style={{ padding: "10px 14px" }}>Green Valley Organic</td>
                          <td style={{ padding: "10px 14px" }}>150 kg (Crates)</td>
                          <td style={{ padding: "10px 14px", color: "var(--color-forest-green)", fontWeight: 700 }}>$2.20 / kg (Wholesale)</td>
                          <td style={{ padding: "10px 14px", fontWeight: 700 }}>$330.00</td>
                        </tr>
                        <tr>
                          <td style={{ padding: "10px 14px", fontWeight: 600 }}>Tender Baby Kale & Chard</td>
                          <td style={{ padding: "10px 14px" }}>Green Valley Organic</td>
                          <td style={{ padding: "10px 14px" }}>40 kg (Chilled)</td>
                          <td style={{ padding: "10px 14px", color: "var(--color-forest-green)", fontWeight: 700 }}>$1.90 / kg (Wholesale)</td>
                          <td style={{ padding: "10px 14px", fontWeight: 700 }}>$76.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
                      Next Morning Drop: <strong>Tuesday, 07:00 AM (Dedicated Electric Reefer Van)</strong>
                    </div>
                    <div style={{ fontSize: "16px", fontWeight: 800, color: "var(--color-forest-green)" }}>
                      Total Standing Order: $406.00 / drop
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal: Transparent Price Breakdown */}
        {showPriceModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 300,
              padding: "var(--space-md)",
            }}
            onClick={() => setShowPriceModal(false)}
          >
            <div
              className="surface-white"
              style={{
                maxWidth: "460px",
                width: "100%",
                padding: "var(--space-xl)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-xl)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-md)" }}>
                <div>
                  <span className="badge badge-forest" style={{ marginBottom: "4px" }}>
                    ZERO HIDDEN MARKUPS
                  </span>
                  <h3 style={{ fontSize: "18px", color: "var(--color-forest-green)", margin: 0 }}>
                    Transparent Price Breakdown
                  </h3>
                </div>
                <button onClick={() => setShowPriceModal(false)} style={{ fontSize: "20px", color: "var(--color-muted-text)" }}>
                  ×
                </button>
              </div>

              <div style={{ fontSize: "14px", color: "var(--color-muted-text)", marginBottom: "var(--space-md)" }}>
                Heritage Roma Tomatoes ($3.40 / kg retail price deconstruction):
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "var(--space-lg)" }}>
                <div style={{ background: "var(--color-soft-sage)", padding: "10px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <strong style={{ color: "var(--color-forest-green)" }}>Farmer Ramesh Patel</strong>
                    <div style={{ fontSize: "11px", color: "var(--color-muted-text)" }}>Seed, organic compost, dawn harvesting</div>
                  </div>
                  <strong style={{ color: "var(--color-forest-green)", fontSize: "16px" }}>74% ($2.52)</strong>
                </div>

                <div style={{ background: "var(--color-warm-ivory)", padding: "10px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <strong style={{ color: "var(--color-terracotta)" }}>Delivery Courier Partner</strong>
                    <div style={{ fontSize: "11px", color: "var(--color-muted-text)" }}>Road transit, crate handling, fuel</div>
                  </div>
                  <strong style={{ color: "var(--color-terracotta)", fontSize: "16px" }}>16% ($0.54)</strong>
                </div>

                <div style={{ background: "var(--color-warm-cream)", padding: "10px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <strong>FreshHarvest Operations</strong>
                    <div style={{ fontSize: "11px", color: "var(--color-muted-text)" }}>App server, payment gateway, support</div>
                  </div>
                  <strong style={{ fontSize: "16px" }}>10% ($0.34)</strong>
                </div>
              </div>

              <button onClick={() => setShowPriceModal(false)} className="btn btn-primary" style={{ width: "100%" }}>
                Close Breakdown
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
