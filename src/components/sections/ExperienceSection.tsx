"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  title: string;
  organization: string;
  subtitle: string;
  period: string;
  description: string[];
  logo: string;
  color: string;
}

const experiences: Experience[] = [
  {
    title: "Lead Machine Learning Engineer",
    organization: "Genie AI",
    subtitle: "AI & Product Development",
    period: "Dec 2025 – Present",
    description: [
      "Spearheading development of BOS (Business Operating System), an integrated communication platform with advanced chat capabilities",
      "Engineering and optimizing Avatar FX modules to enhance user interaction and visual identity",
      "Architecting Knowledge Graph systems for complex data retrieval, relational mapping, and AI-driven insights",
    ],
    logo: "/images/experience/genieai.png",
    color: "from-purple-600 to-indigo-600",
  },
  {
    title: "GSoC 2026 Mentor",
    organization: "Google Summer of Code",
    subtitle: "Open Source Mentor | INCF and Mifos Initiative",
    period: "Feb 2026 – Present",
    description: [
      "Mentoring contributors across two organizations under Google Summer of Code 2026",
      "Guiding development on Mifos X Model and AI Integration under Mifos Initiative",
      "Mentoring projects on neuron brain simulation and Harmony Hub under INCF in collaboration with University of Manchester and McGill University",
      "Providing technical guidance on LLMs, transformer architectures, and financial AI systems",
    ],
    logo: "/images/experience/Gsoc.png",
    color: "from-green-600 to-teal-600",
  },
  {
    title: "AI Developer",
    organization: "MobileByteSensei",
    subtitle: "Applied AI & Data Science",
    period: "Aug 2025 – Dec 2025",
    description: [
      "Developed Instagram Reel scraper and browser extension for categorized video extraction",
      "Designed fare prediction models for Ola, Uber, and Rapido using statistical and probabilistic techniques",
      "Achieved 89.43% prediction accuracy through optimized modeling and validation",
    ],
    logo: "/images/experience/mobilebytesensei.png",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Google Summer of Code (GSoC) 2025 Contributor",
    organization: "International Neuroinformatics Coordinating Facility (INCF)",
    subtitle: "Open-Source Developer",
    period: "May 2025 – Sep 2025",
    description: [
      'Developed "Harmony Hub": generative AI platform for adaptive music learning using transformers',
      "Built music learning LLM to enhance student engagement",
    ],
    logo: "/images/experience/Gsoc.png",
    color: "from-green-500 to-blue-500",
  },
  {
    title: "Mifos Summer of Code (MSoC) 2025 Contributor",
    organization: "Mifos Initiative",
    subtitle: "Open-Source Developer",
    period: "May 2025 – Present",
    description: [
      "Enhanced Bank Statement Analyzer Phase 2",
      "Developed recommendation models for personalized financial insights",
    ],
    logo: "/images/experience/mifos.png",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Research Intern",
    organization: "DRDO – Microwave Tube Research & Development Centre (MTRDC)",
    subtitle: "Defence Research & Development Organisation",
    period: "Nov 2024 – Dec 2024",
    description: [
      "Conducted research on machine learning applications for predicting and controlling the frequency of Traveling Wave Tubes using a Feedforward Neural Network (FNN).",
    ],
    logo: "/images/experience/mtrdc.png",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Machine Learning Researcher",
    organization: "Unboxing Community",
    subtitle: "Research & Development",
    period: "Sep 2024 – Nov 2024",
    description: [
      "Developed a recommendation system for an e-commerce platform using collaborative filtering and deep learning techniques.",
    ],
    logo: "/images/experience/unboxing.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Research Intern",
    organization: "DRDO – Centre for Artificial Intelligence and Robotics (CAIR)",
    subtitle: "Defence Research & Development Organisation",
    period: "April 2024 – May 2024",
    description: [
      "Worked on NLP-based research focusing on 'Transformer-Based Text Summarization for News Articles.'",
    ],
    logo: "/images/experience/drdo.png",
    color: "from-indigo-500 to-purple-500",
  },
];

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            Experience
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm md:text-base flex items-center justify-center gap-2">
            <Briefcase className="w-4 h-4 text-purple-400" />
            Professional Journey & Open Source Contributions
            <Briefcase className="w-4 h-4 text-purple-400" />
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent md:-translate-x-px" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-start mb-10 md:mb-14 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-indigo-500 border-2 border-purple-400 -translate-x-1.5 mt-6 z-10 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />

                {/* Content card */}
                <div
                  className={`ml-14 md:ml-0 ${
                    isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  } md:w-[46%]`}
                >
                  <div className="group relative bg-slate-900/60 backdrop-blur-lg rounded-2xl p-5 md:p-6 border border-indigo-500/15 hover:border-purple-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                    {/* Gradient bg */}
                    <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${exp.color} opacity-[0.04] group-hover:opacity-[0.08] rounded-2xl transition-opacity duration-300`} />

                    {/* Header with Logo */}
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={exp.logo}
                          alt={exp.organization}
                          width={40}
                          height={40}
                          className="object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<span class="text-lg font-bold text-indigo-400">${exp.organization.charAt(0)}</span>`;
                            }
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-lg font-semibold text-slate-100 leading-snug">
                          {exp.title}
                        </h3>
                        <p className="text-sm bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-medium mt-0.5">
                          {exp.subtitle} | {exp.organization}
                        </p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>

                    {/* Description */}
                    <ul className="space-y-1.5">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60 mt-1.5 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
