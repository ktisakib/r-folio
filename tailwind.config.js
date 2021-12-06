module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero.png')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        16: "2rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundSize: ["hover", "focus"],
      backgroundImage: ["hover", "focus"],
    },
  },
  plugins: [],
};
