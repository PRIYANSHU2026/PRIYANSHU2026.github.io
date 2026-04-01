"use client";

import React from "react";
import { motion } from "framer-motion";

const NeonLoader = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <motion.svg
        width="180"
        height="180"
        viewBox="0 0 100 100"
        className="drop-shadow-[0_0_20px_rgba(99,102,241,0.8)] text-indigo-500"
      >
        {/* Outer Hexagon */}
        <motion.polygon
          points="50,5 93.3,25 93.3,75 50,95 6.7,75 6.7,25"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        {/* Inner Hexagon */}
        <motion.polygon
          points="50,15 84.6,35 84.6,65 50,85 15.4,65 15.4,35"
          fill="none"
          stroke="#a855f7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5,
          }}
        />
        {/* Logo Text */}
        <motion.text
          x="50"
          y="56"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="28"
          fontWeight="bold"
          fill="url(#textGradient)"
          className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 0.6, 1], scale: 1 }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          PT
        </motion.text>

        {/* Gradient for text */}
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default NeonLoader;
