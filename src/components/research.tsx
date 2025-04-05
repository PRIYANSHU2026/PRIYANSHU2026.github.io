"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const researchAreas = [
  {
    id: 1,
    title: "Deep Learning Applications",
    description: "Developing novel architectures for computer vision tasks with a focus on efficiency and accuracy.",
    details: "My research in deep learning includes optimizing convolutional neural networks for edge devices, exploring transfer learning techniques for limited data scenarios, and implementing attention mechanisms for improved performance."
  },
  {
    id: 2,
    title: "Natural Language Processing",
    description: "Investigating transformer-based models for contextual understanding and semantic analysis.",
    details: "I've worked on fine-tuning large language models for domain-specific tasks, improving sentiment analysis algorithms, and developing multilingual text classification systems that can work across different languages."
  },
  {
    id: 3,
    title: "Reinforcement Learning",
    description: "Exploring multi-agent systems and policy optimization techniques for complex environments.",
    details: "My reinforcement learning research focuses on developing algorithms that can learn optimal strategies in dynamic environments, implementing deep Q-networks for sequential decision-making problems, and applying these techniques to real-world optimization challenges."
  },
];

const publications = [
  {
    id: 1,
    title: "Optimizing FAANG Stock Forecasting – The Power of Feature Engineering and LSTM in Financial Analysis",
    conference: "IEEE 5th International Conference on Artificial Intelligence and Data Engineering",
    year: 2024,
    link: "#",
  },
  {
    id: 2,
    title: "Enhancing Fare Prediction Accuracy in Ride-Hailing Through Neural Networks and Data Simulation",
    conference: "IEEE 5th International Conference on Artificial Intelligence and Data Engineering",
    year: 2024,
    link: "#",
  },
  {
    id: 3,
    title: "GIS-Based Urban Traffic Simulation Using Mesa Framework",
    conference: "Springer 2nd International Conference on Computing Science and Artificial Intelligence",
    year: 2024,
    link: "#",
  },
  {
    id: 4,
    title: "Dynamic Stability Classification in Smart Grids Using Feedforward Neural Networks",
    conference: "Springer IEI Journal (Q3) – International Conference on Sustainable Technology",
    year: 2024,
    link: "#",
  },
];

export function Research() {
  return (
    <section id="research" className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-blue-950/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
            Research Focus
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My research explores the frontiers of artificial intelligence and machine learning, with a focus on practical applications and theoretical advancements.
          </p>
        </motion.div>

        {/* Research Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="h-full cursor-pointer border-blue-100 dark:border-blue-900 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{area.id}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{area.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{area.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{area.details}</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center" id="publications">Selected Publications</h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{pub.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{pub.conference}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500 dark:text-gray-500">{pub.year}</span>
                        <a
                          href={pub.link}
                          className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                        >
                          View Paper
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
