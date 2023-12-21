/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      body: ['"Open Sans"'],
      fontBarlow: ["Barlow", "sans-serif"],
      fontBarlowCondense: ["Barlow Condensed", "sans-serif"],
      fontBelleFair: ["Bellefair", "serif"],
    },

    extend: {},
  },
  plugins: [],
};

//  keyframes: {
//         entrada: {
//           "0%": { transform: "translateX(80%)" },
//           "50%": { transform: "translateX(20%)" },
//         },
//       },
