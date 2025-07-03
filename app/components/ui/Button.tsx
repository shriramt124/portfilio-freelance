'use client';

import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  onClick?: () => void;
}

/**
 * Reusable Button component with consistent styling
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  className = '',
  onClick 
}: ButtonProps) => {
  // Determine variant styling
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary hover:bg-primary/90 text-white';
      case 'secondary':
        return 'bg-secondary hover:bg-secondary/90 text-white';
      case 'outline':
        return 'border border-border hover:border-primary hover:text-primary';
      default:
        return 'bg-primary hover:bg-primary/90 text-white';
    }
  };

  // Determine size styling
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-8 py-3';
      case 'lg':
        return 'px-10 py-4 text-lg';
      default:
        return 'px-8 py-3';
    }
  };

  const buttonClasses = `${getVariantClasses()} ${getSizeClasses()} rounded-md font-medium transition-colors ${className}`;

  // Render as anchor if href is provided, otherwise as button
  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;