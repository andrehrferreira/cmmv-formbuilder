const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./public/**/*.{vue,js,ts,jsx,tsx}",
        './vueform.config.js',
        './node_modules/.pnpm/@vueform+vueform@*/node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
        './node_modules/.pnpm/@vueform+vueform@*/node_modules/@vueform/vueform/themes/tailwind/**/*.js',
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
              gray: defaultTheme.colors.gray,
            },
        },
    },
    plugins: [require('@vueform/vueform/tailwind')],
};
