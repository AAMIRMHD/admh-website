module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#0b0d12",
        navy: "#0f172a",
        gold: "#d4af37",
        goldSoft: "rgba(212, 175, 55, 0.35)",
        mist: "rgba(10, 15, 25, 0.12)",
        ink: "#f8f5ee",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(212, 175, 55, 0.25)",
        panel: "0 26px 60px rgba(5, 7, 12, 0.55)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top, rgba(212, 175, 55, 0.18), transparent 55%), radial-gradient(circle at 10% 10%, rgba(15, 23, 42, 0.24), transparent 65%)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 18s linear infinite",
      },
    },
  },
  plugins: [],
};
