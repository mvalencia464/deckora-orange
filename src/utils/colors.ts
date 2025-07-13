/**
 * Color System Utilities
 * 
 * This file provides easy-to-use color constants and utilities for the project.
 * All colors are based on the semantic color system defined in tailwind.config.js
 * 
 * Usage:
 * import { colors, getColorClass } from '@/utils/colors';
 * 
 * // Use predefined color classes
 * <div className={colors.primary.bg.main}>Primary background</div>
 * 
 * // Or use the utility function
 * <div className={getColorClass('primary', 'bg', 600)}>Custom shade</div>
 */

// Color class generators for consistent usage
export const colors = {
  // Primary brand colors (currently orange for professional/construction)
  primary: {
    bg: {
      lightest: 'bg-primary-50',
      lighter: 'bg-primary-100',
      light: 'bg-primary-200',
      main: 'bg-primary-600',      // Main brand color
      dark: 'bg-primary-700',      // Hover states
      darker: 'bg-primary-800',
      darkest: 'bg-primary-900',
    },
    text: {
      lightest: 'text-primary-50',
      lighter: 'text-primary-100',
      light: 'text-primary-200',
      main: 'text-primary-600',
      dark: 'text-primary-700',
      darker: 'text-primary-800',
      darkest: 'text-primary-900',
    },
    border: {
      lightest: 'border-primary-50',
      lighter: 'border-primary-100',
      light: 'border-primary-200',
      main: 'border-primary-500',
      dark: 'border-primary-600',
      darker: 'border-primary-700',
      darkest: 'border-primary-800',
    },
    hover: {
      bg: {
        main: 'hover:bg-primary-600',
        dark: 'hover:bg-primary-700',
      },
      text: {
        main: 'hover:text-primary-600',
        dark: 'hover:text-primary-700',
      },
    },
    focus: {
      border: 'focus:border-primary-500',
      ring: 'focus:ring-primary-500',
    },
  },

  // Secondary colors (currently slate for accents)
  secondary: {
    bg: {
      lightest: 'bg-secondary-50',
      lighter: 'bg-secondary-100',
      light: 'bg-secondary-200',
      main: 'bg-secondary-600',
      dark: 'bg-secondary-700',
      darker: 'bg-secondary-800',
      darkest: 'bg-secondary-900',
    },
    text: {
      lightest: 'text-secondary-50',
      lighter: 'text-secondary-100',
      light: 'text-secondary-200',
      main: 'text-secondary-600',
      dark: 'text-secondary-700',
      darker: 'text-secondary-800',
      darkest: 'text-secondary-900',
    },
    border: {
      lightest: 'border-secondary-50',
      lighter: 'border-secondary-100',
      light: 'border-secondary-200',
      main: 'border-secondary-500',
      dark: 'border-secondary-600',
      darker: 'border-secondary-700',
      darkest: 'border-secondary-800',
    },
    hover: {
      bg: {
        main: 'hover:bg-secondary-600',
        dark: 'hover:bg-secondary-700',
      },
      text: {
        main: 'hover:text-secondary-600',
        dark: 'hover:text-secondary-700',
      },
    },
  },

  // Neutral colors (grays - consistent across projects)
  neutral: {
    bg: {
      lightest: 'bg-neutral-50',
      lighter: 'bg-neutral-100',
      light: 'bg-neutral-200',
      main: 'bg-neutral-500',
      dark: 'bg-neutral-700',
      darker: 'bg-neutral-800',
      darkest: 'bg-neutral-900',
    },
    text: {
      lightest: 'text-neutral-50',
      lighter: 'text-neutral-100',
      light: 'text-neutral-400',
      main: 'text-neutral-600',    // Body text
      dark: 'text-neutral-700',
      darker: 'text-neutral-800',
      darkest: 'text-neutral-900', // Headings
    },
    border: {
      lightest: 'border-neutral-50',
      lighter: 'border-neutral-100',
      light: 'border-neutral-200',
      main: 'border-neutral-300',   // Default borders
      dark: 'border-neutral-400',
      darker: 'border-neutral-500',
      darkest: 'border-neutral-600',
    },
  },

  // Utility colors
  success: {
    bg: {
      light: 'bg-success-50',
      main: 'bg-success-500',
      dark: 'bg-success-600',
    },
    text: {
      light: 'text-success-50',
      main: 'text-success-600',
      dark: 'text-success-700',
    },
  },
  warning: {
    bg: {
      light: 'bg-warning-50',
      main: 'bg-warning-400',
      dark: 'bg-warning-500',
    },
    text: {
      main: 'text-warning-600',
      dark: 'text-warning-700',
    },
  },
  error: {
    bg: {
      light: 'bg-error-50',
      main: 'bg-error-500',
      dark: 'bg-error-600',
    },
    text: {
      main: 'text-error-600',
      dark: 'text-error-700',
    },
  },
} as const;

// Utility function to generate color classes dynamically
export const getColorClass = (
  colorType: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'error',
  property: 'bg' | 'text' | 'border',
  shade: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
): string => {
  return `${property}-${colorType}-${shade}`;
};

// Common color combinations for components
export const colorCombinations = {
  // Primary button
  primaryButton: `${colors.primary.bg.main} ${colors.primary.hover.bg.dark} text-white`,
  
  // Secondary button
  secondaryButton: `border-2 ${colors.secondary.border.main} ${colors.secondary.text.main} ${colors.secondary.hover.bg.main} hover:text-white`,
  
  // Card
  card: `${colors.neutral.bg.lightest} ${colors.neutral.border.main}`,
  
  // Input field
  input: `${colors.neutral.border.main} ${colors.neutral.text.dark} ${colors.primary.focus.border} ${colors.primary.focus.ring}`,
  
  // Navigation link (scrolled)
  navLinkScrolled: `${colors.neutral.text.dark} ${colors.primary.hover.text.main}`,
  
  // Navigation link (transparent)
  navLinkTransparent: `text-white ${colors.primary.hover.text.light}`,
  
  // Heading text
  heading: colors.neutral.text.darkest,
  
  // Body text
  body: colors.neutral.text.main,
  
  // Muted text
  muted: colors.neutral.text.light,
} as const;

// Gradient combinations
export const gradients = {
  primary: 'bg-gradient-to-r from-primary-600 to-primary-700',
  primaryLight: 'bg-gradient-to-r from-primary-500 to-primary-600',
  secondary: 'bg-gradient-to-r from-secondary-600 to-secondary-700',
  hero: 'bg-gradient-to-br from-primary-600/70 to-neutral-900',
} as const;

// Export individual color values for use in custom CSS or JavaScript
export const colorValues = {
  primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c', // Main brand color (orange)
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569', // Slate
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
} as const;

export default colors;
