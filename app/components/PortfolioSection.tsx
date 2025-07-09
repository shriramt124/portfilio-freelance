"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  // {
  //   id: 1,
  //   title: "",
  //   category: "",
  //   description: "",
  //   image: "",
  //   link: "",
  //   tags: [],
  // },
  {
    id: 1,
    title: "Ai Resume Maker and Interview Preparation Platform",
    category: "Development-web-app",
    description:
      "An intelligent web-based application that leverages Artificial Intelligence to automate and enhance the resume creation and review process. The app allows users to generate professional, personalized resumes by simply providing basic information and career goals. It also evaluates existing resumes, suggests improvements using AI, and offers tailored content recommendations based on the targeted job profile.",
    image: "/ai_resume.png",
    link: "https://github.com/shriramt124/ui-update",
    tags: [
      "React.js",
      "Next.js",
      "Tailwind Css",
      "Redux.js",
      "Open ai",
      "AI",
      "Javascript"
    ],
  },
  {
    id: 2,
    title: "Video to Reels",
    category: "Ai platform",
    description:
      "An intelligent web application that automatically generates short video reels from trending YouTube videos using AI. The system downloads trending videos, extracts audio, transcribes speech with timestamps, uses AI to find highlights, creates engaging reels, and uploads them to social media platforms.",
    image: "/project-2.svg",
    link: "https://github.com/shrishtinamdeo/video-to-reels",
    tags: ["Python, OpenAI Whisper, Streamlit, MoviePy, PostgreSQL"],
  },
  {
    id: 3,
    title: "Realtime Chat Application",
    category: "Full Stack · Realtime App",
    description:
      "A real-time chat application with user authentication, group chat, and typing indicators. Built with React.js and Node.js with WebSocket integration.",
    image: "/project-3.svg",
    link: "https://github.com/shriramt124/graphQLChatApp",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "GraphQl",
      "Realtime Chat",
      "Subscription"
    ],
  },
  {
    id: 4,
    title: "Streamly",
    category: "Backend · Video Streaming",
    description:
      "A fully-featured YouTube-style backend system with support for video uploads, playback, comments, likes, subscriptions, and user authentication.",
    image: "/project-4.svg",
    link: "https://github.com/tushar-gour/youtube-backend",
    tags: [
      "Node.js",
      "MongoDB",
      "Express",
      "REST API",
      "Video Streaming",
      "Clouodinary",
    ],
  },
  {
    id: 6,
    title: "BudgetBuddy",
    category: "Mobile App · Finance",
    description:
      "A sleek and user-friendly expense tracker built in Flutter that helps users monitor spending, set budgets, and analyze expense trends.",
    image: "/project-2.svg",
    link: "#",
    tags: [
      "Flutter",
      "Dart",
      "Finance",
      "Charts",
      "Mobile App",
      "Personal Budget",
    ],
  },
  {
    id: 7,
    title: "Bus Management System",
    category: "Mobile Development",
    description:
      "A mobile application to address critical management challenges within the transportation sector.",
    image: "/project-3.svg",
    link: "https://play.google.com/store/apps/details?id=com.svvv.bms",
    tags: ["Flutter", "Mobile", "App", "Firebase", "MongoDB"],
  },
  {
    id: 8,
    title: "E-commerce Platform",
    category: "Web Development",
    description:
      "Full-featured e-commerce platform with product management, cart functionality, and secure payment processing.",
    image: "/Ecommerce.png",
    link: "https://github.com/shriramt124/Ecomm-Luxe",
    tags: ["React", "Node.js", "Mongodb", "Next.js", "Tailwind Css", "Express.js"],
  },
  {
    id: 9,
    title: "Drawing Web app",
    category: "Web development",
    description:
      "This is a modern drawing application built with ReactJS and styled using TailwindCSS, allowing users to draw freehand or create rough-looking shapes like rectangles and lines using Rough.js for a hand-drawn effect. The app leverages the HTML Canvas API for rendering and supports features like undo/redo, drag-to-move, and clear canvas, offering a smooth, intuitive sketching experience in the brows",
    image: "/Drawing.png",
    link: "https://drawing124.netlify.app/",
    tags: ["React.js", "Javascript", "Rough.js", "TailwindCSs"],
  },
  {
    id: 10,
    title: "Financial Dashboard",
    category: "UI/UX Design",
    description:
      "Intuitive financial dashboard for visualizing and analyzing complex financial data with customizable widgets.",
    image: "/project-2.svg",
    link: "#",
    tags: ["Figma", "React", "Chart.js"],
  },
  {
    id: 11,
    title: "Cloud-based CRM",
    category: "Cloud Solutions",
    description:
      "Scalable customer relationship management system with advanced analytics and automation capabilities.",
    image: "/project-3.svg",
    link: "#",
    tags: ["AWS", "Next.js", "MongoDB"],
  },
  {
    id: 12,
    title: "AI Chat Assistant",
    category: "AI Agents & Automation",
    description:
      "Intelligent chatbot using LangChain for customer support with natural language processing capabilities.",
    image: "/project-4.svg",
    link: "#",
    tags: ["LangChain", "OpenAI", "Python"],
  },
  {
    id: 13,
    title: "Data Analytics Platform",
    category: "Data Analytics",
    description:
      "Real-time data visualization and analytics platform with interactive dashboards and reporting tools.",
    image: "/project-1.svg",
    link: "#",
    tags: ["Python", "Pandas", "Plotly"],
  },
  {
    id: 14,
    title: "Workflow Automation",
    category: "Workflow Automation",
    description:
      "Custom n8n workflow automation connecting multiple business tools for seamless data synchronization.",
    image: "/project-2.svg",
    link: "#",
    tags: ["n8n", "API Integration", "Zapier"],
  },
  {
    id: 15,
    title: "Task Management App",
    category: "Web Development",
    description:
      "Collaborative task management application with real-time updates and team collaboration features.",
    image: "/project-3.svg",
    link: "https://github.com/shriramt124/task-manager",
    tags: ["React.js", "Socket.io", "Express"],
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Machine Learning",
  "Artificial Intelligence",
  "Data Science",
  "Backend Development",
  "Frontend Development",
  "Full Stack",
  "Cloud Computing",
  "DevOps",
  "UI/UX Design",
  "Game Development",
  "AR/VR",
  "Cybersecurity",
  "Blockchain",
  "Automation",
 
  "Open Source",
  "Hackathon Projects",
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground text-lg">
            Explore our recent projects and see how we've helped our clients
            achieve their digital goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${activeCategory === category
                ? "bg-primary text-white"
                : "bg-card hover:bg-card/80 text-foreground hover:text-primary border border-border"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-card rounded-lg overflow-hidden border border-border group hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              layout
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block bg-primary/90 text-white text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <a
                    href={project.link}
                    className="bg-white/90 hover:bg-white text-primary p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                    aria-label={`View ${project.title} project`}
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="text-primary hover:text-primary/80 text-sm font-medium flex items-center"
                >
                  View Project
                  <svg
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            <span>Start Your Project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
