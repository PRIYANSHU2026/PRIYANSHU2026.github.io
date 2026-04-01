"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NeonLoader from './NeonLoader';

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 blur-3xl animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-purple-900/20 blur-2xl animate-pulse" />
  </div>
);

interface WelcomeScreenProps {
  onLoadingComplete?: () => void;
}

const WelcomeScreen = ({ onLoadingComplete }: WelcomeScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 4500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#030014] z-[100] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <BackgroundEffect />
          <div className="relative z-10 flex flex-col items-center justify-center">
            <NeonLoader />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-6 text-center"
            >
              <h1 className="text-2xl md:text-4xl font-bold tracking-widest bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent uppercase drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                Priyanshu Tiwari
              </h1>
              <div className="mt-6 flex items-center justify-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]" style={{ animationDelay: "0s" }}></div>
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
