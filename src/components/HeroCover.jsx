import React from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Clock,
  Compass,
  CheckCircle,
  Truck,
  Layers,
  Award
} from "lucide-react";
import { PROJECT_METADATA } from "../data/portfolioData";

export default function HeroCover() {
  return (
    <section id="section-01" className="case-study-section" style={{ paddingTop: "var(--space-3xl)", paddingBottom: "var(--space-4xl)" }}>
      <div id="section-cover"></div>
      <div className="container-1440">
        {/* Academic / Case Study Banner Pill */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "var(--space-lg)" }}>
          <span className="badge badge-forest" style={{ fontSize: "11px", letterSpacing: "0.06em" }}>
            PAGE 01 / 14 • MASTER FIGMA CASE STUDY
          </span>
          <span className="badge badge-sage">
            ACADEMIC CAPSTONE PORTFOLIO • COLLEGE EVALUATION STANDARD
          </span>
          <span className="badge badge-terracotta">
            8-WEEK DESIGN SPRINT
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <div style={{ maxWidth: "1000px", marginBottom: "var(--space-2xl)" }}>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "var(--color-forest-green)",
              letterSpacing: "-0.03em",
              marginBottom: "var(--space-md)",
            }}
          >
            FreshHarvest: <span className="font-editorial" style={{ fontWeight: 400, color: "var(--color-terracotta)" }}>Designing a More Transparent</span> Farm-to-Consumer Experience
          </h1>
          <p
            style={{
              fontSize: "clamp(17px, 1.8vw, 21px)",
              color: "var(--color-muted-text)",
              lineHeight: 1.6,
              maxWidth: "880px",
              marginBottom: "var(--space-xl)",
            }}
          >
            {PROJECT_METADATA.description}
          </p>

          {/* Quick CTA Actions */}
          <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap", alignItems: "center" }}>
            <a href="#section-02" className="btn btn-primary btn-lg" style={{ gap: "10px" }}>
              <span>Explore Research & Design</span>
              <ArrowRight size={18} />
            </a>
            <a href="#section-10" className="btn btn-outline btn-lg" style={{ gap: "8px" }}>
              <Truck size={18} color="var(--color-forest-green)" />
              <span>Live Delivery Simulation</span>
            </a>
            <a href="#section-11" className="btn btn-secondary btn-lg" style={{ gap: "8px" }}>
              <Sparkles size={18} />
              <span>Launch Prototype Sandbox</span>
            </a>
          </div>
        </div>

        {/* Project Metadata Matrix (4 Columns) */}
        <div
          className="surface-white"
          style={{
            padding: "var(--space-xl)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border-subtle)",
            boxShadow: "var(--shadow-md)",
            marginBottom: "var(--space-3xl)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "var(--space-lg)",
            }}
          >
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-muted-text)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                My Role
              </div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-forest-green)" }}>
                {PROJECT_METADATA.role}
              </div>
              <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
                End-to-end UX research, system design, prototyping
              </div>
            </div>

            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-muted-text)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                Tools & Methods
              </div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-forest-green)" }}>
                {PROJECT_METADATA.tool}
              </div>
              <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
                Wireframing, User Testing, React 19 Frontend
              </div>
            </div>

            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-muted-text)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                Timeline & Scope
              </div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-forest-green)" }}>
                {PROJECT_METADATA.timeline}
              </div>
              <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
                Discovery, IA, Design System, Testing & Iteration
              </div>
            </div>

            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-muted-text)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                Evaluation Focus
              </div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-forest-green)" }}>
                {PROJECT_METADATA.targetAudience}
              </div>
              <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
                Academic rigor, verified timestamps, logistics UX
              </div>
            </div>
          </div>
        </div>

        {/* 4 Quantitative Impact Highlights */}
        <div className="grid-4" style={{ marginBottom: "var(--space-2xl)" }}>
          <div className="surface-card" style={{ padding: "var(--space-lg)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
              <span style={{ fontSize: "32px", fontWeight: 800, color: "var(--color-forest-green)", fontFamily: "monospace" }}>
                74%
              </span>
              <span className="badge badge-leaf">+44% vs Mandi</span>
            </div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "4px" }}>
              Farmer Remuneration
            </div>
            <p style={{ fontSize: "12px", color: "var(--color-muted-text)", margin: 0 }}>
              Direct escrow eliminates 3-tier commission brokers, securing fair profit margins for smallholders.
            </p>
          </div>

          <div className="surface-card" style={{ padding: "var(--space-lg)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
              <span style={{ fontSize: "32px", fontWeight: 800, color: "var(--color-terracotta)", fontFamily: "monospace" }}>
                &lt; 40s
              </span>
              <span className="badge badge-terracotta">Discovery Speed</span>
            </div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "4px" }}>
              Direct Farmer Find
            </div>
            <p style={{ fontSize: "12px", color: "var(--color-muted-text)", margin: 0 }}>
              Proximity slider + morning harvest feed allows urban consumers to locate local growers instantly.
            </p>
          </div>

          <div className="surface-card" style={{ padding: "var(--space-lg)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
              <span style={{ fontSize: "32px", fontWeight: 800, color: "var(--color-forest-green)", fontFamily: "monospace" }}>
                5 Roles
              </span>
              <span className="badge badge-sage">Omni-System</span>
            </div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "4px" }}>
              Unified Agricultural Flow
            </div>
            <p style={{ fontSize: "12px", color: "var(--color-muted-text)", margin: 0 }}>
              Connects household consumers, rural farmers, commercial chefs, couriers, and platform auditors.
            </p>
          </div>

          <div className="surface-card" style={{ padding: "var(--space-lg)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
              <span style={{ fontSize: "32px", fontWeight: 800, color: "var(--color-leaf-green)", fontFamily: "monospace" }}>
                100%
              </span>
              <span className="badge badge-forest">WCAG AA</span>
            </div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "4px" }}>
              Field Sunlight Contrast
            </div>
            <p style={{ fontSize: "12px", color: "var(--color-muted-text)", margin: 0 }}>
              High-contrast typography (&gt; 7:1) & 48px touch targets tested for outdoor agricultural readability.
            </p>
          </div>
        </div>

        {/* Visual Hero Showcase Banner (Editorial Presentation Board) */}
        <div
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #1A372A 0%, #244C3A 60%, #2D5A43 100%)",
            borderRadius: "var(--radius-xl)",
            padding: "clamp(24px, 4vw, 48px)",
            color: "var(--color-white)",
            overflow: "hidden",
            boxShadow: "var(--shadow-xl)",
          }}
        >
          {/* Subtle decorative circles */}
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(181, 110, 67, 0.25) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "var(--space-xl)",
              alignItems: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div>
              <div className="badge badge-terracotta" style={{ marginBottom: "var(--space-sm)" }}>
                PORTFOLIO CASE STUDY OVERVIEW
              </div>
              <h2 style={{ color: "var(--color-white)", fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.25, marginBottom: "var(--space-md)" }}>
                Solving the Three Fatal Flaws of Agricultural Commerce
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#477A49", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <CheckCircle size={14} color="#FFF" />
                  </div>
                  <span style={{ fontSize: "14px", color: "#E0EADF" }}>
                    <strong>Verifiable Freshness:</strong> Replacing marketing buzzwords with dawn harvest timestamps logged straight at the farm gate.
                  </span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#477A49", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <CheckCircle size={14} color="#FFF" />
                  </div>
                  <span style={{ fontSize: "14px", color: "#E0EADF" }}>
                    <strong>Food Waste Mitigation:</strong> Dual retail & bulk wholesale 2-tier pricing channels excess bumper yields directly to restaurants before rot.
                  </span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#477A49", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <CheckCircle size={14} color="#FFF" />
                  </div>
                  <span style={{ fontSize: "14px", color: "#E0EADF" }}>
                    <strong>Distance-Based Logistics:</strong> Equitable formula (Base + $0.40/km) compensates rural drivers and eliminates flat-fee discrimination.
                  </span>
                </li>
              </ul>
            </div>

            {/* Visual Preview Device Board */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-lg)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", borderBottom: "1px solid rgba(255, 255, 255, 0.15)", paddingBottom: "8px" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#D1E0D6" }}>
                  Design System Archetype
                </span>
                <span className="badge badge-sage" style={{ fontSize: "10px", background: "#E9EFE5", color: "#1A372A" }}>
                  Figma UI Kit
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
                <div style={{ background: "rgba(255, 255, 255, 0.12)", padding: "10px", borderRadius: "8px", display: "flex", justifyContent: "space-between" }}>
                  <span>Primary Brand Identity</span>
                  <strong>Forest Green (#244C3A)</strong>
                </div>
                <div style={{ background: "rgba(255, 255, 255, 0.12)", padding: "10px", borderRadius: "8px", display: "flex", justifyContent: "space-between" }}>
                  <span>Warm Editorial Canvas</span>
                  <strong>Warm Cream (#F8F7F1)</strong>
                </div>
                <div style={{ background: "rgba(255, 255, 255, 0.12)", padding: "10px", borderRadius: "8px", display: "flex", justifyContent: "space-between" }}>
                  <span>Typography Hierarchy</span>
                  <strong>Inter (Google Fonts)</strong>
                </div>
                <div style={{ background: "rgba(255, 255, 255, 0.12)", padding: "10px", borderRadius: "8px", display: "flex", justifyContent: "space-between" }}>
                  <span>Spatial Baseline</span>
                  <strong>8px Scalable Grid</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
