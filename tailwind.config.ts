/** @type {import('tailwindcss').Config} */
const {fontFamily} = require("tailwindcss/defaultTheme")
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontSize: {
      "7xl": [
        "50px",
        {
          lineHeight: "60px",
          fontWeight: "500",
        },
      ],
      "7xl-600": [
        "50px",
        {
          lineHeight: "60px",
          fontWeight: "600",
        },
      ],
      "6xl": [
        "45px",
        {
          lineHeight: "50px",
          fontWeight: "500",
        },
      ],
      "5xl": [
        "40px",
        {
          lineHeight: "45px",
          fontWeight: "500",
        },
      ],
      "4xl": [
        "34px",
        {
          lineHeight: "41px",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "27px",
        {
          lineHeight: "33px",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "21px",
        {
          lineHeight: "25px",
          fontWeight: "500",
        },
      ],
      "2xl-600": [
        "21px",
        {
          lineHeight: "25px",
          fontWeight: "600",
        },
      ],
      'xl-600': [
        "18px",
        {
          lineHeight: "25px",
          fontWeight: "600",
        },
      ],
      'xl-500': [
        "18px",
        {
          lineHeight: "22px",
          fontWeight: "500",
        },
      ],
      'xl-400': [
        "18px",
        {
          lineHeight: "25px",
          fontWeight: "400",
        },
      ],
      xl: [
        "18px",
        {
          lineHeight: "25px",
          fontWeight: "500",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "16px",
          fontWeight: "500",
        },
      ],
      "base-400": [
        "14px",
        {
          lineHeight: "17px",
          fontWeight: "400",
        },
      ],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fonts: {
        sans: {
          family: ['Montserrat', 'sans-serif'],
        },
      },
      dropShadow: {
        'xl': '0px 8px 24px rgba(18, 28, 53, 0.1)',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        white: {
          DEFAULT: "hsl(var(--white))",
        },
        black: {
          DEFAULT: "hsl(var(--black))",
        },
        primary: {
          300: "hsl(var(--primary-200))",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        gray: {
          200: "hsl(var(--gray-200))",
          300: "hsl(var(--gray-300))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        shadowBoderColor: "hsl(var--shadowColor)",
      },
      boxShadow: {
        DEFAULT: 'rgba(0, 0, 0, 0.06) 0px 1px 5px',
        100: 'rgba(0, 0, 0, 0.25) 0px 2px 7px',
      },
      borderColor: {
        DEFAULT: 'rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        none: "0",
        DEFAULT: "5px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      
    },
  },
  plugins: [require("tailwindcss-animate")],
};
