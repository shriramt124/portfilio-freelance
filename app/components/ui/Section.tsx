'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/utils/animations';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  background?: 'default' | 'muted' | 'primary';
}

/**
 * Reusable Section component with consistent styling and animation
 */
const Section = ({ id, className = '', children, background = 'default' }: SectionProps) => {
  const getBgClass = () => {
    switch (background) {
      case 'muted':
        return 'bg-muted/30';
      case 'primary':
        return 'bg-primary/5';
      default:
        return '';
    }
  };

  return (
    <section
      id={id}
      className={`py-20 md:py-32 ${getBgClass()} ${className}`}
    >
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;