import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CyberPlexusCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    let isVisible = true;
    let isTabActive = !document.hidden;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / Math.max(container.clientHeight, 1),
      1,
      1200
    );
    camera.position.set(0, 0, 260);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.75));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- Procedural Glowing Node Texture ---
    const createNodeTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(0, 229, 255, 0.95)');
      gradient.addColorStop(0.65, 'rgba(0, 140, 255, 0.5)');
      gradient.addColorStop(0.9, 'rgba(0, 80, 200, 0.15)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const nodeTexture = createNodeTexture();

    // --- Network Nodes Adaptive Configuration ---
    const nodeCount = isMobile ? 55 : 110;
    const maxDistance = isMobile ? 52 : 66;
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);
    const nodeVelocities: { x: number; y: number; z: number }[] = [];

    const bounds = {
      x: isMobile ? 180 : 320,
      y: isMobile ? 140 : 190,
      z: isMobile ? 90 : 140,
    };

    const colCyan = new THREE.Color(0x00E5FF);     // Electric Cyan
    const colBrightBlue = new THREE.Color(0x00A3FF); // Bright Azure
    const colDeepBlue = new THREE.Color(0x00629B);   // IEEE Blue
    const colWhite = new THREE.Color(0xFFFFFF);      // Highlight

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * bounds.x * 2;
      const y = (Math.random() - 0.5) * bounds.y * 2;
      const z = (Math.random() - 0.5) * bounds.z * 2;

      nodePositions[i * 3] = x;
      nodePositions[i * 3 + 1] = y;
      nodePositions[i * 3 + 2] = z;

      nodeVelocities.push({
        x: (Math.random() - 0.5) * 0.4,
        y: (Math.random() - 0.5) * 0.4,
        z: (Math.random() - 0.5) * 0.3,
      });

      const pColor = Math.random() > 0.3 ? colCyan.clone() : colBrightBlue.clone();
      if (Math.random() > 0.85) pColor.lerp(colWhite, 0.7);

      nodeColors[i * 3] = pColor.r;
      nodeColors[i * 3 + 1] = pColor.g;
      nodeColors[i * 3 + 2] = pColor.b;
    }

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeometry.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3));

    const nodeMaterial = new THREE.PointsMaterial({
      size: isMobile ? 6.0 : 7.5,
      map: nodeTexture || undefined,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      depthWrite: false,
      opacity: 0.95,
    });

    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodePoints);

    // --- Dynamic Line Segments (Plexus Interconnections) ---
    const maxLines = nodeCount * (isMobile ? 12 : 24);
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.85,
    });

    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // --- Translucent Triangular Facets ---
    const maxTriangles = isMobile ? 45 : 160;
    const triPositions = new Float32Array(maxTriangles * 9);
    const triColors = new Float32Array(maxTriangles * 9);

    const triGeometry = new THREE.BufferGeometry();
    triGeometry.setAttribute('position', new THREE.BufferAttribute(triPositions, 3).setUsage(THREE.DynamicDrawUsage));
    triGeometry.setAttribute('color', new THREE.BufferAttribute(triColors, 3).setUsage(THREE.DynamicDrawUsage));

    const triMaterial = new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
      opacity: 0.2,
    });

    const triMesh = new THREE.Mesh(triGeometry, triMaterial);
    scene.add(triMesh);

    // --- Background Ambient Star Dust ---
    const starCount = isMobile ? 60 : 140;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let k = 0; k < starCount; k++) {
      starPositions[k * 3] = (Math.random() - 0.5) * 650;
      starPositions[k * 3 + 1] = (Math.random() - 0.5) * 400;
      starPositions[k * 3 + 2] = (Math.random() - 0.5) * 300;

      const sColor = Math.random() > 0.5 ? colCyan : colDeepBlue;
      starColors[k * 3] = sColor.r;
      starColors[k * 3 + 1] = sColor.g;
      starColors[k * 3 + 2] = sColor.b;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 3.0,
      map: nodeTexture || undefined,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      depthWrite: false,
      opacity: 0.65,
    });

    const starPoints = new THREE.Points(starGeometry, starMaterial);
    scene.add(starPoints);

    // --- Mouse Parallax & Interaction (Desktop only) ---
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    const mouseWorldPos = new THREE.Vector3(0, 0, 0);

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetMouseX = normX * 30;
      targetMouseY = normY * 20;

      mouseWorldPos.set(normX * 200, normY * 120, 0);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // --- Viewport Intersection Observer (Auto-pause when scrolled out of view) ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // --- Tab Visibility API ---
    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // --- Throttled Resize ---
    let resizeTimeout: number | undefined;
    const handleResize = () => {
      if (resizeTimeout) cancelAnimationFrame(resizeTimeout);
      resizeTimeout = requestAnimationFrame(() => {
        if (!container || !renderer || !camera) return;
        camera.aspect = container.clientWidth / Math.max(container.clientHeight, 1);
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      });
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // --- High Performance Animation Loop ---
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Only compute and render if section is visible and tab is active
      if (!isVisible || !isTabActive) return;

      // Smooth camera interpolation
      if (!isMobile) {
        currentMouseX += (targetMouseX - currentMouseX) * 0.04;
        currentMouseY += (targetMouseY - currentMouseY) * 0.04;
        camera.position.x = currentMouseX;
        camera.position.y = currentMouseY;
        camera.lookAt(0, 0, 0);
      }

      // Update Node Positions
      const posAttr = nodeGeometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < nodeCount; i++) {
        let x = posArray[i * 3] + nodeVelocities[i].x;
        let y = posArray[i * 3 + 1] + nodeVelocities[i].y;
        let z = posArray[i * 3 + 2] + nodeVelocities[i].z;

        // Mouse repulsion (desktop)
        if (!isMobile) {
          const dx = x - mouseWorldPos.x;
          const dy = y - mouseWorldPos.y;
          const distToMouse = Math.hypot(dx, dy);
          if (distToMouse < 75 && distToMouse > 0.1) {
            const force = (1.0 - distToMouse / 75) * 0.4;
            x += (dx / distToMouse) * force;
            y += (dy / distToMouse) * force;
          }
        }

        // Boundary reflection
        if (Math.abs(x) > bounds.x) {
          nodeVelocities[i].x *= -1;
          x = Math.sign(x) * bounds.x;
        }
        if (Math.abs(y) > bounds.y) {
          nodeVelocities[i].y *= -1;
          y = Math.sign(y) * bounds.y;
        }
        if (Math.abs(z) > bounds.z) {
          nodeVelocities[i].z *= -1;
          z = Math.sign(z) * bounds.z;
        }

        posArray[i * 3] = x;
        posArray[i * 3 + 1] = y;
        posArray[i * 3 + 2] = z;
      }
      posAttr.needsUpdate = true;

      // Compute Plexus Lines & Triangular Facets
      let lineIndex = 0;
      let triIndex = 0;

      const linePosAttr = lineGeometry.attributes.position as THREE.BufferAttribute;
      const lineColAttr = lineGeometry.attributes.color as THREE.BufferAttribute;
      const linePos = linePosAttr.array as Float32Array;
      const lineCol = lineColAttr.array as Float32Array;

      const triPosAttr = triGeometry.attributes.position as THREE.BufferAttribute;
      const triColAttr = triGeometry.attributes.color as THREE.BufferAttribute;
      const triPos = triPosAttr.array as Float32Array;
      const triCol = triColAttr.array as Float32Array;

      const maxLineSlots = maxLines * 2;

      for (let i = 0; i < nodeCount; i++) {
        const x1 = posArray[i * 3];
        const y1 = posArray[i * 3 + 1];
        const z1 = posArray[i * 3 + 2];

        const neighbors: number[] = [];

        for (let j = i + 1; j < nodeCount; j++) {
          const x2 = posArray[j * 3];
          const y2 = posArray[j * 3 + 1];
          const z2 = posArray[j * 3 + 2];

          const dist = Math.hypot(x1 - x2, y1 - y2, z1 - z2);

          if (dist < maxDistance && lineIndex < maxLineSlots) {
            const alpha = 1.0 - dist / maxDistance;

            linePos[lineIndex * 3] = x1;
            linePos[lineIndex * 3 + 1] = y1;
            linePos[lineIndex * 3 + 2] = z1;

            lineCol[lineIndex * 3] = colCyan.r * alpha;
            lineCol[lineIndex * 3 + 1] = colCyan.g * alpha;
            lineCol[lineIndex * 3 + 2] = colCyan.b * alpha;
            lineIndex++;

            linePos[lineIndex * 3] = x2;
            linePos[lineIndex * 3 + 1] = y2;
            linePos[lineIndex * 3 + 2] = z2;

            lineCol[lineIndex * 3] = colCyan.r * alpha;
            lineCol[lineIndex * 3 + 1] = colCyan.g * alpha;
            lineCol[lineIndex * 3 + 2] = colCyan.b * alpha;
            lineIndex++;

            neighbors.push(j);
          }
        }

        // Form translucent triangular mesh faces with close neighbors
        if (neighbors.length >= 2 && triIndex < maxTriangles) {
          for (let n1 = 0; n1 < neighbors.length - 1; n1++) {
            for (let n2 = n1 + 1; n2 < neighbors.length; n2++) {
              if (triIndex >= maxTriangles) break;

              const idxA = neighbors[n1];
              const idxB = neighbors[n2];

              const distAB = Math.hypot(
                posArray[idxA * 3] - posArray[idxB * 3],
                posArray[idxA * 3 + 1] - posArray[idxB * 3 + 1],
                posArray[idxA * 3 + 2] - posArray[idxB * 3 + 2]
              );

              if (distAB < maxDistance) {
                const tAlpha = 0.16;

                // Vertex 1
                triPos[triIndex * 9] = x1;
                triPos[triIndex * 9 + 1] = y1;
                triPos[triIndex * 9 + 2] = z1;
                triCol[triIndex * 9] = colCyan.r * tAlpha;
                triCol[triIndex * 9 + 1] = colCyan.g * tAlpha;
                triCol[triIndex * 9 + 2] = colCyan.b * tAlpha;

                // Vertex 2
                triPos[triIndex * 9 + 3] = posArray[idxA * 3];
                triPos[triIndex * 9 + 4] = posArray[idxA * 3 + 1];
                triPos[triIndex * 9 + 5] = posArray[idxA * 3 + 2];
                triCol[triIndex * 9 + 3] = colBrightBlue.r * tAlpha;
                triCol[triIndex * 9 + 4] = colBrightBlue.g * tAlpha;
                triCol[triIndex * 9 + 5] = colBrightBlue.b * tAlpha;

                // Vertex 3
                triPos[triIndex * 9 + 6] = posArray[idxB * 3];
                triPos[triIndex * 9 + 7] = posArray[idxB * 3 + 1];
                triPos[triIndex * 9 + 8] = posArray[idxB * 3 + 2];
                triCol[triIndex * 9 + 6] = colCyan.r * tAlpha;
                triCol[triIndex * 9 + 7] = colCyan.g * tAlpha;
                triCol[triIndex * 9 + 8] = colCyan.b * tAlpha;

                triIndex++;
              }
            }
          }
        }
      }

      lineGeometry.setDrawRange(0, lineIndex);
      linePosAttr.needsUpdate = true;
      lineColAttr.needsUpdate = true;

      triGeometry.setDrawRange(0, triIndex * 3);
      triPosAttr.needsUpdate = true;
      triColAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      nodeGeometry.dispose();
      lineGeometry.dispose();
      triGeometry.dispose();
      starGeometry.dispose();
      nodeMaterial.dispose();
      lineMaterial.dispose();
      triMaterial.dispose();
      starMaterial.dispose();
      nodeTexture?.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#02050E]"
      style={{ opacity: 1.0 }}
      aria-hidden="true"
    >
      {/* Ambient Neural Glow Bloom on the Upper Left */}
      <div 
        className="absolute top-1/4 -left-10 w-[320px] md:w-[450px] h-[320px] md:h-[450px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.16) 0%, rgba(0, 98, 155, 0.08) 50%, transparent 75%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Ambient Neural Glow Bloom on the Bottom Right */}
      <div 
        className="absolute -bottom-10 -right-10 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 181, 226, 0.14) 0%, rgba(0, 60, 180, 0.06) 55%, transparent 80%)',
          filter: 'blur(70px)',
        }}
      />
    </div>
  );
};

export default CyberPlexusCanvas;
