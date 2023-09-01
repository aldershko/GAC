/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        full_15: "115%",
      },
      height: {
        128: "32rem",
        611: "39rem",
      },
      width: {
        128: "32rem",
        611: "39rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        gacRed: "#CC0303",
        ocean: "#EBEFF2",
        softGray: "#F8F9FA",
        stroke: "#DEE3E8",
        stoneGray: "#BDBCBD",
        paraBlue: "#015098",
        divider: "#e8e9eb",
        menuBg: "#FCFBFC",
        keepYellow: "#FEEFC3",
      },
      fontSize: {
        vsm: "0.6rem",
      },
    },
  },
  plugins: [],
};
