/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      backgroundImage: {
        sleekcustom: "url('/images/showcase/sleekcustom.avif')",
        blockestate: "url('/images/showcase/blockestate.avif')",
        master: "url('/images/showcase/master.avif')",
        vpnwizard: "url('/images/showcase/vpnwizard.avif')",
        fundyourtrading: "url('/images/showcase/fyt.avif')",
        tradebox: "url('/images/showcase/tradebox.avif')",
      },
      fontFamily: {
        satoshi: "satoshi",
        general: "general",
      },
      colors: {
        greyBg: "#1d1f21",
        whiteShade: "#e7e7e7",
        grayShade: "#909090",
        lightGray: "#292b2d",
      },
    },
  },
  plugins: [],
};
