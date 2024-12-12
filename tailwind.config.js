/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      red: "hsl(10, 79%, 65%)",
      blue: "hsl(186, 34%, 60%)",
      brown: "hsl(25, 47%, 15%)",
      gray: "hsl(28, 10%, 53%)",
      "biege-100": "hsl(33, 100%, 98%)",
      "biege-200": "hsl(27, 66%, 92%)",
    },
    fontFamily: {
      body: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
