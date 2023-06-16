// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				secondary: "#FF6D00",
				ash: "#EFEFEF",
        primary:"#2979FF",
				"ash-50": "#999999",
				"ash-100": "#F8F8F8",
				"ash-200": "#F3F3F3",
				"ash-300": "#555555",
				"ash-400": "#9DA4B0",
				"pur-50": "#F7F7F7",
				"pur-100": "#FFF8FF",
				"pur-200": "#FFE9FF",
				"pur-300": "rgba(121, 0, 123, 0.12)",
				yel: "#FBBF24",
				"orange-450": "#F46E44",
				pur: "#2979FF",
			},
      backgroundImage: {
				"hero-bg": "url('../src/assets/images/bg_image.jpg')",
				"hero-1": "url('../src/assets/images/hero_1.jpg')",
				"hero-2": "url('../src/assets/images/hero_2.jpg')",
				"hero-3": "url('../src/assets/images/hero_3.jpg')",
        // /home/qudus/Documents/Outsource/elevate-stays/src/assets/images/bg_image.jpg
			},
    },
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }
  },
  plugins: [],
}

