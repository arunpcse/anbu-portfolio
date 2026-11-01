import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeDBackground({ isDarkMode }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Window dimensions
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Three.js Core Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D floating shapes for mouse parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Color definitions based on Light Grey + Purple theme
    const primaryColor = isDarkMode ? 0xa78bfa : 0x7c3aed;
    const secondaryColor = isDarkMode ? 0xc4b5fd : 0x6d28d9;
    const accentColor = isDarkMode ? 0x8b5cf6 : 0xa78bfa;
    const wireOpacity = isDarkMode ? 0.35 : 0.22;

    // Shape 1: Floating Torus (Donut) in Upper Right
    const torusGeo = new THREE.TorusGeometry(2.4, 0.45, 16, 40);
    const torusMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: wireOpacity,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(7, 4, -4);
    mainGroup.add(torusMesh);

    // Shape 2: Floating Octahedron (Diamond) on Mid Left
    const octaGeo = new THREE.OctahedronGeometry(1.8, 0);
    const octaMat = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      wireframe: true,
      transparent: true,
      opacity: wireOpacity * 1.1,
    });
    const octaMesh = new THREE.Mesh(octaGeo, octaMat);
    octaMesh.position.set(-8, 1, -2);
    mainGroup.add(octaMesh);

    // Shape 3: Floating Icosahedron (Faceted Sphere) in Lower Right
    const icoGeo = new THREE.IcosahedronGeometry(2.0, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: accentColor,
      wireframe: true,
      transparent: true,
      opacity: wireOpacity * 0.9,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(8, -5, -3);
    mainGroup.add(icoMesh);

    // Shape 4: Subtle Thin Orbital Ring
    const ringGeo = new THREE.TorusGeometry(3.2, 0.08, 12, 60);
    const ringMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: wireOpacity * 0.7,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.set(-6, -4, -5);
    mainGroup.add(ringMesh);

    // Ambient 3D Floating Particle Dust
    const particleCount = 120;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 28;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 22;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 14 - 3;
      particleSeeds[i] = Math.random() * Math.PI * 2;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isDarkMode ? 0.08 : 0.06,
      color: isDarkMode ? 0xa78bfa : 0x7c3aed,
      transparent: true,
      opacity: isDarkMode ? 0.45 : 0.25,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Mouse Movement Parallax State
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Animation Render Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp damping
      targetX += (mouseX * 0.45 - targetX) * 0.05;
      targetY += (mouseY * 0.3 - targetY) * 0.05;

      mainGroup.rotation.y = targetX * 0.4;
      mainGroup.rotation.x = -targetY * 0.3;

      // Gentle continuous 3D object rotation & floating sine drift
      torusMesh.rotation.x = elapsedTime * 0.2;
      torusMesh.rotation.y = elapsedTime * 0.25;
      torusMesh.position.y = 4 + Math.sin(elapsedTime * 0.8) * 0.35;

      octaMesh.rotation.y = -elapsedTime * 0.3;
      octaMesh.rotation.z = elapsedTime * 0.15;
      octaMesh.position.y = 1 + Math.cos(elapsedTime * 0.7) * 0.3;

      icoMesh.rotation.x = elapsedTime * 0.18;
      icoMesh.rotation.y = -elapsedTime * 0.22;
      icoMesh.position.y = -5 + Math.sin(elapsedTime * 0.6) * 0.4;

      ringMesh.rotation.x = elapsedTime * 0.12;
      ringMesh.rotation.y = elapsedTime * 0.16;

      // Floating particle subtle oscillation
      const posAttr = particleGeo.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        const seed = particleSeeds[i];
        posAttr.array[i * 3 + 1] += Math.sin(elapsedTime + seed) * 0.003;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      octaGeo.dispose();
      octaMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [isDarkMode]);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    />
  );
}
