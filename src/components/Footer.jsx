import React from "react";
import { Sprout, Heart, Layers, ExternalLink } from "lucide-react";
import { FIGMA_PAGES } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark-forest)", color: "var(--color-warm-cream)", padding: "var(--space-4xl) 0 var(--space-2xl) 0", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
      <div className="container-1440">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--space-2xl)", marginBottom: "var(--space-3xl)" }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "var(--color-leaf-green)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Sprout size={18} color="#FFF" />
              </div>
              <strong style={{ fontSize: "20px", color: "#FFF" }}>FreshHarvest</strong>
            </div>
            <p style={{ fontSize: "13px", color: "#A8BDB1", lineHeight: 1.6, maxWidth: "340px", margin: 0, marginBottom: "16px" }}>
              Designing a more transparent farm-to-consumer digital marketplace connecting farmers, household eaters, and institutional chefs.
            </p>
            <div style={{ fontSize: "12px", color: "#7B9485" }}>
              Academic Capstone Portfolio • College Evaluation Standard
            </div>
          </div>

          {/* Quick Page Links (1-7) */}
          <div>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#FFF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
              Figma Case Study (Part 1)
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px" }}>
              {FIGMA_PAGES.slice(0, 7).map((p) => (
                <a key={p.id} href={`#section-${p.id}`} style={{ color: "#A8BDB1", transition: "color 0.2s" }} onMouseEnter={(e) => (e.target.style.color = "#FFF")} onMouseLeave={(e) => (e.target.style.color = "#A8BDB1")}>
                  #{p.id} {p.title}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Page Links (8-14) */}
          <div>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#FFF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
              Figma Case Study (Part 2)
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px" }}>
              {FIGMA_PAGES.slice(7, 14).map((p) => (
                <a key={p.id} href={`#section-${p.id}`} style={{ color: "#A8BDB1", transition: "color 0.2s" }} onMouseEnter={(e) => (e.target.style.color = "#FFF")} onMouseLeave={(e) => (e.target.style.color = "#A8BDB1")}>
                  #{p.id} {p.title}
                </a>
              ))}
            </div>
          </div>

          {/* Tech & Design Specs */}
          <div>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#FFF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
              Project Technology
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "12px", color: "#A8BDB1", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li>🎨 <strong>Design Tools:</strong> Figma, FigJam, Vector Kit</li>
              <li>💻 <strong>Prototype Stack:</strong> React 19, Vite 8, Lucide React</li>
              <li>🌿 <strong>Design System:</strong> Custom CSS Tokens, 8px Grid</li>
              <li>♿ <strong>Accessibility:</strong> WCAG AA 7:1 Contrast Compliant</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "var(--space-lg)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px", fontSize: "12px", color: "#7B9485" }}>
          <div>
            © 2026 FreshHarvest UI/UX Case Study. Created for Academic Capstone & Professional Portfolio Presentation.
          </div>
          <div>
            Crafted with thoughtful design systems & empathy for local growers.
          </div>
        </div>
      </div>
    </footer>
  );
}
