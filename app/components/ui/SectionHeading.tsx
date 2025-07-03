'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/app/utils/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

/**
 * Reusable component for section headings with consistent styling
 */
const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true, 
  className = '' 
}: SectionHeadingProps) => {
  const alignment = centered ? 'text-center mx-auto' : '';
  
  return (
    <div className={`max-w-3xl mb-16 ${alignment} ${className}`}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        variants={fadeInUp}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-muted-foreground text-lg"
          variants={fadeInUp}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;