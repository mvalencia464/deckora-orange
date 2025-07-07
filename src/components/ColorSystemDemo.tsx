import React from 'react';
import { colors, colorCombinations, gradients } from '../utils/colors';

/**
 * Color System Demo Component
 * 
 * This component demonstrates how to use the new semantic color system.
 * It shows various color combinations and how they automatically adapt
 * when you change the primary/secondary colors in tailwind.config.js
 */
const ColorSystemDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${colors.neutral.text.darkest}`}>
            Color System Demo
          </h1>
          <p className={`text-lg ${colors.neutral.text.main}`}>
            Demonstrating the semantic color system - change colors in tailwind.config.js to see everything update!
          </p>
        </div>

        {/* Primary Colors Section */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold mb-6 ${colors.neutral.text.darkest}`}>
            Primary Colors (Brand)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <div className={`${colors.primary.bg.lightest} p-4 rounded-lg text-center`}>
              <div className="text-sm font-medium text-neutral-700">primary-50</div>
              <div className="text-xs text-neutral-500">Lightest</div>
            </div>
            <div className={`${colors.primary.bg.lighter} p-4 rounded-lg text-center`}>
              <div className="text-sm font-medium text-neutral-700">primary-100</div>
              <div className="text-xs text-neutral-500">Lighter</div>
            </div>
            <div className={`${colors.primary.bg.light} p-4 rounded-lg text-center`}>
              <div className="text-sm font-medium text-neutral-700">primary-200</div>
              <div className="text-xs text-neutral-500">Light</div>
            </div>
            <div className={`${colors.primary.bg.main} p-4 rounded-lg text-center`}>
              <div className="text-sm font-medium text-white">primary-600</div>
              <div className="text-xs text-primary-100">Main Brand</div>
            </div>
            <div className={`${colors.primary.bg.dark} p-4 rounded-lg text-center`}>
              <div className="text-sm font-medium text-white">primary-700</div>
              <div className="text-xs text-primary-100">Dark</div>
            </div>
          </div>

          {/* Primary Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className={`px-6 py-3 rounded-lg font-semibold transition-colors ${colorCombinations.primaryButton}`}>
              Primary Button
            </button>
            <button className={`px-6 py-3 rounded-lg font-semibold transition-colors ${colorCombinations.secondaryButton}`}>
              Secondary Button
            </button>
          </div>
        </div>

        {/* Secondary Colors Section */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold mb-6 ${colors.neutral.text.darkest}`}>
            Secondary Colors (Accents)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <div className={`${colors.secondary.bg.lightest} p-4 rounded-lg text-center`}>
              <div className="text-sm font-medium text-neutral-700">secondary-50</div>
              <div className="text-xs text-neutral-500">Lightest</div>
            </div>
            <div className={`${colors.secondary.bg.lighter} p-4 rounded-lg text-center`}>
              <div className="text-sm font-medium text-neutral-700">secondary-100</div>
              <div className="text-xs text-neutral-500">Lighter</div>
            </div>
            <div className={`${colors.secondary.bg.light} p-4 rounded-lg text-center`}>
              <div className="text-sm font-medium text-neutral-700">secondary-200</div>
              <div className="text-xs text-neutral-500">Light</div>
            </div>
            <div className={`${colors.secondary.bg.main} p-4 rounded-lg text-center`}>
              <div className="text-sm font-medium text-white">secondary-600</div>
              <div className="text-xs text-secondary-100">Main</div>
            </div>
            <div className={`${colors.secondary.bg.dark} p-4 rounded-lg text-center`}>
              <div className="text-sm font-medium text-white">secondary-700</div>
              <div className="text-xs text-secondary-100">Dark</div>
            </div>
          </div>
        </div>

        {/* Gradients Section */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold mb-6 ${colors.neutral.text.darkest}`}>
            Gradient Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`${gradients.primary} p-8 rounded-xl text-white text-center`}>
              <h3 className="text-xl font-bold mb-2">Primary Gradient</h3>
              <p className="text-primary-100">Perfect for hero sections and CTAs</p>
            </div>
            <div className={`${gradients.secondary} p-8 rounded-xl text-white text-center`}>
              <h3 className="text-xl font-bold mb-2">Secondary Gradient</h3>
              <p className="text-secondary-100">Great for accents and highlights</p>
            </div>
          </div>
        </div>

        {/* Form Elements */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold mb-6 ${colors.neutral.text.darkest}`}>
            Form Elements
          </h2>
          <div className={`${colorCombinations.card} p-6 rounded-xl border`}>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${colors.neutral.text.dark}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  className={`w-full px-4 py-2 border-2 rounded-lg transition-colors ${colorCombinations.input}`}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${colors.neutral.text.dark}`}>
                  Message
                </label>
                <textarea
                  className={`w-full px-4 py-2 border-2 rounded-lg transition-colors ${colorCombinations.input}`}
                  rows={4}
                  placeholder="Enter your message"
                />
              </div>
              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${colorCombinations.primaryButton}`}>
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Text Hierarchy */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold mb-6 ${colors.neutral.text.darkest}`}>
            Text Hierarchy
          </h2>
          <div className="space-y-4">
            <h1 className={`text-4xl font-bold ${colorCombinations.heading}`}>
              Main Heading (H1)
            </h1>
            <h2 className={`text-3xl font-bold ${colorCombinations.heading}`}>
              Section Heading (H2)
            </h2>
            <h3 className={`text-2xl font-semibold ${colorCombinations.heading}`}>
              Subsection Heading (H3)
            </h3>
            <p className={`text-lg ${colorCombinations.body}`}>
              This is body text using the semantic color system. It automatically adapts to your brand colors.
            </p>
            <p className={`text-sm ${colorCombinations.muted}`}>
              This is muted text for less important information.
            </p>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className={`${colors.secondary.bg.lightest} border-l-4 ${colors.secondary.border.main} p-6 rounded-r-lg`}>
          <h3 className={`text-lg font-semibold mb-2 ${colors.secondary.text.dark}`}>
            🎨 How to Change Colors
          </h3>
          <p className={`${colors.neutral.text.main} mb-4`}>
            To change the entire site's color scheme:
          </p>
          <ol className={`list-decimal list-inside space-y-2 ${colors.neutral.text.main}`}>
            <li>Open <code className="bg-neutral-200 px-2 py-1 rounded">tailwind.config.js</code></li>
            <li>Update the <code className="bg-neutral-200 px-2 py-1 rounded">primary</code> and <code className="bg-neutral-200 px-2 py-1 rounded">secondary</code> color objects</li>
            <li>Restart your dev server</li>
            <li>Watch everything update automatically! 🎉</li>
          </ol>
        </div>

      </div>
    </div>
  );
};

export default ColorSystemDemo;
