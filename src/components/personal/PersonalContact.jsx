import React, { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle,
  MapPin,
  Download,
  ExternalLink,
  Sparkles
} from "lucide-react";
import { PERSONAL_INFO } from "../../data/personalData";

export default function PersonalContact({ isDarkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4500);
  };

  const handleDownloadResume = () => {
    alert("Downloading " + PERSONAL_INFO.name + " — Full-Stack Developer & UI/UX Designer Resume (PDF). Contact: " + PERSONAL_INFO.email);
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: "var(--space-4xl)",
        paddingBottom: "var(--space-4xl)",
        borderTop: `1px solid ${isDarkMode ? "rgba(167, 139, 250, 0.12)" : "var(--color-border-subtle)"}`,
      }}
    >
      <div className="container-1440">
        {/* Section Header */}
        <div style={{ marginBottom: "var(--space-3xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
            <span className="badge badge-forest">GET IN TOUCH</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: isDarkMode ? "#C4B5FD" : "var(--color-muted-text)" }}>
              OPEN FOR IMMEDIATE JOINING
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              color: isDarkMode ? "#FFFFFF" : "#1E1B2E",
              margin: "0 0 16px 0",
            }}
          >
            Let's Connect & Build Together
          </h2>
          <p
            style={{
              maxWidth: "700px",
              fontSize: "17px",
              color: isDarkMode ? "#C4B5FD" : "var(--color-muted-text)",
              lineHeight: 1.6,
            }}
          >
            I am actively seeking Full-Stack Developer, Frontend Engineer, and UI/UX Designer roles. Feel free to reach out directly via email, message form, or connect on LinkedIn and GitHub.
          </p>
        </div>

        {/* 2 Columns: Contact Form & Direct Channels */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(24px, 4vw, 48px)",
            alignItems: "start",
          }}
        >
          {/* Interactive Contact Form */}
          <div
            className="surface-card"
            style={{
              padding: "var(--space-2xl)",
              borderRadius: "var(--radius-xl)",
              background: isDarkMode ? "#181528" : "var(--color-warm-ivory)",
              borderColor: isDarkMode ? "rgba(167, 139, 250, 0.16)" : "var(--color-border-subtle)",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "var(--space-2xl) 0" }}>
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "50%",
                    background: "var(--color-purple-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px auto",
                    color: "var(--color-purple-primary)",
                  }}
                >
                  <CheckCircle size={32} />
                </div>
                <h3 style={{ fontSize: "22px", color: isDarkMode ? "#FFF" : "#1E1B2E", marginBottom: "8px" }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ fontSize: "14px", color: isDarkMode ? "#C4B5FD" : "var(--color-muted-text)", maxWidth: "420px", margin: "0 auto" }}>
                  Thank you for reaching out, {formData.name || "friend"}. I will review your message and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: isDarkMode ? "#FFF" : "#1E1B2E", marginBottom: "6px" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      border: `1px solid ${isDarkMode ? "rgba(167, 139, 250, 0.2)" : "var(--color-border-subtle)"}`,
                      background: isDarkMode ? "#120F20" : "#FFF",
                      color: isDarkMode ? "#FFF" : "var(--color-main-text)",
                      fontSize: "14px",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: isDarkMode ? "#FFF" : "#1E1B2E", marginBottom: "6px" }}>
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      border: `1px solid ${isDarkMode ? "rgba(167, 139, 250, 0.2)" : "var(--color-border-subtle)"}`,
                      background: isDarkMode ? "#120F20" : "#FFF",
                      color: isDarkMode ? "#FFF" : "var(--color-main-text)",
                      fontSize: "14px",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: isDarkMode ? "#FFF" : "#1E1B2E", marginBottom: "6px" }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Full-Stack / UI/UX Role Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      border: `1px solid ${isDarkMode ? "rgba(167, 139, 250, 0.2)" : "var(--color-border-subtle)"}`,
                      background: isDarkMode ? "#120F20" : "#FFF",
                      color: isDarkMode ? "#FFF" : "var(--color-main-text)",
                      fontSize: "14px",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: isDarkMode ? "#FFF" : "#1E1B2E", marginBottom: "6px" }}>
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message or inquiry here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      border: `1px solid ${isDarkMode ? "rgba(167, 139, 250, 0.2)" : "var(--color-border-subtle)"}`,
                      background: isDarkMode ? "#120F20" : "#FFF",
                      color: isDarkMode ? "#FFF" : "var(--color-main-text)",
                      fontSize: "14px",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: "100%", gap: "8px", marginTop: "8px" }}
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Resume Card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
            {/* Direct Communication Channels */}
            <div
              className="surface-white"
              style={{
                padding: "var(--space-xl)",
                borderRadius: "var(--radius-lg)",
                background: isDarkMode ? "#181528" : "#FFF",
                border: `1px solid ${isDarkMode ? "rgba(167, 139, 250, 0.16)" : "var(--color-border-subtle)"}`,
              }}
            >
              <h3 style={{ fontSize: "18px", color: isDarkMode ? "#FFF" : "#1E1B2E", marginBottom: "16px" }}>
                Direct Channels & Socials
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "14px" }}>
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: isDarkMode ? "#EDE9FE" : "var(--color-main-text)",
                    textDecoration: "none",
                  }}
                >
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "var(--color-purple-soft)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-purple-primary)" }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", color: isDarkMode ? "#C4B5FD" : "var(--color-muted-text)" }}>Email Directly</div>
                    <strong style={{ fontSize: "14px" }}>{PERSONAL_INFO.email}</strong>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: isDarkMode ? "#EDE9FE" : "var(--color-main-text)",
                    textDecoration: "none",
                  }}
                >
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(124, 58, 237, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-purple-primary)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", color: isDarkMode ? "#C4B5FD" : "var(--color-muted-text)" }}>Professional Profile</div>
                    <strong style={{ fontSize: "14px", display: "flex", alignItems: "center", gap: "4px" }}>
                      LinkedIn / {PERSONAL_INFO.name} <ExternalLink size={12} />
                    </strong>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: isDarkMode ? "#EDE9FE" : "var(--color-main-text)",
                    textDecoration: "none",
                  }}
                >
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: isDarkMode ? "rgba(255,255,255,0.08)" : "var(--color-warm-ivory)", display: "flex", alignItems: "center", justifyContent: "center", color: isDarkMode ? "#FFF" : "var(--color-purple-primary)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", color: isDarkMode ? "#C4B5FD" : "var(--color-muted-text)" }}>Open-Source Repositories</div>
                    <strong style={{ fontSize: "14px", display: "flex", alignItems: "center", gap: "4px" }}>
                      GitHub / {PERSONAL_INFO.name} <ExternalLink size={12} />
                    </strong>
                  </div>
                </a>

                {/* Location */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: isDarkMode ? "#EDE9FE" : "var(--color-main-text)",
                  }}
                >
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "var(--color-purple-soft)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-purple-primary)" }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", color: isDarkMode ? "#C4B5FD" : "var(--color-muted-text)" }}>Location</div>
                    <strong style={{ fontSize: "14px" }}>{PERSONAL_INFO.location}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Download Card */}
            <div
              style={{
                background: "linear-gradient(135deg, #7C3AED, #5B21B6)",
                padding: "var(--space-xl)",
                borderRadius: "var(--radius-lg)",
                color: "#FFF",
                boxShadow: "0 10px 25px rgba(124, 58, 237, 0.25)",
              }}
            >
              <h4 style={{ color: "#FFF", fontSize: "17px", marginBottom: "6px" }}>
                Download {PERSONAL_INFO.name}'s Resume (PDF)
              </h4>
              <p style={{ fontSize: "13px", color: "#EDE9FE", lineHeight: 1.5, marginBottom: "16px" }}>
                Includes comprehensive breakdowns of FreshHarvest, CivicAI, LifeSync AI, Flutter Banking App, technical coursework, CGPA, and national achievements.
              </p>
              <button
                onClick={handleDownloadResume}
                className="btn"
                style={{
                  width: "100%",
                  gap: "8px",
                  background: "#FFF",
                  color: "#6D28D9",
                  fontWeight: 700,
                }}
              >
                <Download size={16} /> Download Resume (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
