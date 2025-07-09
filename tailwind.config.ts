import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sandy-beige': '#EADFC9',
        'ocean-mist': '#A2B2C9',
        'deep-sea-green': '#4A6C6F',
        'sunset-orange': '#F4A261',
        'coastal-forest': '#264653',
      },
    },
  },
  plugins: [],
};
export default config;
