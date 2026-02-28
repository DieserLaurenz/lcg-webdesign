/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./App.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans-local)"],
        serif: ["var(--font-serif-local)"],
      },
    },
  },
  plugins: [],
};
