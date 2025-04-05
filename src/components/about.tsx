"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm an AI/ML Researcher with experience at DRDO and UBC, focusing on cutting-edge applications of artificial intelligence and machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">My Journey</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    My passion for artificial intelligence began during my undergraduate studies, where I became fascinated with how machine learning could solve complex problems across various domains.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    As a research intern at DRDO and UBC, I've had the opportunity to work on challenging projects that push the boundaries of what's possible with AI and ML technologies.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    I've presented my work at multiple international conferences including ICRAI, CSEAI, AIDE, and ICST, sharing my findings with the global research community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="skills" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
              </TabsList>
              <TabsContent value="skills" className="mt-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Technical Expertise</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">Programming</h4>
                        <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Python</li>
                          <li>• TensorFlow</li>
                          <li>• PyTorch</li>
                          <li>• Scikit-learn</li>
                          <li>• R</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">ML/AI Focus</h4>
                        <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Deep Learning</li>
                          <li>• Natural Language Processing</li>
                          <li>• Computer Vision</li>
                          <li>• Reinforcement Learning</li>
                          <li>• Data Analysis</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="education" className="mt-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="border-l-2 border-blue-500 pl-4 space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Kendriya Vidyalaya</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">PCMCS 10+2</p>
                        <p className="text-xs text-gray-500">2010 - 2022</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Grade: 1st class</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Sir M Visvesvaraya Institute of Technology</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Artificial Intelligence and Machine Learning (B.E)</p>
                        <p className="text-xs text-gray-500">2022 - 2026</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">CGPA: 8.00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="experience" className="mt-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="border-l-2 border-blue-500 pl-4 space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Research Intern</h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400">DRDO – Microwave Tube Research & Development Centre (MTRDC)</p>
                        <p className="text-xs text-gray-500">Nov 2024 – Dec 2024</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Conducted research on machine learning applications for predicting and controlling the frequency of Traveling Wave Tubes using a Feedforward Neural Network (FNN).
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Machine Learning Researcher</h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400">Unboxing Community</p>
                        <p className="text-xs text-gray-500">Sep 2024 – Nov 2024</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Developed a recommendation system for an e-commerce platform using collaborative filtering and deep learning techniques.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Research Intern</h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400">DRDO – Centre for Artificial Intelligence and Robotics (CAIR)</p>
                        <p className="text-xs text-gray-500">April 2024 – May 2024</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Worked on NLP-based research focusing on 'Transformer-Based Text Summarization for News Articles.'
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
