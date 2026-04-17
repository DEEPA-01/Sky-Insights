// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/app/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//    extend: {},
//   },
//   plugins: [],
// };

// export default config;




import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // ✅ Enables dark mode toggle via class
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 💙 Sky Insights Brand Palette
        primary: "#0072BC",
        secondary: "#004C97",
        accent: "#00AEEF",
        navy: "#002E6E",
        lightBlue: "#CBE4F9",
        softGray: "#F7F9FC",
      },
      backgroundImage: {
        "sky-gradient":
          "linear-gradient(to right, #004C97, #0072BC, #00AEEF)",
        "sky-light-gradient":
          "linear-gradient(to bottom, #CBE4F9, #E6EEFA, #FFFFFF)",
      },
    },
  },
  plugins: [],
};

export default config;
