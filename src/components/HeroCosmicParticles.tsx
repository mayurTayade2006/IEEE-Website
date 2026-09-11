import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroCosmicParticles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      1,
      1200
    );
    camera.position.set(0, 0, 240);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- Procedural Glowing Bokeh Disc Texture ---
    // Generates circular luminous bokeh discs with crisp inner core and soft outer falloff
    const createBokehDiscTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.35, 'rgba(0, 229, 255, 0.95)');
      gradient.addColorStop(0.7, 'rgba(0, 140, 255, 0.55)');
      gradient.addColorStop(0.9, 'rgba(0, 70, 200, 0.15)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 128, 128);
      return new THREE.CanvasTexture(canvas);
    };

    // --- Procedural Twinkling Star Point Texture ---
    const createStarSparkTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.25, 'rgba(0, 229, 255, 0.9)');
      gradient.addColorStop(0.6, 'rgba(0, 100, 255, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const bokehTexture = createBokehDiscTexture();
    const starTexture = createStarSparkTexture();

    // --- Color Spectrum matching the exact uploaded image ---
    // Deep Electric Cyan (#00E5FF), Vibrant Neon Blue (#0085FF), Radiant Sky (#00BFFF), White Glow (#FFFFFF)
    const colCyan = new THREE.Color(0x00E5FF);
    const colElectricBlue = new THREE.Color(0x0077FE);
    const colSky = new THREE.Color(0x00B4D8);
    const colWhite = new THREE.Color(0xFFFFFF);

    // --- 1. LUMINOUS BOKEH ORBS (Multi-depth drifting bokeh discs) ---
    const bokehCount = 220;
    const bokehPositions = new Float32Array(bokehCount * 3);
    const bokehColors = new Float32Array(bokehCount * 3);
    const bokehBaseX = new Float32Array(bokehCount);
    const bokehBaseY = new Float32Array(bokehCount);
    const bokehBaseZ = new Float32Array(bokehCount);
    const bokehSpeeds = new Float32Array(bokehCount);
    const bokehPhases = new Float32Array(bokehCount);

    for (let i = 0; i < bokehCount; i++) {
      // Horizontal flow distribution (clustering across lower-middle stream like the uploaded image)
      const x = (Math.random() - 0.5) * 550;
      const y = (Math.random() - 0.5) * 260 + Math.sin(x * 0.008) * 35;
      const z = (Math.random() - 0.5) * 250;

      bokehPositions[i * 3] = x;
      bokehPositions[i * 3 + 1] = y;
      bokehPositions[i * 3 + 2] = z;

      bokehBaseX[i] = x;
      bokehBaseY[i] = y;
      bokehBaseZ[i] = z;
      bokehPhases[i] = Math.random() * Math.PI * 2;
      bokehSpeeds[i] = 0.25 + Math.random() * 0.7;

      // Color selection
      const rand = Math.random();
      const pColor = colCyan.clone();
      if (rand < 0.6) {
        pColor.lerp(colElectricBlue, Math.random() * 0.5);
      } else if (rand < 0.85) {
        pColor.lerp(colSky, Math.random() * 0.5);
      } else {
        pColor.lerp(colWhite, 0.75); // Bright white core nodes
      }

      bokehColors[i * 3] = pColor.r;
      bokehColors[i * 3 + 1] = pColor.g;
      bokehColors[i * 3 + 2] = pColor.b;
    }

    const bokehGeometry = new THREE.BufferGeometry();
    bokehGeometry.setAttribute('position', new THREE.BufferAttribute(bokehPositions, 3));
    bokehGeometry.setAttribute('color', new THREE.BufferAttribute(bokehColors, 3));

    const bokehMaterial = new THREE.PointsMaterial({
      size: 13.5,
      map: bokehTexture || undefined,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      depthWrite: false,
      opacity: 0.92,
    });

    const bokehPoints = new THREE.Points(bokehGeometry, bokehMaterial);
    scene.add(bokehPoints);

    // --- 2. LARGE BLURRED FOREGROUND BOKEH ORBS (Depth-of-field effect) ---
    const largeBokehCount = 28;
    const largePositions = new Float32Array(largeBokehCount * 3);
    const largeColors = new Float32Array(largeBokehCount * 3);
    const largeBaseX = new Float32Array(largeBokehCount);
    const largeBaseY = new Float32Array(largeBokehCount);
    const largeSpeeds = new Float32Array(largeBokehCount);
    const largePhases = new Float32Array(largeBokehCount);

    for (let k = 0; k < largeBokehCount; k++) {
      const x = (Math.random() - 0.5) * 480;
      const y = (Math.random() - 0.5) * 240;
      const z = 80 + Math.random() * 80; // Close to camera

      largePositions[k * 3] = x;
      largePositions[k * 3 + 1] = y;
      largePositions[k * 3 + 2] = z;

      largeBaseX[k] = x;
      largeBaseY[k] = y;
      largePhases[k] = Math.random() * Math.PI * 2;
      largeSpeeds[k] = 0.15 + Math.random() * 0.4;

      const lColor = colCyan.clone().lerp(colElectricBlue, Math.random() * 0.4);
      largeColors[k * 3] = lColor.r;
      largeColors[k * 3 + 1] = lColor.g;
      largeColors[k * 3 + 2] = lColor.b;
    }

    const largeGeometry = new THREE.BufferGeometry();
    largeGeometry.setAttribute('position', new THREE.BufferAttribute(largePositions, 3));
    largeGeometry.setAttribute('color', new THREE.BufferAttribute(largeColors, 3));

    const largeMaterial = new THREE.PointsMaterial({
      size: 32.0,
      map: bokehTexture || undefined,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      depthWrite: false,
      opacity: 0.55,
    });

    const largePoints = new THREE.Points(largeGeometry, largeMaterial);
    scene.add(largePoints);

    // --- 3. MICRO STAR DUST & SPARKS (Twinkling cosmic field) ---
    const starCount = 450;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let j = 0; j < starCount; j++) {
      starPositions[j * 3] = (Math.random() - 0.5) * 600;
      starPositions[j * 3 + 1] = (Math.random() - 0.5) * 340;
      starPositions[j * 3 + 2] = (Math.random() - 0.5) * 280;

      const starCol = Math.random() > 0.4 ? colCyan.clone().lerp(colWhite, Math.random() * 0.8) : colElectricBlue;
      starColors[j * 3] = starCol.r;
      starColors[j * 3 + 1] = starCol.g;
      starColors[j * 3 + 2] = starCol.b;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 3.8,
      map: starTexture || undefined,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      depthWrite: false,
      opacity: 0.95,
    });

    const starPoints = new THREE.Points(starGeometry, starMaterial);
    scene.add(starPoints);

    // --- Mouse Parallax ---
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetMouseX = normX * 22;
      targetMouseY = normY * 16;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // --- Animation Loop ---
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      camera.position.x = currentMouseX;
      camera.position.y = currentMouseY;

      // 1. Animate Midground Bokeh Orbs
      const posAttr = bokehGeometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < bokehCount; i++) {
        const phase = bokehPhases[i];
        const speed = bokehSpeeds[i];

        // Smooth wave floating & subtle horizontal drift
        posArray[i * 3] = bokehBaseX[i] + Math.sin(elapsedTime * speed * 0.7 + phase) * 16 + (Math.sin(elapsedTime * 0.3) * 6);
        posArray[i * 3 + 1] = bokehBaseY[i] + Math.cos(elapsedTime * speed * 0.5 + phase) * 12;

        // Slow upward drift and recycle
        bokehBaseY[i] += speed * 0.12;
        if (bokehBaseY[i] > 140) {
          bokehBaseY[i] = -140;
        }
      }
      posAttr.needsUpdate = true;

      // 2. Animate Large Foreground Orbs
      const largePosAttr = largeGeometry.attributes.position as THREE.BufferAttribute;
      const largePosArray = largePosAttr.array as Float32Array;

      for (let k = 0; k < largeBokehCount; k++) {
        const phase = largePhases[k];
        const speed = largeSpeeds[k];

        largePosArray[k * 3] = largeBaseX[k] + Math.sin(elapsedTime * speed * 0.5 + phase) * 22;
        largePosArray[k * 3 + 1] = largeBaseY[k] + Math.cos(elapsedTime * speed * 0.4 + phase) * 18;

        largeBaseY[k] += speed * 0.16;
        if (largeBaseY[k] > 150) {
          largeBaseY[k] = -150;
        }
      }
      largePosAttr.needsUpdate = true;

      // 3. Animate Star Dust
      const starPosAttr = starGeometry.attributes.position as THREE.BufferAttribute;
      const starPosArray = starPosAttr.array as Float32Array;

      for (let j = 0; j < starCount; j++) {
        starPosArray[j * 3 + 1] += 0.06;
        if (starPosArray[j * 3 + 1] > 160) {
          starPosArray[j * 3 + 1] = -160;
        }
      }
      starPosAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      bokehGeometry.dispose();
      largeGeometry.dispose();
      starGeometry.dispose();
      bokehMaterial.dispose();
      largeMaterial.dispose();
      starMaterial.dispose();
      bokehTexture?.dispose();
      starTexture?.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#02050E]"
      style={{
        opacity: 1.0,
      }}
      aria-hidden="true"
    >
      {/* Primary Optical Lens Flare Burst on the Middle-Left matching the reference image */}
      <div 
        className="absolute top-1/3 -left-12 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 150, 255, 0.45) 0%, rgba(0, 229, 255, 0.25) 35%, rgba(0, 60, 180, 0.10) 60%, transparent 80%)',
          filter: 'blur(45px)',
        }}
      />
      {/* Hexagonal / Concentric Optical Flare Glint on Left Axis */}
      <div 
        className="absolute top-[38%] left-16 w-24 h-24 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(0, 229, 255, 0.8) 40%, transparent 70%)',
          filter: 'blur(12px)',
        }}
      />
      {/* Secondary Soft Depth Flare on the Right */}
      <div 
        className="absolute bottom-1/4 -right-10 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 180, 255, 0.22) 0%, rgba(0, 100, 220, 0.08) 50%, transparent 75%)',
          filter: 'blur(55px)',
        }}
      />
    </div>
  );
};

export default HeroCosmicParticles;
