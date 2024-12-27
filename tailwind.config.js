module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'modal-in': 'modalIn 0.3s ease-out',
        'modal-out': 'modalOut 0.3s ease-out',
      },
      keyframes: {
        modalIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        modalOut: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
};
