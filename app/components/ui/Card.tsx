'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '@/app/utils/animations';

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  animated?: boolean;
}

/**
 * Reusable Card component with consistent styling
 */
const Card = ({ 
  children, 
  className = '', 
  href, 
  onClick,
  animated = true
}: CardProps) => {
  const cardClasses = `bg-card rounded-lg shadow-sm border border-border p-6 transition-all hover:shadow-md ${className}`;
  
  const cardContent = (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  );

  // Wrap with motion if animated
  if (animated) {
    return (
      <motion.div variants={itemVariants}>
        {href ? (
          <a href={href} className="block">
            {cardContent}
          </a>
        ) : (
          cardContent
        )}
      </motion.div>
    );
  }

  // Non-animated version
  return href ? (
    <a href={href} className="block">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};

export default Card;