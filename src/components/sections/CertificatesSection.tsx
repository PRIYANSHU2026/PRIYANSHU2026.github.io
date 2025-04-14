"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: Date;
  category: "research" | "industry" | "course" | "open-source" | "conference" | "hackathon";
  link?: string;
  credentialId?: string;
  skills?: string[];
}

const certificates: Certificate[] = [
  // Original certificates (1-27)
  {
    id: 1,
    title: "DRDO Research Trainee Certificate",
    organization: "Defence Research & Development Organisation (DRDO) - Microwave Tube Research & Development Centre (MTRDC)",
    date: new Date("2024-03-01"),
    category: "research",
    link: "https://drive.google.com/file/d/1cTZf2HS019iNCufF1_0nB-oBawH8C5-8/view?usp=sharing",
  },
  {
    id: 2,
    title: "Machine Learning Researcher Certificate",
    organization: "Unboxing Community",
    date: new Date("2024-02-01"),
    category: "industry",
    link: "https://www.linkedin.com/in/priyanshu-tiwari-305661258/overlay/experience/2522761870/multiple-media-viewer/?profileId=ACoAAD909nUB0H4YYjJ5Iqpr1X1HYCVWfQ6zcw4&treasuryMediaId=1736858841298",
  },
  {
    id: 3,
    title: "Transformer-Based Text Summarization for News Articles",
    organization: "DRDO - Centre for AI and Robotics",
    date: new Date("2024-01-15"),
    category: "research",
    link: "https://drive.google.com/file/d/1Y2KsjH-HX0VBLNLXs9DoQ4lcv_WYq1sA/view?usp=sharing",
  },
  {
    id: 4,
    title: "Girl Script Summer of Code 2024 - Top Performer",
    organization: "Girl Script Foundation",
    date: new Date("2024-03-15"),
    category: "open-source",
    link: "https://drive.google.com/file/d/13ix6QD0hwtphMZ_q_0xBQyyFf3MnomJ-/view?usp=sharing",
    credentialId: "GSSoC2024_OST100C_403EF768",
    skills: ["Data Analysis", "Deep Learning", "Machine Learning", "Neural Networks", "Financial Analysis"],
  },
  {
    id: 5,
    title: "Optimizing FAANG Stock Forecasting",
    organization: "IEEE 5th International Conference on Artificial Intelligence and Data Engineering - NMAM Institute of Technology",
    date: new Date("2025-02-01"),
    category: "conference",
    skills: ["Research Skills", "Paper Presentation"],
  },
  {
    id: 6,
    title: "Enhancing Fare Prediction Accuracy in Ride Hailing",
    organization: "IEEE 5th International Conference on Artificial Intelligence and Data Engineering - NMAM Institute of Technology",
    date: new Date("2025-02-01"),
    category: "conference",
    skills: ["Research Skills", "Paper Presentation"],
  },
  {
    id: 7,
    title: "CSEAI24 Conference Participation",
    organization: "2nd International Conference on Computing for Science, Engineering, and Artificial Intelligence - California State University",
    date: new Date("2025-01-01"),
    category: "conference",
    skills: ["Research Skills"],
  },
  {
    id: 8,
    title: "Finalist of Neural Nexus Hackathon",
    organization: "Unstop",
    date: new Date("2024-12-01"),
    category: "hackathon",
    credentialId: "0d8ac775-3546-466e-911a-787755816f75",
  },
  {
    id: 9,
    title: "Artificial Intelligence in Reshaping Business Landscape",
    organization: "REVA Business School - REVA University",
    date: new Date("2024-12-01"),
    category: "conference",
    skills: ["Research Skills", "Paper Presentation", "Deep Learning", "Data Analysis"],
  },
  {
    id: 10,
    title: "Argonyx'24 Hackathon Participant",
    organization: "RV University",
    date: new Date("2024-11-01"),
    category: "hackathon",
  },
  {
    id: 11,
    title: "TensorFlow Developer Certificate",
    organization: "TensorFlow User Group (TFUG)",
    date: new Date("2024-10-01"),
    category: "industry",
    skills: ["Deep Learning", "TensorFlow", "Image Segmentation", "Image Recognition", "Object Detection"],
  },
  {
    id: 12,
    title: "Postman API Fundamentals Student Expert",
    organization: "Postman",
    date: new Date("2024-07-01"),
    category: "course",
  },
  {
    id: 13,
    title: "Advance Your Skills in Deep Learning and Neural Networks",
    organization: "LinkedIn",
    date: new Date("2023-10-01"),
    category: "course",
    link: "https://github.com/PRIYANSHU2026/DeepLearningCertification",
  },
  {
    id: 14,
    title: "Learning Relational Databases",
    organization: "LinkedIn",
    date: new Date("2024-05-01"),
    category: "course",
    skills: ["Relational Databases"],
  },
  {
    id: 15,
    title: "Foundations of Cybersecurity",
    organization: "Google",
    date: new Date("2024-03-01"),
    category: "course",
    skills: ["Cybersecurity"],
  },
  {
    id: 16,
    title: "Leveraging Cloud-Based Machine Learning on Azure",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 17,
    title: "AI Workshop: Build a Neural Network with PyTorch Lightning",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 18,
    title: "Problem Solving (Intermediate)",
    organization: "HackerRank",
    date: new Date("2024-06-01"),
    category: "course",
  },
  {
    id: 19,
    title: "AI Workshop: Hands-on with GANs Using Dense Neural Network",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 20,
    title: "AI Workshop: Hands-on with GANs with Deep Convolutional Networks",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 21,
    title: "Artificial Intelligence Foundations: Neural Networks",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 22,
    title: "Deep Learning: Getting Started",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 23,
    title: "Deep Learning Model Optimization and Tuning",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 24,
    title: "Introduction to Generative Adversarial Networks (GANs)",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 25,
    title: "Learning AI with GitHub Copilot",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 26,
    title: "Recurrent Neural Networks",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },
  {
    id: 27,
    title: "Training Neural Networks in Python",
    organization: "LinkedIn",
    date: new Date("2024-04-01"),
    category: "course",
  },

  // New hackathon achievements
  {
    id: 28,
    title: "25k Wins the Honeywell (HackWell) Hackathon",
    organization: "JSS Academy",
    date: new Date("2025-04-01"),
    category: "hackathon",
    skills: ["Point Cloud Processing", "3D Mesh Conversion", "Software Development"],
    credentialId: "Team Bramhastra",
  },
  {
    id: 29,
    title: "1st Prize at Hackons Hackathon",
    organization: "Jain University",
    date: new Date("2024-10-01"),
    category: "hackathon",
    skills: ["Competitive Programming", "Hackathon"],
    credentialId: "1st Prize (₹10,000)",
  },
  {
    id: 30,
    title: "Smart India Hackathon Participation",
    organization: "Smart India Hackathon",
    date: new Date("2024-09-01"),
    category: "hackathon",
    skills: ["Innovative Solutions", "Competitive Programming"],
  },
  {
    id: 31,
    title: "National Seminar on 57th Engineers Day",
    organization: "Institute of Engineers (India)",
    date: new Date("2024-09-01"),
    category: "hackathon",
    skills: ["Project Presentation", "Innovative Solutions"],
  },
  {
    id: 32,
    title: "Appreciation Letters for Dental Projects",
    organization: "Department of MCA",
    date: new Date("2024-03-01"),
    category: "hackathon",
    skills: ["Dental Research", "Academic Publications"],
    credentialId: "Two Appreciation Letters",
  },
  {
    id: 33,
    title: "Appreciation Letter for ANN Projects",
    organization: "Department of MCA",
    date: new Date("2024-02-01"),
    category: "hackathon",
    skills: ["Artificial Neural Networks", "Research"],
    credentialId: "Journal Publication Pending",
  },
  {
    id: 34,
    title: "CNN Bone Loss Detection Project Appreciation",
    organization: "Krishnadevaraya College of Dental Sciences",
    date: new Date("2024-08-01"),
    category: "hackathon",
    skills: ["CNN Models", "Medical Diagnosis", "Bone Loss Detection"],
    credentialId: "Presented at International Digital Dentistry Congress",
  },
];

