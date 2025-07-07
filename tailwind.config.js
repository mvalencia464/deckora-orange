/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    // Ensure responsive grid classes are never purged
    'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6',
    'md:grid-cols-1', 'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4', 'md:grid-cols-5', 'md:grid-cols-6',
    'lg:grid-cols-1', 'lg:grid-cols-2', 'lg:grid-cols-3', 'lg:grid-cols-4', 'lg:grid-cols-5', 'lg:grid-cols-6',
    'xl:grid-cols-1', 'xl:grid-cols-2', 'xl:grid-cols-3', 'xl:grid-cols-4', 'xl:grid-cols-5', 'xl:grid-cols-6',
    // Ensure responsive flex classes are never purged
    'flex-col', 'flex-row', 'md:flex-col', 'md:flex-row', 'lg:flex-col', 'lg:flex-row',
    // Ensure responsive display classes are never purged
    'block', 'hidden', 'md:block', 'md:hidden', 'lg:block', 'lg:hidden',
    // Ensure responsive spacing classes are never purged
    'space-x-4', 'space-x-6', 'space-x-8', 'space-y-4', 'space-y-6', 'space-y-8',
    'md:space-x-4', 'md:space-x-6', 'md:space-x-8', 'md:space-y-4', 'md:space-y-6', 'md:space-y-8',
    'lg:space-x-4', 'lg:space-x-6', 'lg:space-x-8', 'lg:space-y-4', 'lg:space-y-6', 'lg:space-y-8',
    // Ensure custom color classes are never purged
    'bg-primary-50', 'bg-primary-100', 'bg-primary-200', 'bg-primary-300', 'bg-primary-400', 'bg-primary-500', 'bg-primary-600', 'bg-primary-700', 'bg-primary-800', 'bg-primary-900',
    'text-primary-50', 'text-primary-100', 'text-primary-200', 'text-primary-300', 'text-primary-400', 'text-primary-500', 'text-primary-600', 'text-primary-700', 'text-primary-800', 'text-primary-900',
    'border-primary-50', 'border-primary-100', 'border-primary-200', 'border-primary-300', 'border-primary-400', 'border-primary-500', 'border-primary-600', 'border-primary-700', 'border-primary-800', 'border-primary-900',
    'hover:bg-primary-50', 'hover:bg-primary-100', 'hover:bg-primary-200', 'hover:bg-primary-300', 'hover:bg-primary-400', 'hover:bg-primary-500', 'hover:bg-primary-600', 'hover:bg-primary-700', 'hover:bg-primary-800', 'hover:bg-primary-900',
    'hover:text-primary-50', 'hover:text-primary-100', 'hover:text-primary-200', 'hover:text-primary-300', 'hover:text-primary-400', 'hover:text-primary-500', 'hover:text-primary-600', 'hover:text-primary-700', 'hover:text-primary-800', 'hover:text-primary-900',
    'focus:border-primary-500', 'focus:ring-primary-500', 'ring-primary-500',
    'bg-secondary-50', 'bg-secondary-100', 'bg-secondary-200', 'bg-secondary-300', 'bg-secondary-400', 'bg-secondary-500', 'bg-secondary-600', 'bg-secondary-700', 'bg-secondary-800', 'bg-secondary-900',
    'text-secondary-50', 'text-secondary-100', 'text-secondary-200', 'text-secondary-300', 'text-secondary-400', 'text-secondary-500', 'text-secondary-600', 'text-secondary-700', 'text-secondary-800', 'text-secondary-900',
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      // Custom Color System - Easy to swap for different projects
      colors: {
        // Primary Brand Color (Cyan for Professional/Modern)
        // Change these values to switch the entire site's primary color
        primary: {
          50: '#ecfeff',   // Very light cyan
          100: '#cffafe',  // Light cyan
          200: '#a5f3fc',  // Lighter cyan
          300: '#67e8f9',  // Light-medium cyan
          400: '#22d3ee',  // Medium cyan
          500: '#06b6d4',  // Base cyan (cyan-500)
          600: '#0891b2',  // Dark cyan (cyan-600) - Main brand color
          700: '#0e7490',  // Darker cyan (cyan-700)
          800: '#155e75',  // Very dark cyan
          900: '#164e63',  // Darkest cyan
        },
        // Secondary Color (Lime for accents)
        // Used for secondary buttons, links, and accents
        secondary: {
          50: '#f7fee7',   // Very light lime
          100: '#ecfccb',  // Light lime
          200: '#d9f99d',  // Lighter lime
          300: '#bef264',  // Light-medium lime
          400: '#a3e635',  // Medium lime
          500: '#84cc16',  // Base lime (lime-500)
          600: '#65a30d',  // Dark lime (lime-600)
          700: '#4d7c0f',  // Darker lime (lime-700)
          800: '#365314',  // Very dark lime
          900: '#1a2e05',  // Darkest lime
        },
        // Neutral colors (grays) - these typically stay the same across projects
        neutral: {
          50: '#f9fafb',   // Very light gray
          100: '#f3f4f6',  // Light gray
          200: '#e5e7eb',  // Lighter gray
          300: '#d1d5db',  // Light-medium gray
          400: '#9ca3af',  // Medium gray
          500: '#6b7280',  // Base gray
          600: '#4b5563',  // Dark gray
          700: '#374151',  // Darker gray
          800: '#1f2937',  // Very dark gray
          900: '#111827',  // Darkest gray
        },
        // Success, Warning, Error colors - typically consistent across projects
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
      },
      // Ensure proper responsive behavior
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
  // Ensure proper CSS generation
  corePlugins: {
    preflight: true,
  },
};
