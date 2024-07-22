/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,tsx,jsx,mdx}"
  ],
  theme: {
    extend: {
      extend: {
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
    themes: ["light", "dark"]
  },
  variants: {
    scrollbar: ["dark", "rounded"]
  }

}

