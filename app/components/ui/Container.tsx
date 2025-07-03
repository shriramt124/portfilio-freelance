'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from '@/app/utils/animations';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  animated?: boolean;
}

/**
 * Reusable Container component with consistent styling and animation
 */
const Container = ({ 
  children, 
  className = '',
  animated = true
}: ContainerProps) => {
  const containerClasses = `container mx-auto px-4 ${className}`;
  
  if (animated) {
    return (
      <motion.div 
        className={containerClasses}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.div>
    );
  }
  
  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

export default Container;