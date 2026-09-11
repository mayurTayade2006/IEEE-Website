import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CyberWaveCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    let isTabActive = !document.hidden;

    // --- Scene, Camera, WebGL Renderer ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0A0E17, 0.0016);

    const camera = new THREE.PerspectiveCamera(
      58,
      window.innerWidth / Math.max(window.innerHeight, 1),
      1,
      2200
    );
    camera.position.set(0, 130, 320);
    camera.lookAt(0, -20, -90);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.75));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- Create Glowing Particle Texture ---
    const createGlowTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.2, 'rgba(0, 220, 255, 0.9)');
      gradient.addColorStop(0.5, 'rgba(180, 50, 255, 0.45)');
      gradient.addColorStop(0.8, 'rgba(0, 98, 155, 0.15)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const createStarTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(236, 72, 153, 0.8)');
      gradient.addColorStop(0.7, 'rgba(147, 51, 234, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createGlowTexture();
    const starTexture = createStarTexture();

    // --- Adaptive 3D Wave Matrix & Connecting Grid ---
    const cols = isMobile ? 54 : 95;
    const rows = isMobile ? 42 : 72;
    const spacingX = isMobile ? 22 : 13;
    const spacingZ = isMobile ? 20 : 12;
    const numPoints = cols * rows;

    const positions = new Float32Array(numPoints * 3);
    const colors = new Float32Array(numPoints * 3);

    // Rich colorful palette matching the requested vibrant wave
    const colDeepBlue = new THREE.Color(0x0052CC);   // Deep Ocean Blue
    const colCyan = new THREE.Color(0x00D8FF);       // Electric Cyan
    const colAmber = new THREE.Color(0xFFB703);      // Radiant Golden Amber
    const colGold = new THREE.Color(0xFB8500);       // Warm Solar Gold
    const colMagenta = new THREE.Color(0xEC4899);    // Neon Magenta
    const colViolet = new THREE.Color(0x9333EA);     // Electric Violet
    const colWhite = new THREE.Color(0xFFFFFF);      // Star Highlight

    const startX = -((cols - 1) * spacingX) / 2;
    const startZ = -((rows - 1) * spacingZ) / 2 - 60;

    let idx = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = startX + i * spacingX;
        const z = startZ + j * spacingZ;
        const y = 0;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        const factorX = i / (cols - 1);
        const factorZ = j / (rows - 1);
        const mixedColor = new THREE.Color();

        // 3-Stage Colorful Horizon Gradient
        if (factorX < 0.35) {
          mixedColor.lerpColors(colDeepBlue, colCyan, factorX / 0.35);
        } else if (factorX < 0.65) {
          mixedColor.lerpColors(colCyan, colAmber, (factorX - 0.35) / 0.30);
        } else if (factorX < 0.88) {
          mixedColor.lerpColors(colGold, colMagenta, (factorX - 0.65) / 0.23);
        } else {
          mixedColor.lerpColors(colMagenta, colViolet, (factorX - 0.88) / 0.12);
        }

        // Depth tinting
        mixedColor.lerp(colMagenta, factorZ * 0.25);

        // Highlight occasional crest nodes with white sparkle
        if ((i * 7 + j * 13) % (isMobile ? 15 : 27) === 0) {
          mixedColor.lerp(colWhite, 0.7);
        }

        colors[idx * 3] = mixedColor.r;
        colors[idx * 3 + 1] = mixedColor.g;
        colors[idx * 3 + 2] = mixedColor.b;

        idx++;
      }
    }

    const gridGeometry = new THREE.BufferGeometry();
    gridGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    gridGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Points Material
    const pointsMaterial = new THREE.PointsMaterial({
      size: isMobile ? 6.5 : 5.5,
      map: particleTexture || undefined,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      depthWrite: false,
      opacity: 0.88,
    });

    const wavePoints = new THREE.Points(gridGeometry, pointsMaterial);
    scene.add(wavePoints);

    // --- Wireframe Connecting Lines (Cybernetic Mesh) ---
    const lineIndices: number[] = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const current = i * rows + j;
        if (i < cols - 1) {
          lineIndices.push(current, (i + 1) * rows + j);
        }
        if (j < rows - 1) {
          lineIndices.push(current, i * rows + (j + 1));
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    lineGeometry.setIndex(lineIndices);

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: isMobile ? 0.28 : 0.24,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const waveLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(waveLines);

    // --- Floating Glowing Nebula Bokeh & Dust Constellations ---
    const bokehCount = isMobile ? 45 : 100;
    const bokehPositions = new Float32Array(bokehCount * 3);
    const bokehColors = new Float32Array(bokehCount * 3);
    const bokehSpeeds = new Float32Array(bokehCount);

    for (let k = 0; k < bokehCount; k++) {
      bokehPositions[k * 3] = (Math.random() - 0.5) * 1200;
      bokehPositions[k * 3 + 1] = Math.random() * 280 - 40;
      bokehPositions[k * 3 + 2] = (Math.random() - 0.5) * 850 - 100;

      const randColor = Math.random();
      let bColor = colCyan.clone();
      if (randColor < 0.45) bColor = colCyan;
      else if (randColor < 0.75) bColor = colAmber;
      else bColor = colMagenta;

      bColor.lerp(colWhite, Math.random() * 0.4);

      bokehColors[k * 3] = bColor.r;
      bokehColors[k * 3 + 1] = bColor.g;
      bokehColors[k * 3 + 2] = bColor.b;

      bokehSpeeds[k] = 0.2 + Math.random() * 0.6;
    }

    const bokehGeometry = new THREE.BufferGeometry();
    bokehGeometry.setAttribute('position', new THREE.BufferAttribute(bokehPositions, 3));
    bokehGeometry.setAttribute('color', new THREE.BufferAttribute(bokehColors, 3));

    const bokehMaterial = new THREE.PointsMaterial({
      size: isMobile ? 8.0 : 9.5,
      map: starTexture || undefined,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      depthWrite: false,
      opacity: 0.78,
    });

    const bokehParticles = new THREE.Points(bokehGeometry, bokehMaterial);
    scene.add(bokehParticles);

    // --- Mouse & Scroll Interaction (Desktop only for mouse, both for scroll) ---
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let mouseRippleX = 0;
    let mouseRippleZ = 0;
    let mouseRippleStrength = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;

      targetMouseX = normX * 40;
      targetMouseY = normY * 30;

      mouseRippleX = normX * 380;
      mouseRippleZ = -normY * 220;
      mouseRippleStrength = 1.0;
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    let scrollOffset = 0;
    let scrollTicking = false;
    const handleScroll = () => {
      if (!scrollTicking) {
        requestAnimationFrame(() => {
          scrollOffset = window.scrollY * 0.08;
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let resizeTimeout: number | undefined;
    const handleResize = () => {
      if (resizeTimeout) cancelAnimationFrame(resizeTimeout);
      resizeTimeout = requestAnimationFrame(() => {
        if (!camera || !renderer) return;
        camera.aspect = window.innerWidth / Math.max(window.innerHeight, 1);
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // --- Animation Loop ---
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isTabActive) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation
      if (!isMobile) {
        currentMouseX += (targetMouseX - currentMouseX) * 0.05;
        currentMouseY += (targetMouseY - currentMouseY) * 0.05;
        camera.position.x = currentMouseX;
        camera.position.y = 130 + currentMouseY + Math.sin(elapsedTime * 0.5) * 6;
      } else {
        camera.position.x = Math.sin(elapsedTime * 0.25) * 12;
        camera.position.y = 130 + Math.cos(elapsedTime * 0.4) * 6;
      }
      camera.lookAt(0, -20 - scrollOffset * 0.3, -100);

      // Wave calculation
      const posAttr = gridGeometry.attributes.position as THREE.BufferAttribute;
      const linePosAttr = lineGeometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      mouseRippleStrength *= 0.96;

      let pIdx = 0;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = posArray[pIdx * 3];
          const z = posArray[pIdx * 3 + 2];

          // Harmonic sinusoidal wave terrain
          const wave1 = Math.sin(x * 0.016 + elapsedTime * 1.3) * 22;
          const wave2 = Math.cos(z * 0.020 + elapsedTime * 1.0) * 25;
          const wave3 = Math.sin((x + z) * 0.011 + elapsedTime * 0.85) * 16;
          const wave4 = Math.cos(Math.sqrt(x * x + z * z) * 0.014 - elapsedTime * 1.6) * 12;

          let mouseWave = 0;
          if (!isMobile && mouseRippleStrength > 0.02) {
            const distToMouse = Math.hypot(x - mouseRippleX, z - mouseRippleZ);
            mouseWave = Math.sin(distToMouse * 0.038 - elapsedTime * 4.0) * Math.max(0, 34 - distToMouse * 0.11) * mouseRippleStrength;
          }

          const slope = (j / rows) * -35 + Math.sin(x * 0.007) * 16;

          posArray[pIdx * 3 + 1] = wave1 + wave2 + wave3 + wave4 + mouseWave + slope;

          pIdx++;
        }
      }

      posAttr.needsUpdate = true;
      linePosAttr.needsUpdate = true;

      // Animate Bokeh Floating Dust
      const bokehPosAttr = bokehGeometry.attributes.position as THREE.BufferAttribute;
      const bokehArray = bokehPosAttr.array as Float32Array;

      for (let k = 0; k < bokehCount; k++) {
        bokehArray[k * 3 + 1] += bokehSpeeds[k] * 0.4;
        bokehArray[k * 3] += Math.sin(elapsedTime * 0.5 + k) * 0.25;

        if (bokehArray[k * 3 + 1] > 260) {
          bokehArray[k * 3 + 1] = -35;
          bokehArray[k * 3] = (Math.random() - 0.5) * 1200;
        }
      }
      bokehPosAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      gridGeometry.dispose();
      lineGeometry.dispose();
      bokehGeometry.dispose();
      pointsMaterial.dispose();
      lineMaterial.dispose();
      bokehMaterial.dispose();
      particleTexture?.dispose();
      starTexture?.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        opacity: 0.95,
        filter: 'contrast(115%) brightness(105%)',
        transform: 'translateZ(0)',
      }}
      aria-hidden="true"
    />
  );
};

export default CyberWaveCanvas;

