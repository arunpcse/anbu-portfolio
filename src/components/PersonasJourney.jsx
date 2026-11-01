import React, { useState } from "react";
import {
  Users,
  Compass,
  Search,
  Scale,
  ShoppingBag,
  CreditCard,
  Truck,
  Heart,
  ChevronDown,
  ChevronRight,
  Sparkles,
  AlertCircle,
  HelpCircle
} from "lucide-react";
import { PERSONAS, USER_JOURNEY_STAGES } from "../data/portfolioData";

export default function PersonasJourney() {
  const [selectedPersona, setSelectedPersona] = useState(0);
  const [expandedJourney, setExpandedJourney] = useState(0);

  const persona = PERSONAS[selectedPersona];

  return (
    <section id="section-04" className="case-study-section">
      <div id="section-personas"></div>
      <div className="container-1440">
        
        {/* Section Header */}
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
            <span className="badge badge-forest">PAGE 04 / 14</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-muted-text)" }}>
              USER RESEARCH & EXPERIENCE ARCHITECTURE
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", marginBottom: "var(--space-sm)" }}>
            Deep Archetypes & The 7-Stage Journey Continuum
          </h2>
          <p style={{ maxWidth: "860px", fontSize: "17px", color: "var(--color-muted-text)" }}>
            Grounding our design decisions in real human behavior. We modeled three distinct user personas representing the producer, individual consumer, and enterprise culinary buyer.
          </p>
        </div>

        {/* Persona Switcher Tabs */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "var(--space-lg)" }}>
          {PERSONAS.map((p, idx) => (
            <button
              key={p.name}
              onClick={() => setSelectedPersona(idx)}
              className="btn"
              style={{
                background: selectedPersona === idx ? "var(--color-forest-green)" : "var(--color-white)",
                color: selectedPersona === idx ? "var(--color-white)" : "var(--color-main-text)",
                border: "1px solid",
                borderColor: selectedPersona === idx ? "var(--color-forest-green)" : "var(--color-border-subtle)",
                padding: "10px 18px",
                borderRadius: "var(--radius-md)",
                fontSize: "14px",
                fontWeight: selectedPersona === idx ? 700 : 500,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Users size={16} />
              <span>{p.name}</span>
              <span className="badge" style={{ fontSize: "10px", background: selectedPersona === idx ? "rgba(255,255,255,0.2)" : "var(--color-soft-sage)", color: selectedPersona === idx ? "#FFF" : "var(--color-forest-green)" }}>
                {p.role.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Persona Deep Profile Card */}
        <div
          className="surface-card"
          style={{
            marginBottom: "var(--space-3xl)",
            padding: "var(--space-xl)",
            borderRadius: "var(--radius-xl)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "var(--space-xl)",
              alignItems: "start",
            }}
          >
            {/* Left: Avatar & Meta */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
              <div style={{ display: "flex", gap: "var(--space-md)", alignItems: "center" }}>
                <img
                  src={persona.avatar}
                  alt={persona.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid var(--color-forest-green)",
                    boxShadow: "var(--shadow-md)",
                  }}
                  onError={(e) => {
                    // Fallback if image path differs
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div>
                  <h3 style={{ fontSize: "22px", color: "var(--color-forest-green)", marginBottom: "2px" }}>
                    {persona.name}, {persona.age}
                  </h3>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-terracotta)", marginBottom: "4px" }}>
                    {persona.role}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
                    📍 {persona.location}
                  </div>
                </div>
              </div>

              {/* Tagline Quote */}
              <div
                style={{
                  background: "var(--color-warm-cream)",
                  borderLeft: "4px solid var(--color-terracotta)",
                  padding: "14px 16px",
                  borderRadius: "0 8px 8px 0",
                  fontStyle: "italic",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "var(--color-forest-green)",
                }}
              >
                {persona.tagline}
              </div>

              {/* Digital Literacy & Environment */}
              <div style={{ background: "var(--color-white)", padding: "14px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-subtle)" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-muted-text)", textTransform: "uppercase", marginBottom: "4px" }}>
                  Digital Literacy & Interface Context
                </div>
                <div style={{ fontSize: "13px", color: "var(--color-main-text)", lineHeight: 1.5 }}>
                  {persona.digitalLiteracy}
                </div>
              </div>

              {/* Profile Specific Parameters */}
              <div style={{ background: "var(--color-white)", padding: "14px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-subtle)" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-muted-text)", textTransform: "uppercase", marginBottom: "6px" }}>
                  Operational Profile
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12px" }}>
                  {Object.entries(persona.farmProfile).map(([key, val]) => (
                    <div key={key} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--color-border-subtle)", paddingBottom: "2px" }}>
                      <span style={{ color: "var(--color-muted-text)", textTransform: "capitalize" }}>{key}:</span>
                      <strong style={{ color: "var(--color-forest-green)" }}>{val}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Goals, Pain Points, Needs from FreshHarvest */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
              {/* Goals */}
              <div className="surface-white" style={{ padding: "16px" }}>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", textTransform: "uppercase", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Sparkles size={14} color="var(--color-leaf-green)" />
                  <span>Primary User Goals</span>
                </div>
                <ul style={{ paddingLeft: "18px", fontSize: "13px", color: "var(--color-main-text)", margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                  {persona.goals.map((g, i) => (
                    <li key={i}>{g}</li>
                  ))}
                </ul>
              </div>

              {/* Pain Points */}
              <div className="surface-white" style={{ padding: "16px" }}>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-danger)", textTransform: "uppercase", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <AlertCircle size={14} color="var(--color-danger)" />
                  <span>Current Friction & Frustrations</span>
                </div>
                <ul style={{ paddingLeft: "18px", fontSize: "13px", color: "var(--color-main-text)", margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                  {persona.painPoints.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>

              {/* Needs from FreshHarvest */}
              <div style={{ background: "var(--color-soft-sage)", padding: "16px", borderRadius: "var(--radius-md)", border: "1px solid rgba(36, 76, 58, 0.2)" }}>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", textTransform: "uppercase", marginBottom: "8px" }}>
                  Required UX Solutions in FreshHarvest:
                </div>
                <ul style={{ paddingLeft: "18px", fontSize: "13px", color: "var(--color-forest-green)", margin: 0, display: "flex", flexDirection: "column", gap: "6px", fontWeight: 500 }}>
                  {persona.needsFromFreshHarvest.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 7-Stage User Journey Map */}
        <div>
          <div style={{ marginBottom: "var(--space-lg)" }}>
            <span className="badge badge-terracotta" style={{ marginBottom: "6px" }}>
              END-TO-END EXPERIENCE CONTINUUM
            </span>
            <h3 style={{ fontSize: "24px", color: "var(--color-forest-green)" }}>
              The 7-Stage Farm-to-Consumer Journey Map
            </h3>
            <p style={{ color: "var(--color-muted-text)", fontSize: "14px" }}>
              Mapping emotional thoughts, friction points, and UX solution opportunities from initial discovery to doorstep unboxing.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {USER_JOURNEY_STAGES.map((step, idx) => {
              const isExpanded = expandedJourney === idx;
              return (
                <div
                  key={step.stage}
                  className="surface-card"
                  style={{
                    padding: "var(--space-md) var(--space-lg)",
                    borderRadius: "var(--radius-md)",
                    cursor: "pointer",
                    transition: "all var(--transition-fast)",
                  }}
                  onClick={() => setExpandedJourney(isExpanded ? null : idx)}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: isExpanded ? "var(--color-forest-green)" : "var(--color-white)",
                          color: isExpanded ? "var(--color-white)" : "var(--color-forest-green)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "12px",
                          fontWeight: 700,
                          border: "1px solid var(--color-border-subtle)",
                        }}
                      >
                        {idx + 1}
                      </span>
                      <strong style={{ fontSize: "15px", color: "var(--color-forest-green)" }}>
                        {step.stage}
                      </strong>
                      <span style={{ fontSize: "13px", color: "var(--color-muted-text)", display: "none" }}>
                        {step.action}
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "12px", fontStyle: "italic", color: "var(--color-terracotta)" }}>
                        {step.userQuestion}
                      </span>
                      {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </div>
                  </div>

                  {isExpanded && (
                    <div
                      style={{
                        marginTop: "var(--space-md)",
                        paddingTop: "var(--space-md)",
                        borderTop: "1px solid var(--color-border-subtle)",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "var(--space-md)",
                      }}
                    >
                      <div style={{ background: "var(--color-white)", padding: "12px", borderRadius: "8px" }}>
                        <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-muted-text)", textTransform: "uppercase", marginBottom: "4px" }}>
                          User Action
                        </div>
                        <div style={{ fontSize: "13px", color: "var(--color-main-text)" }}>
                          {step.action}
                        </div>
                      </div>

                      <div style={{ background: "var(--color-danger-bg)", padding: "12px", borderRadius: "8px", border: "1px solid rgba(197, 48, 48, 0.15)" }}>
                        <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-danger)", textTransform: "uppercase", marginBottom: "4px" }}>
                          Friction / Anxiety Point
                        </div>
                        <div style={{ fontSize: "13px", color: "var(--color-main-text)" }}>
                          {step.frictionPoint}
                        </div>
                      </div>

                      <div style={{ background: "var(--color-soft-sage)", padding: "12px", borderRadius: "8px", border: "1px solid rgba(36, 76, 58, 0.2)" }}>
                        <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-forest-green)", textTransform: "uppercase", marginBottom: "4px" }}>
                          FreshHarvest UX Opportunity
                        </div>
                        <div style={{ fontSize: "13px", color: "var(--color-forest-green)", fontWeight: 500 }}>
                          {step.opportunity}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
