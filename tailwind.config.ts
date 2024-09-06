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
        primary: {
          400: "#6C5AE0",
          500: "#4839A3",
          900: "#100C27"
        },
        highlight: {
          400: "#F4CA6D",
          500: "#F2BF4E"
        },
        gray: {
          100: "#F1F3F5",
          300: "#CFD3D8",
          600: "#97A1AC",
          700: "#7E8A98",
          900: "#212429"
        },
        white: '#ffffff',
      },
      fontFamily: {
        NunitoSans: ["Nunito Sans", "sans-serif"],
        DarkerGrotesque: ["Darker Grotesque", "sans-serif"],
      },
      fontSize: {
        "heading-lg": ["56px", { lineHeight: "1" }],
        "heading-md": ["40px", { lineHeight: "1" }],
        "heading-sm": ["32px", { lineHeight: "1.1" }],
        "heading-xs": ["24px", { lineHeight: "1.1" }],

        "subtitle-sm": ["20px", { lineHeight: "1.4" }],
        "subtitle-xs": ["14px", { lineHeight: "1.2" }],

        "body-lg": ["20px", { lineHeight: "1.5" }],
        "body-md": ["16px", { lineHeight: "1.5" }],
        "body-sm": ["14px", { lineHeight: "1.5" }],
      }
    },
  },
  plugins: [],
};
export default config;
