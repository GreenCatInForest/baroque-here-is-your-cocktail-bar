/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" /* src folder */,
    "node_modules/flowbite-react/lib/esm/**/*.js" /* flowbite-react library */,
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        banner: "url('/src/assets/banner.jpg')",
      }),
      backgroundSize: {
        "100%": "100%",
        cover: "cover",
        contain: "contain",
      },
      backgroundPosition: {
        "left-top": "left top",
        center: "center",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        josefinSansUni: ["Josefin Sans", "sans-serif"],
        firaSans: ["Fira Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        notoSans: ["Noto Sans", "sans-serif"],
        ubuntuMono: ["Ubuntu Mono", "monospace"],
        gwendolyne: ["Gwendolyn", "sans-serif"],
        redressed: ["Redressed", "cursive"],
        fondamento: ["Fondamento", "cursive"],
        satisfy: ["Satisfy", "cursive"],
        kaushanScript: ["Kaushan Script", "cursive"],
        macondo: ["Macondo", "cursive"],
      },

      colors: {
        premiumPink: "#e6b6be",
        sacura: "#dfb1b6",
        deathworldForest: "#5c6730",
        vermillionOrange: "#f9633b",
        soSari: "#006f47",
        strawberryFreeze: "#c677a8",
        hisuiKingfisher: "#38b48b",
        vermillion: "#da3b1f",
        incandescentVermillion: "#fe232a",
        incandescentVermillion1: "#fe393f",
        incandescentVermillion2: "#fe4f55",
        incandescentVermillion3: "#fe656a",
        incandescentVermillion4: "#fe7b7f",
        incandescentVermillion5: "#ff9195",
        incandescentVermillion6: "#ffa7aa",
        incandescentVermillion7: "#ffbdbf",
        incandescentVermillion8: "#ffd3d4",
        incandescentVermillion9: "#ffe9ea",
        desertSand: "#D9AE94",
        beaver: "#997B66",
        mossGreen: "#9B9B7A",
        peachYellow: "#F1DCA7",
        sunglow: "#FFCB69",
        earthYellow: "#E8AC65",
        test: "#84a59d",
      },
      animation: {
        shimmer: "scroll 5s linear infinite",
        scale: "scale 50s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scale: {
          "0%": {
            "background-size": "100%",
            "background-position": "left top",
          },
          "25%": {
            "background-size": "110%",
            "background-position": "right top",
          },
          "50%": {
            "background-size": "120%",
            "background-position": "right bottom",
          },
          "75%": {
            "background-size": "110%",
            "background-position": "left bottom",
          },
          "100%": {
            "background-size": "100%",
            "background-position": "left top",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
