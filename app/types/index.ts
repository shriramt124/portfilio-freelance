/**
 * Shared type definitions for the application
 */

// Service type used in ServicesSection
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Project type used in PortfolioSection
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

// TeamMember type used in TeamSection
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

// Contact form data type
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Navigation props
export interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  scrollToSection: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}