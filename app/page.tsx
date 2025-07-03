'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Services we offer
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with cutting-edge technologies for optimal performance and user experience.",
      icon: "🌐"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver seamless experiences across devices.",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality to create intuitive interfaces.",
      icon: "🎨"
    },
    {
      title: "AI Agents & Automation",
      description: "Intelligent automation solutions using AI agents, LangChain, and LangGraph to streamline your business processes.",
      icon: "🤖"
    },
    {
      title: "Workflow Automation",
      description: "Custom n8n workflows and automation pipelines that connect your tools and automate repetitive tasks.",
      icon: "⚙️"
    },
    {
      title: "Data Analytics",
      description: "Advanced data analytics and visualization solutions to transform your data into actionable business insights.",
      icon: "📊"
    },
    {
      title: "E-commerce Solutions",
      description: "Scalable online stores with secure payment gateways and inventory management systems.",
      icon: "🛒"
    },
    {
      title: "Custom Software",
      description: "Tailored software solutions designed to address your specific business challenges.",
      icon: "💻"
    },
    {
      title: "API Development",
      description: "Robust and scalable APIs that enable seamless integration between different systems.",
      icon: "🔄"
    }
  ];

  // Team members
  const team = [
    {
      name: "Alex Johnson",
      role: "Frontend Developer",
      bio: "Specializes in creating responsive, accessible, and performant user interfaces using React and Next.js.",
      image: "/team-member-1.svg" // Placeholder - will create this later
    },
    {
      name: "Sarah Chen",
      role: "Backend Developer",
      bio: "Expert in building scalable server architectures and database systems with Node.js and PostgreSQL.",
      image: "/team-member-2.svg" // Placeholder - will create this later
    },
    {
      name: "Miguel Rodriguez",
      role: "UI/UX Designer",
      bio: "Creates intuitive and beautiful user experiences with a focus on accessibility and user research.",
      image: "/team-member-3.svg" // Placeholder - will create this later
    },
    {
      name: "Priya Patel",
      role: "Mobile Developer",
      bio: "Develops native and cross-platform mobile applications with React Native and Flutter.",
      image: "/team-member-4.svg" // Placeholder - will create this later
    }
  ];

  // Portfolio projects
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with inventory management, payment processing, and customer analytics.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "/project-1.svg" // Placeholder - will create this later
    },
    {
      title: "Healthcare App",
      description: "Mobile application for patients to schedule appointments, access medical records, and communicate with healthcare providers.",
      technologies: ["React Native", "Firebase", "Express", "Socket.io"],
      image: "/project-2.svg" // Placeholder - will create this later
    },
    {
      title: "Real Estate Platform",
      description: "Web platform for property listings with virtual tours, mortgage calculator, and agent communication.",
      technologies: ["React", "Three.js", "Node.js", "PostgreSQL"],
      image: "/project-3.svg" // Placeholder - will create this later
    },
    {
      title: "Educational Dashboard",
      description: "Interactive learning platform with progress tracking, quiz system, and personalized learning paths.",
      technologies: ["Vue.js", "Django", "Python", "D3.js"],
      image: "/project-4.svg" // Placeholder - will create this later
    }
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <Navbar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
