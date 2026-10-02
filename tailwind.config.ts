import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0b",
        marble: "#f7f6f2",
        cream: "#f9f7f2",
        gold: {
          DEFAULT: "#d9bd77",
          accessible: "#c9a961",
        },
        mute: "#6f6b64",
      },
      fontFamily: {
        heading: ["var(--font-display)", "serif"],
        body: ["var(--font-sans)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      maxWidth: {
        site: "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
