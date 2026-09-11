import React, { useRef, useEffect } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  glowColor?: string;
  onClick?: () => void;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 10,
  perspective = 1000,
  scale = 1.02,
  glowColor = 'rgba(0, 216, 255, 0.18)',
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card) return;

    // Check touch/mobile device
    const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
    if (isTouch) return;

    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const clientX = e.clientX - rect.left;
        const clientY = e.clientY - rect.top;

        const xPct = (clientX / rect.width) * 2 - 1; // -1 to 1
        const yPct = (clientY / rect.height) * 2 - 1; // -1 to 1

        const rotateX = (-yPct * maxTilt).toFixed(2);
        const rotateY = (xPct * maxTilt).toFixed(2);

        card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

        if (glare) {
          const glareX = ((clientX / rect.width) * 100).toFixed(1);
          const glareY = ((clientY / rect.height) * 100).toFixed(1);
          glare.style.opacity = '0.7';
          glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, ${glowColor} 0%, rgba(236, 72, 153, 0.12) 35%, transparent 70%)`;
        }
      });
    };

    const handleMouseEnter = () => {
      card.style.transition = 'transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)';
    };

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0, 0.2, 1)';
      card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      if (glare) {
        glare.style.opacity = '0';
      }
    };

    card.addEventListener('mousemove', handleMouseMove, { passive: true });
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, perspective, scale, glowColor]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      className={`relative rounded-2xl ${className}`}
    >
      {/* Specular glare reflection overlay */}
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 rounded-2xl z-20 transition-opacity duration-300 opacity-0"
        aria-hidden="true"
      />

      {/* Card Content with 3D depth */}
      <div className="relative z-10 w-full h-full" style={{ transform: 'translateZ(18px)' }}>
        {children}
      </div>
    </div>
  );
};

export default TiltCard;

