"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { personalData } from "@/data/resume-data";
import Image from "next/image";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="overflow-hidden py-20 sm:py-32 md:py-40 relative isolate pt-24 pb-16 sm:pt-32">
      {/* Abstract background elements */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mb-8 flex justify-center"
          >
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-lg">
              <Image
                src={personalData.profileImage}
                alt={personalData.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
          >
            {personalData.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mt-6 text-lg leading-8 text-foreground"
          >
            {personalData.title} passionate about developing cutting-edge AI solutions and research
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <a
              href="#about"
              className="rounded-md bg-blue-600 dark:bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 dark:hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Discover My Work
            </a>
            <a href="#contact" className="text-sm font-semibold leading-6 text-foreground">
              Contact Me <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="mt-16 flow-root sm:mt-24"
        >
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:bg-gray-800/10 dark:ring-gray-400/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="rounded-md bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-[1px] h-[300px] sm:h-[400px] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
              <div className="h-full w-full bg-background rounded-md flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="text-center z-10 px-8">
                    <h2 className="text-xl font-semibold text-foreground mb-4">AI & Machine Learning Researcher</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground">
                      Blending innovative research with practical implementations to build next-generation AI solutions
                      that deliver tangible results.
                    </p>
                  </div>

                  {/* Neural network nodes and connections animation would go here */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute h-2 w-2 rounded-full bg-blue-500 animate-ping" style={{ top: '20%', left: '30%' }} />
                    <div className="absolute h-2 w-2 rounded-full bg-indigo-500 animate-ping" style={{ top: '40%', left: '70%', animationDelay: '0.5s' }} />
                    <div className="absolute h-2 w-2 rounded-full bg-purple-500 animate-ping" style={{ top: '70%', left: '20%', animationDelay: '1s' }} />
                    <div className="absolute h-2 w-2 rounded-full bg-blue-500 animate-ping" style={{ top: '60%', left: '80%', animationDelay: '1.5s' }} />
                    <div className="absolute h-2 w-2 rounded-full bg-indigo-500 animate-ping" style={{ top: '30%', left: '50%', animationDelay: '2s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}
