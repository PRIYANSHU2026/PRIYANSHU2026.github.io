"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        "group/pin relative z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Desktop: 3D perspective card */}
      <div className="hidden md:block">
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0deg)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            style={{
              transform: transform,
            }}
            className="absolute left-1/2 top-1/2 flex items-start justify-start overflow-hidden rounded-2xl border border-white/[0.1] p-4 shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700 group-hover/pin:border-white/[0.2] bg-card"
          >
            <div className={cn("relative z-50", className)}>{children}</div>
          </div>
        </div>
        <PinPerspective title={title} href={href} />
      </div>

      {/* Mobile: Simple card with direct link */}
      <div className="md:hidden">
        <a
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl border border-white/[0.1] p-4 bg-card active:scale-[0.98] transition-transform duration-200"
        >
          <div className={cn("relative", className)}>{children}</div>
          <div className="mt-4 flex items-center justify-center gap-2 py-2 rounded-lg bg-emerald-600/20 border border-emerald-500/30">
            <span className="text-sm font-medium text-emerald-300">
              {title || "View Project"}
            </span>
            <svg className="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 hover:ring-emerald-500/50 transition-all duration-300"
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>
            <span
              className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"
            />
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay: 0 }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-emerald-500/[0.15] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-emerald-500/[0.15] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay: 4 }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-emerald-500/[0.15] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-emerald-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-emerald-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 bottom-1/2 translate-x-[1.5px] translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 bg-emerald-600 blur-[3px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 translate-x-[0.5px] translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 bg-emerald-300" />
        </>
      </div>
    </motion.div>
  );
};
