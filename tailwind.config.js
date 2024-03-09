/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        red: "hsl(0, 78%, 62%)",
        cyan: "hsl(180, 62%, 55%)",
        orange: "hsl(34, 97%, 64%)",
        blue: "hsl(212, 86%, 64%)",
        "very-dark-blue": "hsl(234, 12%, 34%)",
        "grayish-blue": "hsl(229, 6%, 35%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "2xl": "clamp(1.5rem, 2.5vw, 4rem)",
        regular: "clamp(0.938rem, 1vw, 2rem)",
        xl: "clamp(1.25rem, 1vw, 2rem)",
        "card-text": "clamp(0.825rem, .5vw, 2rem)",
      },
    },
  },
  plugins: [],
};

