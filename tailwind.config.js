// tailwind.config.js
// tailwind.config.js
import primeui from 'tailwindcss-primeui';

/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",  // This will catch all Vue files
        // If you're using PrimeVue components, you might want to add their paths too
        "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [primeui],
}