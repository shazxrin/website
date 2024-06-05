import type { Config } from "tailwindcss"

export default {
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Satoshi", "san-serif"]
        },
        extend: {},
    },
    plugins: [],
} satisfies Config
