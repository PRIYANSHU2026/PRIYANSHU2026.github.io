"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// This would typically come from an API, but we'll mock it for now
const linkedinUpdates = [
  {
    id: 1,
    type: "publication",
    title: "New Paper: Attention-Based Neural Networks for Medical Image Classification",
    date: "2 days ago",
    url: "#",
  },
  {
    id: 2,
    type: "achievement",
    title: "Presented research findings at the International Conference on AI-Driven Engineering",
    date: "1 week ago",
    url: "#",
  },
  {
    id: 3,
    type: "work",
    title: "Completed research project on Multi-Modal Deep Learning for Sensor Fusion",
    date: "2 weeks ago",
    url: "#",
  },
  {
    id: 4,
    type: "education",
    title: "Completed advanced course on Reinforcement Learning",
    date: "3 weeks ago",
    url: "#",
  },
];

export function Mirror() {
  const [updates, setUpdates] = useState<typeof linkedinUpdates | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchUpdates = async () => {
      // In a real app, you would fetch from an API here
      // const response = await fetch('/api/linkedin-updates');
      // const data = await response.json();

      // For demo purposes, we'll use the mock data with a delay
      setTimeout(() => {
        setUpdates(linkedinUpdates);
        setLoading(false);
      }, 1500);
    };

    fetchUpdates();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
            LinkedIn Mirror
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Stay updated with my latest professional activities, publications, and achievements.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardTitle className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
                Recent LinkedIn Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {updates?.map((update) => (
                    <motion.div
                      key={update.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-b border-gray-200 dark:border-gray-800 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-start">
                        <div className={`
                          h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4
                          ${update.type === 'publication' ? 'bg-blue-100 text-blue-600' : ''}
                          ${update.type === 'achievement' ? 'bg-green-100 text-green-600' : ''}
                          ${update.type === 'work' ? 'bg-purple-100 text-purple-600' : ''}
                          ${update.type === 'education' ? 'bg-amber-100 text-amber-600' : ''}
                          dark:bg-opacity-20
                        `}>
                          {update.type === 'publication' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                            </svg>
                          )}
                          {update.type === 'achievement' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 15l-2-6 6 1-4 5z" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                          )}
                          {update.type === 'work' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                            </svg>
                          )}
                          {update.type === 'education' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                              <path d="M6 12v5c3 3 9 3 12 0v-5" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="text-gray-900 dark:text-gray-100 font-medium">{update.title}</p>
                          <div className="flex items-center mt-1 space-x-2">
                            <span className="text-sm text-gray-500 dark:text-gray-400">{update.date}</span>
                            <a href={update.url} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View on LinkedIn</a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              <div className="mt-6 text-center">
                <a
                  href="https://www.linkedin.com/in/priyanshu-tiwari-305661258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View full LinkedIn profile
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
