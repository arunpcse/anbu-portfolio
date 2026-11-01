import React, { useState, useEffect } from "react";
// 3D Visual Experience Components (Three.js)
import ThreeDLoader from "./components/3d/ThreeDLoader";
import ThreeDBackground from "./components/3d/ThreeDBackground";

// Personal Portfolio Components for ANBARASAN A (7 Requested Sections)
import PersonalNavbar from "./components/personal/PersonalNavbar";
import PersonalHero from "./components/personal/PersonalHero";
import PersonalAbout from "./components/personal/PersonalAbout";
import PersonalSkills from "./components/personal/PersonalSkills";
import PersonalProjects from "./components/personal/PersonalProjects";
import PersonalExperience from "./components/personal/PersonalExperience";
import PersonalAchievements from "./components/personal/PersonalAchievements";
import PersonalContact from "./components/personal/PersonalContact";
import PersonalFooter from "./components/personal/PersonalFooter";

// Flagship In-Depth Case Study Components (FreshHarvest 14-Page Master Case Study)
import Navbar from "./components/Navbar";
import HeroCover from "./components/HeroCover";
import ProjectOverview from "./components/ProjectOverview";
import ProblemOpportunity from "./components/ProblemOpportunity";
import PersonasJourney from "./components/PersonasJourney";
import InformationArchitecture from "./components/InformationArchitecture";
import WireframesFlows from "./components/WireframesFlows";
import DesignSystemKit from "./components/DesignSystemKit";
import HiFiShowcase from "./components/HiFiShowcase";
import CoreWorkflows from "./components/CoreWorkflows";
import DeliveryTrackingSection from "./components/DeliveryTrackingSection";
import InteractivePrototypeSandbox from "./components/InteractivePrototypeSandbox";
import UsabilityEvaluation from "./components/UsabilityEvaluation";
import LearningsRoadmap from "./components/LearningsRoadmap";
import Footer from "./components/Footer";

import { ArrowLeft, Sparkles } from "lucide-react";
import "./App.css";

export default function App() {
  const [currentView, setCurrentView] = useState("portfolio"); // 'portfolio' or 'freshharvest'
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading3D, setIsLoading3D] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const handleOpenCaseStudy = () => {
    setCurrentView("freshharvest");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToPortfolio = () => {
    setCurrentView("portfolio");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`app-root ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      {/* 1. 3D Loading Screen on initial visit (Three.js faceted wireframe gem + particles + counter) */}
      {isLoading3D && (
        <ThreeDLoader
          onComplete={() => setIsLoading3D(false)}
          isDarkMode={isDarkMode}
        />
      )}

      {/* 2. Ambient Interactive 3D Background Motion with Mouse Parallax (Three.js) */}
      <ThreeDBackground isDarkMode={isDarkMode} />

      {currentView === "portfolio" ? (
        /* ============================================================== */
        /* ANBARASAN A — FULL-STACK DEVELOPER & UI/UX DESIGNER PORTFOLIO   */
        /* 7 STRUCTURED SECTIONS AS REQUESTED                             */
        /* ============================================================== */
        <div
          className="personal-portfolio-view"
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* Top Sticky Navigation */}
          <PersonalNavbar
            onOpenCaseStudy={handleOpenCaseStudy}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />

          <main>
            {/* 01. Home / Hero Section (Photograph, Name, Title, Intro, View Projects & Download Resume, GitHub/LinkedIn) */}
            <PersonalHero
              onOpenCaseStudy={handleOpenCaseStudy}
              isDarkMode={isDarkMode}
            />

            {/* 02. About Me (Education & College, Interests, Career Goals, Developer Journey) */}
            <PersonalAbout isDarkMode={isDarkMode} />

            {/* 03. Technical Skills (Programming Languages, Frontend & Backend, Databases, Frameworks & Tools) */}
            <PersonalSkills isDarkMode={isDarkMode} />

            {/* 04. Projects (FreshHarvest, CivicAI, LifeSync AI, Flutter Banking App) */}
            <PersonalProjects
              onOpenCaseStudy={handleOpenCaseStudy}
              isDarkMode={isDarkMode}
            />

            {/* 05. Education & Experience (College & Degree, CGPA, Training & Internships, Certifications) */}
            <PersonalExperience isDarkMode={isDarkMode} />

            {/* 06. Achievements (IDEAS 0.5 National Top 10, NPTEL Elite, Salesforce Training, Coding DSA) */}
            <PersonalAchievements isDarkMode={isDarkMode} />

            {/* 07. Contact Me (Email, LinkedIn, GitHub, Contact Form, Resume Download) */}
            <PersonalContact isDarkMode={isDarkMode} />
          </main>

          {/* Personal Portfolio Footer */}
          <PersonalFooter
            onOpenCaseStudy={handleOpenCaseStudy}
            isDarkMode={isDarkMode}
          />
        </div>
      ) : (
        /* ============================================================== */
        /* FLAGSHIP IN-DEPTH CASE STUDY: FRESHHARVEST (14 FIGMA PAGES)    */
        /* ============================================================== */
        <div
          className="freshharvest-case-study-view"
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* Sticky Return Bar back to ANBARASAN A Portfolio */}
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 120,
              background: "#1E1B2E",
              color: "#FFF",
              padding: "10px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
              borderBottom: "1px solid rgba(167, 139, 250, 0.2)",
            }}
          >
            <button
              onClick={handleBackToPortfolio}
              className="btn"
              style={{
                background: "var(--color-purple-primary)",
                color: "#FFF",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "6px 14px",
                fontSize: "13px",
                fontWeight: 700,
                borderRadius: "var(--radius-md)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
            >
              <ArrowLeft size={16} />
              <span>← Back to ANBARASAN A Personal Portfolio</span>
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#D3DECE" }}>
              <Sparkles size={14} color="#FFD166" />
              <span>Viewing Flagship Project: FreshHarvest Capstone</span>
            </div>
          </div>

          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <HeroCover />
          <ProjectOverview />
          <ProblemOpportunity />
          <PersonasJourney />
          <InformationArchitecture />
          <WireframesFlows />
          <DesignSystemKit />
          <HiFiShowcase />
          <CoreWorkflows />
          <DeliveryTrackingSection />
          <InteractivePrototypeSandbox />
          <UsabilityEvaluation />
          <LearningsRoadmap />
          <Footer onBackToTop={handleBackToPortfolio} />
        </div>
      )}
    </div>
  );
}
