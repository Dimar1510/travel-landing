/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('./src/assets/images/banner.jpeg')",
        cloud: "url('./src/assets/images/cloud.png')",
        mountain: "url('./src/assets/images/mountain.png')",
        blogBg:
          "linear-gradient(#090c1ad8, #090c1ad8), url('./src/assets/images/mountain5.png')",
        teamBg: "url('./src/assets/images/teamBg.jpg')",
      },

      gridTemplateColumns: {
        team: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
