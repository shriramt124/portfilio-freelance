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
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and secure payment processing.',
    image: '/project-1.svg',
    link: '#',
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    category: 'Mobile Development',
    description: 'A cross-platform mobile application for tracking workouts, nutrition, and health metrics with social features.',
    image: '/project-2.svg',
    link: '#',
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    category: 'UI/UX Design',
    description: 'An intuitive financial dashboard for visualizing and analyzing complex financial data with customizable widgets.',
    image: '/project-3.svg',
    link: '#',
  },
  {
    id: 4,
    title: 'Cloud-based CRM',
    category: 'Cloud Solutions',
    description: 'A scalable customer relationship management system with advanced analytics and automation capabilities.',
    image: '/project-4.svg',
    link: '#',
  },
];

const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design', 'Cloud Solutions'];

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

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === category
                ? 'bg-primary text-white'
                : 'bg-card hover:bg-card/80 text-foreground hover:text-primary border border-border'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <a
                    href={project.link}
                    className="bg-card hover:bg-primary/10 text-primary p-2 rounded-full transition-colors"
                    aria-label={`View ${project.title} project`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                <p className="text-muted-foreground">{project.description}</p>
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