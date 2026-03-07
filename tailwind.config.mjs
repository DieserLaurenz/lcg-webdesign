/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ['"Segoe UI"', "Tahoma", "Geneva", "Verdana", "sans-serif"],
      serif: ["Georgia", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
