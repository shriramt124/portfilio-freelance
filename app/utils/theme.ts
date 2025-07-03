/**
 * Theme utilities for consistent styling
 */

/**
 * Theme configuration
 */
export const themeConfig = {
  colors: {
    primary: '#4f46e5', // Indigo
    secondary: '#f3f4f6', // Light gray
    accent: '#8b5cf6', // Purple
    muted: '#f3f4f6', // Light gray
    background: '#ffffff', // White
    foreground: '#171717', // Near black
    card: '#ffffff', // White
    border: '#e5e7eb', // Light gray
  },
  fonts: {
    sans: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },
  spacing: {
    section: {
      paddingY: 'py-20 md:py-32',
    },
    container: {
      padding: 'px-4',
    },
  },
  borderRadius: {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
  },
};

/**
 * Get CSS variable value
 * @param variableName CSS variable name
 * @returns CSS variable value
 */
export function getCssVariable(variableName: string): string {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}

/**
 * Set CSS variable value
 * @param variableName CSS variable name
 * @param value Value to set
 */
export function setCssVariable(variableName: string, value: string): void {
  if (typeof window === 'undefined') return;
  document.documentElement.style.setProperty(variableName, value);
}

/**
 * Get theme color by name
 * @param colorName Color name from theme
 * @returns Color value
 */
export function getThemeColor(colorName: keyof typeof themeConfig.colors): string {
  return themeConfig.colors[colorName];
}