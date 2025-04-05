"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Generate random particles
    const particleCount = 40;
    const newParticles: Particle[] = [];
    const colors = [
      "rgba(56, 189, 248, 0.6)", // blue
      "rgba(139, 92, 246, 0.6)",  // purple
      "rgba(79, 70, 229, 0.6)",   // indigo
      "rgba(99, 102, 241, 0.6)",  // violet
    ];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    setParticles(newParticles);
  }, []);

  if (!mounted) return null;

  return (
    <div className="particles fixed inset-0 z-[-1] pointer-events-none dark:opacity-60 opacity-30">
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            backgroundColor: particle.color,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
            opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
          }}
          transition={{
            duration: 10 / particle.speed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Neural network nodes and connections */}
      <div className="neural-network hidden lg:block">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`node-1-${i}`}
            className="absolute h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400"
            style={{
              left: `${20 + i * 15}%`,
              top: '30%',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`node-2-${i}`}
            className="absolute h-2 w-2 rounded-full bg-indigo-500 dark:bg-indigo-400"
            style={{
              left: `${20 + i * 15}%`,
              top: '60%',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2 + 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Connections between nodes - visible only on desktop */}
        {Array.from({ length: 5 }).map((_, i) => (
          Array.from({ length: 5 }).map((_, j) => (
            <motion.div
              key={`connection-${i}-${j}`}
              className="absolute h-[1px] bg-gradient-to-r from-blue-500/30 to-indigo-500/30 dark:from-blue-400/40 dark:to-indigo-400/40"
              style={{
                left: `${20 + i * 15}%`,
                top: '30%',
                width: `${Math.sqrt((j * 15) ** 2 + 30 ** 2)}px`,
                transform: `rotate(${Math.atan2(30, j * 15) * (180 / Math.PI)}deg)`,
                transformOrigin: 'left center',
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3,
                delay: (i + j) * 0.1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))
        ))}
      </div>

      {/* AI brain visualization - displayed only on larger screens */}
      <div className="absolute w-[400px] h-[400px] right-[10%] top-[20%] opacity-10 hidden xl:block">
        <motion.div
          className="w-full h-full rounded-full border-2 border-indigo-500 dark:border-indigo-400"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute inset-[50px] rounded-full border-2 border-dashed border-blue-500 dark:border-blue-400"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute inset-[100px] rounded-full border border-purple-500 dark:border-purple-400"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute inset-[150px] rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-400/20 dark:to-indigo-400/20"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
