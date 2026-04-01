"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles } from "lucide-react";
import TechStack from "@/components/ui/TechStack";
import Image from "next/image";
import Link from "next/link";

interface SkillItem {
  category: string;
  skills: string[];
}

const technicalSkills: SkillItem[] = [
  {
    category: "Programming",
    skills: ["Python", "C Language", "C++", "Scala", "R","Java Script"],
  },
  {
    category: "ML/AI Focus",
    skills: [
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "Data Analysis",
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      "Git",
      "Docker",
      "Kubernetes",
      "AWS",
      "Google Cloud",
      "SQL",
      "NoSQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn"
    ],
  },
];

// Memoized Components for better performance
const StatCard = ({ icon: Icon, color, value, label, description, animation }: {
  icon: React.ElementType;
  color: string;
  value: string | number;
  label: string;
  description: string;
  animation: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="relative group"
  >
    <div className="relative z-10 bg-card/50 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-emerald-500/20 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:border-teal-500/40 h-full flex flex-col justify-between">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>

      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        <span
          className="text-2xl sm:text-4xl font-bold text-white"
        >
          {value}
        </span>
      </div>

      <div>
        <p
          className="text-xs sm:text-sm uppercase tracking-wider text-gray-300 mb-2"
        >
          {label}
        </p>
        <div className="flex items-center justify-between">
          <p
            className="text-xs text-gray-400"
          >
            {description}
          </p>
          <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  </motion.div>
);

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Stats data for display
  const statsData = [
    {
      icon: Code,
      color: "from-emerald-600 to-teal-600",
      value: "200+",
      label: "Open Source Projects",
      description: "AI & ML solutions developed",
      animation: "fade-right",
    },
     {
      icon: Code,
      color: "from-emerald-600 to-teal-600",
      value: "10+",
      label: "Research Projects",
      description: "AI & ML solutions developed colaborated with Multiple Field",
      animation: "fade-right",
    },
    {
      icon: Award,
      color: "from-teal-600 to-emerald-600",
      value: "5+",
      label: "Publications",
      description: "Research papers published",
      animation: "fade-up",
    },
    {
      icon: Globe,
      color: "from-emerald-600 to-teal-600",
      value: "3",
      label: "Research Positions",
      description: "DRDO-CAIR, DRDO-MTRDC, UBC",
      animation: "fade-left",
    },
    {
      icon: Award,
      color: "from-emerald-600 to-teal-600",
      value: "126+",
      label: "license & Certification",
      description: "Various Technical or Non Technical Certification ",
      animation: "fade-left",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-20 overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8 md:mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl opacity-30"></div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            >
              About Me
            </h2>

            <p
              className="mt-2 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base flex items-center justify-center gap-2 relative z-10"
            >
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-teal-400" />
              AI Researcher and Machine Learning Engineer
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-teal-400" />
            </p>
          </div>

          {/* Profile section - better mobile layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center mb-12">
            <div className="lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
              <div
                className="relative group max-w-[220px] sm:max-w-[280px] md:max-w-[320px]"
              >
                {/* Gradient backgrounds - reduced for mobile */}
                <div className="absolute -inset-4 sm:-inset-6 opacity-[25%] z-0 hidden sm:block">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-teal-600 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-l from-teal-500 via-emerald-500 to-teal-600 rounded-full blur-2xl opacity-50" />
                </div>

                <div className="relative">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
                    <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />

                    {/* Overlay effects - simplified for mobile */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <Image
                      src="/images/profile.jpeg"
                      alt="Priyanshu Tiwari"
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />

                    {/* Simpler hover effects for better performance */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Hello, I'm
                </span>
                <span
                  className="block mt-2 text-gray-200"
                >
                  Priyanshu Tiwari
                </span>
              </h2>

              <p
                className="text-sm sm:text-base text-gray-400 leading-relaxed"
              >
                I'm an AI/ML Researcher with experience at DRDO and UBC, focusing on cutting-edge applications of
                artificial intelligence and machine learning. My research spans multiple domains, including Medical Imaging,
                Financial Analytics, NLP, and Electrical Systems.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 w-full">
                <Link
                  href="/images/PRIYANSHU_TIWARI-3.pdf"
                  target="_blank"
                  download
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] border border-emerald-400/20">
                    <FileText className="w-4 h-4 md:w-5 md:h-5" /> Download CV
                  </button>
                </Link>

                <Link
                  href="#projects"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 rounded-lg border border-teal-600/50 text-teal-400 font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 hover:bg-teal-600/10 shadow-[0_0_10px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                    <Code className="w-4 h-4 md:w-5 md:h-5" /> View Projects
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Cards - improved mobile layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
            <div className="bg-card/60 border border-emerald-800/70 backdrop-blur-sm p-4 md:p-6 rounded-xl hover:shadow-lg hover:shadow-emerald-600/10 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-semibold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">My Journey</h3>
              <div className="space-y-3 md:space-y-4 text-slate-300 text-sm md:text-base">
                <p>
                  My passion for artificial intelligence began during my undergraduate studies,
                  where I became fascinated with how machine learning could solve complex problems
                  across various domains.
                </p>
                <p>
                  As a research intern at DRDO and UBC, I've had the opportunity to work on
                  challenging projects that push the boundaries of what's possible with AI and ML
                  technologies.
                </p>
                <p>
                  I've presented my work at multiple international conferences including ICRAI,
                  CSEAI, AIDE, and ICST, sharing my findings with the global research community.
                </p>
              </div>
            </div>

            <div className="bg-card/60 border border-emerald-800/70 backdrop-blur-sm p-4 md:p-6 rounded-xl hover:shadow-lg hover:shadow-emerald-600/10 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-semibold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Technical Expertise</h3>
              <div className="space-y-4 md:space-y-6">
                {technicalSkills.map((skillItem) => (
                  <div key={skillItem.category}>
                    <h4 className="text-base md:text-lg font-medium mb-2 text-slate-200">
                      {skillItem.category}
                    </h4>
                    <TechStack technologies={skillItem.skills} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent text-center">
              Education
            </h3>
            <Card className="bg-card/60 border border-emerald-800/70 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6 space-y-4">
                <div className="border-l-2 border-emerald-500 pl-4 space-y-6">
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-slate-200">Kendriya Vidyalaya</h3>
                    <p className="text-sm text-slate-300">PCMCS 10+2</p>
                    <p className="text-xs text-slate-400">2010 - 2022</p>
                    <p className="text-xs bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mt-1">Grade: 1st class</p>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-slate-200">Sir M Visvesvaraya Institute of Technology</h3>
                    <p className="text-sm text-slate-300">Artificial Intelligence and Machine Learning (B.E)</p>
                    <p className="text-xs text-slate-400">2022 - 2026</p>
                    <p className="text-xs bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mt-1">CGPA: 8.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
