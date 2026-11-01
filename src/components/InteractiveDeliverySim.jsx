import React, { useState, useEffect } from "react";
import {
  MapPin,
  Truck,
  Navigation,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  DollarSign,
  PhoneCall,
  ShieldCheck,
  RefreshCw,
  Compass
} from "lucide-react";
import { DELIVERY_FORMULA_SPEC } from "../data/portfolioData";

export default function InteractiveDeliverySim() {
  const [selectedDestination, setSelectedDestination] = useState("residential");
  const [routeState, setRouteState] = useState("in_transit"); // calculating, ready, in_transit, delivered
  const [edgeCaseTab, setEdgeCaseTab] = useState("normal");
  const [transitProgress, setTransitProgress] = useState(45); // percentage along route
  const [isSimulating, setIsSimulating] = useState(false);

  const destinations = {
    residential: {
      name: "Ananya Sharma — South Urban Highrise Apt 4B",
      distanceKm: 14.8,
      address: "Tower 3, Nirvana Greens, Sector 48",
      eta: "32 mins",
      type: "Household Kitchen"
    },
    bistro: {
      name: "Chef Vikram — The Verdant Bistro (Commercial)",
      distanceKm: 21.2,
      address: "14 Heritage Lane, Culinary District",
      eta: "45 mins",
      type: "B2B Bulk Requisition"
    },
    suburb: {
      name: "Suburban Eco-Community Center",
      distanceKm: 8.5,
      address: "Clubhouse Drop, Green Meadows",
      eta: "18 mins",
      type: "Group Delivery"
    }
  };

  const currentDest = destinations[selectedDestination];
  const billableDistance = Math.max(0, currentDest.distanceKm - DELIVERY_FORMULA_SPEC.baseDistanceIncludedKm);
  const distanceCost = billableDistance * DELIVERY_FORMULA_SPEC.ratePerKm;
  const totalDeliveryFee = (DELIVERY_FORMULA_SPEC.baseFee + distanceCost).toFixed(2);

  // Auto-simulate truck movement when in transit
  useEffect(() => {
    let interval;
    if (isSimulating) {
      interval = setInterval(() => {
        setTransitProgress((prev) => {
          if (prev >= 100) {
            setRouteState("delivered");
            setIsSimulating(false);
            return 100;
          }
          return prev + 5;
        });
      }, 700);
    }
    return () => clearInterval(interval);
  }, [isSimulating]);

  const handleStartSimulation = () => {
    setTransitProgress(10);
    setRouteState("in_transit");
    setIsSimulating(true);
  };

  const handleResetSimulation = () => {
    setTransitProgress(45);
    setRouteState("in_transit");
    setIsSimulating(false);
  };

  return (
    <div className="surface-card" style={{ padding: "var(--space-2xl)", borderRadius: "var(--radius-xl)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "var(--space-md)", marginBottom: "var(--space-xl)" }}>
        <div>
          <span className="badge badge-terracotta" style={{ marginBottom: "var(--space-xs)" }}>
            PROPOSED FEATURE EXPLORATION
          </span>
          <h3 style={{ fontSize: "24px", color: "var(--color-forest-green)", marginTop: "4px" }}>
            Live Distance-Based Routing & Tracking Simulation
          </h3>
          <p style={{ color: "var(--color-muted-text)", maxWidth: "700px", margin: 0, fontSize: "14px" }}>
            Interactive prototype showing how FreshHarvest solves unfair flat-rate delivery. The road distance is computed in real-time, yielding an equitable fee that compensates rural couriers without penalizing local buyers.
          </p>
        </div>

        {/* Action Controls */}
        <div style={{ display: "flex", gap: "var(--space-sm)", alignItems: "center" }}>
          <button
            onClick={isSimulating ? () => setIsSimulating(false) : handleStartSimulation}
            className="btn btn-primary btn-sm"
            style={{ background: isSimulating ? "var(--color-terracotta)" : "var(--color-forest-green)" }}
          >
            {isSimulating ? (
              <>
                <RefreshCw size={14} className="animate-spin" /> Pause Courier
              </>
            ) : (
              <>
                <Truck size={14} /> Animate Live Transit
              </>
            )}
          </button>
          <button onClick={handleResetSimulation} className="btn btn-outline btn-sm">
            Reset Pin
          </button>
        </div>
      </div>

      {/* Destination Selector Tabs */}
      <div style={{ marginBottom: "var(--space-lg)" }}>
        <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-muted-text)", marginBottom: "8px", textTransform: "uppercase" }}>
          Select Test Delivery Destination:
        </div>
        <div style={{ display: "flex", gap: "var(--space-sm)", flexWrap: "wrap" }}>
          {Object.entries(destinations).map(([key, data]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedDestination(key);
                setTransitProgress(30);
                setRouteState("in_transit");
              }}
              style={{
                padding: "8px 16px",
                borderRadius: "var(--radius-md)",
                border: "1px solid",
                borderColor: selectedDestination === key ? "var(--color-forest-green)" : "var(--color-border-subtle)",
                background: selectedDestination === key ? "var(--color-soft-sage)" : "var(--color-white)",
                color: selectedDestination === key ? "var(--color-forest-green)" : "var(--color-main-text)",
                fontWeight: selectedDestination === key ? 600 : 400,
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <MapPin size={14} color={selectedDestination === key ? "var(--color-forest-green)" : "var(--color-muted-text)"} />
              <span>{data.name.split("—")[0]}</span>
              <span className="badge badge-forest" style={{ fontSize: "11px", padding: "2px 6px" }}>
                {data.distanceKm} km
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Simulation Viewport (2 Columns: Map Canvas & Route Breakdown) */}
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "var(--space-xl)", alignItems: "stretch" }}>
        
        {/* Interactive Map Visualizer */}
        <div
          style={{
            background: "#EBE8DF",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-hover-border)",
            position: "relative",
            minHeight: "420px",
            overflow: "hidden",
            boxShadow: "inset 0 2px 8px rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: "column"
          }}
        >
          {/* Map Grid Background Pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: "radial-gradient(#D6D1C4 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px",
              opacity: 0.8
            }}
          />

          {/* Map Header Status Floating Card */}
          <div
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              right: 14,
              background: "rgba(255, 255, 255, 0.94)",
              backdropFilter: "blur(6px)",
              padding: "10px 16px",
              borderRadius: "var(--radius-md)",
              border: "1px solid rgba(36, 76, 58, 0.15)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 10,
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: routeState === "delivered" ? "#2E7D32" : "#B56E43",
                  boxShadow: "0 0 0 4px rgba(181, 110, 67, 0.2)"
                }}
              />
              <div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)" }}>
                  {routeState === "delivered" ? "ORDER DELIVERED AT DESTINATION" : "COURIER EN ROUTE TO DESTINATION"}
                </div>
                <div style={{ fontSize: "11px", color: "var(--color-muted-text)" }}>
                  GPS Route ID: #FH-RT-8924 • Speed: 38 km/h • Electric Cargo Van
                </div>
              </div>
            </div>

            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-forest-green)" }}>
                {routeState === "delivered" ? "0 mins" : currentDest.eta}
              </div>
              <div style={{ fontSize: "10px", color: "var(--color-muted-text)" }}>Estimated Arrival</div>
            </div>
          </div>

          {/* SVG Map Canvas with Path & Animated Driver Marker */}
          <svg
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 2 }}
            viewBox="0 0 500 400"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#244C3A" />
                <stop offset="100%" stopColor="#B56E43" />
              </linearGradient>
            </defs>

            {/* Faint road networks */}
            <path d="M 40 80 Q 200 40 460 120" stroke="#DFD9CD" strokeWidth="6" fill="none" />
            <path d="M 80 340 Q 240 280 440 360" stroke="#DFD9CD" strokeWidth="6" fill="none" />
            <path d="M 120 40 Q 220 200 320 380" stroke="#DFD9CD" strokeWidth="4" fill="none" />

            {/* Calculated Delivery Route Line */}
            <path
              id="deliveryPath"
              d="M 80 120 C 180 80, 220 280, 420 260"
              stroke="#D3CBBB"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            {/* Active Highlighted Route */}
            <path
              d="M 80 120 C 180 80, 220 280, 420 260"
              stroke="url(#routeGradient)"
              strokeWidth="5"
              strokeDasharray="6 4"
              strokeLinecap="round"
              fill="none"
            />

            {/* Farmer Pickup Pin (Green) */}
            <g transform="translate(80, 120)">
              <circle r="16" fill="rgba(36, 76, 58, 0.2)" />
              <circle r="8" fill="#244C3A" />
              <circle r="3" fill="#FFFFFF" />
            </g>

            {/* Customer Dropoff Pin (Terracotta) */}
            <g transform="translate(420, 260)">
              <circle r="16" fill="rgba(181, 110, 67, 0.2)" />
              <circle r="8" fill="#B56E43" />
              <circle r="3" fill="#FFFFFF" />
            </g>

            {/* Animated Delivery Truck Marker */}
            {/* Interpolated position using transitProgress */}
            {(() => {
              // Cubic bezier parametric estimation for M 80,120 C 180,80 220,280 420,260
              const t = transitProgress / 100;
              const p0 = { x: 80, y: 120 };
              const p1 = { x: 180, y: 80 };
              const p2 = { x: 220, y: 280 };
              const p3 = { x: 420, y: 260 };

              const cx = 3 * (p1.x - p0.x);
              const bx = 3 * (p2.x - p1.x) - cx;
              const ax = p3.x - p0.x - cx - bx;

              const cy = 3 * (p1.y - p0.y);
              const by = 3 * (p2.y - p1.y) - cy;
              const ay = p3.y - p0.y - cy - by;

              const x = ax * Math.pow(t, 3) + bx * Math.pow(t, 2) + cx * t + p0.x;
              const y = ay * Math.pow(t, 3) + by * Math.pow(t, 2) + cy * t + p0.y;

              return (
                <g transform={`translate(${x}, ${y})`}>
                  <circle r="18" fill="#1A372A" />
                  <circle r="22" fill="none" stroke="#2D5A43" strokeWidth="2" strokeDasharray="3 3" />
                  <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    🚚
                  </text>
                </g>
              );
            })()}
          </svg>

          {/* Marker Labels Floating */}
          <div
            style={{
              position: "absolute",
              top: 140,
              left: 45,
              background: "var(--color-white)",
              padding: "6px 10px",
              borderRadius: "6px",
              border: "1px solid var(--color-border-subtle)",
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--color-forest-green)",
              zIndex: 5,
              boxShadow: "var(--shadow-sm)"
            }}
          >
            🌱 Farm Gate: Green Valley Organic
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 110,
              right: 25,
              background: "var(--color-white)",
              padding: "6px 10px",
              borderRadius: "6px",
              border: "1px solid var(--color-border-subtle)",
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--color-terracotta)",
              zIndex: 5,
              boxShadow: "var(--shadow-sm)"
            }}
          >
            📍 Dropoff: {currentDest.name.split("—")[0]}
          </div>

          {/* Bottom Transit Progress Bar */}
          <div
            style={{
              marginTop: "auto",
              background: "rgba(255, 255, 255, 0.95)",
              padding: "12px 18px",
              borderTop: "1px solid var(--color-border-subtle)",
              zIndex: 10
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: 600, color: "var(--color-forest-green)", marginBottom: "6px" }}>
              <span>HARVEST PICKUP (0 km)</span>
              <span>IN TRANSIT ({((currentDest.distanceKm * transitProgress) / 100).toFixed(1)} km)</span>
              <span>DESTINATION ({currentDest.distanceKm} km)</span>
            </div>
            <div style={{ height: "6px", background: "#E2DDD2", borderRadius: "999px", overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: `${transitProgress}%`,
                  background: "linear-gradient(90deg, #244C3A, #B56E43)",
                  transition: "width 0.4s ease"
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Pricing Formula Breakdown & Driver Card */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
          
          {/* Formula Transparency Card */}
          <div className="surface-white" style={{ padding: "var(--space-lg)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
              <DollarSign size={16} color="var(--color-forest-green)" />
              <h4 style={{ fontSize: "16px", color: "var(--color-forest-green)" }}>
                Distance Pricing Calculation
              </h4>
            </div>
            <div
              style={{
                fontFamily: "monospace",
                fontSize: "12px",
                background: "var(--color-warm-cream)",
                padding: "8px 12px",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--color-border-subtle)",
                marginBottom: "var(--space-md)",
                color: "var(--color-forest-green)"
              }}
            >
              Fee = Base (${DELIVERY_FORMULA_SPEC.baseFee}) + (Distance &gt; 3km × $0.40/km)
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-muted-text)" }}>
                <span>Total Road Distance:</span>
                <strong style={{ color: "var(--color-main-text)" }}>{currentDest.distanceKm} km</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-muted-text)" }}>
                <span>Base Fee (covers first 3 km):</span>
                <span>$2.50</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-muted-text)" }}>
                <span>Additional Mileage ({billableDistance.toFixed(1)} km × $0.40):</span>
                <span>${distanceCost.toFixed(2)}</span>
              </div>
              <div style={{ height: "1px", background: "var(--color-border-subtle)", margin: "4px 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px", fontWeight: 700, color: "var(--color-forest-green)" }}>
                <span>Total Delivery Surcharge:</span>
                <span style={{ color: "var(--color-terracotta)" }}>${totalDeliveryFee}</span>
              </div>
            </div>
          </div>

          {/* Courier Partner Profile */}
          <div className="surface-white" style={{ padding: "var(--space-md)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "var(--color-soft-sage)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px"
                }}
              >
                🚚
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <strong style={{ fontSize: "14px", color: "var(--color-forest-green)" }}>Rajesh Kumar</strong>
                  <span className="badge badge-forest" style={{ fontSize: "10px", padding: "1px 6px" }}>
                    Verified Partner
                  </span>
                </div>
                <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
                  Tata Ace EV Cargo • ⭐ 4.96 (1,420 trips)
                </div>
              </div>
              <button
                className="btn btn-outline btn-sm"
                title="Simulate Driver Call"
                onClick={() => alert("Calling Delivery Partner Rajesh Kumar: +91 98201-XXXXX (Audio Relay Active)")}
              >
                <PhoneCall size={14} />
              </button>
            </div>
          </div>

          {/* Proposed UX Edge Cases Selector */}
          <div className="surface-white" style={{ padding: "var(--space-md)" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "8px" }}>
              Explore Edge Cases & Fail-Safe States:
            </div>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "8px" }}>
              {["normal", "reroute", "unmapped", "address_change"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setEdgeCaseTab(tab)}
                  style={{
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontSize: "11px",
                    fontWeight: edgeCaseTab === tab ? 600 : 400,
                    background: edgeCaseTab === tab ? "var(--color-forest-green)" : "var(--color-warm-ivory)",
                    color: edgeCaseTab === tab ? "var(--color-white)" : "var(--color-main-text)",
                    border: "1px solid var(--color-border-subtle)"
                  }}
                >
                  {tab === "normal" && "Standard"}
                  {tab === "reroute" && "Weather Reroute"}
                  {tab === "unmapped" && "Rural Unmapped"}
                  {tab === "address_change" && "Address Delta"}
                </button>
              ))}
            </div>

            {/* Edge Case Description Alert */}
            <div
              style={{
                fontSize: "12px",
                padding: "8px 12px",
                borderRadius: "var(--radius-sm)",
                background:
                  edgeCaseTab === "normal"
                    ? "var(--color-soft-sage)"
                    : edgeCaseTab === "reroute"
                    ? "var(--color-warning-bg)"
                    : edgeCaseTab === "unmapped"
                    ? "var(--color-info-bg)"
                    : "var(--color-danger-bg)",
                border: "1px solid var(--color-border-subtle)",
                color: "var(--color-main-text)"
              }}
            >
              {edgeCaseTab === "normal" && (
                <div>
                  <strong>Standard Flow:</strong> Road distance polylines calculate in &lt; 200ms. Live telemetry updates every 15 seconds.
                </div>
              )}
              {edgeCaseTab === "reroute" && (
                <div style={{ color: "var(--color-warning)" }}>
                  <strong>Heavy Rain / Roadwork:</strong> System applies a 12-minute dynamic buffer and renders an alternative green bypass path.
                </div>
              )}
              {edgeCaseTab === "unmapped" && (
                <div style={{ color: "var(--color-info)" }}>
                  <strong>Off-Grid Farm Gate:</strong> Driver receives farmer's custom landmark audio note: "Turn right past the banyan tree at milestone 14."
                </div>
              )}
              {edgeCaseTab === "address_change" && (
                <div style={{ color: "var(--color-danger)" }}>
                  <strong>Destination Shift:</strong> Customer requests address switch mid-transit; system prompts for incremental $1.40 mileage authorization before driver navigation updates.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
