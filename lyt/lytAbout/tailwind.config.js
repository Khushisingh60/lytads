/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('main.jpg')",
         'custom-image1': "url('main2.jpg')",
      },
      colors: {
        'dark-blue': '#001f3f', 
      },

    },
  },
  plugins: [],
}

