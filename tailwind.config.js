module.exports = {
  darkMode: 'class', // Enable dark mode
  // Specify the paths to all of the template files in your project
  // These paths are used by Tailwind to purge unused styles in production
  // and to generate the correct CSS for your templates
  // You can also use glob patterns to match multiple files 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
