import React from "react";
import {
  Truck,
  MapPin,
  DollarSign,
  AlertTriangle,
  Compass,
  CheckCircle,
  HelpCircle
} from "lucide-react";
import InteractiveDeliverySim from "./InteractiveDeliverySim";
import { DELIVERY_FORMULA_SPEC } from "../data/portfolioData";

export default function DeliveryTrackingSection() {
  return (
    <section id="section-10" className="case-study-section">
      <div id="section-delivery"></div>
      <div className="container-1440">
        
        {/* Section Header */}
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
            <span className="badge badge-forest">PAGE 10 / 14</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-muted-text)" }}>
              LOGISTICS UX & DYNAMIC PRICING ALGORITHM
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", marginBottom: "var(--space-sm)" }}>
            Distance-Based Delivery & Live Telemetry
          </h2>
          <p style={{ maxWidth: "860px", fontSize: "17px", color: "var(--color-muted-text)" }}>
            Traditional delivery apps use flat-rate fees that unfairly burden near neighbors and exclude rural farmers located 15km+ outside municipal bounds. Our formula computes true road mileage with full price breakdown transparency.
          </p>
        </div>

        {/* Embedded Interactive Delivery Simulator Component */}
        <div style={{ marginBottom: "var(--space-3xl)" }}>
          <InteractiveDeliverySim />
        </div>

        {/* Dynamic Formula Specs & 4 Operational Edge Cases */}
        <div className="grid-2">
          {/* Formula Transparency Spec */}
          <div className="surface-white" style={{ padding: "var(--space-xl)", borderRadius: "var(--radius-lg)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-md)" }}>
              <DollarSign size={20} color="var(--color-forest-green)" />
              <h3 style={{ fontSize: "18px", color: "var(--color-forest-green)", margin: 0 }}>
                The Distance-Based Logistics Formula
              </h3>
            </div>

            <div
              style={{
                fontFamily: "monospace",
                fontSize: "13px",
                background: "var(--color-warm-cream)",
                padding: "12px 16px",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--color-border-subtle)",
                marginBottom: "var(--space-md)",
                color: "var(--color-forest-green)",
                lineHeight: 1.5,
              }}
            >
              Fee = ${DELIVERY_FORMULA_SPEC.baseFee.toFixed(2)} (Base: up to {DELIVERY_FORMULA_SPEC.baseDistanceIncludedKm} km) + (${DELIVERY_FORMULA_SPEC.ratePerKm.toFixed(2)}/km × Additional Road km)
            </div>

            <p style={{ fontSize: "13px", color: "var(--color-muted-text)", lineHeight: 1.6, marginBottom: "var(--space-md)" }}>
              {DELIVERY_FORMULA_SPEC.policyStatement}
            </p>

            <div style={{ background: "var(--color-soft-sage)", padding: "12px 14px", borderRadius: "8px", fontSize: "12px", color: "var(--color-forest-green)" }}>
              <strong>Fair Courier Compensation:</strong> 100% of distance mileage surcharges are passed directly to the delivery partner, ensuring equitable compensation for rural agricultural trips.
            </div>
          </div>

          {/* Operational Edge Cases & Fail-Safe Fallbacks */}
          <div className="surface-white" style={{ padding: "var(--space-xl)", borderRadius: "var(--radius-lg)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-md)" }}>
              <AlertTriangle size={20} color="var(--color-terracotta)" />
              <h3 style={{ fontSize: "18px", color: "var(--color-forest-green)", margin: 0 }}>
                Operational Fail-Safes & Edge Cases
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {DELIVERY_FORMULA_SPEC.edgeCases.map((edge) => (
                <div key={edge.title} style={{ background: "var(--color-warm-cream)", padding: "10px 12px", borderRadius: "8px", border: "1px solid var(--color-border-subtle)" }}>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "2px" }}>
                    {edge.title}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--color-muted-text)", lineHeight: 1.4 }}>
                    {edge.behavior}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
