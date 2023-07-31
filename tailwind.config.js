/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "winter"],
    // myTheme: {
    //   primary: "#062b50",
    //   secondary: "#b3b3b3",
    //   accent: "#4ca2f9",
    //   neutral: "#062b50",
    //   "base-100": "#f3f5f6",
    //   info: "#f3a447",
    //   success: "#36d399",
    //   warning: "#fbbd23",
    //   error: "#f87272",
    // },
  },
  plugins: [require("daisyui")],
};
