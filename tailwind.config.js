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
                    100: '#F8EDD8',
                    600: '#DCA33C', //brand
                    800: '#936D28',
                    1100: '#2C210C',
                },
                'secondary': {
                    50: '#F9F5FF',
                    600: '#593C8A',
                },
                'danger': {
                    600: '#EA0000',
                },
                'dark': {
                    100: '#FBFBFB',
                    200: '#FAFAFA',
                    300: '#D0D0D0',
                    400: '#A7A7A7',
                    500: '#7D7D7D',
                    600: '#535353',
                    700: '#323232',
                    800: '#101010', //brand
                    900: '#080808',
                    1000: '#050505'
                },
            },
        },
    },
    plugins: [
        require('prettier-plugin-tailwindcss')
    ],
}