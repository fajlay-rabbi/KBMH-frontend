/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient-orange-blue': 'linear-gradient(90deg, #FFB223 0%, #2AA9FF 100%)',
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        muted: "var(--color-mute)",
        secondaryBg: "var(--color-background)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
        archivo: ["var(--font-archivo)", ...fontFamily.sans],
        alinur: ["var(--font-alinur)", ...fontFamily.sans],
      },
      screens: {
        xxxs:"280px",
        xxs: '320px',
        xs: '420px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1460px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
};
