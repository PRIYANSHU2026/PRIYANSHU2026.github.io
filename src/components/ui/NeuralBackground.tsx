"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colorIdx: number;
  opacity: number;
}

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animFrameRef = useRef<number>(0);

  const PARTICLE_COUNT = 70;
  const CONNECTION_DISTANCE = 130;
  const MOUSE_REPULSE_DISTANCE = 90;
  const SPEED = 0.3;

  // Dark white-neon palette: mostly white/silver with faint indigo tints
  const neonColors = [
    "255,255,255",   // pure white
    "220,225,255",   // ice white / very faint blue
    "200,210,255",   // soft lavender white
    "180,200,255",   // faint indigo white
    "230,230,250",   // white with lavender
  ];

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED * 2,
        vy: (Math.random() - 0.5) * SPEED * 2,
        radius: Math.random() * 1.5 + 0.8,
        colorIdx: Math.floor(Math.random() * neonColors.length),
        opacity: Math.random() * 0.35 + 0.15,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      if (particlesRef.current.length === 0) {
        initParticles(canvas.width, canvas.height);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resize();
    window.addEventListener("resize", resize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPULSE_DISTANCE && dist > 0) {
          const force = (MOUSE_REPULSE_DISTANCE - dist) / MOUSE_REPULSE_DISTANCE;
          p.vx += (dx / dist) * force * 0.35;
          p.vy += (dy / dist) * force * 0.35;
        }

        // Dampen velocity
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Maintain minimum speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed < SPEED * 0.4) {
          p.vx += (Math.random() - 0.5) * 0.06;
          p.vy += (Math.random() - 0.5) * 0.06;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        const col = neonColors[p.colorIdx];

        // Core particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},${p.opacity})`;
        ctx.fill();

        // Soft white glow halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},${p.opacity * 0.08})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < CONNECTION_DISTANCE) {
            const lineOpacity = (1 - cdist / CONNECTION_DISTANCE) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(210,220,255,${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [initParticles]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-auto">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ background: "transparent" }}
      />
    </div>
  );
};

export default NeuralBackground;
