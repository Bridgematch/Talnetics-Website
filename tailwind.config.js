/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,tsx,jsx,mdx}"
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          lightText: '#1f2937', // Dark gray for light theme
          darkText: '#e5e7eb', // Light gray for dark theme
        },
        zIndex: {
          '60': '60',
          '70': '70',
          '80': '80',
          '90': '90',
          '100': '100',
          '110': '110',
          '1000':'1000',
        }
      }
    },
  },
  plugins: [
    require('daisyui'), 
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
  daisyui: {
    themes: [ {
      light: {
        "primary": "#34d399",
        "secondary": "#3b82f6",
        "accent": "#8b5cf6",
        "neutral": "#374151",
        "base-100": "#ffffff",
        "info": "#60a5fa",
        "success": "#34d399",
        "warning": "#fbbf24",
        "error": "#f87171",
        "base-content": "#1f2937", // Text color for light theme
      },
    },
    {
      dark: {
        "primary": "#34d399",
        "secondary": "#3b82f6",
        "accent": "#8b5cf6",
        "neutral": "#374151",
        "base-100": "#1f2937",
        "info": "#60a5fa",
        "success": "#34d399",
        "warning": "#fbbf24",
        "error": "#f87171",
        "base-content": "#e5e7eb", // Text color for dark theme
      },
    },
  ]
  },
  variants: {
    scrollbar: ["dark", "rounded"]
  }

}

