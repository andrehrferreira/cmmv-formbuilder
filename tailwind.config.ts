module.exports = {
    content: [
        "./public/**/*.{html,js,vue}",
        './vueform.config.js',
        './node_modules/.pnpm/@vueform+vueform@*/node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
        './node_modules/.pnpm/@vueform+vueform@*/node_modules/@vueform/vueform/themes/tailwind/**/*.js',
    ],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [require('@vueform/vueform/tailwind')],
};
