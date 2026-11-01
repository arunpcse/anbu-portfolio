import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sparkles, ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "../../data/personalData";

export default function ThreeDLoader({ onComplete, isDarkMode }) {
  const mountRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing 3D Creative Space...");
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Increment progress smoothly over ~1.8s
    const startTime = Date.now();
    const duration = 1800; // ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentPct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentPct);

      if (currentPct < 30) {
        setStatusText("Initializing 3D Creative Space...");
      } else if (currentPct < 65) {
        setStatusText("Loading Design Tokens & Typography...");
      } else if (currentPct < 90) {
        setStatusText("Compiling Developer Craft Systems...");
      } else {
        setStatusText(`Ready • Welcome to ${PERSONAL_INFO.name}'s Portfolio`);
      }

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            onComplete();
          }, 500);
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Three.js 3D Scene Initialization
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3D Core Geometry: Outer Wireframe Icosahedron (Purple)
    const outerGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: isDarkMode ? 0xa78bfa : 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    scene.add(outerMesh);

    // 3D Inner Solid Faceted Core (Deep Violet)
    const innerGeo = new THREE.OctahedronGeometry(0.85, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: isDarkMode ? 0xc4b5fd : 0x6d28d9,
      metalness: 0.4,
      roughness: 0.2,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // 3D Orbital Particle Ring
    const particlesCount = 70;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const angle = (i / particlesCount) * Math.PI * 2;
      const radius = 2.1 + (Math.random() - 0.5) * 0.4;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.6;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      color: isDarkMode ? 0xa78bfa : 0x7c3aed,
      transparent: true,
      opacity: 0.85,
    });
    const particleRing = new THREE.Points(particleGeo, particleMat);
    scene.add(particleRing);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xa78bfa, 2.0);
    pointLight.position.set(4, 5, 4);
    scene.add(pointLight);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      outerMesh.rotation.x += 0.008;
      outerMesh.rotation.y += 0.012;

      innerMesh.rotation.x -= 0.01;
      innerMesh.rotation.y -= 0.015;

      particleRing.rotation.y += 0.006;
      particleRing.rotation.x = Math.sin(Date.now() * 0.001) * 0.2;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [isDarkMode]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 250);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: isDarkMode
          ? "radial-gradient(circle at center, #181528 0%, #0E0C17 100%)"
          : "radial-gradient(circle at center, #F8F9FD 0%, #EDE9FE 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s ease",
        opacity: isFadingOut ? 0 : 1,
        transform: isFadingOut ? "scale(1.04)" : "scale(1)",
        pointerEvents: isFadingOut ? "none" : "auto",
      }}
    >
      {/* Skip Button */}
      <button
        onClick={handleSkip}
        style={{
          position: "absolute",
          top: "24px",
          right: "24px",
          padding: "6px 14px",
          borderRadius: "var(--radius-full)",
          background: isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(124, 58, 237, 0.08)",
          color: isDarkMode ? "#EDE9FE" : "var(--color-purple-primary)",
          border: `1px solid ${isDarkMode ? "rgba(167, 139, 250, 0.25)" : "rgba(124, 58, 237, 0.2)"}`,
          fontSize: "12px",
          fontWeight: 600,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span>Skip Intro</span>
        <ArrowRight size={13} />
      </button>

      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        style={{
          width: "280px",
          height: "280px",
          marginBottom: "16px",
          position: "relative",
        }}
      />

      {/* Developer Name & Brand Title */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <h2
          style={{
            fontSize: "26px",
            fontWeight: 800,
            color: isDarkMode ? "#FFFFFF" : "#1E1B2E",
            letterSpacing: "-0.02em",
            marginBottom: "4px",
          }}
        >
          {PERSONAL_INFO.name}
        </h2>
        <div
          style={{
            fontSize: "13px",
            color: isDarkMode ? "#C4B5FD" : "var(--color-muted-text)",
            fontWeight: 600,
          }}
        >
          {PERSONAL_INFO.title}
        </div>
      </div>

      {/* Progress Bar Container */}
      <div
        style={{
          width: "260px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "4px",
            background: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(124, 58, 237, 0.15)",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg, #7C3AED, #A78BFA, #6D28D9)",
              transition: "width 0.1s linear",
            }}
          />
        </div>

        {/* Status Text & Percentage */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            fontSize: "11px",
            color: isDarkMode ? "#C4B5FD" : "var(--color-muted-text)",
            fontWeight: 600,
          }}
        >
          <span>{statusText}</span>
          <span style={{ fontFamily: "monospace" }}>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
