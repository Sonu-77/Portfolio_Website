/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px', // Custom small breakpoint
        'md': '768px', // Custom medium breakpoint
        'lg': '1024px', // Custom large breakpoint
        // You can also add new custom breakpoints here if needed
      },
      keyframes: {
        moveLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(1360%)' },
        },
        moveProject: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(2800%)' },
        },
        moveSkills: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(900%)' },
        },
        moveContact: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(1600%)' },
        },
        rotate360: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        moveLeft: 'moveLeft 5s linear infinite',
        moveProject: 'moveProject 6s linear infinite',
        moveSkills: 'moveSkills 4s linear infinite',
        moveContact: 'moveContact 5s linear infinite',
        rotate360: 'rotate360 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
