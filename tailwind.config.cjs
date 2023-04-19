module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        navbarBg: "#060225",
        primaryPrimary100: "#7c5cfc",
        primaryPrimary200: "#5e43d8",
        primaryPrimary300: "#432eb5",
        primaryPrimary400: "#2d1d92",
        primaryPrimary500: "#120956",
        secondarySecondary100: "#e7ebf3",
        secondarySecondary200: "#eaf5ff",
        secondarySecondary300: "#377de7",
        secondarySecondary400: "#0049b7",
        secondarySecondary500: "#00398f",
      }
    },
  },
};
