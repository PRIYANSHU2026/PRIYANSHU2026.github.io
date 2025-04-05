"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { certificationsData } from "@/data/resume-data";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { File, ExternalLink } from "lucide-react";

export function Certificates() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Updated certificates data with Google Drive links
  const certificatesWithLinks = [
    {
      title: "DRDO Research Trainee Certificate",
      issuer: "Defence Research & Development Organisation (DRDO) (Microwave Tube Research & Development Centre (MTRDC))",
      link: "https://drive.google.com/file/d/1cTZf2HS019iNCufF1_0nB-oBawH8C5-8/view?usp=sharing",
      category: "Research",
      date: "2024",
    },
    {
      title: "Machine Learning Researcher Certificate",
      issuer: "Unboxing Community",
      link: "https://www.linkedin.com/in/priyanshu-tiwari-305661258/overlay/experience/2522761870/multiple-media-viewer/?profileId=ACoAAD909nUB0H4YYjJ5Iqpr1X1HYCVWfQ6zcw4&treasuryMediaId=1736858841298",
      category: "Industry",
      date: "2024",
    },
    {
      title: "Transformer-Based Text Summarization for News Articles",
      issuer: "DRDO - Centre for AI and Robotics",
      link: "https://drive.google.com/file/d/1Y2KsjH-HX0VBLNLXs9DoQ4lcv_WYq1sA/view?usp=sharing",
      category: "Research",
      date: "2024",
    },
    {
      title: "Girl Script Summer of Code 2024 - Top Performer",
      issuer: "Girl Script Foundation",
      link: "https://drive.google.com/file/d/13ix6QD0hwtphMZ_q_0xBQyyFf3MnomJ-/view?usp=sharing",
      category: "Open Source",
      date: "2024",
    },
    // Adding original certifications from resume data
    ...certificationsData.map(cert => ({
      title: cert.title,
      issuer: cert.issuer,
      link: `https://drive.google.com/file/d/${cert.title.replace(/\s+/g, '-').toLowerCase()}`,
      category: "Course",
      date: "2023-2024",
    }))
  ];

  const categoryColors = {
    "Research": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    "Industry": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    "Open Source": "bg-green-500/10 text-green-600 dark:text-green-400",
    "Course": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  };

  return (
    <section id="certificates" className="py-16 overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          className="mb-12 text-center"
        >
          <motion.h2
            variants={fadeInUpVariants}
            className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            Certificates & Achievements
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="max-w-2xl mx-auto text-lg opacity-80"
          >
            Documentation of my journey through courses, internships, and achievements.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesWithLinks.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -150px 0px" }}
              custom={index}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={certificate.link} target="_blank" rel="noopener noreferrer">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] transform transition-transform bg-card/60 backdrop-blur-sm border-muted">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge variant="outline" className={`${categoryColors[certificate.category as keyof typeof categoryColors]}`}>
                          {certificate.category}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{certificate.date}</p>
                      </div>
                      <File className="h-5 w-5 text-blue-500" />
                    </div>
                    <CardTitle className="mt-2 flex flex-col">
                      <span>{certificate.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <p className="text-sm opacity-80">{certificate.issuer}</p>
                      <span className="text-blue-500 flex items-center text-sm">
                        View <ExternalLink className="ml-1 h-3 w-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
