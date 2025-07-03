/**
 * Application constants
 */

// Navigation items
export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

// Social media links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com',
  instagram: 'https://instagram.com',
};

// Contact information
export const CONTACT_INFO = {
  email: 'contact@yourcompany.com',
  phone: '+1 (123) 456-7890',
  address: '123 Main Street, City, Country',
};

// Form validation messages
export const VALIDATION_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  minLength: (length: number) => `Must be at least ${length} characters`,
  maxLength: (length: number) => `Must be less than ${length} characters`,
};

// API endpoints
export const API_ENDPOINTS = {
  contact: '/api/contact',
};

// Animation durations
export const ANIMATION = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
  },
  delay: {
    stagger: 0.1,
    initial: 0.2,
  },
};