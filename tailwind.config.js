// const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      // },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blueGray: colors.blueGray,
        yellow: "#ca8a04",
        primary: {
          light: "#f7f7f7",
          lightP2: "#f9f9ff",
          lightP3: "#f7f9fc",
          DEFAULT: "#49a521",
          50: "#d5e6cf",
          100: "#6ad83b",
          200: "#5cd02a",
          300: "#52ba25",
          400: "#49a521",
          500: "#40901d",
          600: "#367b19",
          700: "#2d6514",
        },
        secondary: {
          DEFAULT: "#075e40",
          light: "#effef9",
          50: "#cafbeb",
          100: "#a5f9dc",
          200: "#5cf4c0",
          300: "#37f1b2",
          400: "#0ecc8b",
          500: "#0ca772",
          600: "#098259",
          700: "#075e40",
          800: "#043927",
          900: "#03271a",
        },
        error: {
          DEFAULT: "#D42154",
          100: "#FEEAEA",
          200: "#F8BACB",
          300: "#AA174C",
          400: "#7F0D41",
        },
        success: {
          DEFAULT: "#50CC2F",
          200: "#c2ffb0",
        },
        gray: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        dark: {
          contrastText: '#E5E5E5',
        }
      },
    },
  },
  variants: {
    extend: {
      display: ['dark']
    },
  },
  plugins: [],
};

// #181818
// #171923
