/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontSize: {
            sm: ['22px', '28px'],
            lg: ['36px', '36px'],
            xl: ['48px', '48px'],
        },
        colors: {
            redish: '#EE2D1C',
            blackish: '#4C4C51',
            blueish: '#88939E',
        },
        extend: {},
    },
    plugins: [],
}
