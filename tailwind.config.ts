import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellowBlast: {
          300: "#FCFC03",
          100: "#FCFDC7",
        },
        camoBlast: {
          300: "#9BA885",
          400: "#75835D",
          500: "#404833",
          700: "#11140C",
        },
        limeBlast: {
          300: "#98DD28",
        },
        marsBlast: {
          300: "#ED4E1D",
        },
      },
      gradients: {
        darkBlast: ["#11140C", "#75835D"], // DARK GRADIENT
        lightBlast: ["#75835D", "#C3D4A5"], // LIGHT GRADIENT
      },
    },
  },
  plugins: [],
};

export default config;