export function CertificatesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Function to render certificate card
  const renderCertificateCard = (certificate: Certificate) => (
    <motion.div
      key={certificate.id}
      variants={itemVariants}
      className="bg-slate-900/50 hover:bg-slate-900/70 backdrop-blur-sm border border-slate-800/60 hover:border-indigo-600/20 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/10"
    >
      <div className="flex flex-col h-full">
        <div className="mb-2 flex justify-between items-start">
          <div className="inline-block px-3 py-1 mb-2 text-xs font-medium rounded-full bg-indigo-600/10 text-indigo-400 border border-indigo-500/20">
            {certificate.category.charAt(0).toUpperCase() + certificate.category.slice(1)}
          </div>
          <div className="text-sm text-gray-400">{formatDate(certificate.date)}</div>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          {certificate.title}
        </h3>
        <p className="text-sm text-gray-300 mb-4">{certificate.organization}</p>
        {certificate.credentialId && (
          <p className="text-xs text-gray-400 mb-2">
            <span className="font-semibold">Credential ID:</span> {certificate.credentialId}
          </p>
        )}
        {certificate.skills && certificate.skills.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {certificate.skills.map((skill, index) => (
              <span key={index} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-indigo-500/10">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
      {certificate.link && (
        <div className="mt-4">
          <Button asChild variant="outline" size="sm" className="bg-transparent text-indigo-400 border-indigo-500/30 hover:bg-indigo-950/30 hover:text-indigo-300">
            <Link href={certificate.link} target="_blank">
              View <ExternalLink className="ml-2 h-3 w-3" />
            </Link>
          </Button>
        </div>
      )}
    </motion.div>
  );

  // Function to render hackathon certificates in a linear format
  const renderHackathonCertificates = (hackathonCertificates: Certificate[]) => (
    <div className="bg-slate-900/60 border border-slate-800/60 rounded-lg p-4 md:p-8">
      <h3 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 border-b border-slate-800 pb-4">
        Hackathon Participation & Achievements
      </h3>
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600/30 via-purple-600/30 to-indigo-600/30 ml-3"></div>
        <div className="space-y-8">
          {hackathonCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={itemVariants}
              className="flex items-start ml-2"
            >
              {/* Timeline dot */}
              <div className="relative">
                <div className="h-6 w-6 rounded-full border-2 border-indigo-500 bg-slate-950 flex items-center justify-center -ml-3 z-10">
                  <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                </div>
              </div>
              <div className="ml-6 flex-grow bg-slate-900/50 p-4 rounded-lg border border-slate-800/60 hover:border-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/10 transition-all duration-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                  <h4 className="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{certificate.title}</h4>
                  <span className="text-sm text-slate-400 whitespace-nowrap">{formatDate(certificate.date)}</span>
                </div>
                <p className="text-sm text-slate-300 mb-2">{certificate.organization}</p>
                {certificate.credentialId && (
                  <p className="text-xs text-slate-500 mb-2">
                    <span className="font-semibold">Credential ID:</span> {certificate.credentialId}
                  </p>
                )}
                {certificate.skills && certificate.skills.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {certificate.skills.map((skill, index) => (
                      <span key={index} className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-indigo-500/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                {certificate.link && (
                  <div className="mt-3">
                    <Button asChild variant="outline" size="sm" className="bg-transparent h-8 text-indigo-400 border-indigo-500/30 hover:bg-indigo-950/30 hover:text-indigo-300">
                      <Link href={certificate.link} target="_blank">
                        View Certificate <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="certificates" className="py-12 md:py-20 relative overflow-x-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/10 to-slate-950 opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-indigo-900/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-indigo-900/5 to-transparent"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16 relative">
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl opacity-30"></div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent relative z-10"
          >
            Certificates & Achievements
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300 max-w-3xl mx-auto text-sm md:text-base relative z-10"
          >
            Showcasing my technical certifications, research contributions, and hackathon achievements.
          </motion.p>
        </div>

        <Tabs defaultValue="all" className="max-w-6xl mx-auto">
          {/* Change the TabsList style to match the theme */}
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-7 mb-8 bg-slate-900/60 border border-slate-800/60 rounded-lg p-1 backdrop-blur-sm">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-white"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="hackathon"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-white"
            >
              Hackathons
            </TabsTrigger>
            <TabsTrigger
              value="research"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-white"
            >
              Research
            </TabsTrigger>
            <TabsTrigger
              value="industry"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-white"
            >
              Industry
            </TabsTrigger>
            <TabsTrigger
              value="course"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-white"
            >
              Courses
            </TabsTrigger>
            <TabsTrigger
              value="open-source"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-white"
            >
              Open Source
            </TabsTrigger>
            <TabsTrigger
              value="conference"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600/20 data-[state=active]:to-purple-600/20 data-[state=active]:text-white"
            >
              Conferences
            </TabsTrigger>
          </TabsList>

          {/* All Certificates */}
          <TabsContent value="all">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certificates.map(renderCertificateCard)}
            </motion.div>
          </TabsContent>

          {/* Hackathon Certificates in Timeline Format */}
          <TabsContent value="hackathon">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              {renderHackathonCertificates(certificates.filter(cert => cert.category === "hackathon"))}
            </motion.div>
          </TabsContent>

          {/* Filtered Certificates for other categories */}
          {["research", "industry", "course", "open-source", "conference"].map((category) => (
            <TabsContent key={category} value={category}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {certificates
                  .filter((cert) => cert.category === category)
                  .map(renderCertificateCard)}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
