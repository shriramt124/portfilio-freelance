'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to track scroll position and determine active section
 * @param sectionIds Array of section IDs to track
 * @param offset Offset value for determining when a section is active
 * @returns Object containing active section ID and scroll position
 */
const useScrollPosition = (sectionIds: string[], offset = 100) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Determine which section is currently in view
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - offset;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set initial state
    handleScroll();
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition, sectionIds, offset]);

  // Function to scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return { scrollPosition, activeSection, scrollToSection };
};

export default useScrollPosition;