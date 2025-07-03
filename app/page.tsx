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
  const [activeSection, setActiveSection] = useState('hero');
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
      <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-black/10 dark:border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DevTeam</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`${activeSection === 'home' ? 'text-blue-600 dark:text-blue-400' : 'text-foreground'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className={`${activeSection === 'services' ? 'text-blue-600 dark:text-blue-400' : 'text-foreground'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className={`${activeSection === 'portfolio' ? 'text-blue-600 dark:text-blue-400' : 'text-foreground'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('team')} 
              className={`${activeSection === 'team' ? 'text-blue-600 dark:text-blue-400' : 'text-foreground'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`${activeSection === 'contact' ? 'text-blue-600 dark:text-blue-400' : 'text-foreground'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b border-black/10 dark:border-white/10">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className={`${activeSection === 'home' ? 'text-blue-600 dark:text-blue-400' : 'text-foreground'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left py-2`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className={`${activeSection === 'services' ? 'text-blue-600 dark:text-blue-400' : 'text-foreground'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left py-2`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className={`${activeSection === 'portfolio' ? 'text-blue-600 dark:text-blue-400' : 'text-foreground'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left py-2`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('team')} 
                className={`${activeSection === 'team' ? 'text-blue-600 dark:text-blue-400' : 'text-foreground'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left py-2`}
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`${activeSection === 'contact' ? 'text-blue-600 dark:text-blue-400' : 'text-foreground'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left py-2`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Developers</span> for Your Digital Vision
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
              We're a team of passionate developers and designers creating exceptional digital experiences that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="px-6 py-3 border border-black/10 dark:border-white/10 font-medium rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                View Our Work
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="text-8xl">👨‍💻</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 md:px-0 bg-black/[.02] dark:bg-white/[.02]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">We offer a comprehensive range of development and design services to bring your digital ideas to life.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-sm border border-black/5 dark:border-white/5 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">Explore our recent projects and see how we've helped businesses achieve their digital goals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-background rounded-xl overflow-hidden border border-black/5 dark:border-white/5 hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-black/5 dark:bg-white/5 flex items-center justify-center">
                  <div className="text-6xl">{index % 2 === 0 ? '🖥️' : '📱'}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 md:px-0 bg-black/[.02] dark:bg-white/[.02]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">We're a diverse group of passionate individuals dedicated to creating exceptional digital experiences.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-sm border border-black/5 dark:border-white/5 hover:shadow-md transition-shadow text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 mx-auto mb-4 flex items-center justify-center">
                  <div className="text-2xl">{index % 2 === 0 ? '👨‍💻' : '👩‍💻'}</div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
                <p className="text-foreground/70 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">Ready to start your project? Contact us today for a free consultation.</p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-background rounded-xl p-8 shadow-sm border border-black/5 dark:border-white/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Project subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-0 bg-black/[.03] dark:bg-white/[.03] border-t border-black/10 dark:border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DevTeam</span>
              <p className="text-foreground/70 mt-2">Creating exceptional digital experiences.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-black/10 dark:border-white/10 text-center text-foreground/60 text-sm">
            © {new Date().getFullYear()} DevTeam. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
