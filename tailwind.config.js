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
        extend: {},
    },
    plugins: [],
}
