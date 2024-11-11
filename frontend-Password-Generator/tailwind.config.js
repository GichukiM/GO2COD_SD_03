import { extract, screens, fontSize } from 'fluid-tailwind';
import require from 'fluid-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    extract,  // This is how you integrate the Fluid Tailwind classes
  ],
  theme: {
    screens,  // Fluid's responsive screens
    fontSize, // Fluid's font sizes
    extend: {},
  },
  plugins: [
    require('fluid-tailwind'), // This adds Fluid classes to Tailwind
  ],
}
