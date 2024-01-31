import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi-Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config

