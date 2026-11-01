import React, { useState } from "react";
import {
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Award,
  Users,
  Target,
  FileCheck,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { USABILITY_EVALUATION } from "../data/portfolioData";

export default function UsabilityEvaluation() {
  const [activeTask, setActiveTask] = useState("T1");

  const currentTask = USABILITY_EVALUATION.tasks.find((t) => t.id === activeTask) || USABILITY_EVALUATION.tasks[0];

  return (
    <section id="section-12" className="case-study-section">
      <div id="section-usability"></div>
      <div className="container-1440">
        
        {/* Section Header */}
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
            <span className="badge badge-forest">PAGE 12 / 14</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-muted-text)" }}>
              USABILITY TESTING & ITERATIVE REFINEMENT
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", marginBottom: "var(--space-sm)" }}>
            Usability Walkthroughs & Design Changelog
          </h2>
          <p style={{ maxWidth: "860px", fontSize: "17px", color: "var(--color-muted-text)" }}>
            Design is hypothesis testing. We conducted moderated walkthroughs with 5 representative target users across farm fields and urban kitchens to stress-test our transparency mechanisms.
          </p>
        </div>

        {/* Academic Rigor Notice Card */}
        <div style={{ background: "var(--color-warm-ivory)", borderLeft: "4px solid var(--color-forest-green)", padding: "var(--space-md) var(--space-lg)", borderRadius: "0 8px 8px 0", marginBottom: "var(--space-2xl)", display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <FileCheck size={20} color="var(--color-forest-green)" style={{ flexShrink: 0, marginTop: "2px" }} />
          <div style={{ fontSize: "13px", color: "var(--color-main-text)", lineHeight: 1.6 }}>
            <strong>Academic Evaluation Simulation Notice:</strong> {USABILITY_EVALUATION.ethicalNotice} Conducted with 5 test subjects (2 urban household shoppers, 2 Nashik smallholder farmers, 1 fine-casual restaurant executive chef).
          </div>
        </div>

        {/* 4 Quantitative Usability Metrics */}
        <div className="grid-4" style={{ marginBottom: "var(--space-2xl)" }}>
          <div className="surface-white" style={{ padding: "var(--space-lg)" }}>
            <div style={{ fontSize: "32px", fontWeight: 800, color: "var(--color-forest-green)", fontFamily: "monospace" }}>
              86.5
            </div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "2px" }}>
              SUS Score (Grade A)
            </div>
            <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
              System Usability Scale average across all 5 participants.
            </div>
          </div>

          <div className="surface-white" style={{ padding: "var(--space-lg)" }}>
            <div style={{ fontSize: "32px", fontWeight: 800, color: "var(--color-leaf-green)", fontFamily: "monospace" }}>
              95%
            </div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "2px" }}>
              Task Completion Rate
            </div>
            <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
              19 out of 20 simulated tasks completed without mediator assist.
            </div>
          </div>

          <div className="surface-white" style={{ padding: "var(--space-lg)" }}>
            <div style={{ fontSize: "32px", fontWeight: 800, color: "var(--color-terracotta)", fontFamily: "monospace" }}>
              32s
            </div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "2px" }}>
              Avg. Time-on-Task
            </div>
            <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
              -38% faster than conventional grocery app workflows.
            </div>
          </div>

          <div className="surface-white" style={{ padding: "var(--space-lg)" }}>
            <div style={{ fontSize: "32px", fontWeight: 800, color: "var(--color-forest-green)", fontFamily: "monospace" }}>
              100%
            </div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "2px" }}>
              Fee Transparency Trust
            </div>
            <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
              All participants verified understanding courier distance cost.
            </div>
          </div>
        </div>

        {/* 4 Usability Tasks & Iteration Changelog */}
        <div className="surface-card" style={{ padding: "var(--space-xl)", borderRadius: "var(--radius-xl)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-lg)", flexWrap: "wrap", gap: "10px" }}>
            <div>
              <span className="badge badge-sage" style={{ marginBottom: "4px" }}>
                TASK SCENARIO AUDIT
              </span>
              <h3 style={{ fontSize: "22px", color: "var(--color-forest-green)" }}>
                Testing Tasks, Friction Observed & Iterations
              </h3>
            </div>

            {/* Task Selector Tabs */}
            <div style={{ display: "flex", gap: "6px" }}>
              {USABILITY_EVALUATION.tasks.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTask(t.id)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "12px",
                    fontWeight: activeTask === t.id ? 700 : 500,
                    background: activeTask === t.id ? "var(--color-forest-green)" : "var(--color-white)",
                    color: activeTask === t.id ? "var(--color-white)" : "var(--color-main-text)",
                    border: "1px solid var(--color-border-subtle)",
                    cursor: "pointer",
                  }}
                >
                  {t.id}
                </button>
              ))}
            </div>
          </div>

          {/* Active Task Detail Grid */}
          <div
            className="surface-white"
            style={{
              padding: "var(--space-xl)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border-subtle)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-md)", borderBottom: "1px solid var(--color-border-subtle)", paddingBottom: "10px" }}>
              <div>
                <span className="badge badge-forest" style={{ fontSize: "10px", marginBottom: "4px" }}>
                  TEST SCENARIO {currentTask.id}
                </span>
                <h4 style={{ fontSize: "18px", color: "var(--color-forest-green)", margin: 0 }}>
                  {currentTask.scenario}
                </h4>
              </div>
              <span className="badge badge-leaf">
                {currentTask.successMetric}
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-lg)" }}>
              {/* Positive Observation */}
              <div style={{ background: "var(--color-soft-sage)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(36, 76, 58, 0.2)" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-forest-green)", textTransform: "uppercase", marginBottom: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <CheckCircle size={14} />
                  <span>Participant Observation & Behavior</span>
                </div>
                <p style={{ fontSize: "13px", color: "var(--color-main-text)", margin: 0, lineHeight: 1.5 }}>
                  {currentTask.observation}
                </p>
              </div>

              {/* Friction Discovered */}
              <div style={{ background: "var(--color-danger-bg)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(197, 48, 48, 0.2)" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-danger)", textTransform: "uppercase", marginBottom: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <AlertTriangle size={14} />
                  <span>Discovered Cognitive Friction Point</span>
                </div>
                <p style={{ fontSize: "13px", color: "var(--color-main-text)", margin: 0, lineHeight: 1.5 }}>
                  {currentTask.friction}
                </p>
              </div>

              {/* Iteration Made */}
              <div style={{ background: "rgba(181, 110, 67, 0.12)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(181, 110, 67, 0.3)" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-terracotta)", textTransform: "uppercase", marginBottom: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <RefreshCw size={14} />
                  <span>Evidence-Based Design Iteration</span>
                </div>
                <p style={{ fontSize: "13px", color: "var(--color-main-text)", margin: 0, lineHeight: 1.5, fontWeight: 500 }}>
                  {currentTask.iteration}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
