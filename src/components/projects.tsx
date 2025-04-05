"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Bone Loss Detection on X-Ray Teeth",
    description: "Research project with Krishnadevaraya College of Dental Sciences & Hospital to detect bone loss in dental X-rays using deep learning algorithms.",
    tags: ["Medical AI", "Computer Vision", "Deep Learning", "Healthcare"],
    image: "/images/projects/bone-loss-detection.png",
    github: "https://github.com/PRIYANSHU2026/DENTAL-X-RAY.git",
    demo: "#",
  },
  {
    id: 2,
    title: "Combinational Health Model",
    description: "Multi-disease prediction model developed under the guidance of Dr. Soumya Pati that combines multiple biomarkers for comprehensive health assessment.",
    tags: ["Machine Learning", "Healthcare", "Predictive Models", "Data Science"],
    image: "/images/projects/health-model.png",
    github: "https://github.com/PRIYANSHU2026/combinational-health-model.git",
    demo: "#",
  },
  {
    id: 3,
    title: "CBCT 3D Visualization Software with Mesh Mode",
    description: "Advanced visualization tool for Cone Beam Computed Tomography (CBCT) dental scans with 3D mesh rendering capabilities.",
    tags: ["3D Visualization", "Medical Imaging", "CBCT", "Python"],
    image: "/images/projects/cbct-visualizer.png",
    github: "https://github.com/PRIYANSHU2026/3D-dental-impantation-project.git",
    demo: "#",
  },
  {
    id: 4,
    title: "GIS-Based Urban Traffic Simulation",
    description: "Simulated urban traffic congestion using the Mesa agent-based modeling framework and OSMnx for road network extraction, modeling real-world Bangalore traffic scenarios.",
    tags: ["Agent-based Modeling", "GIS", "Mesa Framework", "Traffic Simulation"],
    image: "/images/projects/gis-traffic-simulation.jpg",
    github: "https://github.com/PRIYANSHU2026/Traffic-Congetion-.git",
    demo: "#",
  },
  {
    id: 5,
    title: "Plant Disease Detection",
    description: "Collaborated on a PhD thesis and publication with Associate Professor Vijay Lakshmi to identify plant diseases from leaf images using computer vision.",
    tags: ["Agriculture", "Computer Vision", "CNN", "Disease Detection"],
    image: "/images/projects/plant-disease-detection.jpg",
    github: "https://github.com/PRIYANSHU2026/Project-AIML.git",
    demo: "#",
  },
  {
    id: 6,
    title: "AI in Friction Stir Welding",
    description: "Utilized an Artificial Neural Network (ANN) model to predict laboratory test outcomes with an accuracy of 88% for friction stir welding applications.",
    tags: ["ANN", "Material Science", "Manufacturing", "Predictive Modeling"],
    image: "/images/projects/ai-friction-stir-welding.png",
    github: "https://github.com/PRIYANSHU2026/APPLICATION-OF-AI-STIR-FRICTION-WELDING-.git",
    demo: "#",
  },
  {
    id: 7,
    title: "Hedging of Financial Derivatives",
    description: "Open Source project with 200+ implementations based on machine learning and deep learning in financial analytics, stock prediction, and real estate prediction, including web applications.",
    tags: ["Financial ML", "Stock Prediction", "Web Apps", "Open Source"],
    image: "/images/projects/Finance.jpg",
    github: "https://github.com/PRIYANSHU2026/Hedging-of-Financial-Derivatives.git",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
            Projects & Applications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing the practical applications of my research in artificial intelligence and machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  {/* Use regular img tag to ensure better compatibility */}
                  <img
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                  <div className="flex space-x-4">
                    <Link
                      href={project.github}
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                      href={project.demo}
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="h-5 w-5" />
                      <span className="sr-only">Demo</span>
                    </Link>
                  </div>
                  <Link
                    href={project.demo !== "#" ? project.demo : project.github}
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
