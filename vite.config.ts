import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import postcssNesting from 'postcss-nesting';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
    envDir: './',

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@vueform/vueform/themes/vueform/scss/index.scss";`,
            },
        },
        postcss: {
            plugins: [postcssNesting],
        },
    },

    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: tag => tag.includes('-'),
                },
            },
        }),
        Components({
            dirs: ['src/components', 'node_modules/@cmmv/ui/src/components'],
            extensions: ['vue'],
            include: [/\.vue$/, /\.vue\?vue/],
            resolvers: [],
            dts: true,
            deep: true,
        }),
    ],

    server: {
        host: true,
        port: 5000,
        cors: {
            origin: 'http://localhost:3000',
            credentials: true,
        },
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
                rewrite: path => path.replace(/^\/api/, ''),
            },
        },
    },

    resolve: {
        alias: {
            '@': resolve(__dirname, 'public'),
        },
    },
});
