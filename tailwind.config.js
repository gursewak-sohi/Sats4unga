/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Azo Sans', 'sans-serif'],
            },
            fontSize: {
                h1: '64px',
            },
            colors: {
                'primary': {
                    600: '#DCA33C', //brand
                    800: '#936D28',
                    1100: '#2C210C',
                },
                'secondary': {
                    50: '#F9F5FF',
                    600: '#593C8A',
                },
                'dark': {
                    100: '#FBFBFB',
                    200: '#FAFAFA',
                    400: '#A7A7A7',
                    500: '#7D7D7D',
                    700: '#323232',
                    800: '#101010', //brand
                    1000: '#050505'
                },
            },
        },
    },
    plugins: [
        require('prettier-plugin-tailwindcss')
    ],
}