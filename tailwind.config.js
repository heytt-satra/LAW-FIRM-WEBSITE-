/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    950: '#020c1b',
                    900: '#0a192f',
                    800: '#112240',
                },
                gold: {
                    300: '#fbf5e6',
                    400: '#e6c885',
                    500: '#c9a050',
                    600: '#aa833e',
                },
                text: {
                    main: '#e6f1ff',
                    muted: '#8892b0',
                }
            },
            fontFamily: {
                primary: ['"Playfair Display"', 'serif'],
                accent: ['"Cormorant Garamond"', 'serif'],
                body: ['"Inter"', 'sans-serif'],
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                'glass-hover': '0 20px 60px -15px rgba(0,0,0,0.6), 0 0 20px rgba(201, 160, 80, 0.1)',
            },
            backgroundImage: {
                'glass-gradient': 'linear-gradient(145deg, rgba(17, 34, 64, 0.6) 0%, rgba(10, 25, 47, 0.4) 100%)',
            }
        },
    },
    plugins: [],
}
