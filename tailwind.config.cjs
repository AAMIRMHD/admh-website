module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#f0ece4",
        navy: "#0f172a",
        gold: "#d4af37",
        goldSoft: "rgba(212, 175, 55, 0.22)",
        mist: "rgba(10, 15, 25, 0.08)",
        ink: "#111827",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 36px rgba(212, 175, 55, 0.22)",
        panel: "0 26px 60px rgba(17, 24, 39, 0.16)",
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
