import { extract, screens, fontSize } from 'fluid-tailwind';
import require from 'fluid-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    extract, // Use spread syntax to include Fluid Tailwind classes properly
  ],
  theme: {
    screens,   // Fluid's responsive screens
    fontSize,  // Fluid's font sizes
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Use Montserrat as the default sans-serif font
      },
      fontSize: {
        'xl': ['1.5rem', '2rem'], // Example: Customize font size
        '2xl': ['2rem', '2.5rem'],
      },
    },
  },
  plugins: [
    require('fluid-tailwind'), // Correct plugin registration
  ],
};
