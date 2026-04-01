"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PinContainer } from "@/components/ui/3d-pin";

interface ProjectTag {
  name: string;
  color: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  technologies?: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
   {
    id: 1,
    title: "Harmony Hub: Adaptive Music Exercise Generator",
    description:
      "GSOC 2025 project developing an AI-powered platform for generating personalized music exercises.",
    image: "/images/projects/Gsoc.png",
    tags: [
      { name: "Generative AI", color: "bg-teal-500" },
      { name: "Music Tech", color: "bg-blue-500" },
      { name: "Transformers", color: "bg-yellow-500" },
      { name: "GSoC", color: "bg-green-500" },
    ],
    technologies: ["Python", "PyTorch", "Transformers", "MIDI", "Music21", "Reinforcement Learning"],
    github: "https://github.com/PRIYANSHU2026/Harmony-Hub-Phase-2.git",
    demo: "https://huggingface.co/spaces/SHIKARICHACHA/adaptive-music-exercise-generator"
  },
  {
    id: 2,
    title: "Bank-Statement-Analysis-Phase-2",
    description:
      "Mifos Summer of Code 2025 project integrating ML and NLP for bank statement analysis, real-time insights, and adaptive budgeting strategies with interactive dashboards.",
    image: "/images/projects/Mifos.png",
    tags: [
      { name: "Financial AI", color: "bg-green-500" },
      { name: "NLP", color: "bg-blue-500" },
      { name: "Dashboard", color: "bg-teal-500" },
      { name: "MSoC", color: "bg-yellow-500" },
    ],
    technologies: ["Python", "scikit-learn", "NLTK", "Flask", "React", "D3.js", "Pandas"],
    github: "https://github.com/PRIYANSHU2026/Bank-Statement-Analysis-Phase-2",
    demo: "https://github.com/PRIYANSHU2026/Bank-Statement-Analysis-Phase-2"
  },
  {
    id: 3,
    title: "AI-Based Stock Strategy System",
    description:
      "Comprehensive stock analysis platform combining technical indicators, sentiment analysis, and deep learning models for predictive trading strategies and portfolio optimization.",
    image: "/images/projects/Stock.png",
    tags: [
      { name: "Quant Finance", color: "bg-blue-500" },
      { name: "Deep Learning", color: "bg-teal-500" },
      { name: "Sentiment Analysis", color: "bg-green-500" },
      { name: "Trading", color: "bg-red-500" },
    ],
    technologies: ["Python", "TensorFlow", "LSTM", "FinBERT", "TA-Lib", "Streamlit"],
    github: "https://github.com/PRIYANSHU2026/Stock-AI-Based-Strategy-System",
    demo: "https://stock-ai-based-strategy-system.vercel.app"
  },
  {
    id: 4,
    title: "CBCT 3D Visualization Software",
    description:
      "Advanced visualization tool for Cone Beam Computed Tomography (CBCT) dental scans with 3D mesh rendering capabilities.",
    image: "/images/projects/cbct-visualizer.png",
    tags: [
      { name: "3D Visualization", color: "bg-blue-500" },
      { name: "Medical Imaging", color: "bg-red-500" },
      { name: "CBCT", color: "bg-teal-500" },
      { name: "Python", color: "bg-yellow-500" },
    ],
    technologies: ["Python", "VTK", "PyQt5", "SimpleITK", "NumPy", "Matplotlib"],
    github: "https://github.com/PRIYANSHU2026/3D-dental-impantation-project.git",
  },
  {
    id: 5,
    title: "Plant Disease Detection",
    description:
      "Collaborated on a PhD thesis and publication with Associate Professor Vijay Lakshmi to identify plant diseases from leaf images using computer vision.",
    image: "/images/projects/plant-disease-detection.jpg",
    tags: [
      { name: "Agriculture", color: "bg-green-500" },
      { name: "Computer Vision", color: "bg-blue-500" },
      { name: "CNN", color: "bg-teal-500" },
      { name: "Disease Detection", color: "bg-red-500" },
    ],
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas"],
    github: "https://github.com/PRIYANSHU2026/Project-AIML.git",
  },
  {
    id: 6,
    title: "AI in Friction Stir Welding",
    description:
      "Utilized an Artificial Neural Network (ANN) model to predict laboratory test outcomes with an accuracy of 88% for friction stir welding applications.",
    image: "/images/projects/ai-friction-stir-welding.png",
    tags: [
      { name: "ANN", color: "bg-teal-500" },
      { name: "Material Science", color: "bg-blue-500" },
      { name: "Manufacturing", color: "bg-orange-500" },
      { name: "Predictive Modeling", color: "bg-yellow-500" },
    ],
    technologies: ["Python", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/PRIYANSHU2026/APPLICATION-OF-AI-STIR-FRICTION-WELDING-.git",
  },
  {
    id: 7,
    title: "Hedging of Financial Derivatives",
    description:
      "Open Source project with 200+ implementations based on machine learning and deep learning in financial analytics, stock prediction, and real estate prediction.",
    image: "/images/projects/Finance.jpg",
    tags: [
      { name: "Financial ML", color: "bg-green-500" },
      { name: "Stock Prediction", color: "bg-blue-500" },
      { name: "Web Apps", color: "bg-teal-500" },
      { name: "Open Source", color: "bg-yellow-500" },
    ],
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Flask", "React"],
    github: "https://github.com/PRIYANSHU2026/Hedging-of-Financial-Derivatives.git",
  },
  {
    id: 8,
    title: "Transformer-Based Text Summarization",
    description:
      "Research project at DRDO-CAIR focusing on abstractive text summarization of news articles using transformer architectures.",
    image: "/images/projects/maxresdefault.jpg",
    tags: [
      { name: "NLP", color: "bg-blue-500" },
      { name: "Transformers", color: "bg-teal-500" },
      { name: "Text Summarization", color: "bg-green-500" },
      { name: "Research", color: "bg-red-500" },
    ],
    technologies: ["Python", "PyTorch", "Transformers", "BERT", "ROUGE", "BLEU", "Hugging Face"],
    github: "https://github.com/PRIYANSHU2026/Transformer-Summarization.git",
  },
  {
    id: 9,
    title: "High-Frequency Amplifier Optimization",
    description:
      "Research project at DRDO-MTRDC focused on the development and enhancement of high-frequency amplifiers by integrating Deep Learning techniques for performance optimization.",
    image: "/images/projects/20220302113914_210418-Figure-1.webp",
    tags: [
      { name: "Python", color: "bg-blue-500" },
      { name: "Deep Learning", color: "bg-teal-500" },
      { name: "FNN", color: "bg-green-500" },
      { name: "Research", color: "bg-red-500" },
    ],
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "SciPy", "Matplotlib"],
    github: "https://github.com/PRIYANSHU2026/Transformer-Summarization.git",
  },
  {
    id: 10,
    title: "Bone Loss Detection on X-Ray Teeth",
    description:
      "Research project with Krishnadevaraya College of Dental Sciences & Hospital to detect bone loss in dental X-rays using deep learning algorithms.",
    image: "/images/projects/bone-loss-detection.png",
    tags: [
      { name: "Medical AI", color: "bg-red-500" },
      { name: "Computer Vision", color: "bg-blue-500" },
      { name: "Deep Learning", color: "bg-teal-500" },
      { name: "Healthcare", color: "bg-green-500" },
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "scikit-learn", "Keras"],
    github: "https://github.com/PRIYANSHU2026/DENTAL-X-RAY.git",
  },
  {
    id: 11,
    title: "Combinational Health Model",
    description:
      "Multi-disease prediction model developed under the guidance of Dr. Soumya Pati that combines multiple biomarkers for comprehensive health assessment.",
    image: "/images/projects/health-model.png",
    tags: [
      { name: "Machine Learning", color: "bg-blue-500" },
      { name: "Healthcare", color: "bg-green-500" },
      { name: "Predictive Models", color: "bg-yellow-500" },
      { name: "Data Science", color: "bg-teal-500" },
    ],
    technologies: ["Python", "scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    github: "https://github.com/PRIYANSHU2026/combinational-health-model.git",
  },
  {
    id: 12,
    title: "GIS-Based Urban Traffic Simulation",
    description:
      "Simulated urban traffic congestion using the Mesa agent-based modeling framework and OSMnx for road network extraction, modeling real-world Bangalore traffic scenarios.",
    image: "/images/projects/gis-traffic-simulation.jpg",
    tags: [
      { name: "Agent-based Modeling", color: "bg-orange-500" },
      { name: "GIS", color: "bg-blue-500" },
      { name: "Mesa Framework", color: "bg-green-500" },
      { name: "Traffic Simulation", color: "bg-yellow-500" },
    ],
    technologies: ["Python", "Mesa", "OSMnx", "NetworkX", "Matplotlib", "GeoPandas"],
    github: "https://github.com/PRIYANSHU2026/Traffic-Congetion-.git",
  },
];

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="projects" className="py-20 relative overflow-x-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-950/10 to-background opacity-50"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-20 relative">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent relative z-10"
          >
            A small selection of <span className="text-teal-400">recent projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300 max-w-3xl mx-auto text-sm md:text-base relative z-10"
          >
            Showcasing the practical applications of my research in artificial
            intelligence and machine learning.
          </motion.p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-12 p-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
            >
              <PinContainer
                title={project.demo ? "Visit Live Site" : "View Source"}
                href={project.demo || project.github}
              >
                <div className="relative mb-8 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px] rounded-3xl bg-card">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-emerald-500/30 to-teal-500/30 mix-blend-overlay z-10"></div>
                  <Image
                    fill
                    src={project.image}
                    alt={project.title}
                    className="object-cover object-center z-0 transition-transform duration-500 group-hover/pin:scale-110"
                  />
                </div>

                <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl text-slate-100">
                  {project.title}
                </h1>

                <p className="line-clamp-2 text-sm font-light lg:text-lg lg:font-normal text-slate-300 mt-2">
                  {project.description}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-between">
                  <div className="flex items-center flex-wrap gap-2 max-w-[70%]">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className={`text-[10px] sm:text-xs px-3 py-1 rounded-full text-white bg-opacity-30 border border-white/10 ${tag.color}`}
                      >
                        {tag.name}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] sm:text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300 border border-white/10">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-center">
                    <p className="flex text-sm md:text-sm lg:text-base text-teal-400 font-medium">
                      {project.demo ? "Check Live Site" : "Read Source"}
                    </p>
                    <ArrowRight className="ml-2 w-4 h-4 text-teal-400" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
