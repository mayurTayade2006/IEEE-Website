import React, { useEffect, useRef } from 'react';

const CursorSpotlight: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch / mobile devices where cursor doesn't exist
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768) {
      return;
    }

    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let animationFrameId: number;
    let isMouseOnScreen = false;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isMouseOnScreen) {
        isMouseOnScreen = true;
        if (containerRef.current) containerRef.current.style.opacity = '0.85';
      }
    };

    const handleMouseLeave = () => {
      isMouseOnScreen = false;
      if (containerRef.current) containerRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);

    const smoothGlide = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      if (spotRef.current) {
        spotRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${currentX + 35}px, ${currentY - 25}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(smoothGlide);
    };

    animationFrameId = requestAnimationFrame(smoothGlide);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden transition-opacity duration-500 opacity-0"
      aria-hidden="true"
    >
      {/* Primary Cyan Spotlight */}
      <div
        ref={spotRef}
        className="absolute top-0 left-0 w-[550px] h-[550px] rounded-full blur-[120px] will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(0, 216, 255, 0.14) 0%, rgba(0, 98, 155, 0.08) 45%, transparent 70%)',
        }}
      />
      {/* Secondary Neon Magenta Halo slightly offset */}
      <div
        ref={haloRef}
        className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full blur-[100px] will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(147, 51, 234, 0.06) 40%, transparent 70%)',
        }}
      />
    </div>
  );
};

export default CursorSpotlight;

