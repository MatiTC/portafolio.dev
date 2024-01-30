/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: 'class',
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-minmax-300': 'repeat(auto-fill, minmax(300px, 1fr))',
        'auto-fit-300': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
};
