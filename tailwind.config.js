/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        textLight: "#ffffff",
        textDark: "#000000",
        primary: "#007bff",
        dark: "#0056b3",
        navbarBackground: "#111827",
        bannerBackground: "#d9d9d9",
        mentorBackground: "#d1d5db",
        faqAnswerText: "#6b7280",
        footerBackground: "#e5e7eb",
        officesBackground: "#9ca3af",
        footerText: "#1f2937",
        copyright: "#4b5563",
        default: "#abd40f",
        lightText: "#8e8c8c",
        lightText2: "#929090",
      },
      fontFamily: {
        robotoMono: ["Roboto Mono", "monospace"],
        karmatic: ['"Karmatic Arcade"', "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      screens: {
        "3xl": "1728px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [],
};
