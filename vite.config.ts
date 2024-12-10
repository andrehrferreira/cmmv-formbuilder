import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import postcssNesting from 'postcss-nesting';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => {
    const isDev = mode === 'dev';

    return {
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
            vue(),
            viteTsconfigPaths(),
            Components({
                dirs: [
                    'src/components',
                    'node_modules/@cmmv/ui/src/components',
                ],
                extensions: ['vue'],
                include: [/\.vue$/, /\.vue\?vue/],
                resolvers: [AntDesignVueResolver()],
                dts: !isDev,
                deep: true,
            }),
            ...(isDev
                ? []
                : [
                      dts({
                          include: ['src/**/*.ts', 'src/**/*.vue'],
                          insertTypesEntry: true,
                      }),
                  ]),
        ],

        server: {
            host: true,
            port: 4173,
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
                '@components': fileURLToPath(
                    new URL('./public/components', import.meta.url),
                ), // Ajuste para produção
                '@composables': fileURLToPath(
                    new URL('./public/composables', import.meta.url),
                ),
                '@mixins': fileURLToPath(
                    new URL('./public/mixins', import.meta.url),
                ),
                '@services': fileURLToPath(
                    new URL('./public/services', import.meta.url),
                ),
                '@utils': fileURLToPath(
                    new URL('./public/utils', import.meta.url),
                ),
            },
        },

        build: isDev
            ? {
                  outDir: 'dist',
                  rollupOptions: {
                      input: 'index.html',
                  },
              }
            : {
                  lib: {
                      entry: 'src/index.ts',
                      name: 'CmmvFormBuilder',
                      fileName: format => `cmmv-formbuilder.${format}.js`,
                      formats: ['es', 'cjs'],
                  },
                  rollupOptions: {
                      external: ['vue'],
                      output: {
                          globals: {
                              vue: 'Vue',
                          },
                      },
                  },
                  cssCodeSplit: true,
              },
    };
});
