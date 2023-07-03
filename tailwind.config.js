/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Sthethoscope: "url('/src/assets/Auth/Stethoscope.png')",
        Map: "url('/src/assets/Landing Page/Find Hospital/Map.png')",
        BiggestEclipse:
          "url('/src/assets/Landing Page/How it works/BiggestEclipse.png')",
        BiggerEclipse:
          "url('/src/assets/Landing Page/How it works/BiggerEclipse.png')",
        BigEclipse:
          "url('/src/assets/Landing Page/How it works/BigEclipse.png')",
      },
    },
  },
  plugins: [],
};
