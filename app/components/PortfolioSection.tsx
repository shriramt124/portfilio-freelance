
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'Full-featured e-commerce platform with product management, cart functionality, and secure payment processing.',
    image: '/project-1.svg',
    link: '#',
    tags: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    category: 'Mobile Development',
    description: 'Cross-platform mobile application for tracking workouts, nutrition, and health metrics with social features.',
    image: '/project-2.svg',
    link: '#',
    tags: ['React Native', 'Firebase', 'Redux']
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    category: 'UI/UX Design',
    description: 'Intuitive financial dashboard for visualizing and analyzing complex financial data with customizable widgets.',
    image: '/project-3.svg',
    link: '#',
    tags: ['Figma', 'React', 'Chart.js']
  },
  {
    id: 4,
    title: 'Cloud-based CRM',
    category: 'Cloud Solutions',
    description: 'Scalable customer relationship management system with advanced analytics and automation capabilities.',
    image: '/project-4.svg',
    link: '#',
    tags: ['AWS', 'Next.js', 'MongoDB']
  },
  {
    id: 5,
    title: 'AI Chat Assistant',
    category: 'AI Agents & Automation',
    description: 'Intelligent chatbot using LangChain for customer support with natural language processing capabilities.',
    image: '/project-1.svg',
    link: '#',
    tags: ['LangChain', 'OpenAI', 'Python']
  },
  {
    id: 6,
    title: 'Data Analytics Platform',
    category: 'Data Analytics',
    description: 'Real-time data visualization and analytics platform with interactive dashboards and reporting tools.',
    image: '/project-2.svg',
    link: '#',
    tags: ['Python', 'Pandas', 'Plotly']
  },
  {
    id: 7,
    title: 'Workflow Automation',
    category: 'Workflow Automation',
    description: 'Custom n8n workflow automation connecting multiple business tools for seamless data synchronization.',
    image: '/project-3.svg',
    link: '#',
    tags: ['n8n', 'API Integration', 'Zapier']
  },
  {
    id: 8,
    title: 'Task Management App',
    category: 'Web Development',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    image: '/project-4.svg',
    link: '#',
    tags: ['Vue.js', 'Socket.io', 'Express']
  }
];

const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design', 'Cloud Solutions', 'AI Agents & Automation', 'Data Analytics', 'Workflow Automation'];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground text-lg">
            Explore our recent projects and see how we've helped our clients achieve their digital goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${activeCategory === category
                ? 'bg-primary text-white'
                : 'bg-card hover:bg-card/80 text-foreground hover:text-primary border border-border'
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
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
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
                  <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
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
